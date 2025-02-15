document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.style.backgroundColor = "#555"; // Highlight color
      link.style.fontWeight = "bold";
    }
  });
});