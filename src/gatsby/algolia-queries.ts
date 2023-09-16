import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { CreatePagesQueryResult, Edge } from "./types";

const indexName = "Pages";

const pageQuery = `{
    allMdx(
        filter: {
            frontmatter: {
                published: { eq: true },
                type: {ne: "single-page"},
                hasReview: {ne: false}
            }
        }
    ) {
        edges {
            node {
                id
                frontmatter {
                    title
                    desc
                }
                fields {
                    slug
                }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`;

function pageToAlgoliaRecord(edgeNode: Edge) {
	return {
		objectID: edgeNode.node.id,
		title: edgeNode.node.frontmatter?.title,
		description: edgeNode.node.frontmatter?.desc,
		slug: edgeNode.node.fields?.slug,
		excerpt: edgeNode.node.excerpt,
	};
}

const queries = [
	{
		query: pageQuery,
		transformer: ({ data }: CreatePagesQueryResult) =>
			data?.allMdx?.edges?.map(pageToAlgoliaRecord),
		indexName,
		settings: { attributesToSnippet: ["excerpt:20"] },
	},
];

module.exports = queries;
