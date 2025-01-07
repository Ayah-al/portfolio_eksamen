// DOM-elementer
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

// Klik på burger -> toggle nav-menu
burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
