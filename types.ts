
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  label: string;
  value: string;
  subtext: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: string;
  category: string;
  type: string;
  rating: number;
  students: number;
  likes: number;
  community_link: string;
  enroll_link: string;
  created_at?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
