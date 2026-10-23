const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const themeColor = document.querySelector("#themeColor");
const menuToggle = document.querySelector("#menuToggle");
const navCenter = document.querySelector(".nav-center");
const navLinks = document.querySelector("#navLinks");

function applyTheme(theme, save = true) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";

  if (themeToggle) {
    const nextLabel = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-label", nextLabel);
    themeToggle.setAttribute("title", nextLabel);
  }

  if (themeColor) {
    themeColor.setAttribute("content", isDark ? "#15171c" : "#ffffff");
  }

  if (save) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (_) {
      // The theme still works for this page if storage is unavailable.
    }
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

if (menuToggle && navCenter && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navCenter.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navCenter.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
