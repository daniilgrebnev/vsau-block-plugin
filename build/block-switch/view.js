/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/block-switch/view.js ***!
  \**********************************/
const init = () => {
  const switchArr = document.getElementById("switch_arr");
  console.log(switchArr);
  if (switchArr) {
    switchArr.addEventListener("click", () => {
      const switch_hand = document.getElementById("switch_hand");
      if (switch_hand) {
        switch_hand.classList.toggle("active");
      }
    });
  }
};
const observeDOM = () => {
  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        init();
      }
    }
  });
  observer.observe(document.body, {
    childList: true,
    // Наблюдаем за добавлением/удалением дочерних элементов
    subtree: true // Наблюдаем за изменениями во всех поддеревьях
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", observeDOM);
} else {
  observeDOM();
}
/******/ })()
;
//# sourceMappingURL=view.js.map