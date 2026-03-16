import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	CheckboxControl,
	PanelBody,
	RadioControl,
	TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { tablePressId, withHead, headText = "", blockType = "white" } =
		attributes;

	// Инициализация headText, если он не задан

	return (
		<div
			{...useBlockProps({
				className: "block_switch_content",
			})}
		>
			<InspectorControls>
				<PanelBody title={__("Основные настройки")}>
					<TextControl
						label={__("ID TablePress")}
						value={tablePressId}
						onChange={(value) => setAttributes({ tablePressId: value })}
						placeholder={__("Введите id таблицы TablePress")}
					/>
					<CheckboxControl
						label={__("С заголовком")}
						checked={withHead}
						onChange={() => setAttributes({ withHead: !withHead })}
					/>
					<RadioControl
						label={__("Цвет")}
						options={[
							{ label: __("Синий"), value: "blue" },
							{ label: __("Белый"), value: "white" },
						]}
						selected={blockType}
						onChange={(value) => setAttributes({ blockType: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<RichText
				{...useBlockProps({
					className: `block_switch_content_head ${
						withHead ? "" : "d-none"
					}`,
				})}
				tagName="h2"
				value={headText}
				onChange={(value) => setAttributes({ headText: value })}
			/>

			<div>Таблица будет показана на фронтенде</div>
		</div>
	);
}
