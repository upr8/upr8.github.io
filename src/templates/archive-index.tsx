import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import { PageContext } from "../gatsby/types";
import { ArchivePostCard } from "../components/cards";

export { Head } from "../components/gatsby-head";

interface Props extends PageProps {
	data: Queries.Query;
	pageContext: PageContext;
}

const ArchiveIndexTemplate: React.FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section>
					{data.allMdx.edges.map(({ node }) => (
						<ArchivePostCard key={node.id} ArchiveNode={node} />
					))}
				</section>
			</article>
		</Layout>
	);
};

export default ArchiveIndexTemplate;

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
