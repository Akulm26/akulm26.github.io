export interface Project {
  id: string;
  title: string;
  headline: string;
  type: string;
  description: string;
  ctaText: string;
  isFeatured?: boolean;
  imageUrl?: string;
}

export interface Capability {
  title: string;
  subtitle?: string;
  description: string;
  proof: string;
}

export interface Step {
  title: string;
  icon: string;
  description: string;
}

export interface Principle {
  title: string;
  description: string;
}