export interface NavbarItem {
  label: string;
  href: string;
}

export interface NavbarData {
  logo: {
    image: string;
    alt: string;
  };
  navigation: NavbarItem[];
  cta: {
    label: string;
    href: string;
  };
  mobile: {
    menuLabel: string;
    closeLabel: string;
  };
  theme: {
    background: string;
    text: string;
    mutedText: string;
    accent: string;
    ctaText: string;
  };
}

export interface HeroData {
  brandTag: string;
  logo: {
    image: string;
    alt: string;
  };
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
  };
  person: {
    image: string;
    alt: string;
  };
  theme?: {
    background: string;
    accent: string;
    circle: string;
    triangle: string;
    dots: string;
    headingText: string;
    bodyText: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: {
    logo: string;
    alt: string;
    href: string;
    tagline: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneTel: string;
  };
  columns: FooterColumn[];
  legal: {
    copyright: string;
    links: FooterLink[];
  };
  theme?: {
    background: string;
    accent: string;
  };
}

export interface WhyVeyoraTab {
  image: string;
  points: string[];
}

export interface WhyVeyoraMetric {
  label: string;
  percentage: number;
}

export interface WhyVeyoraReason {
  number: string;
  title: string;
  description: string;
}

export interface WhyVeyoraData {
  badge: string;
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  description: string;
  tabs: Record<string, WhyVeyoraTab>;
  metrics: WhyVeyoraMetric[];
  card: {
    logos: {
      backdrop: string;
      backdropAlt: string;
      primary: string;
      primaryAlt: string;
    };
    reasons: WhyVeyoraReason[];
    cta: {
      label: string;
      href: string;
    };
  };
}

export interface CoreFeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface CoreFeaturesData {
  badge: string;
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  description: string;
  centerImage: string;
  features: CoreFeatureItem[];
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface TestimonialsData {
  badge: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  items: TestimonialItem[];
}

export interface OurTeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    x?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface OurTeamData {
  badge: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  members: OurTeamMember[];
  theme?: {
    background?: string;
    accent?: string;
  };
}

export interface ContentData {
  navbar: NavbarData;
  hero: HeroData;
  whyVeyora?: WhyVeyoraData;
  coreFeatures?: CoreFeaturesData;
  testimonials?: TestimonialsData;
  ourTeam?: OurTeamData;
  footer: FooterData;
}


