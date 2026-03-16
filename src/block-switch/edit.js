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

			{withHead && (
				<div
					className={`block_switch_content_head_container ${blockType}`}
				>
					<span className="block_switch_content_head_table_icon">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="4"
								y="6"
								width="16"
								height="12"
								rx="2"
								ry="2"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M4 10H20"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M10 6V18"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M14 6V18"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
						</svg>
					</span>
					<RichText
						tagName="h2"
						className="block_switch_content_head"
						value={headText}
						onChange={(value) => setAttributes({ headText: value })}
					/>
					<span className="block_switch_content_head_icon">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke={blockType === "white" ? "#0f91d6" : "#ffffff"}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</div>
			)}

			<div>Таблица будет показана на фронтенде</div>
		</div>
	);
}
