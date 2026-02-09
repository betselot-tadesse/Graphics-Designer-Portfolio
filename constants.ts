
import { 
  Palette, 
  PenTool, 
  Monitor, 
  Type, 
  Layers, 
  Aperture,
  Briefcase,
  Camera,
  Crop,
  Video,
  Share2,
  Package,
  BookOpen
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

/**
 * IMAGE CONTROL CENTER
 * Replace the URLs below with your own image links.
 */
export const ASSETS = {
  // Your professional profile photo
  profile_photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80", // [REPLACE_IMAGE]
  
  // Project thumbnails
  project_1: "/assets/portfolio/branding/portfolio-design.jpg",
  project_2: "/assets/portfolio/branding/mockup.jpg",
  project_3: "/assets/portfolio/branding/ui-design.jpg",
  project_4: "/assets/portfolio/branding/instagram-carasoul.png", // [REPLACE_IMAGE]
  project_5: "/assets/portfolio/branding/Real-estate.jpg", // [REPLACE_IMAGE]
  project_6: "/assets/portfolio/branding/branding-design.jpg", // [REPLACE_IMAGE]
  project_7: "/assets/portfolio/branding/menu-designn.jpg", // [REPLACE_IMAGE]
  project_8: "/assets/portfolio/branding/portfolio-design.jpg", // [REPLACE_IMAGE]
  project_9: "/assets/portfolio/branding/portfolio-design.jpg", // [REPLACE_IMAGE]
  project_10: "/assets/portfolio/branding/photo-retouching.jpg", // [REPLACE_IMAGE]
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
  },
  {
    title: "Motion Graphics",
    description: "Bringing static designs to life through high-energy animations and fluid kinetic typography.",
    icon: Video
  },
  {
    title: "Social Media Design",
    description: "Creating high-converting visual content and aesthetic brand kits for all digital platforms.",
    icon: Share2
  },
  {
    title: "Packaging Design",
    description: "Designing tangible brand experiences through innovative, luxury, and sustainable product packaging.",
    icon: Package
  },
  {
    title: "Print & Editorial",
    description: "High-quality layout design for magazines, large-scale banners, and professional marketing collateral.",
    icon: BookOpen
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GTC Metal Recycling portfolio",
    category: "Corporate Branding",
    description: "A structured corporate portfolio designed for GTC Group’s Metal Recycling division, highlighting diversified operations, leadership strength, and industrial credibility through a sustainability-driven visual system.",
    problem: "The company lacked a unified visual framework to present its multi-industry operations with clarity, authority, and environmental positioning.",
    solution: "Built a hexagon-based modular layout inspired by industrial structure and sustainability, creating a cohesive system that organizes verticals, leadership, and client credibility with precision.",
    tools: ["Illustrator", "Grid System Structuring", "Corporate Typography Hierarchy", "Photoshop"],
    image: ASSETS.project_1,
    visualOutcomes: ["Clear business architecture", "Strong eco-industrial identity", "Elevated corporate perception", "Improved investor presentation flow"]
  },
  {
    id: 2,
    title: "GTC Metal Recycling – Website Design",
    category: "UI Design",
    description: "A modern industrial website designed for GTC Metal Recycling, transforming heavy manufacturing visuals into a structured, sustainability-driven digital presence.",
    client: "GTC",
    problem: "GTC needed a digital platform that balanced industrial strength with environmental responsibility while clearly presenting services, process transparency, and operational scale.",
    solution: "Developed a conversion-focused website combining high-impact industrial imagery, structured process storytelling, and a green-forward visual system to reinforce trust and sustainability.",
    tools: ["Figma","Conversion-Oriented UX Structuring", "Adobe Photoshop", "UI Grid System"],
    image: ASSETS.project_2,
    visualOutcomes: ["Strong industrial authority", "Clear service architecture", "Enhanced sustainability positioning" ,"Transparent recycling workflow"]
  },
  {
    id: 3,
    title: "FinTech Dashboard UI",
    category: "UI Design",
    description: "Futuristic dashboard interface design for a data analytics platform.",
    client: "Vortex Capital",
    problem: "Users were overwhelmed by complex data sets, leading to high drop-off rates on the analytics page.",
    solution: "Simplified the information architecture using a modular glassmorphic design system that prioritizes key KPIs with visual hierarchy.",
    tools: ["Figma", "Illustrator"],
    image: ASSETS.project_3,
    visualOutcomes: ["Interactive Prototype", "Dark Mode System", "Asset Library"]
  },
  {
    id: 4,
    title: "Urban Social Campaign",
    category: "Social Media Designs",
    description: "A comprehensive social media brand kit for a high-traffic urban event.",
    client: "Metro Beats Festival",
    problem: "Low engagement rates due to inconsistent and outdated social media visuals that didn't appeal to Gen Z.",
    solution: "Created high-energy, motion-inspired static and video templates that utilized bold typography and glitch effects.",
    tools: ["Canva", "Photoshop", "After Effects"],
    image: ASSETS.project_4,
    visualOutcomes: ["20+ Instagram Post Layouts", "Animated Stories", "Event Highlight Covers"]
  },
  {
    id: 5,
    title: "Solaris Web Experience",
    category: "Website Design",
    description: "Modern, sustainable-themed landing page with smooth parallax effects.",
    client: "Solaris Green Energy",
    problem: "Their existing site was slow and failed to communicate the innovative 'future' aspect of green energy.",
    solution: "Designed a clean, immersive web experience using large-scale imagery, micro-animations, and a focus on clarity.",
    tools: ["Figma", "Photoshop"],
    image: ASSETS.project_5,
    visualOutcomes: ["Full Landing Page Design", "Custom Iconography", "Mobile Optimized Layout"]
  },
  {
    id: 6,
    title: "E-Sport Team Identity",
    category: "Branding",
    description: "Branding for a professional gaming organization focusing on high-octane competitive play.",
    client: "Apex Vanguards",
    problem: "The team needed a logo that looked aggressive yet professional enough for corporate sponsorship.",
    solution: "Iterated on a sharp, 'vanguard' shield motif with metallic textures and a unique glowing core element.",
    tools: ["Illustrator", "Photoshop"],
    image: ASSETS.project_6,
    visualOutcomes: ["Vector Logo Kit", "Jerseys & Apparel Mockups", "Stream Overlay Pack"]
  },
  {
    id: 7,
    title: "Quantum Realty Web",
    category: "Website Design",
    description: "High-end real estate portal for futuristic architectural properties.",
    client: "Quantum Estates",
    problem: "Luxury properties were being undersold by a standard templated website.",
    solution: "Created a 'cinematic' layout where imagery takes center stage, supported by elegant, thin-weight typography.",
    tools: ["Figma", "Canva"],
    image: ASSETS.project_7,
    visualOutcomes: ["Hi-Fi Design Specs", "User Flow Diagrams", "Marketing Microsite"]
  },
  {
    id: 8,
    title: "Influencer Brand Kit",
    category: "Social Media Designs",
    description: "Personal branding and social content strategy for a lifestyle influencer.",
    client: "Zoe Bloom Lifestyle",
    problem: "Difficulty in monetizing the audience due to a lack of professional aesthetic in brand collaborations.",
    solution: "Built a cohesive 'soft-tech' brand kit that combined organic colors with professional layouts for media kits.",
    tools: ["Canva", "Photoshop"],
    image: ASSETS.project_8,
    visualOutcomes: ["Media Kit Design", "Weekly Content Schedule Templates", "Presets Pack"]
  },
  {
    id: 9,
    title: "Cyber-Vibe Promo",
    category: "Social Media Designs",
    description: "High-engagement Instagram story and post templates for a tech event.",
    client: "TechFlow Dubai",
    problem: "Event organizers needed to drive ticket sales through viral social content.",
    solution: "Designed 'Flash-Style' quick-read social cards that highlighted speakers and key dates using neon highlights.",
    tools: ["Illustrator", "Canva"],
    image: ASSETS.project_9,
    visualOutcomes: ["Viral Post Set", "Speaker Intro Cards", "Interactive Q&A Templates"]
  },
  {
    id: 10,
    title: "Vortex Motion Intro",
    category: "Motion Graphics",
    description: "A high-octane animated intro for a futuristic sports supplement brand.",
    client: "Vortex Nutrition",
    problem: "The brand's digital ads lacked the visual 'punch' needed to stop scrollers on TikTok and Instagram.",
    solution: "Crafted a 10-second high-energy motion piece featuring 3D particle simulations and synchronized kinetic typography.",
    tools: ["After Effects", "Photoshop", "Premiere Pro"],
    image: ASSETS.project_10,
    visualOutcomes: ["Master Motion Intro", "6 Short-Form Ad Cuts", "Animated Brand Asset Library"]
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
