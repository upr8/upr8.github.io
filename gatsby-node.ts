import path from "path";
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

// Transform nodes, each of logic inside here can be extracted to a separated plugin later.
export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
	node,
	actions,
	getNode,
}) => {
	const { createNodeField } = actions;

	if (node.internal.type === "Mdx") {
		const slugPath = createFilePath({ node, getNode, basePath: "pages" });
		const slugPlain = slugPath.split(".")[0].replace(/\/index$/i, "");
		createNodeField({
			node,
			name: "slugPlain",
			value: slugPlain,
		});
		const slug = `/${node.frontmatter.lang}${slugPlain}`;
		createNodeField({
			node,
			name: "slug",
			value: slug,
		});
	}
};

export const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
	reporter,
}) => {
	const { createPage } = actions;

	createPage({
		path: "/en/blog",
		component: path.resolve("./src/templates/blog-index.tsx"),
		context: { lang: "en" },
	});

	const result = await graphql(`
        query {
            allMdx(filter: { frontmatter: { published: { eq: true } } }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}
	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve("./src/templates/blog-post.tsx"),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
