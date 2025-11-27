import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: LucideIcon;
  category: 'core' | 'software';
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}
