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
  const media = window.matchMedia("('max-width: 991px')");
  if (media.matches) {
    {
      const headerInfo = document
        .querySelector(".header-top-left")
        .cloneNode(true);
      headerNav.appendChild(headerInfo);
    }
  }
});
