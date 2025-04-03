const init = () => {
	const switchArr = document.querySelectorAll("#switch_arr");
	const switch_hands = document.querySelectorAll("#switch_hand");

	if (switchArr) {
		switchArr.forEach((item, index) =>
			item.addEventListener("click", () => {
				const switch_hand = switch_hands[index];
				if (switch_hand) {
					switch_hand.classList.toggle("active");
				}
			}),
		);
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
		childList: true, // Наблюдаем за добавлением/удалением дочерних элементов
		subtree: true, // Наблюдаем за изменениями во всех поддеревьях
	});
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", observeDOM);
} else {
	observeDOM();
}
