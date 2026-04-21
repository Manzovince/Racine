// Reads OS preference on first load, then lets the button override
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// Apply theme to <html> element
const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
};

// On page load: use saved preference, or fall back to OS
const savedTheme = localStorage.getItem("theme") ?? getSystemTheme();
applyTheme(savedTheme);

// Button toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === "dark" ? "light" : "dark");
});