import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: "block_text_content",
			})}
			value={attributes.content}
			tagName="div"
		/>
	);
}
