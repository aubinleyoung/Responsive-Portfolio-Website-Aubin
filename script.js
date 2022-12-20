const activBtn = document.querySelectorAll(".menu-btn");
const navActive = document.querySelector(".nav-active");
const backToSection = document.querySelectorAll(".list-menu");

activBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navActive.classList.toggle("display-active-menu");
  });
});
backToSection.forEach((link) => {
  link.addEventListener("click", () => {
    navActive.classList.remove("display-active-menu");
  });
});
