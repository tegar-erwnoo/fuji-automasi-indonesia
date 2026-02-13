// Theme toggle + active nav + year
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("fujiautomasi_theme");
  if (saved) root.setAttribute("data-theme", saved);

  const btn = document.getElementById("btnTheme");
  if (btn){
    btn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") || "dark";
      const next = cur === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("fujiautomasi_theme", next);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("a.navlink").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(path)) a.classList.add("active");
  });

  const btnPrint = document.getElementById("btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());
})();
