import React from "react";

export const Icon = ({ fill, width }) => {
	return (
		<svg
			width={width}
			height={width}
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 17H0V15.5833H17V17ZM10.0158 13.5363L16.9717 6.375H12.0487V0H4.95833V6.375H0.0495833L6.99125 13.5363C7.395 13.9471 7.92625 14.1667 8.49292 14.1667C9.05958 14.1667 9.59792 13.9471 10.0017 13.5363H10.0158Z"
				fill={fill}
			/>
		</svg>
	);
};
