import { RichText, useBlockProps } from "@wordpress/block-editor";

import { Icon } from "./assets/Icon";
import "./common.scss";
import "./style.scss";

export default function save({ attributes }) {
	const { text, url, blockType, withIcon } = attributes;

	return (
		<a
			href={url}
			{...useBlockProps.save({
				style: {
					color: blockType === "white" ? "#0f91d6" : "#fff",
				},
				className: `block-link_content ${blockType} front`,
			})}
		>
			{withIcon ? (
				<Icon
					className="icon"
					fill={blockType === "white" ? "#0f91d6" : "#fff"}
					width={20}
					height={20}
				/>
			) : (
				<></>
			)}
			<RichText.Content tagName="p" value={text} />
		</a>
	);
}
