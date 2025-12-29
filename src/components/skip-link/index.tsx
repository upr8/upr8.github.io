import React, { type FC } from "react";

const SkipLink: FC = () => {
	return (
		<a
			href="#main-content"
			className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-nav focus:text-primary focus:rounded focus:outline-2 focus:outline-offset-2 focus:outline-accent-primary"
		>
			Skip to main content
		</a>
	);
};

export default SkipLink;
