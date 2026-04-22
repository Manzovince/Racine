const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-theme" : "light-theme";

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const radio = document.querySelector(`#toggle input[value="${theme}"]`);
  if (radio) radio.checked = true;
};

applyTheme(localStorage.getItem("theme") ?? getSystemTheme());

document.getElementById("toggle").addEventListener("change", (e) => {
  applyTheme(e.target.value);
});