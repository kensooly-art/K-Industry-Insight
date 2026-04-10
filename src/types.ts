export type Language = "KR" | "EN";

export interface Tour {
  id: string;
  title_kr: string;
  title_en: string;
  description_kr: string;
  description_en: string;
  category: "Semiconductor" | "Automobile" | "Smart Factory" | "Energy" | "Cosmetics" | "Education" | "Medical";
  image: string;
  price: number;
  duration: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title_kr: string;
  title_en: string;
  content_kr: string;
  content_en: string;
  image: string;
  date: string;
}

export interface SiteSettings {
  siteTitle: string;
  primaryColor: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
}

export interface Application {
  id: string;
  tourId: string;
  tourTitle: string;
  companyName: string;
  visitDate: string;
  visitorCount: number;
  contact: string;
  manager: string;
  email: string;
  message?: string;
  createdAt: string;
}

export interface Inquiry {
  id: string;
  title: string;
  content: string;
  author: string;
  password?: string;
  isPrivate: boolean;
  createdAt: string;
  status: "pending" | "answered";
  answer?: string;
}

export interface Partner {
  id: string;
  name: string;
  location: string;
  industry: string;
  type: "company" | "school" | "medical";
  createdAt: string;
}
