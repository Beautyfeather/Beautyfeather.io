const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.getAttribute("data-theme") === "pink") {
    html.removeAttribute("data-theme");
  } else {
    html.setAttribute("data-theme", "pink");
  }
});

// Tab切换
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("show"));
    document.getElementById(tabId).classList.add("show");
  });
});

// 折叠面板
const foldHeaders = document.querySelectorAll(".fold-header");
foldHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector(".fold-icon");
    body.classList.toggle("open");
    icon.textContent = body.classList.contains("open") ? "▲" : "▼";
  });
});

// 回到顶部
const backTopBtn = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
});
backTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
