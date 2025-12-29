import React, { type FC } from "react";

interface Props {
	className?: string;
}

const Close: FC<Props> = ({ className = "w-6 h-6" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={className}
			aria-hidden="true"
		>
			<title>Close</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
};

export default Close;
