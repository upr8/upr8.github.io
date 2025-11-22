import React, { type ReactNode } from "react";

interface ContentIndexProps {
	children: ReactNode;
}

/**
 * Shared index component for blog, library, and archive pages.
 * Provides consistent layout structure with container queries.
 */
const ContentIndex: React.FC<ContentIndexProps> = ({ children }) => {
	return (
		<article>
			<section className="w-full @container">{children}</section>
		</article>
	);
};

export default ContentIndex;
