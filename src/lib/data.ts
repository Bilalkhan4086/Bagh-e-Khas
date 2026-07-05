import type {
  Product,
  Collection,
  Testimonial,
  TrustFeature,
  HowItWorksStep,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#best-sellers" },
  { label: "Gift Boxes", href: "#featured-collections" },
  { label: "Corporate", href: "#corporate-gifting" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#footer" },
];

export const collections: Collection[] = [
  {
    id: "premium-gift-basket",
    name: "Premium Gift Basket",
    description:
      "A curated selection of seasonal premium fruits in an artisan-crafted wicker basket.",
    price: "From Rs. 8,500",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
    tag: "Bestseller",
    slug: "premium-gift-basket",
  },
  {
    id: "family-weekly-box",
    name: "Family Weekly Box",
    description:
      "Everything your family needs — fresh, vibrant fruits for an entire week of healthy living.",
    price: "From Rs. 4,500",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80",
    tag: "Family Favourite",
    slug: "family-weekly-box",
  },
  {
    id: "seasonal-fruit-box",
    name: "Seasonal Fruit Box",
    description:
      "The freshest handpicked fruits of the season, delivered at peak ripeness and flavour.",
    price: "From Rs. 3,200",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80",
    tag: "Seasonal",
    slug: "seasonal-fruit-box",
  },
  {
    id: "corporate-gifting",
    name: "Corporate Gifting",
    description:
      "Impress clients and partners with elegantly branded luxury fruit hampers.",
    price: "From Rs. 12,000",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
    tag: "Corporate",
    slug: "corporate-gifting",
  },
];

export const products: Product[] = [
  {
    id: "alphonso-mangoes",
    name: "Sindhri Mango Box",
    description: "Pakistan's finest Sindhri mangoes — golden, sweet, and fragrant.",
    price: "Rs. 2,800",
    originalPrice: "Rs. 3,200",
    rating: 5,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80",
    tag: "Seasonal",
    isBestSeller: true,
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit Pack",
    description: "Exotic dragon fruit sourced from trusted farms, vibrant and nutritious.",
    price: "Rs. 1,900",
    rating: 4.8,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1527325678964-54921661f888?w=800&q=80",
    isNew: true,
  },
  {
    id: "strawberry-box",
    name: "Swabi Strawberry Box",
    description: "Hand-picked Swabi strawberries at the peak of sweetness and freshness.",
    price: "Rs. 1,400",
    originalPrice: "Rs. 1,650",
    rating: 4.9,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    isBestSeller: true,
  },
  {
    id: "premium-dates",
    name: "Premium Date Selection",
    description: "Medjool and Ajwa dates in a luxury presentation box — perfect for gifting.",
    price: "Rs. 3,500",
    rating: 5,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=800&q=80",
    tag: "Gift",
    isBestSeller: true,
  },
  {
    id: "pomegranate-pack",
    name: "Kandhari Pomegranate",
    description: "Ruby-red pomegranates with a rich, jewel-like flavour from Kandahar farms.",
    price: "Rs. 2,100",
    rating: 4.7,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
    isNew: true,
  },
  {
    id: "guava-pack",
    name: "Psidium Guava Box",
    description: "Fragrant, crispy white-flesh guavas known for their exceptional flavour.",
    price: "Rs. 1,200",
    rating: 4.6,
    reviewCount: 38,
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=800&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ayesha Mirza",
    location: "DHA, Lahore",
    rating: 5,
    review:
      "The presentation was absolutely stunning. I ordered a corporate hamper for our clients and they were genuinely impressed. The fruits were fresh and the packaging felt truly premium.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
  },
  {
    id: "2",
    name: "Usman Tariq",
    location: "Gulberg, Lahore",
    rating: 5,
    review:
      "We've been ordering the Family Weekly Box every week for 3 months now. The freshness and quality are consistently excellent. Bagh-e-Khas has completely changed how our family eats.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Sana Rehman",
    location: "Model Town, Lahore",
    rating: 5,
    review:
      "Ordered the Premium Gift Basket for Eid. It arrived on time, beautifully arranged. My relatives could not stop complimenting how thoughtful and elegant it was.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "4",
    name: "Hamza Khalid",
    location: "Johar Town, Lahore",
    rating: 5,
    review:
      "The Sindhri Mango Box was exceptional — the best mangoes I have ever had delivered to my doorstep. Same-day delivery is a game-changer for gift giving.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: "5",
    name: "Fatima Asad",
    location: "Bahria Town, Lahore",
    rating: 5,
    review:
      "Exceptional quality, stunning packaging, and reliable same-day delivery. Bagh-e-Khas is genuinely the finest fruit gifting service in Lahore. Highly recommended.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
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
    description: "Order by 2 PM for same-day delivery across Lahore.",
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
    src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    alt: "Premium fruit basket arrangement",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
    alt: "Fresh Sindhri mangoes",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80",
    alt: "Colourful fresh fruit bowl",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
    alt: "Fresh strawberries",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
    alt: "Fruit selection flat lay",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80",
    alt: "Luxury gift hamper",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&q=80",
    alt: "Premium dates box",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    alt: "Pomegranates on display",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#best-sellers" },
    { label: "Gift Boxes", href: "#featured-collections" },
    { label: "Corporate Gifting", href: "#corporate-gifting" },
    { label: "About Us", href: "#why-us" },
  ],
  collections: [
    { label: "Premium Gift Basket", href: "#" },
    { label: "Family Weekly Box", href: "#" },
    { label: "Seasonal Fruit Box", href: "#" },
    { label: "Corporate Hampers", href: "#" },
    { label: "Eid Special", href: "#" },
  ],
};
