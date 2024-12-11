// JavaScript-funktionen er nu sikret med nul-tjek.
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("#burger-menu");
  const navItems = document.querySelector(".nav-items");
  const overlay = document.querySelector("#menu-overlay");

  if (burgerMenu && navItems && overlay) {
    burgerMenu.addEventListener("click", () => {
      navItems.classList.toggle("active");
      overlay.classList.toggle("active");
      burgerMenu.classList.toggle("open");
    });

    overlay.addEventListener("click", () => {
      navItems.classList.remove("active");
      overlay.classList.remove("active");
      burgerMenu.classList.remove("open");
    });
  } else {
    console.warn("Burger menu, navigation items, or overlay are not found in the DOM.");
  }
});
