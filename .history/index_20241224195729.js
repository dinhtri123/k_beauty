document.addEventListener("DOMContentLoaded", function () {
  // Menu
  const btnMenu = document.querySelector(".header-btn-menu");
  const btnCloseMenu = document.querySelector(".header-btn-close");
  const menu = document.querySelector(".header-nav");
  btnMenu.addEventListener("click", function () {
    menu.classList.add("active");
  });
  btnCloseMenu.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
