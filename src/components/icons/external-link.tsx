import React, { type FC } from "react";

interface Props {
	isInline?: boolean;
}

const ExternalLink: FC<Props> = ({ isInline = true }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={isInline ? "inline-block" : ""}
		>
			<title>ExternalLink</title>
			<path
				d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9"
				stroke="#666"
				strokeWidth="1.5"
				fill="none"
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ExternalLink;
