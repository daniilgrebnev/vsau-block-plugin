/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/block-link/view.js ***!
  \********************************/
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".block-link_content");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#ff0000"; // Цвет при наведении
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = ""; // Возврат к исходному цвету
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map