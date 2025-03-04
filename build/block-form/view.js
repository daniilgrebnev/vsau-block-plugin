/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/block-form/view.js ***!
  \********************************/
let isHandlerAdded = false; // Флаг для отслеживания добавления обработчика

const init = () => {
  const form = document.getElementById("send_email");
  if (form && !isHandlerAdded) {
    // Убираем стандартное поведение формы
    form.addEventListener("submit", event => {
      event.preventDefault(); // Отменяем стандартную отправку формы

      // Собираем данные из формы
      const formData = new FormData(form);

      // Преобразуем FormData в объект
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Добавляем email из disabled поля
      const disabledEmail = form.querySelector('input[name="email"]').value;
      data.email = disabledEmail;
      console.log("Form data:", data);

      // Валидация полей
      if (!data.abit_fio || !data.abit_email || !data.abit_text) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      // Отправляем данные на сервер
      sendHandler(data);
    });
    isHandlerAdded = true; // Устанавливаем флаг, чтобы обработчик не добавлялся снова
    console.log("Form handler added.");
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

// Определение URL для отправки
const sendHandler = data => {
  const host = window.location.hostname;
  let url;
  if (host === "localhost") {
    url = "http://verba.gurgurich.ru/wp-json/abit/v1/email";
  } else {
    url = window.location.href + "/wp-json/abit/v1/email";
  }
  sendRequest(url, data);
};

// Функция для отправки запроса
const sendRequest = (url, data) => {
  const submitButton = document.querySelector('#send_email button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true; // Отключаем кнопку отправки
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => {
    console.log("Response:", data.message);
    alert(data.message); // Показываем сообщение от сервера
  }).catch(error => {
    console.error("Error:", error);
    alert("Произошла ошибка при отправке формы.");
  }).finally(() => {
    if (submitButton) {
      submitButton.disabled = false; // Включаем кнопку отправки
    }
  });
};
/******/ })()
;
//# sourceMappingURL=view.js.map