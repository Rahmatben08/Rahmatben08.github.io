// ==========================================================================
// PROGRAMMING LANGUAGE SVG ICONS DICTIONARY (BRAND COLORS)
// ==========================================================================
const techIcons = {
  "php": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/><text x="12" y="15" font-size="8.5" font-family="Space Grotesk, sans-serif" font-weight="bold" fill="white" text-anchor="middle">php</text></svg>`,
  "javascript": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><text x="17.5" y="19.5" font-size="10.5" font-family="Space Grotesk, sans-serif" font-weight="900" fill="black" text-anchor="middle">JS</text></svg>`,
  "kotlin": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 24H0V0h24L12 12z" fill="url(#kotlin-grad)"/><defs><linearGradient id="kotlin-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E44857"/><stop offset="0.5" stop-color="#C128A1"/><stop offset="1" stop-color="#00AFEC"/></linearGradient></defs></svg>`,
  "python": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.1 2c-3.15 0-2.95 1.36-2.95 1.36l.01 1.4h3.01v.43H7.95S5.2 5.02 5.2 8.35c0 3.32 2.43 3.2 2.43 3.2h1.45V9.92c0-1.63 1.35-2.98 2.98-2.98h3.01V5.5s.2-3.5-3.07-3.5zm2.8 3.5v.85c0 .35-.29.64-.64.64h-1.72c-.35 0-.64-.29-.64-.64V5.5c0-.35.29-.64.64-.64h1.72c.35 0 .64.29.64.64z" fill="#3776AB"/><path d="M11.9 22c3.15 0 2.95-1.36 2.95-1.36l-.01-1.4h-3.01v-.43h4.22s2.75.17 2.75-3.16c0-3.32-2.43-3.2-2.43-3.2h-1.45v1.63c0 1.63-1.35 2.98-2.98 2.98H8.96V18.5s-.2 3.5 3.07 3.5zm-2.8-3.5v-.85c0-.35.29-.64.64-.64h1.72c-.35 0-.64.29-.64.64v.85c0 .35-.29.64-.64.64h-1.72c-.35 0-.64-.29-.64-.64z" fill="#FFE873"/></svg>`,
  "mysql": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00758F"><path d="M18.8 9.3c-.4-1.2-1.5-2.2-2.8-2.6.2.7.3 1.5.1 2.3-.4 1.5-1.5 2.7-3.1 3.2-1.6.5-3.3.1-4.5-.9-1.2-1-1.7-2.6-1.3-4.1.4-1.5 1.7-2.6 3.2-2.7h.4C9.5 4.5 8.1 5.9 7.4 7.7c-.7 1.8-.6 3.8.3 5.5.9 1.7 2.6 2.8 4.5 3 1.9.2 3.8-.5 5-2l1.6 1.6V9.3z"/></svg>`,
  "sqlite": `<svg viewBox="0 0 24 24" fill="#003B57" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>`,
  "laravel": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF2D20"><path d="M8.354 20.354v-3.536l-3.062-1.768v3.536l3.062 1.768zm7.292 0l3.062-1.768v-3.536l-3.062 1.768v3.536zm-3.646-7.072l3.062-1.768v-3.536l-3.062 1.768v3.536zM12 1.5L3 6.7v10.6l9 5.2 9-5.2V6.7l-9-5.2zm7.5 15l-7.5 4.3-7.5-4.3V7.7L12 3.4l7.5 4.3v8.8z"/></svg>`,
  "codeigniter": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#EE4326"><path d="M12 2C7 7 6 12 12 17c6-5 5-10 0-15zm-2 11c-2-2-1-5 2-6-1 2 0 4 2 4s2-2 1-3c2 2 1 5-2 6-1 0-2-.5-3-1z"/></svg>`,
  "tailwind": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.536 6.182 15.175 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.201 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.536 13.382 9.175 12 5.999 12z"/></svg>`,
  "bootstrap": `<svg viewBox="0 0 24 24" fill="#7952B3" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18V3H3zm11.3 10.9c0 1.2-.9 2.1-2.1 2.1H8.5V8h3.7c1.1 0 2 .9 2 1.9 0 1-.7 1.7-1.6 1.9.9.2 1.7 1 1.7 2.1zm-3.8-3.9h1.7c.6 0 1-.4 1-1s-.4-1-1-1H10.5v3zm0 5h1.7c.6 0 1-.4 1-1s-.4-1-1-1H10.5v3z"/></svg>`,
  "figma": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c-1.66 0-3 1.34-3 3s1.34 3 3 3h3V2H8z" fill="#F24E1E"/><path d="M11 8H8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3V8z" fill="#A259FF"/><path d="M8 14c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3v-3H8z" fill="#1ABC9C"/><path d="M16 8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3v3h3z" fill="#FF7262"/><path d="M16 14c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3v3h3z" fill="#18A0FB"/></svg>`,
  "android": `<svg viewBox="0 0 24 24" fill="#3DDC84" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-3.86 0-7 3.14-7 7h14c0-3.86-3.14-7-7-7zm-4 4.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM5 10v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-9H5z"/></svg>`,
  "css3": `<svg viewBox="0 0 24 24" fill="#1572B6" xmlns="http://www.w3.org/2000/svg"><path d="M3 2l1.65 16.5L12 22l7.35-3.5L21 2H3zm13.5 6h-6.8l-.2 2h6.8l-.6 6-4.9 2.3-4.9-2.3-.3-3h2l.2 1.5 3 1.4 3-1.4.3-3H6.7l-.6-6h10.4z"/></svg>`,
  "github": `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>`
};

function getTechIcon(techName) {
  const name = techName.toLowerCase().replace(/[\s\.\d]/g, '');
  if (techIcons[name]) {
    return techIcons[name];
  }
  // Generic code fallback icon
  return `<svg viewBox="0 0 24 24" fill="#89ceff" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`;
}

// ==========================================================================
// SCROLL HIGHLIGHTING & SMOOTH SCROLL FOR TOP HEADER NAV
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > section, header, footer');
  const navLinks = document.querySelectorAll('.floating-nav .hidden a');

  // Intersection Observer for scroll spy
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.remove('text-on-surface-variant');
            link.classList.add('text-white', 'border-b-2', 'border-indigo-accent');
          } else {
            link.classList.remove('text-white', 'border-b-2', 'border-indigo-accent');
            link.classList.add('text-on-surface-variant');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('main > section').forEach(section => {
    observer.observe(section);
  });

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Close mobile drawer if active
        document.getElementById('mobileDrawer').classList.remove('active');
        
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add scroll-triggered header scaling
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.floating-nav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('py-1', 'bg-opacity-95');
      } else {
        nav.classList.remove('py-1', 'bg-opacity-95');
      }
    }
  });
});

// ==========================================================================
// RENDERING TOOLS STACK IN BENTO BOX
// ==========================================================================
function renderBentoTools() {
  const bentoGrid = document.getElementById('bentoTechIconsGrid');
  if (!bentoGrid) return;

  const tools = ["PHP", "JavaScript", "Kotlin", "Python", "Laravel", "MySQL", "Tailwind", "Figma"];

  bentoGrid.innerHTML = '';
  tools.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'tech-icon-wrapper cursor-pointer';
    div.setAttribute('title', tool);
    div.innerHTML = getTechIcon(tool);
    bentoGrid.appendChild(div);
  });
}

// ==========================================================================
// DYNAMIC TYPING ANIMATION
// ==========================================================================
const roles = [
  "Full-Stack Web Developer",
  "Android Native Developer",
  "AI & ML Engineering Enthusiast",
  "Mahasiswa D4 MI POLSRI"
];
let currentRoleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newRoleDelay = 2000;

function typeAnimation() {
  const typingTextSpan = document.getElementById("typing-text");
  if (!typingTextSpan) return;

  const currentRole = roles[currentRoleIdx];

  if (isDeleting) {
    typingTextSpan.textContent = currentRole.substring(0, charIdx - 1);
    charIdx--;
    typingDelay = erasingDelay;
  } else {
    typingTextSpan.textContent = currentRole.substring(0, charIdx + 1);
    charIdx++;
    typingDelay = 100;
  }

  if (!isDeleting && charIdx === currentRole.length) {
    typingDelay = newRoleDelay;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    currentRoleIdx = (currentRoleIdx + 1) % roles.length;
    typingDelay = 500;
  }

  setTimeout(typeAnimation, typingDelay);
}

// ==========================================================================
// PROJECT RENDERING, FILTERING & SEARCH
// ==========================================================================
let activeFilter = 'all';
let searchQuery = '';

function renderProjects() {
  const allGrid = document.getElementById('allProjectsGrid');

  // Filter projects data
  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery) ||
                          proj.role.toLowerCase().includes(searchQuery) ||
                          proj.shortDescription.toLowerCase().includes(searchQuery) ||
                          proj.techStack.some(t => t.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  // Populate Grid
  if (allGrid) {
    allGrid.innerHTML = '';
    if (filteredProjects.length === 0) {
      allGrid.innerHTML = `
        <div class="no-projects-msg col-span-full text-center py-12 text-on-surface-variant">
          <span class="material-symbols-outlined text-4xl mb-3 text-muted">search_off</span>
          <h3 class="text-lg font-bold">Proyek Tidak Ditemukan</h3>
          <p class="text-sm">Coba kata kunci pencarian atau filter kategori lainnya.</p>
        </div>
      `;
    } else {
      filteredProjects.forEach(proj => {
        allGrid.appendChild(createProjectCard(proj));
      });
    }
  }
}

function createProjectCard(project) {
  const card = document.createElement('div');
  // Tailwind glass card structure
  card.className = 'project-card glass-card rim-light rounded-3xl p-6 flex flex-col justify-between cursor-pointer';
  card.setAttribute('data-id', project.id);
  
  // Category Icons
  let catIcon = '';
  if (project.category === 'web') {
    catIcon = `<span class="material-symbols-outlined text-[#89ceff]">computer</span>`;
  } else if (project.category === 'mobile') {
    catIcon = `<span class="material-symbols-outlined text-[#89ceff]">smartphone</span>`;
  } else {
    catIcon = `<span class="material-symbols-outlined text-[#89ceff]">palette</span>`;
  }

  // Populate Tech Stack SVGs alongside text
  const techTagsHtml = project.techStack.map(tech => `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-on-surface-variant">
      <span class="w-3.5 h-3.5 flex items-center justify-center">${getTechIcon(tech)}</span>
      <span>${tech}</span>
    </span>
  `).join('');

  card.innerHTML = `
    <div>
      <div class="flex justify-between items-center mb-4">
        <span class="text-xs font-bold bg-[#6366f1]/15 text-[#c0c1ff] px-2.5 py-1 rounded-full uppercase tracking-wider">${project.role}</span>
        <span class="flex items-center">${catIcon}</span>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
      <p class="text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">${project.shortDescription}</p>
    </div>
    
    <div>
      <div class="flex flex-wrap gap-2 mb-6">
        ${techTagsHtml}
      </div>
      <div class="flex items-center gap-1.5 text-sm font-bold text-indigo-accent">
        <span>Detail Proyek</span>
        <span class="material-symbols-outlined project-footer-icon transition-transform text-sm">arrow_forward</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    openProjectModal(project);
  });

  return card;
}

// ==========================================================================
// MODAL LOGIC
// ==========================================================================
function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  document.getElementById('modalRole').textContent = project.role;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.fullDescription;
  document.getElementById('modalArchitecture').textContent = project.architecture;

  const tagsWrap = document.getElementById('modalTechTags');
  tagsWrap.innerHTML = '';
  project.techStack.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#8b949e]';
    span.innerHTML = `
      <span class="w-3.5 h-3.5 flex items-center justify-center">${getTechIcon(tech)}</span>
      <span>${tech}</span>
    `;
    tagsWrap.appendChild(span);
  });

  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach(feat => {
    const li = document.createElement('li');
    li.textContent = feat;
    featuresList.appendChild(li);
  });

  // Dynamic GitHub Link binding
  const ghLink = document.getElementById('modalGithubLink');
  const ghIcon = document.getElementById('modalGithubIcon');
  if (ghLink && ghIcon) {
    if (project.githubUrl) {
      ghLink.href = project.githubUrl;
      ghLink.style.display = 'inline-flex';
      ghIcon.innerHTML = getTechIcon('github');
    } else {
      ghLink.style.display = 'none';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// ==========================================================================
// INITIALIZATION & EVENT BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('active')) {
      const isClickInside = mobileDrawer.contains(e.target) || mobileToggle.contains(e.target);
      if (!isClickInside) {
        mobileDrawer.classList.remove('active');
      }
    }
  });

  // Modal Close handles
  const modalCloseBtn = document.getElementById('modalClose');
  const modal = document.getElementById('projectModal');
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Projects filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Search input typing
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  // Intersection Observer for scroll animations (fade-in-up)
  const fadeObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, fadeObserverOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    if(!el.classList.contains('visible')) {
      fadeObserver.observe(el);
    }
  });

  setTimeout(typeAnimation, 1000);
  renderBentoTools();
  renderProjects();
  initLanyard3D(); // Start 3D Physics Lanyard rendering
});

// ==========================================================================
// 3D LANYARD BADGE — Vanilla Three.js port of 3D_CARD-main/components/band/App.js
// Upgraded to match user's reference image with Glassmorphism, PointLight Glow,
// and floating cyber nano-particles.
// ==========================================================================
function initLanyard3D() {
  const container = document.getElementById('lanyardContainer');
  const canvas    = document.getElementById('lanyardCanvas3D');
  if (!container || !canvas) return;

  // ── RENDERER ─────────────────────────────────────────────────────────────
  let W = container.clientWidth;
  let H = container.clientHeight;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();

  // ── CAMERA — fov=25, position=[0,0,13] ────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(25, W / H, 0.1, 100);

  // Root position & offsets for card placement in the right column
  const CARD_WORLD_X = 3.0;  // how far right the card hangs
  const CARD_WORLD_Y = -1.5; // vertical center where card settles

  function setupCamera() {
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    camera.position.set(0, 0, 13);
    camera.lookAt(CARD_WORLD_X, CARD_WORLD_Y, 0);
  }
  setupCamera();

  // ── LIGHTING — matches original lightformers ──────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, Math.PI));
  const lightData = [[0,-1,5,2],[-1,-1,1,3],[1,1,1,3],[-10,0,14,10]];
  lightData.forEach(function(ld) {
    var dl = new THREE.DirectionalLight(0xffffff, ld[3]);
    dl.position.set(ld[0], ld[1], ld[2]);
    scene.add(dl);
  });

  // ── REACTIVE POINT LIGHT (casts dynamic cyan glow behind the card) ───────
  const reactiveLight = new THREE.PointLight(0x00d1ff, 6, 12);
  reactiveLight.position.set(CARD_WORLD_X, CARD_WORLD_Y, -0.5);
  scene.add(reactiveLight);

  // ── CARD TEXTURE (Canvas 2D) ─────────────────────────────────────────────
  // A 1024x1024 texture atlas matching the UV layout of kartu.glb:
  // Left 512x768 = card FRONT
  // Right 512x768 = card BACK
  // Bottom 256px = unused vertical space (spans 0.75 in UV coords)
  const CW = 1024, CH = 1024;
  const bCanvas = document.createElement('canvas');
  bCanvas.width = CW; bCanvas.height = CH;
  const ctx = bCanvas.getContext('2d');
  
  // Create CanvasTexture
  const cardTex = new THREE.CanvasTexture(bCanvas);
  cardTex.anisotropy = 16;
  cardTex.flipY = true; // will toggle to false if GLTF model loads

  const img = new Image();
  img.src = 'profile.jpg';
  img.onload  = drawCard;
  img.onerror = drawCard;

  // Cross-browser rounded rectangle helper
  function rrect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x+r, y);
    c.lineTo(x+w-r, y);
    c.quadraticCurveTo(x+w, y, x+w, y+r);
    c.lineTo(x+w, y+h-r);
    c.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    c.lineTo(x+r, y+h);
    c.quadraticCurveTo(x, y+h, x, y+h-r);
    c.lineTo(x, y+r);
    c.quadraticCurveTo(x, y, x+r, y);
    c.closePath();
  }

  // Draw gold microchip helper (matches reference image)
  function drawChip(c, x, y, w, h) {
    const g = c.createLinearGradient(x, y, x + w, y + h);
    g.addColorStop(0, '#ffe57f');
    g.addColorStop(0.4, '#ffd740');
    g.addColorStop(0.8, '#ffc400');
    g.addColorStop(1, '#ffb300');
    c.fillStyle = g;
    rrect(c, x, y, w, h, 6);
    c.fill();

    // Darker outline
    c.strokeStyle = '#6d4c41';
    c.lineWidth = 1.5;
    rrect(ctx, x, y, w, h, 6);
    c.stroke();

    // Chip metallic design lines
    c.beginPath();
    c.moveTo(x, y + h / 2);
    c.lineTo(x + w, y + h / 2);
    
    c.moveTo(x + w / 3, y);
    c.lineTo(x + w / 3, y + h);
    
    c.moveTo(x + 2 * w / 3, y);
    c.lineTo(x + 2 * w / 3, y + h);
    c.stroke();

    // Center circular design
    c.fillStyle = '#ffd740';
    c.beginPath();
    c.arc(x + w / 2, y + h / 2, 7, 0, Math.PI * 2);
    c.fill();
    c.stroke();
  }

  function drawCard() {
    ctx.clearRect(0, 0, CW, CH);

    // ── DRAW FRONT (Left Half: 0 to 512, height 768) ──
    ctx.save();
    
    // Background - dark blue-black with high premium glass look
    ctx.fillStyle = 'rgba(13, 17, 23, 0.95)';
    ctx.fillRect(0, 0, 512, 768);

    // Rounded border (glowing cyan/white)
    ctx.strokeStyle = 'rgba(0, 209, 255, 0.4)';
    ctx.lineWidth = 6;
    rrect(ctx, 8, 8, 512-16, 768-16, 28);
    ctx.stroke();

    // Top slots (lanyard clips / accessories holes)
    ctx.fillStyle = '#1e2530';
    rrect(ctx, 100, 28, 60, 12, 5); ctx.fill();
    rrect(ctx, 512-160, 28, 60, 12, 5); ctx.fill();
    
    // Center lanyard clip hole
    rrect(ctx, 256-40, 28, 80, 14, 7); ctx.fill();

    // Profile photo (larger, vertically centered, matches image)
    const px = 70, py = 100, pw = 512-140, ph = 380;
    ctx.save();
    rrect(ctx, px, py, pw, ph, 18); ctx.clip();
    if (img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, px, py, pw, ph);
    } else {
      ctx.fillStyle = '#1c2333';
      ctx.fillRect(px, py, pw, ph);
    }
    ctx.restore();

    // Photo border
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 3;
    rrect(ctx, px, py, pw, ph, 18);
    ctx.stroke();

    // Smart chip overlayed at bottom-center of the photo
    const chipW = 60, chipH = 50;
    drawChip(ctx, 256 - chipW / 2, py + ph - chipH - 15, chipW, chipH);

    // Green "ONLINE" pill overlayed on the bottom-right of the photo
    const pillW = 80, pillH = 26;
    const pillX = px + pw - pillW - 15;
    const pillY = py + ph - pillH - 27;
    ctx.fillStyle = 'rgba(52, 211, 153, 0.25)';
    rrect(ctx, pillX, pillY, pillW, pillH, 13);
    ctx.fill();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    rrect(ctx, pillX, pillY, pillW, pillH, 13);
    ctx.stroke();

    // Online green dot
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(pillX + 16, pillY + pillH / 2, 5, 0, Math.PI * 2);
    ctx.fill();

    // Online text
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 11px "Courier New",monospace';
    ctx.textAlign = 'left';
    ctx.fillText('ONLINE', pillX + 28, pillY + pillH / 2 + 4);

    // Developer name
    ctx.fillStyle   = '#ffffff';
    ctx.font        = 'bold 32px Arial,sans-serif';
    ctx.textAlign   = 'center';
    ctx.fillText('GHALI RAHMAT', 256, 530);

    // Role
    ctx.fillStyle = '#a0aec0';
    ctx.font      = 'bold 14px "Courier New",monospace';
    ctx.fillText('ANDROID NATIVE DEV', 256, 565);

    // Institution Text at bottom
    ctx.fillStyle = '#718096';
    ctx.font = 'bold 14px "Courier New",monospace';
    ctx.textAlign = 'left';
    ctx.fillText('D4 MI POLSRI', 45, 660);

    // Small decorative logo/symbol at bottom-right
    const logoX = 512 - 75, logoY = 645, logoS = 25;
    ctx.strokeStyle = '#718096';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(logoX + logoS/2, logoY + logoS/2, logoS/2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(logoX + 5, logoY + logoS/2);
    ctx.lineTo(logoX + logoS - 5, logoY + logoS/2);
    ctx.moveTo(logoX + logoS/2, logoY + 5);
    ctx.lineTo(logoX + logoS/2, logoY + logoS - 5);
    ctx.stroke();

    ctx.restore();

    // ── DRAW BACK (Right Half: 512 to 1024, height 768) ──
    ctx.save();
    ctx.translate(512, 0);

    // Background - dark blue-black
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, 512, 768);

    // Rounded border
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 6;
    rrect(ctx, 8, 8, 512-16, 768-16, 28);
    ctx.stroke();

    // Large logo 'G'
    ctx.fillStyle = '#7000ff';
    ctx.font = 'bold 260px Arial,sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('G', 256, 450);

    // Branding name
    ctx.fillStyle = '#00d1ff';
    ctx.font = 'bold 20px "Courier New",monospace';
    ctx.fillText('GHALI RAHMAT', 256, 550);
    ctx.restore();

    cardTex.needsUpdate = true;
  }
  drawCard();

  // ── SCENE ROOT — matches Next.js <group position={[0, 4, 0]}> ───────────
  const root = new THREE.Group();
  root.position.set(CARD_WORLD_X, 4.5, 0);
  scene.add(root);

  // ── CARD BODY (moves with physics) ─────────────────────────────────────
  const cardBody = new THREE.Group();
  root.add(cardBody);

  // Card Visual: scale & offset matches App.js group [0, -1.2, -0.05]
  const CARD_SCALE = 1.8;
  const cardVisual = new THREE.Group();
  cardVisual.scale.setScalar(CARD_SCALE);
  cardVisual.position.set(0, -1.2, -0.05);
  cardBody.add(cardVisual);

  // Fallback meshes (rendered before GLTF loads)
  const CARD_W3D = 1.6, CARD_H3D = 2.4;
  
  // Helper to map PlaneGeometry UVs to texture atlas coordinates
  function mapPlaneUVs(geo, minU, maxU, minV, maxV) {
    const uvAttr = geo.attributes.uv;
    for (let i = 0; i < uvAttr.count; i++) {
      const u = uvAttr.getX(i); // 0 or 1
      const v = uvAttr.getY(i); // 0 or 1
      uvAttr.setX(i, minU + u * (maxU - minU));
      uvAttr.setY(i, minV + v * (maxV - minV));
    }
    uvAttr.needsUpdate = true;
  }

  // Premium fallback material (high compatibility)
  const glassMatFallback = new THREE.MeshStandardMaterial({
    map: cardTex,
    roughness: 0.25,
    metalness: 0.15,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide
  });

  const frontMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD_W3D, CARD_H3D),
    glassMatFallback
  );
  mapPlaneUVs(frontMesh.geometry, 0.0, 0.5, 0.0, 0.75);
  cardVisual.add(frontMesh);

  const backMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD_W3D, CARD_H3D),
    glassMatFallback
  );
  mapPlaneUVs(backMesh.geometry, 0.5, 1.0, 0.0, 0.75);
  backMesh.rotation.y = Math.PI;
  cardVisual.add(backMesh);

  // Fallback metallic ring
  const ringMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.08, 0.02, 8, 24),
    new THREE.MeshStandardMaterial({ color: 0xd0d0d0, metalness: 0.95, roughness: 0.15 })
  );
  ringMesh.position.set(0, CARD_H3D / 2, 0);
  cardVisual.add(ringMesh);

  // Invisible hit mesh for dragging (CuboidCollider bounds)
  const hitMesh = new THREE.Mesh(
    new THREE.BoxGeometry(CARD_W3D * CARD_SCALE, CARD_H3D * CARD_SCALE, 0.15),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  cardBody.add(hitMesh);

  // Load GLTF Model (geometries extracted, centered, and textures applied)
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load('kartu.glb',
    (gltf) => {
      let cardGeo, clipGeo, clampGeo;
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'card') cardGeo = child.geometry;
          if (child.name === 'clip') clipGeo = child.geometry;
          if (child.name === 'clamp') clampGeo = child.geometry;
        }
      });

      if (cardGeo && clipGeo && clampGeo) {
        // Hide fallback meshes
        frontMesh.visible = false;
        backMesh.visible = false;
        ringMesh.visible = false;

        // Important: set flipY false for GLTF mapping
        cardTex.flipY = false;
        cardTex.needsUpdate = true;

        // Premium standard material (high compatibility fallback for glassmorphism)
        const baseMat = new THREE.MeshStandardMaterial({
          map: cardTex,
          roughness: 0.25,
          metalness: 0.15,
          transparent: true,
          opacity: 0.95,
          side: THREE.DoubleSide
        });

        const metalMat = new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          metalness: 0.95,
          roughness: 0.25
        });

        // Instantiate new meshes with GLTF geometries (which bypasses node offsets)
        const glbCardMesh = new THREE.Mesh(cardGeo, baseMat);
        const glbClipMesh = new THREE.Mesh(clipGeo, metalMat);
        const glbClampMesh = new THREE.Mesh(clampGeo, metalMat);

        cardVisual.add(glbCardMesh);
        cardVisual.add(glbClipMesh);
        cardVisual.add(glbClampMesh);
        
        console.log("GLTF meshes successfully loaded and added");
      }
    },
    undefined,
    (err) => {
      console.warn("GLTF load failed, using fallback card mesh", err);
    }
  );

  // ── STRAP FLAT RIBBON (Custom billboarded geometry, like MeshLine) ────────
  const numPoints = 33;
  const ribbonGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(numPoints * 2 * 3);
  const uvs = new Float32Array(numPoints * 2 * 2);
  const indices = new Uint16Array((numPoints - 1) * 2 * 3);

  // Setup static UVs and Indices once
  for (let i = 0; i < numPoints; i++) {
    const u = i / (numPoints - 1);
    // Texture repeats 25 times along the ribbon for realistic damask weave aspect ratio
    const uText = u * 25.0;
    
    // Left vertex UV
    uvs[i * 4 + 0] = uText;
    uvs[i * 4 + 1] = 0;

    // Right vertex UV
    uvs[i * 4 + 2] = uText;
    uvs[i * 4 + 3] = 1;
  }

  for (let i = 0; i < numPoints - 1; i++) {
    const currLeft = i * 2;
    const currRight = i * 2 + 1;
    const nextLeft = (i + 1) * 2;
    const nextRight = (i + 1) * 2 + 1;

    // Triangle 1
    indices[i * 6 + 0] = currLeft;
    indices[i * 6 + 1] = currRight;
    indices[i * 6 + 2] = nextLeft;

    // Triangle 2
    indices[i * 6 + 3] = currRight;
    indices[i * 6 + 4] = nextRight;
    indices[i * 6 + 5] = nextLeft;
  }

  ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  ribbonGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  ribbonGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

  // Load strap texture
  const texLoader = new THREE.TextureLoader();
  const bandTexture = texLoader.load('bandd.png', (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
  });
  
  const strapMat = new THREE.MeshStandardMaterial({
    map: bandTexture,
    roughness: 0.6,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  const strapMesh = new THREE.Mesh(ribbonGeometry, strapMat);
  strapMesh.frustumCulled = false;
  scene.add(strapMesh);

  // ── CYBER NANO PARTICLES SYSTEM ──────────────────────────────────────────
  const particleCount = 70;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSpeeds = [];

  for (let i = 0; i < particleCount; i++) {
    // Distribute particles in a box around the card area
    const px = CARD_WORLD_X + (Math.random() - 0.5) * 6;
    const py = CARD_WORLD_Y + (Math.random() - 0.5) * 6;
    const pz = (Math.random() - 0.5) * 4;

    particlePositions[i * 3 + 0] = px;
    particlePositions[i * 3 + 1] = py;
    particlePositions[i * 3 + 2] = pz;

    particleSpeeds.push({
      x: (Math.random() - 0.5) * 0.1,
      y: 0.15 + Math.random() * 0.25, // float upwards
      z: (Math.random() - 0.5) * 0.1,
      baseX: px,
      amplitude: 0.2 + Math.random() * 0.35,
      freq: 1 + Math.random() * 2,
      phase: Math.random() * Math.PI
    });
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  // Circular glowing dot canvas texture for the particles
  const pCanvas = document.createElement('canvas');
  pCanvas.width = 16; pCanvas.height = 16;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
  pGrad.addColorStop(0, 'rgba(0, 209, 255, 1)');
  pGrad.addColorStop(0.3, 'rgba(0, 209, 255, 0.4)');
  pGrad.addColorStop(1, 'rgba(0, 209, 255, 0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 16, 16);
  const particleTex = new THREE.CanvasTexture(pCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    map: particleTex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ── VERLET PHYSICS — 5 nodes: fixed → j1 → j2 → j3/clip → card ───────────
  // rest length REST = 1.6 makes the strap visibly longer and realistic
  const FIXED = new THREE.Vector3(0, 0, 0);
  const GRAV  = -45;
  const DAMP  = 0.88;
  const REST  = 1.6; // longer rope segment
  const MAX_SPEED = 50, MIN_SPEED = 10;

  const nodes = [
    { pos: new THREE.Vector3(0,   0, 0), prev: new THREE.Vector3(0,   0, 0), pinned: true  },
    { pos: new THREE.Vector3(0.4, 0, 0), prev: new THREE.Vector3(0.4, 0, 0), pinned: false },
    { pos: new THREE.Vector3(0.8, 0, 0), prev: new THREE.Vector3(0.8, 0, 0), pinned: false },
    { pos: new THREE.Vector3(1.2, 0, 0), prev: new THREE.Vector3(1.2, 0, 0), pinned: false },
    { pos: new THREE.Vector3(1.6, 0, 0), prev: new THREE.Vector3(1.6, 0, 0), pinned: false },
  ];

  const lerped = [
    null,
    new THREE.Vector3(0.4, 0, 0),
    new THREE.Vector3(0.8, 0, 0),
    null, null
  ];

  // ── DRAG INTERACTION ────────────────────────────────────────────────────
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  const dragPlane  = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  let isDragging   = false;
  let dragOffset   = new THREE.Vector3();
  let dragWorldPos = new THREE.Vector3();

  function ptrNDC(e) {
    const r = canvas.getBoundingClientRect();
    ptr.x =  (e.clientX - r.left) / r.width  * 2 - 1;
    ptr.y = -(e.clientY - r.top)  / r.height * 2 + 1;
  }

  function tryStartDrag(e) {
    ptrNDC(e);
    ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObject(hitMesh, false);
    if (hits.length > 0) {
      isDragging = true;
      canvas.style.cursor = 'grabbing';
      const wPos = new THREE.Vector3();
      cardBody.getWorldPosition(wPos);
      dragOffset.copy(hits[0].point).sub(wPos);
    }
  }

  window.addEventListener('mousedown',  e => tryStartDrag(e));
  window.addEventListener('touchstart', e => tryStartDrag(e.touches[0]), { passive: true });

  window.addEventListener('mousemove', e => {
    ptrNDC(e);
    if (isDragging) {
      ray.setFromCamera(ptr, camera);
      const hit = new THREE.Vector3();
      ray.ray.intersectPlane(dragPlane, hit);
      dragWorldPos.copy(hit).sub(dragOffset);
    } else {
      ray.setFromCamera(ptr, camera);
      const h = ray.intersectObject(hitMesh, false);
      const over = h.length > 0;
      canvas.style.cursor       = over ? 'grab' : 'default';
      canvas.style.pointerEvents = over ? 'auto' : 'none';
    }
  });

  window.addEventListener('touchmove', e => {
    ptrNDC(e.touches[0]);
    if (isDragging) {
      ray.setFromCamera(ptr, camera);
      const hit = new THREE.Vector3();
      ray.ray.intersectPlane(dragPlane, hit);
      dragWorldPos.copy(hit).sub(dragOffset);
    }
  }, { passive: true });

  window.addEventListener('mouseup',  () => { isDragging = false; canvas.style.cursor = 'default'; });
  window.addEventListener('touchend', () => { isDragging = false; });

  window.addEventListener('resize', () => {
    W = container.clientWidth; H = container.clientHeight;
    renderer.setSize(W, H); setupCamera();
  });

  // ── RENDER LOOP ──────────────────────────────────────────────────────────
  const clock = new THREE.Clock();
  let cardAngVelY = 0, cardRotY = 0;

  // Ribbon geometry generator that creates a flat billboarded ribbon
  function updateRibbonGeometry(geometry, points, width) {
    const posAttr = geometry.getAttribute('position');
    const posArray = posAttr.array;
    const tangent = new THREE.Vector3();
    const toCam = new THREE.Vector3();
    const side = new THREE.Vector3();

    for (let i = 0; i < points.length; i++) {
      const p = points[i];

      if (i === 0) {
        tangent.copy(points[1]).sub(points[0]).normalize();
      } else if (i === points.length - 1) {
        tangent.copy(points[points.length - 1]).sub(points[points.length - 2]).normalize();
      } else {
        tangent.copy(points[i + 1]).sub(points[i - 1]).normalize();
      }

      toCam.copy(camera.position).sub(p).normalize();
      side.crossVectors(tangent, toCam).normalize();

      const halfWidth = width / 2;
      
      // Left edge vertex
      posArray[i * 6 + 0] = p.x - side.x * halfWidth;
      posArray[i * 6 + 1] = p.y - side.y * halfWidth;
      posArray[i * 6 + 2] = p.z - side.z * halfWidth;

      // Right edge vertex
      posArray[i * 6 + 3] = p.x + side.x * halfWidth;
      posArray[i * 6 + 4] = p.y + side.y * halfWidth;
      posArray[i * 6 + 5] = p.z + side.z * halfWidth;
    }

    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 1/30);

    // Kinematic drag: move card node directly
    if (isDragging) {
      const localDrag = root.worldToLocal(dragWorldPos.clone());
      nodes[4].pos.copy(localDrag);
      nodes[4].prev.copy(localDrag);
    }

    // Verlet integration
    for (let i = 1; i < nodes.length; i++) {
      if (nodes[i].pinned || (isDragging && i === 4)) continue;
      const n   = nodes[i];
      const vel = n.pos.clone().sub(n.prev).multiplyScalar(DAMP);
      vel.y += GRAV * dt * dt;
      n.prev.copy(n.pos);
      n.pos.add(vel);
    }

    // Constraint relaxation
    for (let iter = 0; iter < 40; iter++) {
      nodes[0].pos.copy(FIXED);
      for (let i = 0; i < nodes.length - 1; i++) {
        if (isDragging && i + 1 === 4) continue;
        const a = nodes[i], b = nodes[i+1];
        const d   = b.pos.clone().sub(a.pos);
        const len = d.length();
        if (len < 1e-4) continue;
        // Last segment (from clip to card center) rest length = 1.45
        const restLen = (i === 3) ? 1.45 : REST;
        const corr = d.multiplyScalar((len - restLen) / len * 0.5);
        if (!a.pinned) a.pos.add(corr);
        b.pos.sub(corr);
      }
    }

    // Lerp j1 & j2 (smooth lag effect)
    for (let i = 1; i <= 2; i++) {
      const cd = Math.max(0.1, Math.min(1, lerped[i].distanceTo(nodes[i].pos)));
      lerped[i].lerp(nodes[i].pos, dt * (MIN_SPEED + cd * (MAX_SPEED - MIN_SPEED)));
    }

    // Position card body
    cardBody.position.copy(nodes[4].pos);

    // ── ROTATION MATH: Hanging card alignment ──
    // Local Y axis: points from card center (nodes[4]) to clip node (nodes[3])
    const upDir = new THREE.Vector3().subVectors(nodes[3].pos, nodes[4].pos).normalize();

    // Local X axis: orthogonal to upDir and Z-facing reference
    const lookDir = new THREE.Vector3(0, 0, 1);
    const rightDir = new THREE.Vector3().crossVectors(upDir, lookDir);
    if (rightDir.lengthSq() < 0.0001) rightDir.set(1, 0, 0);
    rightDir.normalize();

    // Local Z axis: orthogonal to X and Y (faces camera)
    const fwdDir = new THREE.Vector3().crossVectors(rightDir, upDir).normalize();

    // Base rotation matrix
    const rotMat = new THREE.Matrix4().makeBasis(rightDir, upDir, fwdDir);
    cardBody.quaternion.setFromRotationMatrix(rotMat);

    // ── Y-SPIN PHYSICS (Swing & Drag Torque) ──
    const velX = dt > 0.0001 ? (nodes[4].pos.x - nodes[4].prev.x) / dt : 0;
    const torque = velX * 0.6 - cardRotY * 2.0; // torque pulls rotation back to 0
    cardAngVelY += torque * dt;
    cardAngVelY *= 0.98; // damping
    cardRotY += cardAngVelY * dt;

    // Apply spin quaternion
    const spinQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), cardRotY);
    cardBody.quaternion.multiply(spinQuat);

    // ── UPDATE STRAP ──
    cardBody.updateMatrixWorld(true);
    const attachWorld = new THREE.Vector3(0, 1.45, 0).applyMatrix4(cardBody.matrixWorld);
    const rootWorld = new THREE.Vector3();
    root.getWorldPosition(rootWorld);

    const j2w = root.localToWorld(lerped[2].clone());
    const j1w = root.localToWorld(lerped[1].clone());

    const strapCurve = new THREE.CatmullRomCurve3([attachWorld, j2w, j1w, rootWorld]);
    strapCurve.curveType = 'chordal';
    const pts = strapCurve.getPoints(numPoints - 1);

    // Update flat ribbon
    updateRibbonGeometry(ribbonGeometry, pts, 0.08);

    // ── UPDATE REACTIVE LIGHT ──
    const cardWorldPos = new THREE.Vector3();
    cardBody.getWorldPosition(cardWorldPos);
    reactiveLight.position.copy(cardWorldPos);
    reactiveLight.position.z -= 0.5; // keep behind

    // Pulsing reactive intensity
    const speed = Math.abs(velX);
    const intensity = 4.5 + Math.min(speed * 0.4, 8.0) + Math.sin(clock.getElapsedTime() * 4) * 0.5;
    reactiveLight.intensity = intensity;

    // ── UPDATE PARTICLES ──
    const pPosAttr = particleGeo.getAttribute('position');
    const pArray = pPosAttr.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      let cy = pArray[i * 3 + 1];
      cy += particleSpeeds[i].y * dt;

      // Wrap around Y boundaries
      if (cy > 2.0) {
        cy = -5.0;
      }

      const baseIdx = i * 3;
      const speedData = particleSpeeds[i];
      // Drift horizontally with sine waves
      pArray[baseIdx + 0] = speedData.baseX + Math.sin(time * speedData.freq + speedData.phase) * speedData.amplitude;
      pArray[baseIdx + 1] = cy;
      
      // Drift in depth (Z)
      pArray[baseIdx + 2] += speedData.z * dt;
      if (Math.abs(pArray[baseIdx + 2]) > 2) {
        speedData.z *= -1; // bounce
      }
    }
    pPosAttr.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
}
