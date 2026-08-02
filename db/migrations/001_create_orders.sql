CREATE TABLE IF NOT EXISTS customers (
  phone text PRIMARY KEY,
  name varchar(120) NOT NULL,
  address varchar(500) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY,
  customer_phone text NOT NULL REFERENCES customers(phone),
  notes varchar(500),
  status varchar(40) NOT NULL DEFAULT 'pending_whatsapp',
  total_pkr integer NOT NULL CHECK (total_pkr >= 0),
  user_agent varchar(500),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS orders_customer_phone_idx ON orders(customer_phone);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id varchar(120) NOT NULL,
  product_name varchar(200) NOT NULL,
  unit_price_pkr integer NOT NULL CHECK (unit_price_pkr >= 0),
  quantity integer NOT NULL CHECK (quantity > 0),
  line_total_pkr integer NOT NULL CHECK (line_total_pkr >= 0),
  UNIQUE (order_id, product_id)
);

CREATE INDEX IF NOT EXISTS order_items_order_id_idx ON order_items(order_id);
