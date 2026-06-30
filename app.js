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
// Simple PlaneGeometry card (no GLB UV issues) + TubeGeometry strap
// Camera: fov=25, pos=[0,0,13] | Gravity=-40 | Scale=2.25 | Joint y=1.45
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

  // ── CAMERA ── fov=25, pos=[0,0,13] from App.js ───────────────────────────
  const camera = new THREE.PerspectiveCamera(25, W / H, 0.1, 100);

  function setupCamera() {
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    // Shift left so card appears in RIGHT column of our 2-col hero layout
    // At fov=25 and z=13, the scene width ≈ 2*13*tan(12.5°) ≈ 5.76 units
    // We want card centred at ~x=+2 in scene space, so camera moves left
    camera.position.set(-camera.aspect * 2.5, 0, 13);
    camera.lookAt(camera.aspect * 1.2, -1.5, 0);
  }
  setupCamera();

  // ── LIGHTING ─────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, Math.PI));
  [[0,-1,5,2],[−1,−1,1,3],[1,1,1,3],[−10,0,14,10]].forEach(([x,y,z,i])=>{
    const l = new THREE.DirectionalLight(0xffffff, i);
    l.position.set(x, y, z);
    scene.add(l);
  });

  // ── CARD TEXTURE ─────────────────────────────────────────────────────────
  const CW = 512, CH = 800;
  const bCanvas = document.createElement('canvas');
  bCanvas.width = CW; bCanvas.height = CH;
  const ctx = bCanvas.getContext('2d');
  // IMPORTANT: flipY false so canvas draws appear correct on PlaneGeometry
  const cardTex = new THREE.CanvasTexture(bCanvas);
  cardTex.flipY = true; // default — PlaneGeometry UVs go bottom-up

  const img = new Image();
  img.src = 'profile.jpg';
  img.onload  = drawCard;
  img.onerror = drawCard;

  function drawCard() {
    // Background
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, CW, CH);

    // Rounded border
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.roundRect(8,8,CW-16,CH-16,30); ctx.stroke();

    // Top gradient bar
    const g = ctx.createLinearGradient(0,0,CW,0);
    g.addColorStop(0,'#7000FF'); g.addColorStop(1,'#00D1FF');
    ctx.fillStyle = g; ctx.fillRect(8,8,CW-16,16);

    // Lanyard hole
    ctx.fillStyle = '#1a1e2b';
    ctx.beginPath(); ctx.roundRect(CW/2-40,30,80,14,7); ctx.fill();

    // Institution
    ctx.fillStyle = '#6e7f8c';
    ctx.font = 'bold 14px "Courier New",monospace';
    ctx.textAlign = 'left';
    ctx.fillText('POLSRI  //  DEPT. MI', 32, 72);

    // Green dot + status
    ctx.fillStyle = '#34d399';
    ctx.beginPath(); ctx.arc(CW-45,67,6,0,Math.PI*2); ctx.fill();
    ctx.font = 'bold 12px "Courier New",monospace';
    ctx.fillText('ONLINE', CW-100, 72);

    // Profile photo
    const px=80, py=108, pw=CW-160, ph=270;
    ctx.save();
    ctx.beginPath(); ctx.roundRect(px,py,pw,ph,16); ctx.clip();
    if (img.complete && img.naturalWidth > 0) ctx.drawImage(img,px,py,pw,ph);
    else { ctx.fillStyle='#1c2333'; ctx.fillRect(px,py,pw,ph); }
    ctx.restore();

    // Name (glow)
    ctx.shadowColor = '#00d1ff';
    ctx.shadowBlur  = 12;
    ctx.fillStyle   = '#a8f0ff';
    ctx.font        = 'bold 36px Arial,sans-serif';
    ctx.textAlign   = 'center';
    ctx.fillText('GHALI RAHMAT', CW/2, 430);
    ctx.shadowBlur  = 0;

    // Role
    ctx.fillStyle = '#8aaab5';
    ctx.font      = 'bold 16px "Courier New",monospace';
    ctx.fillText('>_ ANDROID NATIVE DEV', CW/2, 470);

    // Divider
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(32,498); ctx.lineTo(CW-32,498); ctx.stroke();

    // Barcode
    const bars=[10,4,14,6,22,4,8,30,6,10,4,18,5,12]; let bx=32;
    bars.forEach((bw,i)=>{
      if(i%2===0){ ctx.fillStyle='rgba(255,255,255,0.3)'; ctx.fillRect(bx,520,bw,48); }
      bx+=bw+3;
    });

    // ID
    ctx.fillStyle = '#4a5a66';
    ctx.font = 'bold 12px "Courier New",monospace';
    ctx.textAlign = 'right';
    ctx.fillText('DEV-ID: GR-2024-0892', CW-32, 620);

    cardTex.needsUpdate = true;
  }
  drawCard();

  // ── SCENE ROOT — matches <group position={[0,4,0]}> ────────────────────
  const root = new THREE.Group();
  root.position.set(0, 4, 0);
  scene.add(root);

  // ── CARD BODY (moves with physics) ────────────────────────────────────
  const cardBody = new THREE.Group();
  root.add(cardBody);

  // Card visual: scale=2.25, offset=[0,-1.2,-0.05] from App.js
  const CARD_SCALE = 2.25;
  const cardVisual = new THREE.Group();
  cardVisual.scale.setScalar(CARD_SCALE);
  cardVisual.position.set(0, -1.2, -0.05);
  cardBody.add(cardVisual);

  // Front plane — simple PlaneGeometry, NO GLB (avoids all UV flip issues)
  // PlaneGeometry faces +Z by default, billboard will make +Z face camera → correct!
  const CARD_W3D = 1.6, CARD_H3D = 2.4; // proportional to 512×800
  const frontMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD_W3D, CARD_H3D),
    new THREE.MeshBasicMaterial({ map: cardTex })
  );
  cardVisual.add(frontMesh);

  // Back face
  const backC = document.createElement('canvas');
  backC.width=512; backC.height=800;
  const bCtx=backC.getContext('2d');
  bCtx.fillStyle='#0d1117'; bCtx.fillRect(0,0,512,800);
  bCtx.strokeStyle='rgba(255,255,255,0.1)'; bCtx.lineWidth=6;
  bCtx.beginPath(); bCtx.roundRect(8,8,496,784,30); bCtx.stroke();
  bCtx.fillStyle='#7000ff'; bCtx.font='bold 260px Arial,sans-serif';
  bCtx.textAlign='center'; bCtx.fillText('G',256,540);
  bCtx.fillStyle='#00d1ff'; bCtx.font='bold 20px "Courier New",monospace';
  bCtx.fillText('GHALI RAHMAT',256,640);
  const backMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD_W3D, CARD_H3D),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(backC) })
  );
  backMesh.rotation.y = Math.PI;
  cardVisual.add(backMesh);

  // Metallic ring/clip at top of card (y = half card height = CARD_H3D/2)
  const ringMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.08, 0.02, 8, 24),
    new THREE.MeshStandardMaterial({ color:0xd0d0d0, metalness:0.95, roughness:0.15 })
  );
  ringMesh.position.set(0, CARD_H3D/2, 0);
  cardVisual.add(ringMesh);

  // Invisible hit box for raycasting (matches CuboidCollider [0.8,1.125,0.01] × 2.25)
  const hitMesh = new THREE.Mesh(
    new THREE.BoxGeometry(CARD_W3D * CARD_SCALE, CARD_H3D * CARD_SCALE, 0.1),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  cardBody.add(hitMesh);

  // ── STRAP (TubeGeometry — reliable, no CDN dependency) ─────────────────
  const texLoader = new THREE.TextureLoader();
  const bandTex = texLoader.load('bandd.png', (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(8, 1);
  });
  const strapMat = new THREE.MeshStandardMaterial({
    map: bandTex, roughness: 0.5, metalness: 0.05
  });
  let strapMesh = new THREE.Mesh(new THREE.BufferGeometry(), strapMat);
  strapMesh.frustumCulled = false;
  scene.add(strapMesh);

  // ── VERLET PHYSICS — 4 segments: fixed→j1→j2→j3→card ─────────────────
  // Initial positions in root-local space (matches App.js <group position>)
  // fixed=(0,0,0), j1=(0.5,0,0), j2=(1,0,0), j3=(1.5,0,0), card=(2,0,0)
  const FIXED = new THREE.Vector3(0, 0, 0);
  const GRAV  = -40;   // exact from App.js gravity={[0,-40,0]}
  const DAMP  = 0.88;
  const REST  = 1.0;   // rope joint length = 1
  const MAX_SPEED = 50, MIN_SPEED = 10;

  const nodes = [
    { pos: new THREE.Vector3(0,   0, 0), prev: new THREE.Vector3(0,   0, 0), pinned: true  },
    { pos: new THREE.Vector3(0.5, 0, 0), prev: new THREE.Vector3(0.5, 0, 0), pinned: false },
    { pos: new THREE.Vector3(1,   0, 0), prev: new THREE.Vector3(1,   0, 0), pinned: false },
    { pos: new THREE.Vector3(1.5, 0, 0), prev: new THREE.Vector3(1.5, 0, 0), pinned: false },
    { pos: new THREE.Vector3(2,   0, 0), prev: new THREE.Vector3(2,   0, 0), pinned: false },
  ];
  const lerped = [
    null,
    new THREE.Vector3(0.5, 0, 0),
    new THREE.Vector3(1,   0, 0),
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

    // Constraint relaxation (40 iterations for stiffness)
    for (let iter = 0; iter < 40; iter++) {
      nodes[0].pos.copy(FIXED);
      for (let i = 0; i < nodes.length - 1; i++) {
        if (isDragging && i + 1 === 4) continue;
        const a = nodes[i], b = nodes[i+1];
        const d   = b.pos.clone().sub(a.pos);
        const len = d.length();
        if (len < 1e-4) continue;
        const corr = d.multiplyScalar((len - REST) / len * 0.5);
        if (!a.pinned) a.pos.add(corr);
        b.pos.sub(corr);
      }
    }

    // Lerp j1 & j2 (matches original clamped-distance lerp)
    for (let i = 1; i <= 2; i++) {
      const cd = Math.max(0.1, Math.min(1, lerped[i].distanceTo(nodes[i].pos)));
      lerped[i].lerp(nodes[i].pos, dt * (MIN_SPEED + cd * (MAX_SPEED - MIN_SPEED)));
    }

    // Position card body
    cardBody.position.copy(nodes[4].pos);

    // ── BILLBOARD: copy camera quaternion → card always faces viewer correctly ──
    cardBody.quaternion.copy(camera.quaternion);

    // Gentle angular damping on Y (matches ang.y - rot.y * 0.25)
    if (!isDragging) {
      cardAngVelY -= cardRotY * 0.25 * dt;
      cardAngVelY *= 0.97;
      cardRotY    += cardAngVelY;
      cardBody.quaternion.multiply(
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, cardRotY, 0))
      );
    } else {
      cardAngVelY = 0; cardRotY = 0;
    }

    // ── STRAP CURVE ──────────────────────────────────────────────────────
    // Band attachment on card = local [0, CARD_H3D/2, 0] in cardVisual space
    // = [0, 1.2 (half card), 0] in cardBody space (after scale 2.25 and offset)
    // Spherical joint was [[0,0,0],[0,1.45,0]] in App.js (in rigid body local)
    cardBody.updateMatrixWorld(true);
    const attachLocal = new THREE.Vector3(0, 1.45, 0); // exact from App.js joint
    const attachWorld = root.worldToLocal(attachLocal.clone().applyMatrix4(cardBody.matrixWorld));

    // Curve: j3-attachment → j2(lerped) → j1(lerped) → fixed
    // This matches App.js: curve.points[0]=j3, [1]=j2.lerped, [2]=j1.lerped, [3]=fixed
    const p0 = attachWorld;              // at card attachment (joint point)
    const p1 = lerped[2].clone();        // j2 lerped
    const p2 = lerped[1].clone();        // j1 lerped
    const p3 = FIXED.clone();            // fixed anchor

    // Convert to world space for the tube mesh
    const toW = (v) => root.localToWorld(v.clone());
    const strapCurve = new THREE.CatmullRomCurve3([toW(p0), toW(p1), toW(p2), toW(p3)]);
    strapCurve.curveType = 'chordal'; // matches App.js: curve.curveType = 'chordal'

    const newGeo = new THREE.TubeGeometry(strapCurve, 32, 0.055, 8, false);
    if (strapMesh.geometry) strapMesh.geometry.dispose();
    strapMesh.geometry = newGeo;

    renderer.render(scene, camera);
  }

  animate();
}
