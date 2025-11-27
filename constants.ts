import { 
  Palette, 
  PenTool, 
  Monitor, 
  Type, 
  Layers, 
  Aperture,
  Briefcase,
  Camera,
  Crop
} from 'lucide-react';
import { Project, Service, Skill, Testimonial } from './types';

export const OWNER = {
  name: "Betselot Tadesse",
  title: "Graphics Designer",
  location: "Dubai, UAE",
  phone: "+971 50 341 7022",
  email: "Betsiflash@gmail.com",
  linkedin: "https://linkedin.com/in/betselot-tadesse-650a5a277"
};

export const SKILLS: Skill[] = [
  { name: "Brand Identity", level: 95, category: 'core' },
  { name: "Social Media Designs", level: 98, category: 'core' },
  { name: "Website Design", level: 90, category: 'core' },
  { name: "Photo Retouching", level: 90, category: 'core' },
  { name: "Digital Illustration", level: 85, category: 'core' },
  { name: "UI/Visual Design", level: 88, category: 'core' },
  { name: "Typography", level: 92, category: 'core' },
  { name: "Adobe Photoshop", level: 98, category: 'software' },
  { name: "Adobe Illustrator", level: 95, category: 'software' },
  { name: "Adobe InDesign", level: 90, category: 'software' },
  { name: "Canva", level: 95, category: 'software' },
  { name: "Adobe Lightroom", level: 92, category: 'software' },
  { name: "Figma", level: 85, category: 'software' },
];

export const SERVICES: Service[] = [
  {
    title: "Brand Identity",
    description: "Forging memorable visual identities that resonate with your audience and stand the test of time.",
    icon: Briefcase
  },
  {
    title: "High-End Retouching",
    description: "Professional grade image manipulation and retouching for beauty, fashion, and product photography.",
    icon: Aperture
  },
  {
    title: "UI/Visual Design",
    description: "Crafting intuitive and futuristic user interfaces for web and mobile applications.",
    icon: Monitor
  },
  {
    title: "Creative Direction",
    description: "Guiding the visual narrative of your campaigns with cosmic precision and modern aesthetics.",
    icon: Layers
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Horizon Branding",
    category: "Branding",
    description: "A complete identity overhaul for a tech startup focusing on cyberpunk aesthetics.",
    tools: ["Illustrator", "Photoshop"],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "Ethereal Beauty",
    category: "Retouching",
    description: "High-end skin and light retouching for a luxury cosmetic line campaign.",
    tools: ["Photoshop", "Lightroom"],
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Cosmic Dashboard UI",
    category: "UI Design",
    description: "Futuristic dashboard interface design for a data analytics platform.",
    tools: ["Figma", "Illustrator"],
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Stellar Typography",
    category: "Layout",
    description: "Editorial layout design featuring custom typography and experimental grids.",
    tools: ["InDesign", "Illustrator"],
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "Vortex Motion",
    category: "Illustration",
    description: "Digital illustration series depicting abstract cosmic events.",
    tools: ["Procreate", "Photoshop"],
    image: "https://picsum.photos/800/600?random=5"
  },
  {
    id: 6,
    title: "Urban Glitch",
    category: "Manipulation",
    description: "Photo manipulation project merging cityscapes with digital glitch artifacts.",
    tools: ["Photoshop"],
    image: "https://picsum.photos/800/600?random=6"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Nebula Tech",
    content: "Betselot's vision is out of this world. He transformed our brand into something truly iconic."
  },
  {
    name: "David Chen",
    role: "Senior Photographer",
    company: "Lumina Studios",
    content: "The attention to detail in his retouching work is unmatched. A true professional."
  },
  {
    name: "Amara Okeke",
    role: "CEO",
    company: "FutureFlow",
    content: "Fast, creative, and incredibly talented. The UI designs exceeded our wildest expectations."
  }
];