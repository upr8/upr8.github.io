import React, { type FC, type ReactNode } from "react";
import type { PageProps } from "gatsby";

import MdxContainer from "@/components/mdx-container";
import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";

interface Props extends Omit<PageProps, "children"> {
	children: ReactNode;
	pageContext: PageContext;
}

const HomeTemplate: FC<Props> = ({ pageContext, children }) => {
	return (
		<Layout pageContext={pageContext}>
			<MdxContainer>{children}</MdxContainer>
		</Layout>
	);
};

export { Head } from "@/components/gatsby-head";
export default HomeTemplate;
