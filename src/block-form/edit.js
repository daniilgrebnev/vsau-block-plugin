import { __ } from "@wordpress/i18n";

import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { email } = attributes;
	return (
		<div
			{...useBlockProps({
				style: {
					backgroundColor: "#00000003",
				},
				className: "block_form_content_editor",
			})}
		>
			<InspectorControls>
				<PanelBody title={__("Основные настройки")}>
					<TextControl
						label={__("Почта")}
						value={email}
						onChange={(value) => setAttributes({ email: value })}
						placeholder={__("Введите email")}
					/>
				</PanelBody>
			</InspectorControls>
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

				<input disabled name="abit_fio" placeholder="ФИО" />
				<input
					disabled
					name="abit_email"
					placeholder="Ваш E-mail"
					type="email"
				/>

				<textarea
					disabled
					name="abit_text"
					rows="5"
					placeholder="Ваше обращение"
				></textarea>
				<div
					{...useBlockProps.save({
						disabled: true,
						className: "block_form_content_button_container",
					})}
				>
					<button disabled type="submit">
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
}
