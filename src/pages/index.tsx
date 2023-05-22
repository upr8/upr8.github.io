import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<p className="text-3xl font-bold">Hello 👋!</p>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
