import { useBlockProps } from "@wordpress/block-editor";
import "./common.scss";

export default function save({ attributes }) {
	const { text, url, blockType } = attributes;

	return (
		<a
			href={url}
			{...useBlockProps.save({
				className: `block-link_content ${blockType}`,
			})}
		>
			<Icon width={18} fill={blockType === "white" ? "#0f91d6" : "#fff"} />
			<p style={{ color: blockType === "white" ? "#0f91d6" : "#fff" }}>
				{text}
			</p>
		</a>
	);
}
