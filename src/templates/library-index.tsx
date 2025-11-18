import React, { type FC } from "react";
import { type PageProps, graphql } from "gatsby";

import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import { LibraryBookCard } from "@/components/cards";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const LibraryIndexTemplate: FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section className="w-full flex flex-wrap justify-around">
					{data.allMdx.edges
						.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
						.map(({ node }) => (
							<LibraryBookCard key={node.id} BookNode={node} />
						))}
				</section>
			</article>
		</Layout>
	);
};

export default LibraryIndexTemplate;
export { Head } from "@/components/gatsby-head";

export const query = graphql`
    query ($lang: String!) {
        allMdx(
            filter: {
                frontmatter: {
                    published: { eq: true }
                    lang: { eq: $lang }
                    type: { eq: "book" }
                }
            }
			sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    ...BookNode
                }
            }
        }
    }
`;
