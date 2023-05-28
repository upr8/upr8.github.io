import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "@/components/layout";
import { PageContext } from "@/gatsby/types";
import BlogCard from "@/components/cards/blog-post-card";

export { Head } from "@/components/gatsby-head";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const BlogIndexTemplate: React.FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section>
					{data.allMdx.edges.map(({ node }) => (
						<BlogCard key={node.id} BlogNode={node} />
					))}
				</section>
			</article>
		</Layout>
	);
};

export default BlogIndexTemplate;

export const query = graphql`
    query {
        allMdx(
			filter: {
				frontmatter: {
					published: {eq: true},
					type: {eq: "blog"}
					}
				}
			sort: {frontmatter: {date: DESC}}
			) {
            totalCount
            edges {
                node {
                    ...BlogNode
                }
            }
        }
    }
`;
