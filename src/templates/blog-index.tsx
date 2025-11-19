import React, { type FC } from "react";
import { type PageProps, graphql } from "gatsby";

import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import BlogCard from "@/components/cards/blog-post-card";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const BlogIndexTemplate: FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section className="w-full @container">
					{data.allMdx.edges
						.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
						.map(({ node }) => (
							<BlogCard key={node.id} BlogNode={node} />
						))}
				</section>
			</article>
		</Layout>
	);
};

export default BlogIndexTemplate;
export { Head } from "@/components/gatsby-head";

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
