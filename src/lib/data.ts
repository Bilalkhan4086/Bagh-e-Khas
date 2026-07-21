import type {
  Product,
  Collection,
  Testimonial,
  TrustFeature,
  HowItWorksStep,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Corporate", href: "/#corporate-gifting" },
  { label: "About", href: "/#why-us" },
  { label: "Contact", href: "/#footer" },
];

export const collections: Collection[] = [
  {
    id: "premium-gift-basket",
    name: "Premium Gift Basket",
    description:
      "A curated selection of seasonal premium fruits in an artisan-crafted wicker basket.",
    price: "From Rs. 8,500",
    image: "/baskets/premium-gift-basket.png",
    tag: "Bestseller",
    slug: "premium-gift-basket",
  },
  {
    id: "family-weekly-box",
    name: "Family Weekly Box",
    description:
      "Everything your family needs — fresh, vibrant fruits for an entire week of healthy living.",
    price: "From Rs. 4,500",
    image: "/baskets/family-weekly-box.png",
    tag: "Family Favourite",
    slug: "family-weekly-box",
  },
  {
    id: "seasonal-fruit-box",
    name: "Seasonal Fruit Box",
    description:
      "The freshest handpicked fruits of the season, delivered at peak ripeness and flavour.",
    price: "From Rs. 3,200",
    image: "/baskets/seasonal-fruit-box.png",
    tag: "Seasonal",
    slug: "seasonal-fruit-box",
  },
  {
    id: "corporate-gifting",
    name: "Corporate Gifting",
    description:
      "Impress clients and partners with elegantly branded luxury fruit hampers.",
    price: "From Rs. 12,000",
    image: "/baskets/corporate-gifting.png",
    tag: "Corporate",
    slug: "corporate-gifting",
  },
];

export const products: Product[] = [
  {
    id: "white-chonsa-mango",
    name: "White Chonsa Mango Box",
    description:
      "Premium White Chonsa mangoes — pale-golden, fibreless, intensely sweet, and selected for a smooth melt-in-mouth texture.",
    price: "Rs. 2,800",
    originalPrice: "Rs. 3,200",
    rating: 5,
    reviewCount: 124,
    image: "/fruits/mango.png",
    tag: "Seasonal",
    isBestSeller: true,
  },
  {
    id: "pineapple-box",
    name: "Golden Pineapple Box",
    description:
      "Sweet, tangy pineapples at their ripest — sourced fresh from tropical farms.",
    price: "Rs. 1,600",
    rating: 4.7,
    reviewCount: 52,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&q=80",
    isOutOfStock: true,
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit Pack",
    description:
      "Exotic dragon fruit sourced from trusted farms, vibrant and nutritious.",
    price: "Rs. 1,900",
    rating: 4.8,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1527325678964-54921661f888?w=800&q=80",
    isOutOfStock: true,
  },
  {
    id: "premium-dates",
    name: "Premium Date Selection",
    description:
      "Medjool and Ajwa dates in a luxury presentation box — perfect for gifting.",
    price: "Rs. 3,500",
    rating: 5,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1648178629910-310cf88c2818?w=800&q=80",
    tag: "Gift",
    isComingSoon: true,
  },
  {
    id: "pomegranate-pack",
    name: "Kandhari Pomegranate",
    description:
      "Ruby-red pomegranates with a rich, jewel-like flavour from Kandahar farms.",
    price: "Rs. 2,100",
    rating: 4.7,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1642359548284-80879b7677dc?w=800&q=80",
    isComingSoon: true,
  },
  {
    id: "guava-pack",
    name: "Psidium Guava Box",
    description:
      "Fragrant, crispy white-flesh guavas known for their exceptional flavour.",
    price: "Rs. 1,200",
    rating: 4.6,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=800&q=80",
    isComingSoon: true,
  },
  {
    id: "strawberry-box",
    name: "Swabi Strawberry Box",
    description:
      "Hand-picked Swabi strawberries at the peak of sweetness and freshness.",
    price: "Rs. 1,400",
    originalPrice: "Rs. 1,650",
    rating: 4.9,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    isComingSoon: true,
  },
  {
    id: "avocado-box",
    name: "Creamy Avocado Box",
    description: "Premium Hass avocados, perfectly ripened and ready to enjoy.",
    price: "Rs. 2,200",
    rating: 4.8,
    reviewCount: 61,
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&q=80",
    isOutOfStock: true,
  },
  {
    id: "kiwi-box",
    name: "Green Kiwi Box",
    description: "Juicy, vitamin-packed kiwis with a bright tropical flavour.",
    price: "Rs. 1,800",
    rating: 4.6,
    reviewCount: 44,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=800&q=80",
    isOutOfStock: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ayesha Mirza",
    location: "DHA, Lahore",
    rating: 5,
    review:
      "Presentation bilkul shandar thi. Maine corporate hamper apne clients ke liye order kiya aur woh sach mein bahut impressed hue. Phal bilkul taze the aur packaging ne aik alag hi impression chhor di.",
    avatar:
      "https://images.unsplash.com/photo-1680506660555-1c225f5da953?w=200&q=80",
  },
  {
    id: "2",
    name: "Usman Tariq",
    location: "Gulberg, Lahore",
    rating: 5,
    review:
      "Hum pichle 3 mahine se har hafte Family Weekly Box order kar rahe hain. Tazgi aur quality hamesha laajawab rehti hai. Bagh-e-Khas ne hamari family ki khaane ki aadat hi tabdeel kar di.",
    avatar:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&q=80",
  },
  {
    id: "3",
    name: "Sana Rehman",
    location: "Model Town, Lahore",
    rating: 5,
    review:
      "Eid ke liye Premium Gift Basket order ki. Waqt par aayi, aur khubsurat tarike se saji hui thi. Mere rishtedaar taareef karte nahi thake — itna sochha samjha aur dilkash tohfa tha.",
    avatar:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=200&q=80",
  },
  {
    id: "4",
    name: "Hamza Khalid",
    location: "Johar Town, Lahore",
    rating: 5,
    review:
      "White Chonsa Mango Box zabardast thi — ghar tak deliver hone wale sabse behtareen aam jo maine kabhi chakkhe. Same-day delivery tohfe dene ke liye bilkul game-changer hai.",
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80",
  },
  {
    id: "5",
    name: "Fatima Asad",
    location: "Bahria Town, Lahore",
    rating: 5,
    review:
      "Aala quality, laajawab packaging, aur bharosemand same-day delivery. Bagh-e-Khas sachchi Lahore ki sabse umda fruit gifting service hai. Dil se recommend karti hoon — bilkul behtareen tajurba tha.",
    avatar:
      "https://images.unsplash.com/photo-1708534246051-7f47b279e94b?w=200&q=80",
  },
];

export const trustFeatures: TrustFeature[] = [
  {
    id: "farm-fresh",
    title: "Farm Fresh",
    description: "Sourced directly from trusted farms at peak ripeness.",
    icon: "Sprout",
  },
  {
    id: "hand-selected",
    title: "Hand Selected",
    description: "Every fruit is individually inspected for quality.",
    icon: "HandHeart",
  },
  {
    id: "same-day-delivery",
    title: "Same Day Delivery",
    description:
      "Order by 2 PM for same-day delivery in selected areas (lahore).",
    icon: "Truck",
  },
  {
    id: "beautiful-packaging",
    title: "Beautiful Packaging",
    description: "Artisan packaging designed to create a lasting impression.",
    icon: "Gift",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "choose",
    step: 1,
    title: "Choose Your Box",
    description:
      "Browse our curated collections and select the perfect box for your occasion or everyday needs.",
    icon: "ShoppingBag",
  },
  {
    id: "pick",
    step: 2,
    title: "We Hand Pick",
    description:
      "Our team hand-selects the freshest fruits from our trusted partner farms, inspected for quality.",
    icon: "Cherry",
  },
  {
    id: "deliver",
    step: 3,
    title: "Delivered to You",
    description:
      "Your order is beautifully packaged and delivered same-day to your doorstep across Lahore.",
    icon: "MapPin",
  },
];

export const whyChooseUsFeatures = [
  "Direct from trusted partner farms",
  "Rigorous quality inspection on every fruit",
  "Premium artisan packaging",
  "Freshness guaranteed every day",
  "Same-day delivery across Lahore",
  "Bespoke corporate gifting experience",
];

export const instagramImages = [
  {
    id: "1",
    src: "/baskets/premium-gift-basket.png",
    alt: "Premium gift basket with flowers and fruits",
  },
  {
    id: "2",
    src: "/baskets/fruit-basket.png",
    alt: "Colourful fresh fruit basket",
  },
  {
    id: "3",
    src: "/baskets/luxury-basket.png",
    alt: "Luxury wicker basket with ribbon bow",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
    alt: "Fresh White Chonsa mangoes",
  },
  {
    id: "5",
    src: "/baskets/corporate-gifting.png",
    alt: "Corporate fruit gift box",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
    alt: "Fresh strawberries",
  },
  {
    id: "7",
    src: "/baskets/seasonal-fruit-box.png",
    alt: "Seasonal fruit basket arrangement",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    alt: "Pomegranates on display",
  },
];

export const shopProducts: Product[] = [
  // ─── REGULAR SUMMER FRUITS ───────────────────────────────────────────────
  {
    id: "shop-mango",
    name: "Mango",
    description:
      "Fresh, juicy Pakistani summer mangoes at peak sweetness and fragrance.",
    price: "Rs. 1,200",
    rating: 4.8,
    reviewCount: 312,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-watermelon",
    name: "Watermelon",
    description:
      "Large, crisp watermelons bursting with natural summer sweetness.",
    price: "Rs. 900",
    rating: 4.7,
    reviewCount: 198,
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-muskmelon",
    name: "Muskmelon (Cantaloupe)",
    description:
      "Fragrant, honey-sweet muskmelons with a delicate aroma and smooth flesh.",
    price: "Rs. 1,100",
    rating: 4.6,
    reviewCount: 142,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-peach",
    name: "Peach",
    description: "Velvety, sun-ripened peaches with a rich, sweet flavour.",
    price: "Rs. 1,400",
    rating: 4.7,
    reviewCount: 176,
    image:
      "https://images.unsplash.com/photo-1589984662709-5f1defd98869?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-plum",
    name: "Plum",
    description: "Sweet-tart juicy plums with a gorgeous deep-purple skin.",
    price: "Rs. 1,300",
    rating: 4.5,
    reviewCount: 134,
    image:
      "https://images.unsplash.com/photo-1615485290382-85a3fb2f66aa?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-pear",
    name: "Pear",
    description: "Crisp, delicate pears with a mild, refreshing sweetness.",
    price: "Rs. 1,500",
    rating: 4.6,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1571171714795-7cf9c7ca5456?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-guava",
    name: "Guava",
    description:
      "Fragrant, crispy white-flesh guavas known for their exceptional flavour.",
    price: "Rs. 1,000",
    rating: 4.6,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=800&q=80",
    tag: "Coming August",
    category: "summer",
    isComingSoon: true,
  },
  {
    id: "shop-apricot",
    name: "Apricot",
    description: "Golden apricots bursting with intense floral sweetness.",
    price: "Rs. 1,600",
    rating: 4.7,
    reviewCount: 115,
    image:
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-litchi",
    name: "Litchi (Lychee)",
    description:
      "Delicate, perfumed lychees with a translucent, juicy interior.",
    price: "Rs. 1,800",
    rating: 4.8,
    reviewCount: 207,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    tag: "Limited",
    category: "summer",
    isOutOfStock: true,
  },
  {
    id: "shop-jamun",
    name: "Jamun (Java Plum)",
    description:
      "Deep purple jamuns with a distinctive tangy-sweet taste — a summer classic.",
    price: "Rs. 800",
    rating: 4.5,
    reviewCount: 63,
    image:
      "https://images.unsplash.com/photo-1614545445093-9d5a78a5fc5f?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
  },
  {
    id: "shop-falsa",
    name: "Falsa",
    description:
      "Tiny, intensely flavourful falsa berries — a beloved summer treat.",
    price: "Rs. 700",
    rating: 4.6,
    reviewCount: 47,
    image:
      "https://images.unsplash.com/photo-1506802913710-921bb1e5d060?w=800&q=80",
    tag: "Rare",
    category: "summer",
    isOutOfStock: true,
  },
  {
    id: "shop-ber",
    name: "Ber (Indian Jujube)",
    description: "Crisp, mildly sweet ber with a refreshing apple-like crunch.",
    price: "Rs. 900",
    rating: 4.4,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1631897959-7cb0e4571bb2?w=800&q=80",
    tag: "Seasonal",
    category: "summer",
    isComingSoon: true,
  },

  // ─── PREMIUM PAKISTANI FRUITS ─────────────────────────────────────────────
  {
    id: "shop-chaunsa",
    name: "Chaunsa Mango",
    description:
      "Pakistan's most beloved mango — silky smooth, intensely fragrant.",
    price: "Rs. 3,500",
    rating: 5,
    reviewCount: 284,
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&q=80",
    tag: "Bestseller",
    category: "premium-pakistani",
    isBestSeller: true,
  },
  {
    id: "shop-white-chaunsa",
    name: "White Chaunsa",
    description:
      "A rare pale-golden Chaunsa variety with exceptionally sweet, fibre-free flesh.",
    price: "Rs. 4,200",
    rating: 4.9,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&q=80",
    tag: "Rare",
    category: "premium-pakistani",
  },
  {
    id: "shop-samar-bahisht",
    name: "Samar Bahisht Chaunsa",
    description:
      "An elite Chaunsa sub-variety — fibre-free, melting texture, and divine taste.",
    price: "Rs. 4,800",
    rating: 5,
    reviewCount: 112,
    image:
      "https://images.unsplash.com/photo-1630568851668-4a00d5babc7f?w=800&q=80",
    tag: "Exclusive",
    category: "premium-pakistani",
  },
  {
    id: "shop-anwar-ratol",
    name: "Anwar Ratol Mango",
    description:
      "Small, intensely sweet Anwar Ratol — the connoisseur's mango.",
    price: "Rs. 3,800",
    rating: 4.9,
    reviewCount: 189,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-white-chonsa",
    name: "White Chonsa Mango",
    description:
      "Pale-golden, fibreless, and intensely sweet — a premium mango variety prized for its smooth texture.",
    price: "Rs. 2,800",
    originalPrice: "Rs. 3,200",
    rating: 5,
    reviewCount: 244,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80",
    tag: "Bestseller",
    category: "premium-pakistani",
    isBestSeller: true,
  },
  {
    id: "shop-langra",
    name: "Langra Mango",
    description:
      "Tangy-sweet Langra mangoes with a distinct green-yellow skin and rich flesh.",
    price: "Rs. 2,600",
    rating: 4.7,
    reviewCount: 134,
    image:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-dussehri",
    name: "Dussehri Mango",
    description:
      "Slender, aromatic Dussehri mangoes with a rich, creamy sweetness.",
    price: "Rs. 2,400",
    rating: 4.6,
    reviewCount: 97,
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-cherries-pk",
    name: "Premium Cherries (Gilgit & Swat)",
    description:
      "Handpicked cherries from the mountain orchards of Gilgit-Baltistan and Swat.",
    price: "Rs. 3,200",
    rating: 4.9,
    reviewCount: 213,
    image:
      "https://images.unsplash.com/photo-1528821128565-dc7e10d1c22a?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
    isBestSeller: true,
  },
  {
    id: "shop-white-peach",
    name: "White Peaches",
    description:
      "Delicate white-fleshed peaches from mountain orchards — incredibly fragrant.",
    price: "Rs. 2,800",
    rating: 4.8,
    reviewCount: 92,
    image:
      "https://images.unsplash.com/photo-1595539869714-50f8a46f5a36?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-premium-plum",
    name: "Premium Plums",
    description:
      "Large, flavourful premium plums sourced from the finest highland orchards.",
    price: "Rs. 2,200",
    rating: 4.7,
    reviewCount: 78,
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-premium-apricot",
    name: "Premium Apricots",
    description:
      "Sun-ripened premium apricots from the valleys of Gilgit-Baltistan.",
    price: "Rs. 2,500",
    rating: 4.8,
    reviewCount: 143,
    image:
      "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
  },
  {
    id: "shop-export-lychee",
    name: "Export Grade Lychees",
    description:
      "Top-grade lychees selected for export quality — exceptionally sweet and juicy.",
    price: "Rs. 2,600",
    rating: 4.9,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1550828484-d65a2d46e9bd?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
    isComingSoon: true,
  },
  {
    id: "shop-premium-pear",
    name: "Premium Pears",
    description:
      "Large, buttery premium pears with exceptional texture and a honeyed flavour.",
    price: "Rs. 2,200",
    rating: 4.7,
    reviewCount: 66,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    tag: "Premium",
    category: "premium-pakistani",
    isComingSoon: true,
  },

  // ─── IMPORTED PREMIUM FRUITS ──────────────────────────────────────────────
  {
    id: "shop-dragon-fruit",
    name: "Dragon Fruit",
    description:
      "Exotic dragon fruit sourced from trusted farms — vibrant, nutritious, and striking.",
    price: "Rs. 1,900",
    rating: 4.8,
    reviewCount: 167,
    image:
      "https://images.unsplash.com/photo-1527325678964-54921661f888?w=800&q=80",
    tag: "Exotic",
    category: "imported",
    isBestSeller: true,
  },
  {
    id: "shop-kiwi",
    name: "Kiwi",
    description:
      "Vitamin-packed green kiwis with a bright, tangy tropical flavour.",
    price: "Rs. 1,800",
    rating: 4.7,
    reviewCount: 144,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-avocado",
    name: "Avocado (Hass)",
    description:
      "Premium Hass avocados — creamy, buttery, and rich in healthy fats.",
    price: "Rs. 2,200",
    rating: 4.8,
    reviewCount: 161,
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-blueberries",
    name: "Blueberries",
    description:
      "Plump, antioxidant-rich blueberries with an intense, sweet-tart flavour.",
    price: "Rs. 2,800",
    rating: 4.9,
    reviewCount: 198,
    image:
      "https://images.unsplash.com/photo-1515996615212-d4b01d11e8e6?w=800&q=80",
    tag: "Imported",
    category: "imported",
    isBestSeller: true,
  },
  {
    id: "shop-raspberries",
    name: "Raspberries",
    description:
      "Fragrant, ruby-red raspberries bursting with floral sweetness.",
    price: "Rs. 2,600",
    rating: 4.8,
    reviewCount: 134,
    image:
      "https://images.unsplash.com/photo-1487530811015-780780e5bc70?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-blackberries",
    name: "Blackberries",
    description:
      "Rich, deep blackberries with a bold and complex sweet-tart taste.",
    price: "Rs. 2,400",
    rating: 4.7,
    reviewCount: 112,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-strawberries-imported",
    name: "Strawberries (Imported)",
    description:
      "Premium imported strawberries — vibrant, sweet, and perfectly formed.",
    price: "Rs. 2,200",
    rating: 4.9,
    reviewCount: 231,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    tag: "Imported",
    category: "imported",
    isBestSeller: true,
  },
  {
    id: "shop-red-grapes",
    name: "Red Seedless Grapes",
    description: "Crisp, sweet red seedless grapes with a satisfying crunch.",
    price: "Rs. 2,000",
    rating: 4.7,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1537640538966-79f5f7e22d45?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-green-grapes",
    name: "Green Seedless Grapes",
    description:
      "Refreshing green seedless grapes with a crisp bite and mild sweetness.",
    price: "Rs. 1,900",
    rating: 4.6,
    reviewCount: 143,
    image:
      "https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-shine-muscat",
    name: "Shine Muscat Grapes",
    description:
      "The coveted Japanese Shine Muscat — intensely aromatic, sweet, and seedless.",
    price: "Rs. 4,500",
    rating: 5,
    reviewCount: 87,
    image:
      "https://images.unsplash.com/photo-1587049352862-41b1cc67b553?w=800&q=80",
    tag: "Ultra Premium",
    category: "imported",
  },
  {
    id: "shop-korean-pear",
    name: "Korean Pear",
    description:
      "Giant, crisp Korean pears with a juicy, refreshing sweetness.",
    price: "Rs. 3,200",
    rating: 4.8,
    reviewCount: 79,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-imported-apples",
    name: "Imported Apples",
    description:
      "Premium imported apples — crunchy, fresh, and beautifully coloured.",
    price: "Rs. 2,400",
    rating: 4.7,
    reviewCount: 189,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-imported-oranges",
    name: "Imported Oranges",
    description:
      "Bright, juicy oranges packed with vitamin C and natural sweetness.",
    price: "Rs. 1,800",
    rating: 4.6,
    reviewCount: 167,
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-mandarins",
    name: "Imported Mandarins",
    description:
      "Easy-peel, intensely sweet mandarins — a family favourite year-round.",
    price: "Rs. 1,600",
    rating: 4.7,
    reviewCount: 143,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
    tag: "Imported",
    category: "imported",
  },
  {
    id: "shop-japanese-melon",
    name: "Japanese Melon",
    description:
      "Exquisite netted Japanese melons — the undisputed pinnacle of luxury fruit.",
    price: "Rs. 8,500",
    rating: 5,
    reviewCount: 34,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    tag: "Ultra Premium",
    category: "imported",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/#home" },
    { label: "Shop", href: "/#best-sellers" },
    { label: "Gift Boxes", href: "/#featured-collections" },
    { label: "Corporate Gifting", href: "/#corporate-gifting" },
    { label: "About Us", href: "/#why-us" },
  ],
  collections: [
    { label: "Premium Gift Basket", href: "/collections/premium-gift-basket" },
    { label: "Family Weekly Box", href: "/collections/family-weekly-box" },
    { label: "Seasonal Fruit Box", href: "/collections/seasonal-fruit-box" },
    { label: "Corporate Hampers", href: "/collections/corporate-gifting" },
    { label: "Eid Special", href: "/collections/premium-gift-basket" },
  ],
};
