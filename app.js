// ==========================================================================
// VIRTUAL SPA ROUTING
// ==========================================================================
function navigateToPage(pageId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show target section
  const targetSection = document.getElementById(`${pageId}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
    // Scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navigation links state
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-page') === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Close mobile sidebar if open
  document.getElementById('sidebar').classList.remove('active');
}

// ==========================================================================
// THEME SWITCHER (DARK / LIGHT MODE)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonUI(savedTheme);
}

function updateThemeButtonUI(theme) {
  const label = document.querySelector('.theme-label');
  if (label) {
    label.textContent = theme === 'dark' ? 'Mode Gelap' : 'Mode Terang';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
  updateThemeButtonUI(newTheme);
}

// ==========================================================================
// DYNAMIC TYPING ANIMATION
// ==========================================================================
const roles = [
  "Full-Stack Web Developer",
  "Android Developer",
  "AI & ML Engineering Enthusiast",
  "Mahasiswa D4 Manajemen Informatika"
];
let currentRoleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newRoleDelay = 2000; // Delay between roles

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
  const featuredGrid = document.getElementById('featuredProjectsGrid');
  const allGrid = document.getElementById('allProjectsGrid');

  // Filter projects data based on inputs
  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery) ||
                          proj.role.toLowerCase().includes(searchQuery) ||
                          proj.shortDescription.toLowerCase().includes(searchQuery) ||
                          proj.techStack.some(t => t.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  // Populate All Projects Page
  if (allGrid) {
    allGrid.innerHTML = '';
    if (filteredProjects.length === 0) {
      allGrid.innerHTML = `
        <div class="no-projects-msg" style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-secondary);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 15px; color: var(--text-muted);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="12"></line><line x1="11" y1="16" x2="11.01" y2="16"></line></svg>
          <h3>Proyek Tidak Ditemukan</h3>
          <p>Coba kata kunci pencarian atau filter kategori lainnya.</p>
        </div>
      `;
    } else {
      filteredProjects.forEach(proj => {
        allGrid.appendChild(createProjectCard(proj));
      });
    }
  }

  // Populate Home Page (First 3 matches from dataset)
  if (featuredGrid) {
    featuredGrid.innerHTML = '';
    const featuredProjects = projectsData.slice(0, 3);
    featuredProjects.forEach(proj => {
      featuredGrid.appendChild(createProjectCard(proj));
    });
  }
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-id', project.id);
  
  // Category Icons mapping
  let catIcon = '';
  if (project.category === 'web') {
    catIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
  } else if (project.category === 'mobile') {
    catIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
  } else {
    catIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 8V16"></path><path d="M8 12H16"></path></svg>`;
  }

  const techTagsHtml = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

  card.innerHTML = `
    <div class="project-body">
      <div class="project-badge-wrap">
        <span class="project-role-badge">${project.role}</span>
        <span class="project-category-icon">${catIcon}</span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.shortDescription}</p>
      <div class="project-tech-tags">
        ${techTagsHtml}
      </div>
      <div class="project-footer">
        <span>Detail Proyek</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </div>
  `;

  // Bind click event to open Modal
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

  // Set modal elements
  document.getElementById('modalRole').textContent = project.role;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.fullDescription;
  document.getElementById('modalArchitecture').textContent = project.architecture;

  // Render tech tags
  const tagsWrap = document.getElementById('modalTechTags');
  tagsWrap.innerHTML = '';
  project.techStack.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    tagsWrap.appendChild(span);
  });

  // Render features list
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach(feat => {
    const li = document.createElement('li');
    li.textContent = feat;
    featuresList.appendChild(li);
  });

  // Activate Modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
  }
}

// ==========================================================================
// CONTACT FORM SUBMISSION
// ==========================================================================
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMsg');

  // Simply show success view (simulated)
  if (form && successMsg) {
    form.style.display = 'none';
    successMsg.classList.add('active');
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      successMsg.classList.remove('active');
    }, 4500);
  }
}

// ==========================================================================
// INITIALIZATION & EVENT BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Dark/Light Theme
  initTheme();
  
  // Theme Toggle Button
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }

  // SPA Sidebar Routing Links
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = item.getAttribute('data-page');
      navigateToPage(pageId);
      
      // Update window hash URL
      window.location.hash = pageId;
    });
  });

  // Handle URL hashes on reload (routing)
  const currentHash = window.location.hash.substring(1);
  if (currentHash && ['home', 'projects', 'experience', 'education', 'contact'].includes(currentHash)) {
    navigateToPage(currentHash);
  } else {
    navigateToPage('home');
  }

  // Sidebar Menu Toggle for Mobile
  const mobileToggle = document.getElementById('mobileNavToggle');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
  }

  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // Close sidebar if clicked outside (on mobile)
  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('active')) {
      const isClickInside = sidebar.contains(e.target) || mobileToggle.contains(e.target);
      if (!isClickInside) {
        sidebar.classList.remove('active');
      }
    }
  });

  // Modal Close Button & Backdrop Clicks
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
      // Remove active class
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

  // Start Typing Animation on Hero
  setTimeout(typeAnimation, 1000);

  // Render initial projects grids
  renderProjects();
});
