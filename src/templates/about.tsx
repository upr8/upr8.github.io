import React, { type FC, type ReactNode } from "react";
import { graphql, type PageProps } from "gatsby";

import MdxContainer from "@/components/mdx-container";
import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";

interface Props extends Omit<PageProps, "children"> {
	data: Queries.Query;
	children: ReactNode;
	pageContext: PageContext;
}

const AboutMeTemplate: FC<Props> = ({ pageContext, children }) => {
	return (
		<Layout pageContext={pageContext}>
			<MdxContainer>{children}</MdxContainer>
		</Layout>
	);
};

export default AboutMeTemplate;
export { Head } from "@/components/gatsby-head";

export const query = graphql`
    query ($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                lang
                desc
            }
            fields {
                slug
            }
        }
    }
`;
