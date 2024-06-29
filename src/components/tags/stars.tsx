import React, { type FC } from "react";

interface Props {
	rate: number;
}

const Stars: FC<Props> = ({ rate }) => (
	<ul className="flex flex-nowrap">
		{[...Array(5).keys()].map((i) => (
			<li key={i}>
				<svg
					className={`w-6 h-6 ${
						i < rate ? "text-yellow-400" : "text-transparent"
					} fill-current`}
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Star</title>
					<path
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						stroke="#4B5563"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</li>
		))}
	</ul>
);

export default Stars;
