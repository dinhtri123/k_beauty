document.addEventListener("DOMContentLoaded", function () {
  // Menu
  const btnMenu = document.querySelector(".header-btn-menu");
  const btnCloseMenu = document.querySelector(".header-btn-close");
  const headerNav = document.querySelector(".header-nav");
  btnMenu.addEventListener("click", function () {
    headerNav.classList.add("active");
  });
  btnCloseMenu.addEventListener("click", function () {
    headerNav.classList.remove("active");
  });
  // Thêm thông tin header top vào menu
  const media = window.matchMedia("(max-width: 991px)");
  const headerMenu = headerNav.querySelector(".header-menu");
  if (media.matches) {
    {
      const headerInfo = document.querySelector(".header-top").cloneNode(true);
      headerMenu.appendChild(headerInfo);
    }
  }
});
