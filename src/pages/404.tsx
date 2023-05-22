import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className="p-24 font-sans text-gray-900">
			<h1 className="max-w-3xl mt-0 mb-16">Page not found</h1>
			<p className="mb-16">
				Sorry 😔, we couldn’t find what you were looking for.
				<br />
				Please <Link to="/">Go home</Link>.
			</p>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
