import { useBlockProps } from "@wordpress/block-editor";
import { Icon } from "./assets/Icon";
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
			<Icon fill={blockType === "white" ? "#0f91d6" : "#fff"} width={18} />
			<p>{text}</p>
		</a>
	);
}
