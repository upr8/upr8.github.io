import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MdxContainer from "../components/mdx-container";
import Layout from "../components/layout";
import { PageContext } from "../gatsby/types";

export { Head } from "../components/gatsby-head";

interface Props extends Omit<PageProps, "children"> {
	data: Queries.Query;
	children: React.ReactNode;
	pageContext: PageContext;
}

const BlogPostTemplate: React.FC<Props> = ({ pageContext, children }) => {
	return (
		<Layout pageContext={pageContext}>
			<MdxContainer>{children}</MdxContainer>
		</Layout>
	);
};

export default BlogPostTemplate;

export const query = graphql`
    query ($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
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
