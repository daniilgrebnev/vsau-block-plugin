import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;
	return (
		<RichText
			{...useBlockProps({
				className: "block_text_content",
			})}
			tagName="div"
			value={content}
			onChange={(content) => setAttributes({ content })}
		/>
	);
}
