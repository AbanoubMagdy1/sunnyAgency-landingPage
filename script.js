const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".nav__menu");

function toggleMenu() {
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);