import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { Language } from "../states";
import { PageContext } from "../gatsby/types";

const IndexPage: React.FC<PageProps> = () => {
	const pageContext: PageContext = {
		lang: Language.English,
		title: "Home Page",
		desc: "Home page of personal website",
		slug: "/",
		cover: "",
	};
	return (
		<Layout pageContext={pageContext}>
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
