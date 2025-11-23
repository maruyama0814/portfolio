import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Verse Identity",
    category: "Branding",
    image: "https://picsum.photos/800/800?random=1",
    tags: ["Typography", "Cyberpunk", "Logo Design"],
    size: "large",
    year: "2024"
  },
  {
    id: 2,
    title: "EcoStream App",
    category: "UI/UX Design",
    image: "https://picsum.photos/600/800?random=2",
    tags: ["Mobile App", "Sustainability", "Minimalism"],
    size: "tall",
    year: "2024"
  },
  {
    id: 3,
    title: "Mono Magazine",
    category: "Editorial",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Layout", "Print", "Swiss Style"],
    size: "medium",
    year: "2023"
  },
  {
    id: 4,
    title: "Aero Packaging",
    category: "Packaging",
    image: "https://picsum.photos/600/600?random=4",
    tags: ["3D Rendering", "FMCG", "Clean"],
    size: "small",
    year: "2023"
  },
  {
    id: 5,
    title: "Zenith Architecture",
    category: "Web Design",
    image: "https://picsum.photos/800/400?random=5",
    tags: ["Webflow", "Animation", "Luxury"],
    size: "medium",
    year: "2025"
  },
  {
    id: 6,
    title: "Abstract Flows",
    category: "Art Direction",
    image: "https://picsum.photos/600/600?random=6",
    tags: ["Motion Graphics", "Abstract", "Generative"],
    size: "small",
    year: "2024"
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];