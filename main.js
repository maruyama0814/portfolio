import { GoogleGenAI } from "@google/genai";

// --- DATA ---
const PROJECTS = [
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

// --- GEMINI SERVICE ---
const getAiClient = () => {
  // In this specific environment, process.env.API_KEY is assumed to be available/injected
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const generateProjectInsight = async (title, tags) => {
  const ai = getAiClient();
  if (!ai) return "APIキーが設定されていないため、AIインサイトを生成できません。";

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      あなたは世界的なデザイン評論家兼クリエイティブディレクターです。
      以下の架空のデザインプロジェクトについて、洗練された専門的な解説文（ケーススタディ）を日本語で作成してください。
      
      プロジェクト名: ${title}
      関連タグ: ${tags.join(', ')}
      
      要件:
      1. 150文字〜200文字程度でまとめてください。
      2. デザインの意図、解決した課題、視覚的な特徴（色彩、タイポグラフィなど）について触れてください。
      3. 読者を惹きつける、エモーショナルでプロフェッショナルな文体にしてください。
      4. Markdown形式は使用せず、プレーンテキストで出力してください。
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "インサイトの生成に失敗しました。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在AIサービスにアクセスできません。後ほどお試しください。";
  }
};

// --- UI LOGIC ---

// Helper: Get Tailwind Grid Classes
const getSpanClasses = (size) => {
  switch (size) {
    case 'large': return 'md:col-span-2 md:row-span-2';
    case 'tall': return 'md:col-span-1 md:row-span-2';
    case 'medium': return 'md:col-span-2 md:row-span-1';
    case 'small': default: return 'md:col-span-1 md:row-span-1';
  }
};

// Render Grid
const renderGrid = () => {
  const gridContainer = document.getElementById('project-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = PROJECTS.map((project, index) => `
    <div 
      class="group relative bg-card-bg overflow-hidden cursor-pointer ${getSpanClasses(project.size)}"
      data-id="${project.id}"
    >
      <!-- Project Index Number -->
      <div class="absolute top-6 left-6 z-20 mix-blend-difference">
        <span class="font-serif font-serif-display italic text-4xl text-white/50 group-hover:text-white transition-colors duration-500">
          ${(index + 1).toString().padStart(2, '0')}
        </span>
      </div>

      <!-- Image -->
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
      />
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

      <!-- Content Overlay -->
      <div class="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div class="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div class="flex gap-2">
              ${project.tags.slice(0, 2).map(tag => `
                <span class="font-mono text-[9px] border border-white/20 text-zinc-300 px-2 py-1 rounded-full backdrop-blur-sm">
                  ${tag}
                </span>
              `).join('')}
            </div>
            <i data-lucide="arrow-up-right" class="text-accent-lime" width="16"></i>
          </div>
          
          <h4 class="text-3xl font-serif font-serif-display text-white leading-[0.9] group-hover:text-accent-lime transition-colors duration-300">
            ${project.title}
          </h4>
          <p class="font-mono text-[10px] text-zinc-400 mt-2 tracking-widest uppercase">
            ${project.category} — ${project.year}
          </p>
        </div>
      </div>
      
      <!-- Hover Border Effect -->
      <div class="absolute inset-0 border border-white/0 group-hover:border-accent-lime/30 transition-colors duration-500 pointer-events-none"></div>
    </div>
  `).join('');

  // Re-initialize icons for inserted HTML
  if (window.lucide) window.lucide.createIcons();
};

// Navbar Scroll Logic
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent', 'py-8');
      navbar.classList.add('bg-dark-bg/60', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4');
    } else {
      navbar.classList.add('bg-transparent', 'py-8');
      navbar.classList.remove('bg-dark-bg/60', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4');
    }
  });

  // Mobile Menu
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-menu-close');
  const links = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
    menu.classList.toggle('hidden');
  };

  btn.addEventListener('click', toggleMenu);
  close.addEventListener('click', toggleMenu);
  links.forEach(link => link.addEventListener('click', () => menu.classList.add('hidden')));
};

// Modal Logic
let currentProject = null;

const initModal = () => {
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeMobile = document.getElementById('modal-close-mobile');
  const closeDesktop = document.getElementById('modal-close-desktop');
  const grid = document.getElementById('project-grid');
  
  const aiInitial = document.getElementById('ai-initial');
  const aiLoading = document.getElementById('ai-loading');
  const aiResult = document.getElementById('ai-result');
  const aiText = document.getElementById('ai-text');
  const generateBtn = document.getElementById('btn-generate-insight');

  // Open Modal
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.group');
    if (!card) return;

    const id = parseInt(card.dataset.id);
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;

    currentProject = project;
    
    // Fill Content
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => 
      `<span class="text-[10px] font-mono text-zinc-400 border border-white/10 px-3 py-1 rounded-full">#${tag}</span>`
    ).join('');

    // Reset AI State
    aiInitial.classList.remove('hidden');
    aiLoading.classList.add('hidden');
    aiResult.classList.add('hidden');
    aiText.textContent = '';

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  // Close Modal
  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    currentProject = null;
  };

  backdrop.addEventListener('click', closeModal);
  closeMobile.addEventListener('click', closeModal);
  closeDesktop.addEventListener('click', closeModal);

  // Generate Insight Action
  generateBtn.addEventListener('click', async () => {
    if (!currentProject) return;

    aiInitial.classList.add('hidden');
    aiLoading.classList.remove('hidden');

    const text = await generateProjectInsight(currentProject.title, currentProject.tags);

    aiLoading.classList.add('hidden');
    aiResult.classList.remove('hidden');
    aiText.textContent = text;
  });
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  initNavbar();
  renderGrid();
  initModal();
});
