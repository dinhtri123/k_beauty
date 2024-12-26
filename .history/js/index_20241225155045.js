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
      document.querySelectorAll(".question-option label input")
    );
    options.map((item, i, arr) => {
      item.addEventListener("click", function () {
        arr.forEach((itemArr) => {
          if (!itemArr.checked) {
            itemArr.parentNode.classList.remove("active");
          }
        });
        if (item.checked) {
          item.parentNode.classList.add("active");
        }
      });
    });
    const question = document.querySelector(".befenit-question button");
    const popup = document.querySelector(".popup");
    const btnClosePopup = document.querySelector(".popup-btn-close");
    question.addEventListener("click", function () {
      popup.classList.add("active");
    });
    btnClosePopup.addEventListener("click", function () {
      popup.classList.add("active");
    });
  }
});
