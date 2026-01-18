(function () {
  const root = document.documentElement;
  const btnPrint = document.getElementById("btnPrint");
  const btnTheme = document.getElementById("btnTheme");
  const btnToggleProjects = document.getElementById("btnToggleProjects");
  const projectSection = document.getElementById("projectSection");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  // 讀取儲存的主題
  const savedTheme = localStorage.getItem("resume_theme");
  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    btnTheme.setAttribute("aria-pressed", "true");
    btnTheme.textContent = "切換淺色";
  }

  btnPrint.addEventListener("click", () => window.print());

  btnTheme.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("resume_theme", "light");
      btnTheme.setAttribute("aria-pressed", "false");
      btnTheme.textContent = "切換深色";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("resume_theme", "dark");
      btnTheme.setAttribute("aria-pressed", "true");
      btnTheme.textContent = "切換淺色";
    }
  });

  btnToggleProjects.addEventListener("click", () => {
    const hidden = projectSection.hasAttribute("hidden");
    if (hidden) projectSection.removeAttribute("hidden");
    else projectSection.setAttribute("hidden", "");
  });
})();
