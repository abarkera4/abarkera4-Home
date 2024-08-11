const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    body.style.backgroundColor = "var(--bg-color-light)";
    body.style.color = "var(--text-color-light)";
    themeToggle.textContent = "Dark Mode";
  } else {
    body.style.backgroundColor = "var(--bg-color-dark)";
    body.style.color = "var(--text-color-dark)";
    themeToggle.textContent = "Light Mode";
  }
});
