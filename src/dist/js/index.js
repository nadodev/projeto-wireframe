const menuButtonClose = document.querySelector(".btn-mobileClose");
const btnMobile = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");

const menu = document.querySelector(".nav__list");
function menuMobile() {
  const menuButtonClose = document.querySelector(".btn-mobileClose");

  btnMobile.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.add("active");
    menuButtonClose.classList.add("active");
    btnMobile.classList.remove("active");
    btnMobile.style.display = "none";
    document.body.style.overflow = "hidden";
    header.classList.remove("active");
  });

  menuButtonClose.addEventListener("click", function (e) {
    e.preventDefault();
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
const menuLista = document.querySelectorAll("ul > li > a");

menuLista.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.remove("active");
    menuButtonClose.classList.remove("active");
    btnMobile.classList.add("active");
    btnMobile.style.display = "block";
    document.body.style.overflow = "auto";
  });
});

//add scroll in header on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
