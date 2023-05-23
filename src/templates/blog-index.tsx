import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";

interface Props extends PageProps {
	data: Queries.Query;
}

const BlogIndexTemplate: React.FC<Props> = ({ data }) => {
	return (
		<Layout>
			<article>
				<section>
					{data.allMdx.edges.map(
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

export default BlogIndexTemplate;

export const query = graphql`
    query {
        allMdx {
            totalCount
            edges {
                node {
                    frontmatter {
						title
						desc
						date
					}
                }
            }
        }
    }
`;
