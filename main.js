const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-theme" : "light-theme";

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  document.querySelectorAll(`.theme-switch input[value="${theme}"]`).forEach((radio) => {
    radio.checked = true;
  });
};

applyTheme(localStorage.getItem("theme") ?? getSystemTheme());

document.querySelectorAll(".theme-switch").forEach((toggle) => {
  toggle.addEventListener("change", (e) => applyTheme(e.target.value));
});