import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";

interface Props extends PageProps {
	data: Queries.Query;
}

const TagIndexTemplate: React.FC<Props> = ({ data }) => {
	return (
		<Layout>
			<article>
				<section>
					{data.blog.edges.map(
						({ node }): React.JSX.Element => (
							<ol key={node.id}>
								<li>{node.frontmatter?.title}</li>
								<li>{node.frontmatter?.desc}</li>
								<li>{node.frontmatter?.date}</li>
							</ol>
						),
					)}
				</section>
			</article>
		</Layout>
	);
};

export default TagIndexTemplate;

export const query = graphql`
    query ($tag: String!) {
        blog: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: true }
                    type: { eq: "blog" }
                }
            }
            sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    body
                }
            }
        }
    }
`;
