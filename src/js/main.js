AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".nav-menu__burger-btn");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".nav-menu-list__link");
  const screenWidth = window.screen.width;

  const toggleOpenClass = () => {
    header.classList.toggle("open");
  };

  burgerButton.addEventListener("click", toggleOpenClass);

  links.forEach((link) => {
    if (screenWidth <= 610) {
      link.addEventListener("click", toggleOpenClass);
    }
  });
});
