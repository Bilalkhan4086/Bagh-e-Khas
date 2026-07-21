import type { Collection, Product } from "@/types";

export interface ItemDetailCopy {
  longDescription: string;
  highlights: string[];
  includes: string[];
  idealFor: string[];
  care: string;
}

export const productDetails: Record<Product["id"], ItemDetailCopy> = {
  "white-chonsa-mango": {
    longDescription:
      "Our White Chonsa Mango Box is prepared for customers who want a pale-golden mango with fibreless flesh, deep sweetness, and a smooth melt-in-mouth texture. Each mango is checked for aroma, firmness, skin quality, and ripeness before packing, so the box arrives ready for confident serving, gifting, or family enjoyment.",
    highlights: [
      "Selected for natural aroma, fibreless texture, and clean skin",
      "Packed to protect fruit during Lahore delivery",
      "Best enjoyed slightly chilled or at room temperature",
      "Premium seasonal gift choice for mango lovers",
    ],
    includes: [
      "Premium White Chonsa mangoes",
      "Quality inspection before dispatch",
      "Protective Bagh e Khas packaging",
      "Freshness guidance at delivery",
    ],
    idealFor: ["Family tables", "Seasonal gifting", "Mango desserts", "Weekend hosting"],
    care: "Keep at room temperature if firm. Refrigerate ripe mangoes and consume within 2 to 3 days for best taste.",
  },
  "pineapple-box": {
    longDescription:
      "The Golden Pineapple Box brings a bright tropical note to the fruit table. We choose pineapples with a balanced sweet-tart profile, clean exterior, and fresh crown so customers receive fruit that feels special, juicy, and ready for slicing, juicing, or gifting.",
    highlights: [
      "Sweet-tart tropical flavor profile",
      "Selected for weight, aroma, and freshness",
      "Excellent for fresh platters and drinks",
      "A refreshing option for warm Lahore days",
    ],
    includes: [
      "Fresh golden pineapples",
      "Ripeness inspection",
      "Protective delivery packing",
      "Serving and storage guidance",
    ],
    idealFor: ["Fruit platters", "Fresh juices", "Health-conscious snacking", "Summer gatherings"],
    care: "Store whole pineapple at room temperature for a short time. Once cut, refrigerate in an airtight container.",
  },
  "dragon-fruit": {
    longDescription:
      "Dragon Fruit Pack is designed for customers who enjoy premium exotic fruit with striking presentation. Its mild sweetness, refreshing texture, and vibrant appearance make it a refined choice for breakfast bowls, wellness routines, and elegant fruit platters.",
    highlights: [
      "Vibrant exotic presentation",
      "Refreshing, mildly sweet flesh",
      "Good source of fiber and hydration",
      "Beautiful addition to premium platters",
    ],
    includes: [
      "Selected dragon fruit",
      "Visual quality inspection",
      "Careful packing for delicate skin",
      "Serving suggestions",
    ],
    idealFor: ["Wellness routines", "Breakfast bowls", "Luxury fruit platters", "Gift add-ons"],
    care: "Refrigerate when ripe. Slice just before serving to preserve texture and freshness.",
  },
  "premium-dates": {
    longDescription:
      "Premium Date Selection is built for meaningful gifting and refined everyday serving. A rich mix of quality dates offers natural sweetness, soft texture, and a presentation suited to Ramadan, Eid, corporate gestures, and family hospitality.",
    highlights: [
      "Rich, naturally sweet date selection",
      "Elegant presentation for gifting",
      "Suitable for Ramadan and Eid tables",
      "Pairs well with nuts, coffee, and fruit",
    ],
    includes: [
      "Premium selected dates",
      "Gift-ready presentation box",
      "Quality sorting",
      "Protective delivery packing",
    ],
    idealFor: ["Ramadan gifts", "Eid hosting", "Corporate gestures", "Family hospitality"],
    care: "Keep sealed in a cool, dry place. Refrigerate after opening for longer freshness.",
  },
  "pomegranate-pack": {
    longDescription:
      "Kandhari Pomegranate is chosen for customers who value rich color, jewel-like seeds, and a bold sweet-tart flavor. It works beautifully as a premium snack, salad topping, juice ingredient, or centerpiece in a curated fruit spread.",
    highlights: [
      "Deep ruby arils with bold flavor",
      "Selected for color, weight, and skin condition",
      "Excellent for juices, salads, and fresh serving",
      "Naturally impressive on a fruit table",
    ],
    includes: [
      "Selected Kandhari pomegranates",
      "Exterior quality inspection",
      "Secure protective packing",
      "Storage guidance",
    ],
    idealFor: ["Fresh juices", "Salads", "Premium snacking", "Dinner table presentation"],
    care: "Store whole pomegranates in a cool place or refrigerate. Keep opened arils chilled in a covered container.",
  },
  "guava-pack": {
    longDescription:
      "Psidium Guava Box highlights the fragrance and crisp bite that make guava a local favorite. We select fruit for aroma, firmness, and clean exterior so the box feels fresh, honest, and suitable for both snacking and family sharing.",
    highlights: [
      "Fragrant white-flesh guavas",
      "Crisp, refreshing texture",
      "Selected for firmness and aroma",
      "A nostalgic seasonal favorite",
    ],
    includes: [
      "Fresh guava selection",
      "Individual quality check",
      "Breathable protective packing",
      "Ripeness guidance",
    ],
    idealFor: ["Family snacking", "Lunch boxes", "Chaat and salads", "Everyday fruit bowls"],
    care: "Keep at room temperature until fragrant. Refrigerate ripe guavas and consume soon for best crunch.",
  },
  "strawberry-box": {
    longDescription:
      "Swabi Strawberry Box is prepared for customers who want bright color, fresh aroma, and naturally sweet berries without the uncertainty of market picking. The berries are handled gently and packed carefully to preserve appearance and freshness.",
    highlights: [
      "Hand-picked seasonal strawberries",
      "Selected for color, aroma, and firmness",
      "Great for desserts, breakfasts, and gifting",
      "Carefully handled to protect delicate fruit",
    ],
    includes: [
      "Fresh Swabi strawberries",
      "Gentle sorting",
      "Protective packing",
      "Short-term storage guidance",
    ],
    idealFor: ["Desserts", "Breakfast bowls", "Children's snacks", "Fresh gifting"],
    care: "Refrigerate immediately. Wash only before eating and consume quickly for best texture.",
  },
  "avocado-box": {
    longDescription:
      "Creamy Avocado Box is selected for customers who want dependable ripeness and smooth texture for healthy meals. Each avocado is checked for exterior quality and maturity so it can be used for toast, salads, smoothies, or simple fresh serving.",
    highlights: [
      "Creamy Hass avocado selection",
      "Chosen for maturity and clean skin",
      "Excellent for nutritious meals",
      "Useful for both savory and smoothie recipes",
    ],
    includes: [
      "Premium Hass avocados",
      "Ripeness inspection",
      "Protective packing",
      "Usage guidance",
    ],
    idealFor: ["Healthy breakfasts", "Salads", "Smoothies", "Fitness meal plans"],
    care: "Ripen at room temperature. Refrigerate once ripe and use opened avocado the same day when possible.",
  },
  "kiwi-box": {
    longDescription:
      "Green Kiwi Box offers a bright, vitamin-rich fruit experience with refreshing acidity and a tender bite. We select kiwis for firmness, clean skin, and balanced ripening so they work well in fruit bowls, smoothies, and premium platters.",
    highlights: [
      "Bright, refreshing flavor",
      "Selected for firmness and clean skin",
      "Good for fruit bowls and smoothies",
      "Adds color and contrast to gift baskets",
    ],
    includes: [
      "Selected green kiwis",
      "Quality sorting",
      "Protective packing",
      "Ripeness guidance",
    ],
    idealFor: ["Fruit bowls", "Smoothies", "Premium platters", "Healthy snacking"],
    care: "Keep firm kiwis at room temperature. Refrigerate ripe kiwis and slice just before serving.",
  },
};

export const collectionDetails: Record<Collection["slug"], ItemDetailCopy> = {
  "premium-gift-basket": {
    longDescription:
      "The Premium Gift Basket is the signature Bagh e Khas gifting experience. It combines seasonal premium fruit with elegant presentation, making it suitable for occasions where the gift needs to feel thoughtful, fresh, and refined before the first fruit is tasted.",
    highlights: [
      "Curated seasonal premium fruit",
      "Gift-ready basket presentation",
      "Ideal balance of freshness and visual appeal",
      "Prepared for personal and formal occasions",
    ],
    includes: [
      "Assorted premium fruits",
      "Decorative basket arrangement",
      "Quality inspection",
      "Secure delivery handling",
    ],
    idealFor: ["Birthdays", "Anniversaries", "Eid gifts", "Get well soon gestures"],
    care: "Open on arrival, remove any delicate fruit for refrigeration, and keep the basket in a cool place away from direct sunlight.",
  },
  "family-weekly-box": {
    longDescription:
      "The Family Weekly Box is built for households that want dependable fruit without repeated market visits. The selection balances everyday favorites with seasonal variety, giving families a cleaner, easier way to keep fresh fruit available through the week.",
    highlights: [
      "Curated for weekly household use",
      "Balanced mix of familiar and seasonal fruit",
      "Practical quantity for family routines",
      "Subscription-friendly format",
    ],
    includes: [
      "Mixed seasonal family fruit",
      "Daily-sourced selections",
      "Sorted and cleaned produce",
      "Freshness and storage guidance",
    ],
    idealFor: ["Families", "Working professionals", "Healthy routines", "Weekly meal planning"],
    care: "Separate ripe and firm fruits when the box arrives. Refrigerate delicate items and keep bananas or mangoes at room temperature until ripe.",
  },
  "seasonal-fruit-box": {
    longDescription:
      "The Seasonal Fruit Box focuses on what is tasting best right now. It is ideal for customers who want peak-season freshness, honest availability, and a convenient way to enjoy premium fruit selected by people who inspect produce every day.",
    highlights: [
      "Focused on current seasonal availability",
      "Selected for peak ripeness and flavor",
      "Flexible mix based on quality that day",
      "A practical entry point into Bagh e Khas",
    ],
    includes: [
      "Best available seasonal fruit",
      "Quality sorting",
      "Protective box packing",
      "Delivery-day freshness guidance",
    ],
    idealFor: ["Everyday eating", "Trying the brand", "Healthy snacking", "Small gifts"],
    care: "Check each fruit on arrival. Refrigerate ripe or delicate items and allow firm fruit to ripen naturally at room temperature.",
  },
  "corporate-gifting": {
    longDescription:
      "Corporate Gifting is designed for companies that want client, partner, and team gifts to feel premium without becoming generic. Bagh e Khas coordinates seasonal fruit selection, presentation, bulk handling, and delivery support for polished business gifting.",
    highlights: [
      "Premium fruit hampers for business relationships",
      "Bulk order coordination",
      "Optional branded presentation planning",
      "Suitable for clients, partners, and employees",
    ],
    includes: [
      "Curated premium fruit hamper",
      "Professional presentation",
      "Bulk order handling",
      "Delivery coordination",
    ],
    idealFor: ["Client gifts", "Employee appreciation", "Ramadan campaigns", "Event gifting"],
    care: "Share recipient details and delivery timing early. For bulk gifting, our team can recommend fruit mixes based on season and delivery window.",
  },
};
