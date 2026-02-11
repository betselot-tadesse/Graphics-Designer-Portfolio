
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
  profile_photo: "/assets/portfolio/branding/portfolio.jpeg", // [REPLACE_IMAGE]
  
  // Project thumbnails
  project_1: "/assets/portfolio/branding/portfolio-design.jpg",
  project_2: "/assets/portfolio/branding/gtc-ui.jpg",
  project_3: "/assets/portfolio/branding/ui-design.jpg",
  project_4: "/assets/portfolio/branding/instagram-carousel.png",
  project_5: "/assets/portfolio/branding/Real-estate.jpg", // [REPLACE_IMAGE]
  project_6: "/assets/portfolio/branding/branding-design.jpg", // [REPLACE_IMAGE]
  project_7: "/assets/portfolio/branding/menu-design.jpg", // [REPLACE_IMAGE]
  project_8: "/assets/portfolio/branding/instagram-ads.jpg", // [REPLACE_IMAGE]
  project_9: "/assets/portfolio/branding/banner.jpg", // [REPLACE_IMAGE]
  project_10: "/assets/portfolio/branding/combo.jpg", // [REPLACE_IMAGE]
  project_11: "/assets/portfolio/branding/mockup.jpg", // [REPLACE_IMAGE]
  project_12: "/assets/portfolio/branding/photo-retouching.jpg", // [REPLACE_IMAGE]
  project_13: "/assets/portfolio/branding/amazon.jpg", // [REPLACE_IMAGE]
  project_14: "/assets/portfolio/branding/billboard.jpg", // [REPLACE_IMAGE]
  project_15: "/assets/portfolio/branding/byt-perfume.jpg", // [REPLACE_IMAGE]
  project_16: "/assets/portfolio/branding/car.jpg", // [REPLACE_IMAGE]
  project_17: "/assets/portfolio/branding/jeweley.jpg", // [REPLACE_IMAGE]
  project_18: "/assets/portfolio/branding/hospital.jpg", // [REPLACE_IMAGE]
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
    title: "Multi-Industry UI/UX Systems",
    category: "UI/UX Design",
    description: "A collection of UI/UX concepts crafted for diverse industries including luxury fragrances, real estate brokerage, and technology-driven trading platforms — each tailored to reflect its market positioning and audience psychology.",
    client: "BYT LLC",
    problem: "Each industry demanded a distinct digital language — luxury storytelling for perfumes, trust-driven clarity for real estate, and performance-focused structure for tech platforms — without compromising usability.",
    solution: "Developed tailored design systems for each sector, aligning typography, color psychology, layout hierarchy, and conversion strategy with their respective brand identities and user expectations.",
    tools: ["Figma","Adobe Photoshop","Grid & Layout Systems","Color Psychology Strategy", "UX Wireframing"],
    image: ASSETS.project_3,
    visualOutcomes: ["Industry-specific brand expression", "Clear information architecture","Strong typographic hierarchy", "Conversion-focused layouts"]
  },
  {
    id: 4,
    title: "Octa Isle Campaign Carousel",
    category: "Luxury Real Estate Marketing",
    description: "A high-end Instagram carousel campaign designed to showcase Octa Isle’s architectural elegance, waterfront exclusivity, and award-winning positioning through immersive visual storytelling.",
    client: "Crystal Group",
    problem: "Luxury real estate requires more than showcasing property — it must evoke aspiration, exclusivity, and lifestyle appeal within seconds on fast-scrolling social platforms.",
    solution: "Created a visually cohesive Instagram carousel combining cinematic sunset renders, interior detailing, and prestige award branding to build emotional engagement and premium perception.",
    tools: ["Color Grading & Light Enhancement","Adobe Photoshop","Social Media Layout Structuring", "Luxury Typography Pairing",],
    image: ASSETS.project_4,
    visualOutcomes: ["Elevated luxury positioning", "Strong lifestyle-driven storytelling","Cohesive visual identity across slides", "High-end real estate branding appeal"]
  },
 
  {
    id: 5,
    title: "Sculpting Waterfront Luxury",
    category: "Digital Campaign & Visual Storytelling",
    description: "A luxury real estate Instagram carousel showcasing Octa Isle’s waterfront architecture, resort-style amenities, and branded interiors through refined visual storytelling.",
    client: "Crystal Group",
    problem: "High-end developments compete in an oversaturated luxury market where visuals must instantly communicate exclusivity, scale, and design sophistication on social platforms.",
    solution: "Designed a minimal, image-led carousel highlighting architectural form, waterfront lifestyle, and brand prestige while maintaining visual consistency and premium balance.",
    tools: ["Adobe Photoshop","Social Media Grid Structuring", "High-End Render Enhancement"],
    image: ASSETS.project_5,
    visualOutcomes: ["Elevated architectural presence", "Strong luxury positioning","Premium real estate appeal", "Cohesive Instagram storytelling"]
  },
  {
    id: 6,
    title: "Multi-Industry Branding and Logo",
    category: "Branding",
    description: "A collection of branding and visual identity projects developed across corporate hospitality, service-based businesses, and sports analysis platforms — each tailored to its target audience and market positioning.",
    client: "Multi Industry",
    problem: "Each client required a distinct brand presence — from refined corporate hospitality identity to bold sports-focused visual language — while maintaining clarity, recognition, and audience alignment.",
    solution: "Developed tailored logo systems, campaign visuals, and promotional materials that align typography, color psychology, and composition strategy with each brand’s market positioning.",
    tools: ["Illustrator", "Photoshop"],
    image: ASSETS.project_6,
    visualOutcomes: ["Vector Logo", "Distinct industry-specific identities","Enhanced brand recognition", "Targeted visual tone per audience"]
  },
  {
    id: 7,
    title: "Crystal Plaza Al Qasimia – Hotel Menu Design",
    category: "Print & Editorial Design",
    description: "A refined hotel menu system designed for Crystal Plaza Al Qasimia, combining structured layout, multilingual clarity, and appetizing food visuals to enhance in-room and restaurant dining experience.",
    client: "Crystal Plaza Hospitality",
    problem: "The hotel required a clean, easy-to-navigate menu that maintained a professional hospitality image while presenting multiple cuisines and languages without overwhelming guests.",
    solution: "Designed a marble-inspired layout with a minimal typographic hierarchy, circular food framing, and structured category sections to ensure readability, visual balance, and premium presentation.",
    tools: ["Figma", "Canva"],
    image: ASSETS.project_7,
    visualOutcomes: ["Clear menu hierarchy", "Multilingual accessibility","Enhanced dining presentation","Balanced image-to-text ratio", "Consistent visual alignment"]
  },
  {
    id: 8,
    title: "Social Media Advertising",
    category: "Social Media Designs",
    description: "A high-conversion Ramadan Iftar Instagram ad campaign designed to promote Crystal Plaza Al Qasimia’s seasonal dining offer with culturally aligned visuals and premium hospitality aesthetics.",
    client: "Crystal Plaza",
    problem: "The hotel needed to promote a limited-time Iftar offer in a highly competitive Ramadan market where visuals must instantly communicate value, authenticity, and comfort while driving reservations.",
    solution: "Designed a culturally aligned, conversion-focused Ramadan Iftar ad using premium food imagery, clear pricing hierarchy, and high-contrast layouts to drive immediate bookings.",
    tools: ["Canva","Arabic & English Typography Structuring", "Social Media Ad Composition", "Photoshop"],
    image: ASSETS.project_8,
    visualOutcomes: ["Strong cultural alignment", "Clear pricing emphasis","Elevated hospitality positioning", "High food appeal (visual appetite trigger)"]
  },
  {
    id: 9,
    title: "Crystal Plaza Iftar Buffet – Outdoor Roll-Up Banner",
    category: "Hospitality Print Advertising",
    description: "A roll-up banner designed to promote Crystal Plaza Hotel’s Ramadan Iftar Buffet, combining traditional elegance, strong pricing hierarchy, and appetizing food visuals to attract walk-in guests.",
    client: "Crystal Plaza",
    problem: "The hotel needed a high-visibility outdoor banner that clearly communicated the Iftar offer and pricing within seconds to passing guests.",
    solution: "Designed a high-contrast, price-focused banner with bold typography and warm Ramadan visuals to maximize instant readability and foot traffic conversion.",
    tools: ["Illustrator","Photoshop", "Canva"],
    image: ASSETS.project_9,
    visualOutcomes: ["Clear offer communicationt", "Traditional Ramadan aesthetic","Immediate promotional impact", "High outdoor readability"]
  },
  {
    id: 10,
    title: "High-Impact Combo Offer Campaign Design",
    category: "Restaurant Promotional Advertising",
    description: "A bold promotional campaign designed to highlight limited-time fast-food combo offers using strong color contrast, appetizing food visuals, and aggressive pricing visibility.",
    client: "Vortex Nutrition",
    problem: "The brand's digital ads lacked the visual 'punch' needed to stop scrollers on TikTok and Instagram.",
    solution: "The restaurant needed an eye-catching visual that could instantly communicate value, flavor, and urgency across a multilingual audience in a competitive food market.",
    tools: ["After Effects", "Photoshop", "Premiere Pro"],
    image: ASSETS.project_10,
    visualOutcomes: ["Strong appetite appeal", "High-contrast color impact", "Multilingual communication","Clear limited-offer positioning"]
  },
  {
    id: 11,
    title: "Rozana Kitchen – Brand & Packaging System",
    category: "Brand Identity & Packaging Design",
    description: "A cohesive brand and packaging system developed for Rozana Kitchen, combining traditional Middle Eastern patterns with modern minimal structure to create a premium yet culturally grounded food brand identity.",
    client: "Crystal Group",
    problem: "The brand required a distinctive packaging identity that reflected authenticity and freshness while standing out in a competitive ready-to-eat food market.",
    solution: "Designed a culturally inspired, pattern-driven packaging system with refined typography and premium color balance to elevate everyday food presentation.",
    tools: ["After Effects", "Photoshop", "Illustrator"],
    image: ASSETS.project_11,
    visualOutcomes: ["Strong shelf presence", "Cultural authenticity","Premium green-and-cream identity system", "Consistent brand application across bag and container"]
  },
  {
    id: 12,
    title: "Professional Portrait Retouching & Enhancement",
    category: "Photo Retouching & Color Correction",
    description: "A collection of portrait retouching projects focused on skin refinement, lighting balance, background enhancement, and natural color grading to elevate personal and lifestyle photography.",
    client: "BYT",
    problem: "Raw portraits often suffer from inconsistent lighting, uneven skin tones, distracting backgrounds, and lack of visual depth, reducing their professional impact.",
    solution: "Applied professional skin retouching, tonal correction, and controlled color grading to enhance clarity while maintaining natural texture and realism.",
    tools: ["After Effects", "Photoshop", "Premiere Pro"],
    image: ASSETS.project_12,
    visualOutcomes: ["Smooth yet natural skin finish", "Improved lighting balance", "Background refinement", "Enhanced color vibrancy"]
  },
   {
    id: 13,
    title: "BYT Smartwatch – Amazon Listing Conversion Design",
    category: "E-Commerce Product Listing Design",
    description: "A high-conversion Amazon product image system designed to position the BYT Smartwatch as a performance-driven, premium fitness device in a competitive marketplace.",
    client: "Online Retail",
    problem: "Fitness smartwatch listings on Amazon often look generic and fail to clearly differentiate features, benefits, and competitive advantages within seconds.",
    solution: "Created a bold, feature-focused visual hierarchy combining performance-driven typography, high-contrast lighting, and comparison graphics to instantly communicate superiority and value.",
    tools: ["Canva","Adobe Photoshop", "Adobe Illustrator"],
    image: ASSETS.project_13,
    visualOutcomes: ["Clear 24/7 performance positioning", "Strong feature callouts (Heart Rate, Sleep, Battery)","Lifestyle integration shot for emotional appeal", "Amazon-optimized infographic layout"]
  },
  {
    id: 14,
    title: "Marina Villas – Integrated Luxury Real Estate Campaign",
    category: "Luxury Real Estate Advertising & Campaign Design",
    description: "A premium cross-platform advertising campaign created to position waterfront villas in Dubai Marina as an aspirational lifestyle investment.",
    client: "BYT Real Estate",
    problem: "Luxury real estate buyers are exposed to constant high-end visuals, making it difficult for developments to stand out while maintaining elegance and trust.",
    solution: "Developed a cohesive luxury campaign system combining refined serif typography, cinematic waterfront renders, and high-contrast gold-accent hierarchy across both digital (Instagram) and outdoor billboard formats.",
    tools: ["Illustrator","Adobe Photoshop", "Mockup Compositing","Canva"],
    image: ASSETS.project_14,
    visualOutcomes: ["Unified cross-platform brand presence (Social + Outdoor)", "Strong luxury positioning through navy & gold palette","Clear call-to-action hierarchy", "Emotional lifestyle-driven storytelling"]
  },
  
  {
    id: 15,
    title: "BYT – Luxury Fragrance Brand & Packaging System",
    category: "Brand Identity & Packaging Design",
    description: "A premium fragrance brand concept designed to embody authority, legacy, and timeless leadership through a refined black-and-gold visual identity system.",
    client: "BYT Perfumes",
    problem: "The luxury fragrance market is saturated with visually similar black-bottle brands that rely on generic elegance without building a strong narrative or symbolic positioning.",
    solution: "Developed a commanding identity built around matte-black minimalism, metallic gold hierarchy, and a time-driven brand philosophy (“Beyond Your Time”) reinforced through packaging messaging and cinematic product presentation.",
    tools: ["Adobe Photoshop", "Illustrator"],
    image: ASSETS.project_15,
    visualOutcomes: ["Strong shelf presence", "Cultural authenticity","Premium green-and-cream identity system", "Consistent brand application across bag and container"]
  },
  {
    id: 16,
    title: "Drive Dominance – Luxury SUV Billboard Campaign",
    category: "Luxury Automotive Advertising / Outdoor Billboard Design",
    description: "A high-impact outdoor billboard campaign concept designed to position a luxury SUV as a symbol of authority, prestige, and elite performance.",
    client: "Delap Cars",
    problem: "Luxury automotive advertising in outdoor spaces must communicate power, status, and aspiration within seconds to fast-moving urban audiences, without overcrowding the visual field.",
    solution: "Designed a minimal, dominance-driven billboard using cinematic lighting, deep contrast, and commanding typography to elevate the SUV as a symbol of executive power and elite presence.",
    tools: ["AI Rendering Tool", "Adobe Photoshop", "Illustrator"],
    image: ASSETS.project_16,
    visualOutcomes: ["Dark, premium atmosphere with controlled smoke texture", "Strong typographic hierarchy (headline → subline → CTA)", "Balanced negative space to enhance luxury perception","Gold-accented CTA buttons for prestige positioning"]
  },
  {
    id: 17,
    title: "Beyond Luxury – Ultra High-End Jewelry Website Hero",
    category: "Luxury Jewelry Branding / Website Hero Design",
    description: "A premium website hero section designed for an ultra high-net-worth jewelry brand, combining cinematic lighting, gold particle effects, and editorial elegance to communicate exclusivity and bespoke craftsmanship.",
    client: "BYT",
    problem: "The luxury jewelry market is saturated with brands claiming exclusivity, elegance, and prestige — making it difficult to visually differentiate and instantly communicate ultra-premium positioning to high-value clientele.",
    solution: "Designed a cinematic, high-contrast hero that positions the brand as an exclusive, authority-level jewelry house through refined typography, lighting, and editorial styling.",
    tools: ["Figma", "Adobe Photoshop", "HTML & CSS", "Javascript"],
    image: ASSETS.project_17,
    visualOutcomes: ["Strong premium hierarchy (Headline → Subline → CTA)", "Balanced negative space enhancing luxury perception", "Cohesive gold-on-black dominance", "Enhanced color vibrancy"]
  },
   {
    id: 18,
    title: "Premium Family Healthcare Campaign",
    category: "Healthcare Print Advertising",
    description: "A premium healthcare print campaign designed to position the clinic as a private, family-focused medical provider, combining warmth, trust, and refined visual structure to elevate brand perception beyond standard clinical advertising.",
    client: "NMC",
    problem: "Private healthcare brands often look either too clinical or too generic, failing to communicate warmth and exclusivity at the same tim",
    solution: "Designed a soft, trust-driven medical campaign blending luxury tones, family-centered imagery, and refined typography to position the service as both elite and compassionate.",
    tools: ["Layout & Print Composition System", "Adobe Photoshop","Typography Structuring", "Illustrator"],
    image: ASSETS.project_18,
    visualOutcomes: ["Elevated premium healthcare positioning", "Strong emotional trust and family connection","Clear service hierarchy and readability", "Soft luxury aesthetic with clinical credibility"]
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
