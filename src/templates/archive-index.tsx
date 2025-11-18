import React, { type FC } from "react";
import { type PageProps, graphql } from "gatsby";

import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import { ArchivePostCard } from "@/components/cards";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const ArchiveIndexTemplate: FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section className="w-full">
					{data.allMdx.edges
						.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
						.map(({ node }) => (
							<ArchivePostCard key={node.id} ArchiveNode={node} />
						))}
				</section>
			</article>
		</Layout>
	);
};

export default ArchiveIndexTemplate;
export { Head } from "@/components/gatsby-head";

export const query = graphql`
    query ($lang: String!) {
        allMdx(
            filter: {
                frontmatter: {
                    published: { eq: true }
                    lang: { eq: $lang }
                    type: { eq: "archive" }
                }
            }
            sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    ...ArchiveNode
                }
            }
        }
    }
`;
