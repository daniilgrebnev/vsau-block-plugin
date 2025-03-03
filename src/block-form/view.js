let clickHandler = null; // Храним ссылку на обработчик

const init = () => {
	const form = document.getElementById("send_email");
	if (form) {
		// Если обработчик уже есть, удаляем его
		if (clickHandler) {
			form.removeEventListener("submit", clickHandler);
		}

		// Создаём новый обработчик
		clickHandler = () => {
			console.log("Submit form");
			sendHandler();
		};

		// Добавляем новый обработчик
		form.addEventListener("submit", clickHandler);
	}
};

const observeDOM = () => {
	const observer = new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === "childList") {
				init();
			}
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", observeDOM);
} else {
	observeDOM();
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", observeDOM);
} else {
	observeDOM();
}

// Определение URL для отправки
const sendHandler = () => {
	const host = window.location.hostname;
	let url;

	if (host === "localhost") {
		url = "http://verba.gurgurich.ru/wp-json/abit/v1/email";
	} else {
		url = window.location.href + "/wp-json/abit/v1/email";
	}
	sendRequest(url);
};

// Формирование запроса

const sendRequest = (url) => {
	const req = {
		email: "danilgrebneff@yandex.ru",
		abit_email: "student@example.com",
		abit_fio: "Гребнев Даниил Александрович",
		abit_text:
			"Здравствуйте! Я хотел бы уточнить информацию о поступлении на факультет компьютерных наук. Какие документы необходимы для подачи заявления?",
	};

	sendFetch(url, req);
};

// Функция для отправки запроса
const sendFetch = (url, req) => {
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data.message);
		})
		.catch((error) => console.error(error));
};
