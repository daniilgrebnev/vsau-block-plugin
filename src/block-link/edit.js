import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RadioControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Icon } from "./assets/Icon";
import "./common.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, url, blockType, withIcon } = attributes;

	return (
		<div
			{...useBlockProps({
				className: `block-link_content ${blockType}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__("Основные настройки")}>
					<RadioControl
						label={__("Цвет")}
						options={[
							{ label: __("Синий"), value: "blue" },
							{ label: __("Белый"), value: "white" },
						]}
						selected={blockType}
						onChange={(value) => setAttributes({ blockType: value })}
					/>

					<TextControl
						label={__("Ссылка")}
						value={url}
						onChange={(value) => setAttributes({ url: value })}
					/>
					<ToggleControl
						label={__("С иконкой")}
						checked={withIcon}
						onChange={() => setAttributes({ withIcon: !withIcon })}
					/>
				</PanelBody>
			</InspectorControls>
			{withIcon && (
				<Icon
					fill={blockType === "white" ? "#0f91d6" : "#fff"}
					width={20}
					onChange={(value) => setAttributes({ icon: value })}
				/>
			)}
			<RichText
				value={text}
				multiline={false}
				onChange={(value) => setAttributes({ text: value })}
				placeholder={__("Текст ссылки")}
			/>
		</div>
	);
}
