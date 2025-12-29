import React, { type FC } from "react";

interface Props {
	link: string;
}

const Rss: FC<Props> = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" aria-label="Subscribe to RSS feed (opens in new tab)">
			<svg
				className="w-8 h-8 fill-current text-secondary"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<title>RSS Feed</title>
				<path d="M6.18 15.64a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36m12.18 4.36A14.38 14.38 0 0 0 4 5.64v3.09a11.28 11.28 0 0 1 11.27 11.27h3.09M13.09 20a9.27 9.27 0 0 0-9.09-9.09v3.09A6.18 6.18 0 0 1 10 20h3.09" />
			</svg>
		</a>
	);
};

export default Rss;
