export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  tag?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface TrustFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
