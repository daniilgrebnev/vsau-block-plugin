import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	// Значение по умолчанию для email
	const { email = "" } = attributes;

	return (
		<form
			{...useBlockProps.save({
				id: "send_email",
				action: "#",
				className: "block_form_content",
			})}
		>
			<h2>Форма обращения абитуриентов</h2>

			<input
				{...useBlockProps.save({
					className: "block_form_content_disabled_input",
				})}
				disabled
				placeholder="Email"
				type="email"
				name="email"
				value={email}
			/>

			<input name="abit_fio" placeholder="ФИО" />
			<input name="abit_email" placeholder="Ваш E-mail" type="email" />

			<textarea
				name="abit_text"
				rows="5"
				placeholder="Ваше обращение"
			></textarea>
			<div
				{...useBlockProps.save({
					className: "block_form_content_button_container",
				})}
			>
				<button type="submit">Отправить</button>
			</div>
		</form>
	);
}
