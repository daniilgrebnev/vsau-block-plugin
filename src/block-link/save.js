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
		></a>
	);
}
