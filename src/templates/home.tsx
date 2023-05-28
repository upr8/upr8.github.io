import * as React from "react";
import { PageProps } from "gatsby";
import MdxContainer from "../components/mdx-container";
import Layout from "../components/layout";
import { PageContext } from "../gatsby/types";

export { Head } from "../components/gatsby-head";

interface Props extends Omit<PageProps, "children"> {
	children: React.ReactNode;
	pageContext: PageContext;
}

const HomeTemplate: React.FC<Props> = ({ pageContext, children }) => {
	return (
		<Layout pageContext={pageContext}>
			<MdxContainer>{children}</MdxContainer>
		</Layout>
	);
};

export default HomeTemplate;
