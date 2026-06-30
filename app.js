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
// INTERACTIVE 3D PHYSICS LANYARD BADGE (WEBGL / THREE.JS)
// Complete rewrite - clean, correct, no accumulated bugs
// ==========================================================================
function initLanyard3D() {
  const container = document.getElementById('lanyardContainer');
  const canvas = document.getElementById('lanyardCanvas3D');
  if (!container || !canvas) return;

  // ── 1. RENDERER & SCENE ────────────────────────────────────────────────
  let W = container.clientWidth;
  let H = container.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();

  // ── 2. CAMERA ──────────────────────────────────────────────────────────
  // Camera positioned so card hangs on right ~40% of screen
  const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);

  function positionCamera() {
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    // Shift camera LEFT so the right column of the screen shows the card
    // Negative X = camera moves left = card appears on the right side
    camera.position.set(-camera.aspect * 1.4, 0.5, 6.5);
    camera.lookAt(camera.aspect * 0.3, -0.5, 0);
  }
  positionCamera();

  // ── 3. LIGHTING ────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(2, 4, 3);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x8888ff, 0.4);
  fillLight.position.set(-3, -1, 2);
  scene.add(fillLight);

  // ── 4. CARD TEXTURE (Canvas 2D) ────────────────────────────────────────
  const CARD_W = 512, CARD_H = 768;
  const badgeCanvas = document.createElement('canvas');
  badgeCanvas.width = CARD_W;
  badgeCanvas.height = CARD_H;
  const ctx = badgeCanvas.getContext('2d');

  const cardTexture = new THREE.CanvasTexture(badgeCanvas);

  const profileImg = new Image();
  profileImg.src = 'profile.jpg';
  profileImg.onload = () => drawCard();
  profileImg.onerror = () => drawCard(); // draw even if image fails

  function drawCard() {
    // Background
    ctx.fillStyle = '#10131b';
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // Border
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(10, 10, CARD_W - 20, CARD_H - 20, 36);
    ctx.stroke();

    // Top gradient accent bar
    const grad = ctx.createLinearGradient(0, 0, CARD_W, 0);
    grad.addColorStop(0, '#7000FF');
    grad.addColorStop(1, '#00D1FF');
    ctx.fillStyle = grad;
    ctx.fillRect(10, 10, CARD_W - 20, 18);

    // Header text
    ctx.fillStyle = '#8a9bac';
    ctx.font = 'bold 15px "Courier New", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('POLSRI // DEPT. MI', 38, 76);

    // Online dot
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(CARD_W - 50, 71, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.fillText('ONLINE', CARD_W - 106, 76);

    // Slot hole
    ctx.fillStyle = '#1a1e28';
    ctx.beginPath();
    ctx.roundRect(CARD_W / 2 - 46, 38, 92, 16, 8);
    ctx.fill();

    // Profile photo
    const px = 96, py = 120, pw = CARD_W - 192, ph = 290;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, 18);
    ctx.clip();
    if (profileImg.complete && profileImg.naturalWidth > 0) {
      ctx.drawImage(profileImg, px, py, pw, ph);
    } else {
      ctx.fillStyle = '#1e2433';
      ctx.fillRect(px, py, pw, ph);
    }
    ctx.restore();
    // Photo border
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, 18);
    ctx.stroke();

    // Name
    ctx.fillStyle = '#a4e6ff';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GHALI RAHMAT', CARD_W / 2, 462);

    // Role
    ctx.fillStyle = '#bbc9cf';
    ctx.font = 'bold 17px "Courier New", monospace';
    ctx.fillText('>_ ANDROID NATIVE DEV', CARD_W / 2, 502);

    // Barcode lines
    const bx = 45, by = 588, bh = 52;
    const bars = [10, 4, 14, 6, 22, 4, 8, 30, 6, 10, 4, 18];
    let cx2 = bx;
    bars.forEach((bw, i) => {
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.35)' : 'transparent';
      if (i % 2 === 0) ctx.fillRect(cx2, by, bw, bh);
      cx2 += bw + 3;
    });

    // Dev ID
    ctx.fillStyle = '#7a8a96';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.textAlign = 'right';
    ctx.fillText('DEV-ID: 0x8F92', CARD_W - 38, 660);

    cardTexture.needsUpdate = true;
  }

  // draw empty card immediately
  drawCard();

  // ── 5. 3D CARD MESH ────────────────────────────────────────────────────
  const cardGroup = new THREE.Group();
  scene.add(cardGroup);

  // Front face — card texture
  const cardGeo = new THREE.PlaneGeometry(1.75, 2.6);
  const frontMat = new THREE.MeshBasicMaterial({ map: cardTexture, side: THREE.FrontSide });
  const frontMesh = new THREE.Mesh(cardGeo, frontMat);
  cardGroup.add(frontMesh);

  // Back face — dark with logo G
  const backCanvas = document.createElement('canvas');
  backCanvas.width = CARD_W; backCanvas.height = CARD_H;
  const bCtx = backCanvas.getContext('2d');
  bCtx.fillStyle = '#10131b';
  bCtx.fillRect(0, 0, CARD_W, CARD_H);
  bCtx.strokeStyle = 'rgba(255,255,255,0.1)';
  bCtx.lineWidth = 6;
  bCtx.beginPath();
  bCtx.roundRect(10, 10, CARD_W - 20, CARD_H - 20, 36);
  bCtx.stroke();
  bCtx.fillStyle = '#7000ff';
  bCtx.font = 'bold 280px Arial, sans-serif';
  bCtx.textAlign = 'center';
  bCtx.fillText('G', CARD_W / 2, 520);
  bCtx.fillStyle = '#00d1ff';
  bCtx.font = 'bold 22px "Courier New", monospace';
  bCtx.fillText('GHALI RAHMAT', CARD_W / 2, 620);
  const backTex = new THREE.CanvasTexture(backCanvas);
  const backMesh = new THREE.Mesh(cardGeo, new THREE.MeshBasicMaterial({ map: backTex, side: THREE.FrontSide }));
  backMesh.rotation.y = Math.PI;
  cardGroup.add(backMesh);

  // Invisible bounding box for hit-testing / drag
  const hitGeo = new THREE.BoxGeometry(1.75, 2.6, 0.05);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  cardGroup.add(hitMesh);

  // Metallic clip ring at top of card
  const ringGeo = new THREE.TorusGeometry(0.1, 0.025, 8, 24);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.95, roughness: 0.15 });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.set(0, 1.35, 0); // top edge of 2.6-tall card = 1.3
  cardGroup.add(ringMesh);

  // GLB model (optional enhancement — loads on top if available)
  if (typeof THREE.GLTFLoader !== 'undefined') {
    const loader = new THREE.GLTFLoader();
    loader.load('kartu.glb', (gltf) => {
      // Hide our flat meshes and use the GLB instead
      frontMesh.visible = false;
      backMesh.visible = false;
      ringMesh.visible = false;

      gltf.scene.scale.set(2.25, 2.25, 2.25);
      gltf.scene.position.set(0, -1.2, -0.05);
      gltf.scene.rotation.y = 0; // ensure not rotated

      const cardNode = gltf.scene.getObjectByName('card');
      if (cardNode && cardNode.material) {
        cardNode.material.map = cardTexture;
        cardNode.material.roughness = 0.3;
        cardNode.material.metalness = 0.1;
        cardNode.material.needsUpdate = true;
      }
      cardGroup.add(gltf.scene);
    }, undefined, () => {
      // GLB load failed — keep flat meshes visible
    });
  }

  // ── 6. STRAP MESH ──────────────────────────────────────────────────────
  const textureLoader = new THREE.TextureLoader();
  const strapTex = textureLoader.load('bandd.png', (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(12, 1);
  });
  const strapMat = new THREE.MeshStandardMaterial({ map: strapTex, roughness: 0.7, metalness: 0.05 });
  let strapMesh = new THREE.Mesh(new THREE.BufferGeometry(), strapMat);
  scene.add(strapMesh);

  // ── 7. VERLET ROPE PHYSICS ─────────────────────────────────────────────
  // Anchor point at top of scene (where strap meets neck)
  const ANCHOR = new THREE.Vector3(0, 3.2, 0);
  const SEG = 5;           // number of rope segments
  const SEG_LEN = 0.52;    // rest length per segment

  // Initialize chain nodes hanging straight down
  const nodes = Array.from({ length: SEG + 1 }, (_, i) => ({
    pos: new THREE.Vector3(ANCHOR.x, ANCHOR.y - i * SEG_LEN, ANCHOR.z),
    prev: new THREE.Vector3(ANCHOR.x, ANCHOR.y - i * SEG_LEN, ANCHOR.z),
    pinned: i === 0
  }));

  // ── 8. DRAG INTERACTION ────────────────────────────────────────────────
  const raycaster = new THREE.Raycaster();
  const mouse2d = new THREE.Vector2();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  let isDragging = false;
  let dragTarget = new THREE.Vector3(); // where we want the card to go

  function getMouseNDC(e) {
    const rect = canvas.getBoundingClientRect();
    mouse2d.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse2d.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onPointerDown(e) {
    const pt = e.touches ? e.touches[0] : e;
    getMouseNDC(pt);
    raycaster.setFromCamera(mouse2d, camera);
    if (raycaster.intersectObject(hitMesh, false).length > 0) {
      isDragging = true;
      canvas.style.cursor = 'grabbing';
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(dragPlane, hit);
      dragTarget.copy(hit);
    }
  }

  function onPointerMove(e) {
    const pt = e.touches ? e.touches[0] : e;
    // NDC for hover test uses full window coords
    mouse2d.x = (pt.clientX / window.innerWidth) * 2 - 1;
    mouse2d.y = -(pt.clientY / window.innerHeight) * 2 + 1;

    if (!isDragging) {
      raycaster.setFromCamera(mouse2d, camera);
      const hits = raycaster.intersectObject(hitMesh, false);
      canvas.style.cursor = hits.length > 0 ? 'grab' : 'default';
      canvas.style.pointerEvents = hits.length > 0 ? 'auto' : 'none';
    } else {
      getMouseNDC(pt);
      raycaster.setFromCamera(mouse2d, camera);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(dragPlane, hit);
      dragTarget.copy(hit);
    }
  }

  function onPointerUp() {
    isDragging = false;
    canvas.style.cursor = 'grab';
  }

  window.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchstart', e => onPointerDown(e), { passive: true });
  window.addEventListener('touchmove', e => onPointerMove(e), { passive: true });
  window.addEventListener('touchend', onPointerUp);

  window.addEventListener('resize', () => {
    W = container.clientWidth;
    H = container.clientHeight;
    renderer.setSize(W, H);
    positionCamera();
  });

  // ── 9. RENDER LOOP ─────────────────────────────────────────────────────
  const clock = new THREE.Clock();
  // Small Euler angles for wobble (non-accumulating)
  let wobbleX = 0, wobbleZ = 0;

  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.033);
    const t = clock.getElapsedTime();

    // -- Verlet integration --
    const GRAVITY = new THREE.Vector3(0, -28, 0);
    const DAMPING = 0.90;

    for (let i = 1; i < nodes.length; i++) {
      const n = nodes[i];
      const vel = n.pos.clone().sub(n.prev).multiplyScalar(DAMPING);
      const isCard = (i === nodes.length - 1);

      // If dragging, steer card node toward dragTarget
      if (isDragging && isCard) {
        const toTarget = dragTarget.clone().sub(n.pos).multiplyScalar(18 * dt);
        vel.add(toTarget);
      } else {
        vel.add(GRAVITY.clone().multiplyScalar(dt * dt));
      }
      n.prev.copy(n.pos);
      n.pos.add(vel);
    }

    // -- Constraint relaxation --
    for (let iter = 0; iter < 10; iter++) {
      nodes[0].pos.copy(ANCHOR); // anchor always fixed

      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i], b = nodes[i + 1];
        const delta = b.pos.clone().sub(a.pos);
        const dist = delta.length();
        if (dist < 0.0001) continue;
        const correction = delta.multiplyScalar((dist - SEG_LEN) / dist * 0.5);
        if (!a.pinned) a.pos.add(correction);
        if (!(isDragging && i + 1 === nodes.length - 1)) b.pos.sub(correction);
      }
    }

    // -- Position card mesh at last node --
    const cardPos = nodes[nodes.length - 1].pos;
    cardGroup.position.copy(cardPos);

    // -- Card orientation: BILLBOARD (always faces camera, guaranteed upright) --
    // Step 1: copy camera's world quaternion so card perfectly faces camera
    cardGroup.quaternion.copy(camera.quaternion);

    // Step 2: small velocity-based wobble on top (non-accumulating)
    if (!isDragging) {
      const cardVel = cardPos.clone().sub(nodes[nodes.length - 1].prev);
      const targetWobbleX = cardVel.z * -0.3;
      const targetWobbleZ = cardVel.x * -0.3;
      wobbleX += (targetWobbleX - wobbleX) * 0.10;
      wobbleZ += (targetWobbleZ - wobbleZ) * 0.10;

      const wobbleQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(wobbleX, Math.sin(t * 0.8) * 0.03, wobbleZ)
      );
      cardGroup.quaternion.multiply(wobbleQuat);
    }

    // -- Responsive card scale --
    const scl = W < 768 ? 0.60 : W < 1024 ? 0.75 : W < 1440 ? 0.88 : 1.0;
    cardGroup.scale.setScalar(scl);

    // -- Update strap geometry --
    const clipWorld = new THREE.Vector3(0, 1.35, 0).applyMatrix4(cardGroup.matrixWorld);

    // Build smooth V-shaped loop: left anchor → nodes → clip → nodes → right anchor
    const leftAnchor = new THREE.Vector3(-1.5, 3.4, -0.5);
    const rightAnchor = new THREE.Vector3(1.5, 3.4, -0.5);

    const strapPts = [];
    strapPts.push(leftAnchor);
    for (let i = 1; i < nodes.length; i++) {
      strapPts.push(nodes[i].pos.clone().add(new THREE.Vector3(-0.04 * (nodes.length - 1 - i), 0, 0)));
    }
    strapPts.push(clipWorld);
    for (let i = nodes.length - 2; i >= 1; i--) {
      strapPts.push(nodes[i].pos.clone().add(new THREE.Vector3(0.04 * (nodes.length - 1 - i), 0, 0)));
    }
    strapPts.push(rightAnchor);

    const curve = new THREE.CatmullRomCurve3(strapPts);
    const newGeo = new THREE.TubeGeometry(curve, 48, 0.014, 8, false);
    if (strapMesh.geometry) strapMesh.geometry.dispose();
    strapMesh.geometry = newGeo;

    renderer.render(scene, camera);
  }

  animate();
}
