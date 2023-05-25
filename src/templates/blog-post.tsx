import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MdxContainer from "../components/mdx-container";
import Layout from "../components/layout";

export { Head } from "../components/gatsby-head";

interface Props extends Omit<PageProps, "children"> {
	data: Queries.Query;
	children: React.ReactNode;
}

const BlogPostTemplate: React.FC<Props> = ({ data, children }) => {
	const post = data.mdx;

	return (
		<Layout>
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
