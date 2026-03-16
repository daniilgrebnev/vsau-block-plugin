export default function save({ attributes }) {
	const { tablePressId, blockType = "white", withHead, headText } = attributes;
	const tableShortcode = `[table id=${tablePressId.toString()}]`;

	return (
		<div className="block_switch_content_container">
			{/* Условный рендеринг для <h2> */}
			{withHead && (
				<div
					id="switch_arr"
					className={`block_switch_content_head_container ${blockType}`}
				>
					
					<h2
						dangerouslySetInnerHTML={{ __html: headText }}
						className="block_switch_content_head"
					></h2>
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

			<div
				className="switch_hand"
				id={attributes.withHead ? "switch_hand" : ""}
			>
				<div className="block_switch_content" style={{ position: "relative" }}>
					<div dangerouslySetInnerHTML={{ __html: tableShortcode }}></div>
				</div>
			</div>
		</div>
	);
}
