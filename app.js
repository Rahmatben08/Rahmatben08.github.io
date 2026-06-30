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
// ==========================================================================
function initLanyard3D() {
  const container = document.getElementById('lanyardContainer');
  const canvas = document.getElementById('lanyardCanvas3D');
  if (!container || !canvas) return;

  // Fullscreen container width/height
  let w = container.clientWidth;
  let h = container.clientHeight;

  // 1. Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 0.2, 4.0);

  // Set camera horizontal offset to center card on the right column
  function updateCamera() {
    const aspect = camera.aspect;
    camera.position.x = -aspect * 0.52;
  }
  updateCamera();

  // 2. WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // 3. Lighting (Strap/Clip standard shading)
  const ambient = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambient);

  const mainLight = new THREE.PointLight(0xffffff, 2.0, 15);
  mainLight.position.set(1.5, 2.5, 3.5);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x6366f1, 0.7);
  fillLight.position.set(-2, -1, 1);
  scene.add(fillLight);

  // 4. Create Badge Textures via HTML5 Canvas
  const badgeCanvas = document.createElement('canvas');
  badgeCanvas.width = 512;
  badgeCanvas.height = 1024;
  const ctx = badgeCanvas.getContext('2d');

  const backCanvas = document.createElement('canvas');
  backCanvas.width = 512;
  backCanvas.height = 1024;
  const backCtx = backCanvas.getContext('2d');

  // Load Profile Image
  let profileImg = new Image();
  profileImg.src = 'profile.jpg';
  profileImg.onload = () => {
    drawBadgeFace();
  };

  // Create a combined 1024x1024 canvas for the GLTF model UV layout (left: front, right: back)
  const combinedCanvas = document.createElement('canvas');
  combinedCanvas.width = 1024;
  combinedCanvas.height = 1024;
  const combinedCtx = combinedCanvas.getContext('2d');
  const combinedTexture = new THREE.CanvasTexture(combinedCanvas);
  combinedTexture.flipY = true;

  const frontTexture = new THREE.CanvasTexture(badgeCanvas);
  const backTexture = new THREE.CanvasTexture(backCanvas);
  frontTexture.flipY = true;
  backTexture.flipY = true;

  function drawBadgeFace() {
    // Clear & background matching theme colors
    ctx.fillStyle = '#10131b';
    ctx.fillRect(0, 0, 512, 1024);

    // Card border outline matching surface border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.roundRect(15, 15, 482, 994, 45);
    ctx.stroke();

    // Top Card Accent - gradient from Purple (#7000FF) to Cyan (#00D1FF)
    const topGrad = ctx.createLinearGradient(0, 0, 512, 0);
    topGrad.addColorStop(0, '#7000FF');
    topGrad.addColorStop(1, '#00D1FF');
    ctx.fillStyle = topGrad;
    ctx.beginPath();
    ctx.roundRect(15, 15, 482, 24, [45, 45, 0, 0]);
    ctx.fill();

    // Inner background grids
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 2;
    for (let i = 40; i < 984; i += 40) {
      ctx.beginPath(); ctx.moveTo(25, i); ctx.lineTo(487, i); ctx.stroke();
    }

    // Header slot hole
    ctx.fillStyle = '#181b23';
    ctx.beginPath();
    ctx.roundRect(206, 55, 100, 20, 10);
    ctx.fill();

    // Header labels (POLSRI // DEPT. MI)
    ctx.fillStyle = '#859399';
    ctx.font = 'bold 18px Courier New, monospace';
    ctx.fillText('POLSRI // DEPT. MI', 50, 115);

    // LED Status Dot
    ctx.fillStyle = '#34d399';
    ctx.beginPath(); ctx.arc(430, 110, 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 16px Courier New, monospace';
    ctx.fillText('ONLINE', 335, 115);

    // Draw Profile Picture (Natural - borderless & without lights)
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(96, 170, 320, 380, 25);
    ctx.clip();
    if (profileImg.complete) {
      ctx.drawImage(profileImg, 96, 170, 320, 380);
    } else {
      ctx.fillStyle = '#181b23';
      ctx.fillRect(96, 170, 320, 380);
    }
    ctx.restore();

    // Border around photo slot
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(96, 170, 320, 380, 25);
    ctx.stroke();

    // Name text: GHALI RAHMAT in Sora primary color (#a4e6ff)
    ctx.fillStyle = '#a4e6ff';
    ctx.font = 'bold 44px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GHALI RAHMAT', 256, 620);

    // Role line with terminal icon: ANDROID NATIVE DEV
    ctx.fillStyle = '#bbc9cf';
    ctx.font = 'bold 24px Courier New, monospace';
    ctx.fillText('>_ ANDROID NATIVE DEV', 256, 680);

    // Bottom info area
    ctx.textAlign = 'left';
    ctx.fillStyle = '#bbc9cf';
    // Draw barcode decoration matching user's design
    const startX = 50;
    const barcodeY = 780;
    const barcodeH = 65;
    const widths = [12, 5, 12, 24, 5, 12, 35, 12, 5];
    let currentX = startX;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    widths.forEach(w => {
      ctx.fillRect(currentX, barcodeY, w, barcodeH);
      currentX += w + 10;
    });

    ctx.fillStyle = '#bbc9cf';
    ctx.font = 'bold 18px Courier New, monospace';
    ctx.textAlign = 'right';
    ctx.fillText('DEV-ID: 0x8F92', 462, 890);

    // Copy to combined texture
    combinedCtx.drawImage(badgeCanvas, 0, 0);
    combinedTexture.needsUpdate = true;
  }

  function drawBadgeBack() {
    backCtx.fillStyle = '#10131b';
    backCtx.fillRect(0, 0, 512, 1024);

    // Border
    backCtx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    backCtx.lineWidth = 14;
    backCtx.beginPath();
    backCtx.roundRect(15, 15, 482, 994, 45);
    backCtx.stroke();

    // Large glowing logo G
    backCtx.fillStyle = '#7000ff';
    backCtx.font = 'bold 320px Arial, sans-serif';
    backCtx.textAlign = 'center';
    backCtx.fillText('G', 256, 570);
    
    // Subtitle
    backCtx.fillStyle = '#00d1ff';
    backCtx.font = 'bold 24px Courier New, monospace';
    backCtx.fillText('GHALI RAHMAT', 256, 680);

    // Copy to combined texture
    combinedCtx.drawImage(backCanvas, 512, 0);
    combinedTexture.needsUpdate = true;
  }

  drawBadgeFace();
  drawBadgeBack();

  // 5. 3D Model Construction: Loaded from kartu.glb
  const cardGroup = new THREE.Group();
  scene.add(cardGroup);

  // Keep a transparent physics bounding box for hover & drag interactions
  const caseGeo = new THREE.BoxGeometry(1.6, 2.3, 0.1);
  const caseMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.0, // completely invisible collider
    depthWrite: false
  });
  const caseMesh = new THREE.Mesh(caseGeo, caseMat);
  cardGroup.add(caseMesh);

  // Load GLB model (mesh names: card, clip, clamp)
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load('kartu.glb', (gltf) => {
    gltf.scene.scale.set(2.25, 2.25, 2.25);
    gltf.scene.position.set(0, -1.2, -0.05);

    const cardMesh = gltf.scene.getObjectByName('card');
    if (cardMesh && cardMesh.material) {
      cardMesh.material.map = combinedTexture;
      cardMesh.material.roughness = 0.35;
      cardMesh.material.metalness = 0.1;
      cardMesh.material.clearcoat = 1.0;
      cardMesh.material.clearcoatRoughness = 0.15;
      cardMesh.material.needsUpdate = true;
    }

    const clipMesh = gltf.scene.getObjectByName('clip');
    if (clipMesh && clipMesh.material) {
      clipMesh.material.metalness = 0.9;
      clipMesh.material.roughness = 0.2;
    }

    const clampMesh = gltf.scene.getObjectByName('clamp');
    if (clampMesh && clampMesh.material) {
      clampMesh.material.metalness = 0.9;
      clampMesh.material.roughness = 0.2;
    }

    cardGroup.add(gltf.scene);
  });

  // Strap (dynamic bending 3D Tube mesh with texture from downloads)
  const strapPointCount = 16;
  const textureLoader = new THREE.TextureLoader();
  const strapTexture = textureLoader.load('bandd.png');
  strapTexture.wrapS = THREE.RepeatWrapping;
  strapTexture.wrapT = THREE.RepeatWrapping;
  strapTexture.repeat.set(16, 1); // tile along the strap length
  
  const strapMat = new THREE.MeshStandardMaterial({
    map: strapTexture,
    roughness: 0.6,
    metalness: 0.1
  });
  let strapMesh = new THREE.Mesh(new THREE.BufferGeometry(), strapMat);
  scene.add(strapMesh);

  // 6. Physics State variables (Verlet Multi-Segment Rope Chain)
  const anchor = new THREE.Vector3(0, 2.3, 0);
  const segmentCount = 6;
  const segmentLength = 0.32; // Total length ~1.92
  const ropePoints = [];

  for (let i = 0; i < segmentCount; i++) {
    ropePoints.push({
      pos: new THREE.Vector3(0, anchor.y - i * segmentLength, 0),
      prevPos: new THREE.Vector3(0, anchor.y - i * segmentLength, 0),
      isFixed: i === 0
    });
  }

  // Set card position reference to the last rope point
  let pos = ropePoints[segmentCount - 1].pos;
  let rot = new THREE.Vector3(0, 0, 0);

  // 7. Raycasting & Mouse drag state (at window level for fullscreen overlay logic)
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let isDragging = false;
  let prevMousePos = new THREE.Vector3();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const draggedPos = new THREE.Vector3();

  function onMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([caseMesh]);

    if (intersects.length > 0) {
      isDragging = true;
      canvas.style.cursor = 'grabbing';
      
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(dragPlane, intersection);
      prevMousePos.copy(intersection);
      draggedPos.copy(pos); // start dragging from current card pos
    }
  }

  function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    if (!isDragging) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([caseMesh]);
      
      if (intersects.length > 0) {
        canvas.style.cursor = 'grab';
        canvas.style.pointerEvents = 'auto';
      } else {
        canvas.style.cursor = 'default';
        canvas.style.pointerEvents = 'none';
      }
    }

    if (isDragging) {
      raycaster.setFromCamera(mouse, camera);
      const currentMousePos = new THREE.Vector3();
      raycaster.ray.intersectPlane(dragPlane, currentMousePos);

      const delta = currentMousePos.clone().sub(prevMousePos);
      draggedPos.add(delta);
      
      prevMousePos.copy(currentMousePos);
    }
  }

  function onMouseUp() {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = 'grab';
    }
  }

  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  // Touch support
  window.addEventListener('touchstart', (e) => { if (e.touches[0]) onMouseDown(e.touches[0]); });
  window.addEventListener('touchmove', (e) => { if (e.touches[0]) onMouseMove(e.touches[0]); });
  window.addEventListener('touchend', onMouseUp);

  // Resize handler
  window.addEventListener('resize', () => {
    w = container.clientWidth;
    h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    updateCamera();
    renderer.setSize(w, h);
  });

  // 8. Simulation & Render Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.02); // cap dt to prevent physics explosion

    // --- Verlet Physics Simulation ---
    const gravity = new THREE.Vector3(0, -35.0, 0); // strong responsive gravity
    const damping = 0.94; // air drag damping

    // A. Integrate positions
    for (let i = 1; i < segmentCount; i++) {
      const p = ropePoints[i];
      if (isDragging && i === segmentCount - 1) continue; // dragging controls position directly

      const temp = p.pos.clone();
      
      // Calculate velocity
      const vel = p.pos.clone().sub(p.prevPos).multiplyScalar(damping);
      
      // Card is heavier, apply more gravity weight to last segment
      const gForce = gravity.clone();
      if (i === segmentCount - 1) {
        gForce.multiplyScalar(2.0); // card weight
      }
      
      p.pos.add(vel).add(gForce.multiplyScalar(dt * dt));
      p.prevPos.copy(temp);
    }

    // B. If dragging, lock last point directly to drag coordinates
    if (isDragging) {
      ropePoints[segmentCount - 1].pos.copy(draggedPos);
    }

    // C. Resolve constraints (Rope segments distance solver)
    for (let iter = 0; iter < 12; iter++) {
      // Anchor remains fixed
      ropePoints[0].pos.copy(anchor);

      for (let i = 0; i < segmentCount - 1; i++) {
        const pA = ropePoints[i];
        const pB = ropePoints[i + 1];

        const delta = pB.pos.clone().sub(pA.pos);
        const dist = delta.length();
        if (dist === 0) continue;

        const diff = segmentLength - dist;
        const percent = (diff / dist) * 0.5;
        const offset = delta.multiplyScalar(percent);

        if (!pA.isFixed) pA.pos.sub(offset);
        if (!(isDragging && i + 1 === segmentCount - 1)) {
          pB.pos.add(offset);
        }
      }
    }

    // Apply Position to Mesh (Card center is at pos)
    cardGroup.position.copy(pos);

    // 5. Responsive scaling based on window width
    let scale = 1.0;
    if (window.innerWidth < 768) {
      scale = 0.62;
    } else if (window.innerWidth < 1024) {
      scale = 0.70;
    } else if (window.innerWidth < 1280) {
      scale = 0.85;
    }
    cardGroup.scale.set(scale, scale, scale);

    // Calculate rotation basis:
    // A. Local Y-axis aligns with the last segment direction
    const attachPoint = pos.clone().add(new THREE.Vector3(0, 1.45, 0)); // top clip
    const prevRopePoint = ropePoints[segmentCount - 2].pos;
    const strapVec = prevRopePoint.clone().sub(attachPoint);
    const vY = strapVec.clone().normalize().multiplyScalar(-1);
    
    // B. Local Z-axis faces the camera (pointing towards Z=1). 
    // We cross vY with camera direction (0, 0, 1) to get local X-axis.
    const vX = new THREE.Vector3().crossVectors(vY, new THREE.Vector3(0, 0, 1)).normalize();
    
    // C. Re-calculate orthogonal Z-axis (forward) to complete right-handed coordinate system
    const vZ = new THREE.Vector3().crossVectors(vX, vY).normalize();
    
    // D. Construct matrix and set quaternion (keeps card facing camera forward at all times!)
    const basisMat = new THREE.Matrix4().makeBasis(vX, vY, vZ);
    const quat = new THREE.Quaternion().setFromRotationMatrix(basisMat);

    // Apply physics wobble/twist without accumulation
    if (!isDragging) {
      const cardVel = ropePoints[segmentCount - 1].pos.clone().sub(ropePoints[segmentCount - 1].prevPos).multiplyScalar(60.0);
      const targetRotX = cardVel.z * -0.05;
      const targetRotZ = cardVel.x * -0.05;
      const targetRotY = cardVel.x * 0.08;

      rot.x += (targetRotX - rot.x) * 0.15;
      rot.z += (targetRotZ - rot.z) * 0.15;
      rot.y += (targetRotY - rot.y) * 0.1;
    } else {
      rot.set(0, 0, 0);
    }

    const wobbleQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(rot.x, rot.y + Math.sin(clock.getElapsedTime() * 1.5) * 0.05, rot.z)
    );
    cardGroup.quaternion.copy(quat).multiply(wobbleQuat);

    // 9. Update Strap points dynamically (Woven neck loop following rope segments)
    const neckLeft = new THREE.Vector3(-1.4, 3.2, -0.6);
    const neckRight = new THREE.Vector3(1.4, 3.2, -0.6);
    
    // Update card world matrix to calculate exact attachment point in 3D world space
    cardGroup.updateMatrixWorld(true);
    const clipAttach = new THREE.Vector3(0, 1.45, 0).applyMatrix4(cardGroup.matrixWorld);

    const points = [];
    
    // We map a smooth curve: neckLeft -> rope segment points -> clipAttach -> rope segment points -> neckRight
    points.push(neckLeft);
    
    // Smooth transition points following rope segment 1 & 2
    points.push(new THREE.Vector3().copy(ropePoints[1].pos).add(new THREE.Vector3(-0.35, 0, -0.15)));
    points.push(new THREE.Vector3().copy(ropePoints[2].pos).add(new THREE.Vector3(-0.15, 0, -0.05)));
    points.push(new THREE.Vector3().copy(ropePoints[3].pos).add(new THREE.Vector3(-0.05, 0, 0)));
    
    points.push(clipAttach);
    
    points.push(new THREE.Vector3().copy(ropePoints[3].pos).add(new THREE.Vector3(0.05, 0, 0)));
    points.push(new THREE.Vector3().copy(ropePoints[2].pos).add(new THREE.Vector3(0.15, 0, -0.05)));
    points.push(new THREE.Vector3().copy(ropePoints[1].pos).add(new THREE.Vector3(0.35, 0, -0.15)));
    
    points.push(neckRight);

    const curve = new THREE.CatmullRomCurve3(points);
    if (strapMesh.geometry) strapMesh.geometry.dispose();
    strapMesh.geometry = new THREE.TubeGeometry(curve, 32, 0.016, 8, false);

    renderer.render(scene, camera);
  }

  animate();
}
