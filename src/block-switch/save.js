export default function save({ attributes }) {
	const tableShortcode = `[table id=${attributes.tablePressId.toString()}]`;

	return (
		<div className="block_switch_content_container">
			{/* Условный рендеринг для <h2> */}
			{attributes.withHead && (
				<div id="switch_arr" className="block_switch_content_head_container">
					<h2
						dangerouslySetInnerHTML={{ __html: attributes.headText }}
						className="block_switch_content_head"
					></h2>
					<span>
						<svg
							width="14"
							height="16"
							viewBox="0 0 14 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.1022 6.68484C14.1404 7.25427 14.1404 8.74573 13.1022 9.31517L2.72135 15.0089C1.72171 15.5572 0.500002 14.8338 0.500002 13.6937L0.500002 2.30629C0.500002 1.16616 1.72171 0.442842 2.72135 0.991129L13.1022 6.68484Z"
								fill="white"
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
