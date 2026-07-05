// ==========================================================================
// PROGRAMMING LANGUAGE SVG ICONS DICTIONARY (BRAND COLORS)
// ==========================================================================
const techIcons = {
  // ── Web Languages ──
  "html5": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2l1.65 18L12 22l7.35-2L21 2H3zm14.5 5.5H8.4l.2 2.5h8.8l-.7 7.5L12 18.9l-4.7-1.4-.3-3.5h2.4l.2 1.8 2.4.6 2.4-.6.3-2.9H7.5L6.8 7.5h10.4l-.2 2.5z" fill="#E34F26"/></svg>`,
  "css3": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2l1.65 16.5L12 22l7.35-3.5L21 2H3zm13.5 6h-6.8l-.2 2h6.8l-.6 6-4.9 2.3-4.9-2.3-.3-3h2l.2 1.5 3 1.4 3-1.4.3-3H6.7l-.6-6h10.4z" fill="#1572B6"/></svg>`,
  "vanillacss": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2l1.65 16.5L12 22l7.35-3.5L21 2H3zm13.5 6h-6.8l-.2 2h6.8l-.6 6-4.9 2.3-4.9-2.3-.3-3h2l.2 1.5 3 1.4 3-1.4.3-3H6.7l-.6-6h10.4z" fill="#1572B6"/></svg>`,
  "javascript": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><text x="13" y="19" font-size="11" font-family="Arial,sans-serif" font-weight="900" fill="#000" text-anchor="middle">JS</text></svg>`,
  "javascriptes6+": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><text x="13" y="19" font-size="11" font-family="Arial,sans-serif" font-weight="900" fill="#000" text-anchor="middle">JS</text></svg>`,
  "php": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/><text x="12" y="15" font-size="8" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">php</text></svg>`,
  "php8": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/><text x="12" y="15" font-size="8" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">php</text></svg>`,
  "python": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.9 2C8.8 2 9 3.3 9 3.3v2.8h3v.5H7.2S4.3 6.3 4.3 9.5s2.5 3.1 2.5 3.1h1.5v-1.5C8.3 9.5 9.6 8.3 11 8.3h3.3c1.3 0 2.4-1.1 2.4-2.4V3.8S16.4 2 11.9 2zm-1.4 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB"/><path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.8h-3v-.5h4.8s2.9.3 2.9-2.9-2.5-3.1-2.5-3.1h-1.5v1.5c.2 1.6-1.1 2.8-2.5 2.8H9.9c-1.3 0-2.4 1.1-2.4 2.4v3.1S7.6 22 12.1 22zm1.4-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B"/></svg>`,
  "go": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5c0-.3.2-.5.5-.5h.7c.1 0 .2-.1.2-.2V8c0-.4.3-.5.6-.4l2.5 1.5c.1.1.2.2.2.4v1.5c0 .2-.2.4-.4.4H2.5c-.3 0-.5-.2-.5-.5zM22 9.5c0 .3-.2.5-.5.5h-2.8c-.2 0-.4-.2-.4-.4V8.5c0-.2.1-.3.2-.4l2.5-1.5c.3-.1.6 0 .6.4v.8c0 .1.1.2.2.2h.7c.3 0 .5.2.5.5z" fill="#00ACD7"/><path d="M6.5 12.5C5.7 11.7 5 10.4 5 9c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6 0 1.4-.5 2.7-1.3 3.7L16.5 14H7.5z" fill="#00ACD7"/><path d="M7.5 14h9l-.5 4.5A4.5 4.5 0 0112 21a4.5 4.5 0 01-4-2.5z" fill="#00ACD7"/><text x="12" y="11.5" font-size="7" font-family="Arial,sans-serif" font-weight="900" fill="white" text-anchor="middle">Go</text></svg>`,
  "kotlin": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 24H0V0h24L12 12z" fill="url(#kg)"/><defs><linearGradient id="kg" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E44857"/><stop offset="0.5" stop-color="#C128A1"/><stop offset="1" stop-color="#00AFEC"/></linearGradient></defs></svg>`,

  // ── Frameworks ──
  "laravel": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 5.2c0-.1-.1-.2-.2-.3L20 2.5c-.2-.1-.4-.1-.5 0l-2.5 1.4-2.3-1.4c-.2-.1-.4-.1-.5 0l-2.4 1.4L9.5 2.5c-.2-.1-.4-.1-.5 0L3 5.9c-.1.1-.2.2-.2.3v7.2c0 .1.1.2.2.3l3.4 2c.2.1.4.1.5 0l2.4-1.4 2.5 1.4c.1.1.3.1.5 0l2.3-1.4 2.4 1.4c.1.1.3.1.5 0l3.5-2c.1-.1.2-.2.2-.3V5.2zm-9.2 7.4l-2.3-1.3V8.8l2.3 1.3v2.5zm-2.8-4l2.3 1.4-2.3 1.4-2.3-1.4 2.3-1.4z" fill="#FF2D20"/></svg>`,
  "laravel11": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 5.2c0-.1-.1-.2-.2-.3L20 2.5c-.2-.1-.4-.1-.5 0l-2.5 1.4-2.3-1.4c-.2-.1-.4-.1-.5 0l-2.4 1.4L9.5 2.5c-.2-.1-.4-.1-.5 0L3 5.9c-.1.1-.2.2-.2.3v7.2c0 .1.1.2.2.3l3.4 2c.2.1.4.1.5 0l2.4-1.4 2.5 1.4c.1.1.3.1.5 0l2.3-1.4 2.4 1.4c.1.1.3.1.5 0l3.5-2c.1-.1.2-.2.2-.3V5.2zm-9.2 7.4l-2.3-1.3V8.8l2.3 1.3v2.5zm-2.8-4l2.3 1.4-2.3 1.4-2.3-1.4 2.3-1.4z" fill="#FF2D20"/></svg>`,
  "codeigniter": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#EE4326"><path d="M12 2C7 7 6 12 12 17c6-5 5-10 0-15zm-2 11c-2-2-1-5 2-6-1 2 0 4 2 4s2-2 1-3c2 2 1 5-2 6-1 0-2-.5-3-1z"/></svg>`,
  "codeigniter4": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#EE4326"><path d="M12 2C7 7 6 12 12 17c6-5 5-10 0-15zm-2 11c-2-2-1-5 2-6-1 2 0 4 2 4s2-2 1-3c2 2 1 5-2 6-1 0-2-.5-3-1z"/></svg>`,
  "react": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(120 12 12)"/></svg>`,
  "tailwind": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.536 6.182 15.175 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.201 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.536 13.382 9.175 12 5.999 12z"/></svg>`,
  "tailwindcss": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.536 6.182 15.175 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.201 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.536 13.382 9.175 12 5.999 12z"/></svg>`,
  "bootstrap": `<svg viewBox="0 0 24 24" fill="#7952B3" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#7952B3"/><path d="M6 5h6.5a4 4 0 012.8 1.1A3.4 3.4 0 0116.4 9a3.3 3.3 0 01-1.5 2.9 3.6 3.6 0 011.9 3.3 3.7 3.7 0 01-1.2 2.8A4.7 4.7 0 0112.2 19H6V5zm2.5 5.8h3.6a1.9 1.9 0 001.3-.4 1.5 1.5 0 00.5-1.2 1.5 1.5 0 00-.5-1.2 2 2 0 00-1.4-.4H8.5v3.2zm0 5.7h4a2 2 0 001.4-.5 1.7 1.7 0 00.5-1.3 1.7 1.7 0 00-.5-1.3 2 2 0 00-1.5-.5h-4v3.6z" fill="white"/></svg>`,
  "bootstrap5": `<svg viewBox="0 0 24 24" fill="#7952B3" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#7952B3"/><path d="M6 5h6.5a4 4 0 012.8 1.1A3.4 3.4 0 0116.4 9a3.3 3.3 0 01-1.5 2.9 3.6 3.6 0 011.9 3.3 3.7 3.7 0 01-1.2 2.8A4.7 4.7 0 0112.2 19H6V5zm2.5 5.8h3.6a1.9 1.9 0 001.3-.4 1.5 1.5 0 00.5-1.2 1.5 1.5 0 00-.5-1.2 2 2 0 00-1.4-.4H8.5v3.2zm0 5.7h4a2 2 0 001.4-.5 1.7 1.7 0 00.5-1.3 1.7 1.7 0 00-.5-1.3 2 2 0 00-1.5-.5h-4v3.6z" fill="white"/></svg>`,
  "alpinejs": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12l5.5-5.5 4.5 4.5 4.5-4.5L22 12l-5.5 5.5L12 13l-4.5 4.5z" fill="#8BC0D0"/></svg>`,
  "nodejs": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7v10l9 5 9-5V7zm0 2.2l6.5 3.6v7.4L12 18.8l-6.5-3.6V7.8z" fill="#539E43"/><path d="M12 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 4c-1.7 0-3 .8-3 2h6c0-1.2-1.3-2-3-2z" fill="#539E43"/></svg>`,

  // ── Backend / Enterprise ──
  "javaspringboot": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#6DB33F"/><path d="M8.5 16.5c.5-3 2-5.5 4.5-7-1.5 2-2 4.5-1.5 7H8.5zm7-9c-1 2.5-3 4.5-5.5 5.5 1.5-2 2.5-4.5 2.5-7 1 .5 2 .9 3 1.5z" fill="white"/></svg>`,
  "keycloaksso": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#4d9cef"/><path d="M12 5a3 3 0 100 6 3 3 0 000-6zm-6 9.5c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5v.5H6v-.5z" fill="white"/><path d="M17 14l2 3-2 3" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,

  // ── Databases ──
  "mysql": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5c0 1.1.7 2 1.5 2.5l7.5 4.3c.6.4 1.4.4 2 0l7.5-4.3c.8-.5 1.5-1.4 1.5-2.5V8.5C22 7.4 21.3 6.5 20.5 6L13 1.7c-.6-.4-1.4-.4-2 0L3.5 6C2.7 6.5 2 7.4 2 8.5v7z" fill="#00758F"/><path d="M8 9h2v6H8zm6 0c2 0 2 3 0 3h-2V9h2zm-2 4h2c2 0 2 3 0 3h-2v-3z" fill="white"/></svg>`,
  "postgresql": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.4 3.2C16 2.4 14.3 2 12.5 2c-2.5 0-4.6.9-6 2.4C5 5.9 4.2 7.8 4 10c-.3 2.7.5 5.2 2 7 .8 1 1.7 1.8 2.7 2.3l-.2 1.5c-.1.7.5 1.2 1.2 1.2h4.6c.7 0 1.3-.5 1.2-1.2l-.2-1.5c1-.5 2-1.3 2.7-2.3 1.5-1.8 2.3-4.3 2-7-.2-2.2-1-4.1-2.6-5.8z" fill="#336791"/><path d="M12.5 4c1.3 0 2.5.3 3.5.9-1.5-.1-3 .2-4.2.7-.5.2-1 .3-1.5.3-.8 0-1.5-.3-2.1-.7.9-.8 2.5-1.2 4.3-1.2zm4.8 3.5c.3.8.5 1.6.6 2.5-1-.5-2.2-.7-3.4-.7-1 0-1.8.2-2.5.5-.7.3-1.4.3-2 0-.5-.2-.9-.5-1.2-.9.5-.6 1.3-1 2.3-1.3 1.3-.3 2.7-.3 4-.1.7.1 1.5 0 2.2 0zm-8.1 9.3c-.9-1.3-1.3-3.1-1.1-4.9.1-.9.4-1.8.8-2.5.5.4 1.2.7 2 .7.8 0 1.5-.2 2.2-.5.6-.3 1.4-.5 2.2-.5 1 0 2 .3 2.8.7.2 1.5 0 3.1-.7 4.4-.8 1.4-2 2.4-3.4 2.6-1.3.3-2.8-.1-3.8-1z" fill="white"/></svg>`,
  "sqlite": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.8 2 4.4 5.4 4.4 9.6c0 3.1 1.8 5.8 4.4 7.1V20c0 1.1.9 2 2 2h2.4c1.1 0 2-.9 2-2v-3.3c2.6-1.3 4.4-4 4.4-7.1C19.6 5.4 16.2 2 12 2z" fill="#003B57"/><text x="12" y="13" font-size="7" font-family="Arial,sans-serif" font-weight="bold" fill="#A7D1E2" text-anchor="middle">SQL</text></svg>`,
  "mariadb": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c0-2.5 1.5-4.5 3.5-5.5C8 5.5 10 5 12 5s4 .5 5.5 1.5C19.5 7.5 21 9.5 21 12s-1.5 4.5-3.5 5.5C16 18.5 14 19 12 19s-4-.5-5.5-1.5C4.5 16.5 3 14.5 3 12z" fill="#C0765A"/><text x="12" y="15" font-size="6" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">MariaDB</text></svg>`,

  // ── Mobile & Android ──
  "android": `<svg viewBox="0 0 24 24" fill="#3DDC84" xmlns="http://www.w3.org/2000/svg"><path d="M6.2 10.5C5.5 10.5 5 11 5 11.7v5.1c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-5.1c0-.7-.5-1.2-1.2-1.2zm11.6 0c-.7 0-1.2.5-1.2 1.2v5.1c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-5.1c0-.7-.5-1.2-1.2-1.2zM8.5 19.5c0 .8.7 1.5 1.5 1.5h.5v2.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V21h.5v2.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V21h.5c.8 0 1.5-.7 1.5-1.5v-9H8.5v9zM15.5 4.3l1.1-1.9c.1-.2 0-.4-.2-.5s-.4 0-.5.2l-1.1 2C14.2 4 13.1 3.8 12 3.8s-2.2.2-2.8.3L8.1 2.1c-.1-.2-.3-.3-.5-.2s-.3.3-.2.5l1.1 1.9C6.8 5.3 5.8 7 5.8 9h12.4c0-2-1-3.7-2.7-4.7zM10.3 7.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm3.4 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>`,
  "androidsdk": `<svg viewBox="0 0 24 24" fill="#3DDC84" xmlns="http://www.w3.org/2000/svg"><path d="M6.2 10.5C5.5 10.5 5 11 5 11.7v5.1c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-5.1c0-.7-.5-1.2-1.2-1.2zm11.6 0c-.7 0-1.2.5-1.2 1.2v5.1c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-5.1c0-.7-.5-1.2-1.2-1.2zM8.5 19.5c0 .8.7 1.5 1.5 1.5h.5v2.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V21h.5v2.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V21h.5c.8 0 1.5-.7 1.5-1.5v-9H8.5v9zM15.5 4.3l1.1-1.9c.1-.2 0-.4-.2-.5s-.4 0-.5.2l-1.1 2C14.2 4 13.1 3.8 12 3.8s-2.2.2-2.8.3L8.1 2.1c-.1-.2-.3-.3-.5-.2s-.3.3-.2.5l1.1 1.9C6.8 5.3 5.8 7 5.8 9h12.4c0-2-1-3.7-2.7-4.7zM10.3 7.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm3.4 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>`,
  "jetpackcompose": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="url(#jc)"/><defs><linearGradient id="jc" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#00BCD4"/><stop offset="1" stop-color="#4CAF50"/></linearGradient></defs><text x="12" y="14" font-size="5.5" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">JC</text></svg>`,
  "roomdb": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3DDC84"/><text x="12" y="15.5" font-size="7" font-family="Arial,sans-serif" font-weight="bold" fill="#073042" text-anchor="middle">Room</text></svg>`,
  "roomdatabase": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3DDC84"/><text x="12" y="15.5" font-size="7" font-family="Arial,sans-serif" font-weight="bold" fill="#073042" text-anchor="middle">Room</text></svg>`,
  "material3": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#6750A4"/><path d="M8 12l3 3 5-6" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "firebase": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.9 17.8L9.1 2.5c.1-.5.8-.6 1-.1l2.1 4.1L14 3.3c.2-.4.8-.3.9.1l4.2 14.4L12 21 5.9 17.8z" fill="#FFA000"/><path d="M12 21l7.1-3.2L16 8.8l-3.8 7.8z" fill="#F57F17"/><path d="M5.9 17.8L9.1 2.5c.1-.5.8-.6 1-.1l2.1 4.1L6.3 18z" fill="#FFCA28"/></svg>`,

  // ── DevOps & Tools ──
  "docker": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H4z" fill="#2496ED"/><path d="M22.2 12.1c-.5-.3-1.5-.4-2.3-.2-.1-.9-.6-1.6-1.5-2.1l-.5-.3-.3.5c-.4.6-.5 1.7-.1 2.4-.3.1-.8.3-1.5.3H2.3c-.2 1.1.1 2.6 1 3.7.8 1 2 1.5 3.6 1.5 3.5 0 6-1.6 7.4-4.5.5 0 1.5 0 2-.9l.1-.2-.2-.2z" fill="#2496ED"/></svg>`,
  "github": `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>`,
  "selenium": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#43B02A"/><path d="M7 12a5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5 5 5 0 00-5 5zm5-3a3 3 0 110 6 3 3 0 010-6z" fill="white"/></svg>`,
  "cronjobs": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#6366F1" stroke-width="2" fill="none"/><path d="M12 6v6l4 2" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/></svg>`,

  // ── AI & Data ──
  "machinelearning": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="#FF6B6B"/><circle cx="4" cy="8" r="2" fill="#4ECDC4"/><circle cx="20" cy="8" r="2" fill="#4ECDC4"/><circle cx="4" cy="16" r="2" fill="#4ECDC4"/><circle cx="20" cy="16" r="2" fill="#4ECDC4"/><line x1="12" y1="9" x2="4" y2="8" stroke="#888" stroke-width="1"/><line x1="12" y1="9" x2="20" y2="8" stroke="#888" stroke-width="1"/><line x1="12" y1="15" x2="4" y2="16" stroke="#888" stroke-width="1"/><line x1="12" y1="15" x2="20" y2="16" stroke="#888" stroke-width="1"/></svg>`,
  "scikitlearn": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L4 7.5v9L12 21l8-4.5v-9z" fill="#F7931E"/><path d="M12 3v18M4 7.5l8 4.5 8-4.5" stroke="white" stroke-width=".5" fill="none"/></svg>`,
  "pandas": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="5" height="16" rx="2" fill="#130654"/><rect x="15" y="4" width="5" height="16" rx="2" fill="#E70488"/><rect x="9" y="9" width="6" height="6" rx="1" fill="#130654"/></svg>`,
  "jupyternotebook": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#F37626"/><circle cx="7" cy="10" r="1.5" fill="white"/><circle cx="12" cy="7" r="1.5" fill="white"/><circle cx="17" cy="10" r="1.5" fill="white"/><text x="12" y="18" font-size="5" font-family="Arial,sans-serif" fill="white" text-anchor="middle">Jupyter</text></svg>`,
  "datascraping": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="14" rx="2" stroke="#6366F1" stroke-width="1.5" fill="none"/><line x1="3" y1="7" x2="21" y2="7" stroke="#6366F1" stroke-width="1.5"/><circle cx="19" cy="19" r="3" fill="#6366F1"/><path d="M19 17v4M17 19h4" stroke="white" stroke-width="1.2"/></svg>`,

  // ── Design ──
  "figma": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c-1.66 0-3 1.34-3 3s1.34 3 3 3h3V2H8z" fill="#F24E1E"/><path d="M11 8H8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8z" fill="#A259FF"/><path d="M8 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-3H8z" fill="#1ABC9C"/><path d="M16 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v3h3z" fill="#FF7262"/><path d="M16 14c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v3h3z" fill="#18A0FB"/></svg>`,

  // ── Misc ──
  "restapi": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-8v4h3l-4 8z" fill="#00D09C"/></svg>`,
  "googlesheetsapi": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="2" width="16" height="20" rx="2" fill="#0F9D58"/><line x1="4" y1="8" x2="20" y2="8" stroke="white" stroke-width="1"/><line x1="4" y1="13" x2="20" y2="13" stroke="white" stroke-width="1"/><line x1="4" y1="18" x2="20" y2="18" stroke="white" stroke-width="1"/><line x1="10" y1="8" x2="10" y2="22" stroke="white" stroke-width="1"/></svg>`,
  "iotintegration": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="#06B6D4"/><path d="M5.6 5.6A9 9 0 005 12a9 9 0 00.6 6.4M18.4 5.6A9 9 0 0119 12a9 9 0 01-.6 6.4" stroke="#06B6D4" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M8.4 8.4A5 5 0 008 12a5 5 0 00.4 3.6M15.6 8.4A5 5 0 0116 12a5 5 0 01-.4 3.6" stroke="#06B6D4" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
  "base64encoding": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="3" fill="#374151"/><text x="12" y="14.5" font-size="5.5" font-family="monospace" fill="#9CA3AF" text-anchor="middle">B64</text></svg>`,
  "phpspreadsheet": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="2" width="16" height="20" rx="2" fill="#217346"/><line x1="4" y1="8" x2="20" y2="8" stroke="white" stroke-width="1"/><line x1="4" y1="13" x2="20" y2="13" stroke="white" stroke-width="1"/><line x1="4" y1="18" x2="20" y2="18" stroke="white" stroke-width="1"/><line x1="10" y1="8" x2="10" y2="22" stroke="white" stroke-width="1"/></svg>`,
};

function getTechIcon(techName) {
  // Normalize: lowercase, remove spaces, dots, digits, hyphens
  const name = techName.toLowerCase()
    .replace(/[\s\.\-]/g, '')  // remove spaces, dots, hyphens
    .replace(/\d+$/g, '');     // strip trailing digits (Laravel11 → laravel, Bootstrap5 → bootstrap)
  
  // Direct match after stripping digits
  if (techIcons[name]) return techIcons[name];
  
  // Also try with digits (for unique keys like php8)
  const nameWithDigits = techName.toLowerCase().replace(/[\s\.\-]/g, '');
  if (techIcons[nameWithDigits]) return techIcons[nameWithDigits];

  // Fallback: generic code bracket icon
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
        <div class="no-projects-msg col-span-full text-center py-12 text-on-surface-variant animate-project-card">
          <span class="material-symbols-outlined text-4xl mb-3 text-muted">search_off</span>
          <h3 class="text-lg font-bold">Proyek Tidak Ditemukan</h3>
          <p class="text-sm">Coba kata kunci pencarian atau filter kategori lainnya.</p>
        </div>
      `;
    } else {
      filteredProjects.forEach((proj, idx) => {
        const card = createProjectCard(proj);
        card.classList.add('project-card-animate');
        card.style.animationDelay = `${idx * 0.04}s`;
        allGrid.appendChild(card);
      });
      // Re-trigger 3D tilt bind
      if (typeof init3DTilt === 'function') {
        init3DTilt();
      }
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

  // Render gutter line numbers for IDE style code editor look
  const linesContainer = document.getElementById('modalCodeLines');
  if (linesContainer) {
    linesContainer.innerHTML = '';
    const totalLines = 26; // Covers height beautifully
    for (let i = 1; i <= totalLines; i++) {
      const span = document.createElement('span');
      span.textContent = String(i).padStart(2, '0');
      linesContainer.appendChild(span);
    }
  }

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

  // ==========================================================================
  // PREMIUM UI/UX INTERACTIVE HELPERS (Glow Tracker & 3D Tilt)
  // ==========================================================================
  
  // 1. Mouse-Tracking Spotlight Glow
  const mouseGlow = document.getElementById('mouseGlow');
  if (mouseGlow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    
    window.addEventListener('mousemove', (e) => {
      mouseGlow.style.opacity = '1';
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouseGlow.style.opacity = '0';
    });

    function updateGlow() {
      // Linear interpolation for silky smooth spring movement
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      
      mouseGlow.style.left = `${glowX}px`;
      mouseGlow.style.top = `${glowY}px`;
      
      requestAnimationFrame(updateGlow);
    }
    updateGlow();
  }

  // 2. 3D Holographic Card Tilt with Glossy Sheen
  function init3DTilt() {
    const cards = document.querySelectorAll('.glass-card, .project-card');
    cards.forEach(card => {
      // Prevent double bindings
      if (card.querySelector('.card-sheen')) return;

      const sheen = document.createElement('div');
      sheen.className = 'card-sheen';
      card.appendChild(sheen);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        // Calculate tilt rotation angles (max 8 degrees for smooth micro-interaction)
        const rotateX = -(y - yc) / 12;
        const rotateY = (x - xc) / 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
        
        // Track mouse position relative to card dimensions to shift sheen reflection
        const pctX = (x / rect.width) * 100;
        const pctY = (y / rect.height) * 100;
        sheen.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.065) 0%, transparent 60%)`;
        sheen.style.opacity = '1';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        sheen.style.opacity = '0';
      });
    });
  }
  window.init3DTilt = init3DTilt; // Expose globally for projects filter refresh
  init3DTilt();

});


// ==========================================================================
// i18n LANGUAGE TOGGLE — ID / EN
// ==========================================================================
const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.expertise": "Keahlian",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.about": "Tentang",
    "nav.contact": "Hubungi",
    "hero.status": "Tersedia untuk Kolaborasi & Proyek",
    "hero.subtitle": "MAHASISWA D4 MI POLSRI",
    "hero.intro": "Saya seorang",
    "hero.desc": "Membangun produk teknologi dari ide kreatif hingga implementasi kode yang solid. Berfokus pada Full-Stack Web Development, Android Native App, dan AI/Machine Learning Engineering.",
    "hero.cta1": "Lihat Proyek",
    "hero.cta2": "Hubungi Saya",
    "expertise.title": "Keahlian Utama",
    "projects.title": "Proyek Pilihan",
    "projects.subtitle": "Daftar studi kasus rekayasa perangkat lunak dan desain antarmuka nyata.",
    "experience.work": "Pengalaman Kerja",
    "experience.education": "Pendidikan",
    "experience.certs": "Sertifikasi & Pelatihan",
    "about.title": "Tentang Saya",
    "about.desc1": "Hai! Saya Ghali — developer muda asal Palembang yang suka membangun produk digital dari nol. Dari merancang UI yang cantik di Figma, mengkode backend Laravel yang bersih, hingga ngoprek Android Native Kotlin. 🚀",
    "about.desc2": "Saya percaya kode yang rapi dan desain yang presisi adalah fondasi produk yang bertahan lama. Saat ini aktif di PT Expro Gio Nusantara sambil menyelesaikan studi D4 Manajemen Informatika di POLSRI. Terbuka untuk kolaborasi dan peluang menarik!",
    "about.stat1": "Proyek Aktif",
    "about.stat2": "Klien BUMN",
    "about.stat3": "Thn Pengalaman",
    "contact.title": "Siap untuk membangun<br/>sesuatu yang hebat?",
    "contact.desc": "Apakah Anda memiliki proyek kolaborasi, ide aplikasi, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya.",
    "contact.cta": "Kirim Email",
    "footer.copy": "© 2026 Ghali Rahmat. Built with precision.",
  },
  en: {
    "nav.home": "Home",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.status": "Available for Collaboration & Projects",
    "hero.subtitle": "D4 INFORMATICS MANAGEMENT · POLSRI",
    "hero.intro": "I am a",
    "hero.desc": "Building technology products from creative ideas to solid code implementation. Focused on Full-Stack Web Development, Android Native Apps, and AI/Machine Learning Engineering.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Contact Me",
    "expertise.title": "Core Expertise",
    "projects.title": "Selected Projects",
    "projects.subtitle": "Real-world software engineering and UI/UX design case studies.",
    "experience.work": "Work Experience",
    "experience.education": "Education",
    "experience.certs": "Certifications & Training",
    "about.title": "About Me",
    "about.desc1": "Hey! I'm Ghali — a young developer from Palembang who loves building digital products from scratch. From crafting beautiful UI in Figma, writing clean Laravel backends, to tinkering with Android Native Kotlin. 🚀",
    "about.desc2": "I believe clean code and precise design are the foundation of lasting products. Currently active at PT Expro Gio Nusantara while completing my D4 Informatics Management degree at POLSRI. Open to collaborations and exciting opportunities!",
    "about.stat1": "Active Projects",
    "about.stat2": "BUMN Clients",
    "about.stat3": "Yrs Experience",
    "contact.title": "Ready to build<br/>something great?",
    "contact.desc": "Have a collaboration project, app idea, or just want to chat? Feel free to reach out to me.",
    "contact.cta": "Send Email",
    "footer.copy": "© 2026 Ghali Rahmat. Built with precision.",
  }
};

const rolesById = [
  "Full-Stack Web Developer",
  "Android Native Developer",
  "AI & ML Engineering Enthusiast",
  "Mahasiswa D4 MI POLSRI"
];
const rolesByEn = [
  "Full-Stack Web Developer",
  "Android Native Developer",
  "AI & ML Engineering Enthusiast",
  "D4 Informatics Management Student"
];

let currentLang = 'id';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Use innerHTML for keys that contain HTML like <br/>
      if (key === 'contact.title') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update flag + label for desktop and mobile
  // Show the TARGET language (what you switch TO when clicked)
  // When in 'id' mode → show 🇬🇧 EN  (click to go English)
  // When in 'en' mode → show 🇮🇩 ID  (click to go Indonesian)
  const isId = lang === 'id';
  ['', 'Mobile'].forEach(suffix => {
    const flag = document.getElementById('langFlag' + suffix);
    const label = document.getElementById('langLabel' + suffix);
    if (flag) flag.textContent = isId ? '🇬🇧' : '🇮🇩';
    if (label) label.textContent = isId ? 'EN' : 'ID';
  });

  // Update typing roles
  if (lang === 'en') {
    roles.length = 0;
    rolesByEn.forEach(r => roles.push(r));
  } else {
    roles.length = 0;
    rolesById.forEach(r => roles.push(r));
  }

  // Store pref
  localStorage.setItem('lang', lang);
}

function toggleLang() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  applyTranslations(currentLang);
}

// Init lang from localStorage on load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'id';
  currentLang = saved;
  applyTranslations(saved);
});
