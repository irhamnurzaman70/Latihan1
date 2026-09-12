const NAV = [
  ["index.html", "Home"],
  ["physicians.html", "Physicians"],
  ["services.html", "Services"],
  ["history.html", "History"],
  ["policies.html", "Policies"],
  ["location.html", "Location"],
];

function logoSvg() {
  return `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="22" cy="14" r="7" fill="#3d5c44"/>
    <path d="M10 48c1-14 8-20 12-20s11 6 12 20" fill="#3d5c44"/>
    <circle cx="42" cy="16" r="6.2" fill="#4a6b52"/>
    <path d="M31 50c1.2-13 8-18 11-18s10 5 11 18" fill="#4a6b52"/>
  </svg>`;
}

function mountChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const page = location.pathname.split("/").pop() || "index.html";

  if (header) {
    header.innerHTML = `
      <div class="header-inner">
        <div class="header-top">
          <a class="brand" href="index.html">
            ${logoSvg()}
            <span class="brand-text">Dayton<br>Family<br>Practice</span>
          </a>
          <div class="header-actions">
            <a href="tel:9372545661">${phoneIcon()} (937) 254-5661</a>
            <a href="portal.html">${personIcon()} Patient Portal</a>
          </div>
        </div>
        <div class="nav-wrap">
          <div>
            <button class="menu-toggle" type="button" aria-expanded="false">Menu</button>
            <nav class="main-nav" aria-label="Primary">
              ${NAV.map(([href, label]) => {
                const active = page === href || (page === "" && href === "index.html");
                return `<a href="${href}" class="${active ? "active" : ""}">${label}</a>`;
              }).join("")}
            </nav>
          </div>
        </div>
      </div>`;

    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".main-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (footer) {
    footer.innerHTML = `
      <p><strong>Dayton Family Practice</strong><br>
      3328 S. Smithville Road<br>
      Dayton, Ohio 45420</p>
      <p>Phone: (937) 254-5661 &nbsp;|&nbsp; Fax: (937) 254-7367</p>
    `;
  }
}

function phoneIcon() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2C9.4 20 4 14.6 4 8a2 2 0 0 1 2-2Z"/>
  </svg>`;
}

function personIcon() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="8" r="3.2"/>
    <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/>
  </svg>`;
}

document.addEventListener("DOMContentLoaded", mountChrome);
