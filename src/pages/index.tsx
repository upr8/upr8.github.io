import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h2>Hello 👋!</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum
				ipsam earum expedita praesentium impedit dolorum at molestiae error
				voluptate dolore, consectetur quasi libero voluptates vero neque placeat
				facilis adipisci!
			</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
