<!-- ======================= script.js ======================= -->
// Highlight active menu link automatically
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
