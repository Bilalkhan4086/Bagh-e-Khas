import { getDatabase } from "@/lib/db";
import { getOrderCatalogItem } from "@/lib/order-catalog";

export const runtime = "nodejs";

interface OrderRequest {
  orderId?: unknown;
  customer?: {
    name?: unknown;
    phone?: unknown;
    address?: unknown;
    notes?: unknown;
  };
  items?: Array<{ id?: unknown; quantity?: unknown }>;
}

interface ValidatedItem {
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

class RequestValidationError extends Error {}

function requiredString(value: unknown, field: string, maxLength: number): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new RequestValidationError(`${field} is required`);
  }

  const result = value.trim();
  if (result.length > maxLength) {
    throw new RequestValidationError(`${field} is too long`);
  }
  return result;
}

function optionalString(value: unknown, field: string, maxLength: number): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") {
    throw new RequestValidationError(`${field} must be text`);
  }

  const result = value.trim();
  if (result.length > maxLength) {
    throw new RequestValidationError(`${field} is too long`);
  }
  return result || null;
}

function normalizePakistaniPhone(value: unknown): string {
  const input = requiredString(value, "Phone number", 30);
  const digits = input.replace(/\D/g, "");

  if (/^03\d{9}$/.test(digits)) return `+92${digits.slice(1)}`;
  if (/^923\d{9}$/.test(digits)) return `+${digits}`;
  if (/^3\d{9}$/.test(digits)) return `+92${digits}`;

  throw new RequestValidationError("Enter a valid Pakistani mobile number");
}

function validateItems(value: OrderRequest["items"]): ValidatedItem[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new RequestValidationError("Cart must contain at least one item");
  }
  if (value.length > 50) {
    throw new RequestValidationError("Cart contains too many items");
  }

  const seen = new Set<string>();
  return value.map((input) => {
    const productId = requiredString(input?.id, "Product ID", 120);
    if (seen.has(productId)) {
      throw new RequestValidationError("Cart contains duplicate products");
    }
    seen.add(productId);

    if (!Number.isInteger(input?.quantity) || Number(input.quantity) < 1 || Number(input.quantity) > 99) {
      throw new RequestValidationError("Item quantity must be between 1 and 99");
    }

    const product = getOrderCatalogItem(productId);
    if (!product || !product.available || product.unitPrice <= 0) {
      throw new RequestValidationError(`Product ${productId} is unavailable`);
    }

    const quantity = Number(input.quantity);
    return {
      productId,
      productName: product.name,
      unitPrice: product.unitPrice,
      quantity,
      lineTotal: product.unitPrice * quantity,
    };
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrderRequest;
    const orderId = requiredString(body.orderId, "Order ID", 36);
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(orderId)) {
      throw new RequestValidationError("Order ID must be a valid UUID");
    }

    const name = requiredString(body.customer?.name, "Name", 120);
    const phone = normalizePakistaniPhone(body.customer?.phone);
    const address = requiredString(body.customer?.address, "Address", 500);
    const notes = optionalString(body.customer?.notes, "Notes", 500);
    const items = validateItems(body.items);
    const total = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const databaseItems = items.map((item) => ({
      product_id: item.productId,
      product_name: item.productName,
      unit_price_pkr: item.unitPrice,
      quantity: item.quantity,
      line_total_pkr: item.lineTotal,
    }));
    const userAgent = request.headers.get("user-agent")?.slice(0, 500) || null;
    const sql = getDatabase();

    await sql`
      WITH customer AS (
        INSERT INTO customers (phone, name, address)
        VALUES (${phone}, ${name}, ${address})
        ON CONFLICT (phone) DO UPDATE SET
          name = EXCLUDED.name,
          address = EXCLUDED.address,
          updated_at = now()
        RETURNING phone
      ), new_order AS (
        INSERT INTO orders (id, customer_phone, notes, total_pkr, user_agent)
        SELECT ${orderId}::uuid, phone, ${notes}, ${total}, ${userAgent}
        FROM customer
        ON CONFLICT (id) DO NOTHING
        RETURNING id
      )
      INSERT INTO order_items (
        order_id, product_id, product_name, unit_price_pkr, quantity, line_total_pkr
      )
      SELECT
        new_order.id,
        item.product_id,
        item.product_name,
        item.unit_price_pkr,
        item.quantity,
        item.line_total_pkr
      FROM new_order
      CROSS JOIN jsonb_to_recordset(${JSON.stringify(databaseItems)}::jsonb) AS item(
        product_id text,
        product_name text,
        unit_price_pkr integer,
        quantity integer,
        line_total_pkr integer
      )
    `;

    return Response.json({ orderId, saved: true }, { status: 201 });
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return Response.json({ saved: false, error: error.message }, { status: 400 });
    }

    if (error instanceof SyntaxError) {
      return Response.json({ saved: false, error: "Invalid JSON request" }, { status: 400 });
    }

    console.error("Failed to store checkout order", error);
    return Response.json(
      { saved: false, error: "Unable to save the order right now" },
      { status: 500 }
    );
  }
}
