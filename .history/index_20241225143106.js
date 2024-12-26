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
      headerInfo.classList.add("mobile");
      headerMenu.appendChild(headerInfo);
    }
  }
  // test
  const testPage = document.querySelector("#test");
  if (testPage) {
    const options = Array.from(
      document.querySelectorAll(".question-option label")
    );
    options.map((item, i, arr) => {
      item.addEventListener("click", function () {
        arr.forEach((label) => {
          label.classList.remove("active");
        });
        const input = item.querySelector("input");
        if (input.checked === true) {
          item.classList.add("active");
        }
      });
    });
  }
});
