import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "@/components/layout";
import { PageContext } from "@/gatsby/types";
import { LibraryBookCard } from "@/components/cards";

export { Head } from "@/components/gatsby-head";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const LibraryIndexTemplate: React.FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section className="flex flex-wrap justify-around">
					{data.allMdx.edges.map(({ node }) => (
						<LibraryBookCard key={node.id} BookNode={node} />
					))}
				</section>
			</article>
		</Layout>
	);
};

export default LibraryIndexTemplate;

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
