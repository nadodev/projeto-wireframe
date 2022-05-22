const menuButtonClose = document.querySelector(".btn-mobileClose");
const btnMobile = document.querySelector(".btn-mobile");

const menu = document.querySelector(".nav__list");
function menuMobile() {
  const menuButtonClose = document.querySelector(".btn-mobileClose");

  btnMobile.addEventListener("click", function () {
    menu.classList.add("active");
    menuButtonClose.classList.add("active");
    btnMobile.classList.remove("active");
    btnMobile.style.display = "none";
    document.body.style.overflow = "hidden";
  });

  menuButtonClose.addEventListener("click", function () {
    menu.classList.remove("active");
    menuButtonClose.classList.remove("active");
    btnMobile.classList.add("active");
    btnMobile.style.display = "block";
    document.body.style.overflow = "auto";
  });
}
menuMobile();
const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    if (
      window.screen.width > 991 &&
      menuButtonClose.classList.contains("active")
    ) {
      menuButtonClose.classList.remove("active");
    } else if (window.screen.width < 991 && menu.classList.contains("active")) {
      menuButtonClose.classList.add("active");
    } else if (
      window.screen.width > 991 &&
      btnMobile.classList.contains("active")
    ) {
      btnMobile.classList.remove("active");
      btnMobile.style.display = "none";
    } else if (
      window.screen.width < 991 &&
      !menu.classList.contains("active") &&
      !menuButtonClose.classList.contains("active")
    ) {
      btnMobile.classList.add("active");
      btnMobile.style.display = "block";
    }
  });
});

resizeObserver.observe(document.querySelector(".nav__list"));
