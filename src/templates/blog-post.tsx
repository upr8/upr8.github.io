import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MdxContainer from "../components/mdx-container";
import Layout from "../components/layout";

interface Props extends PageProps {
	data: Queries.Query;
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
	const post = data.mdx;

	return (
		<Layout>
			<MdxContainer>{post?.body}</MdxContainer>
		</Layout>
	);
};

export default BlogPostTemplate;

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
