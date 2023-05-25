import path from "path";
import { GatsbyNode } from "gatsby";
import { Language } from "../states";

const postTemplate = path.resolve("./src/templates/blog-post.tsx");
const aboutTemplate = path.resolve("./src/templates/about.tsx");
const tagTemplate = path.resolve("./src/templates/tag.tsx");

const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
	reporter,
}) => {
	const { createPage } = actions;

	createPage({
		path: "/en/blog",
		component: path.resolve("./src/templates/blog-index.tsx"),
		context: { lang: Language.English },
	});

	const aboutPage = await graphql(`
		query {
			allMdx(
				filter: {
					frontmatter: {
							published: {eq: true},
							type: {eq: "single-page"},
							title: {eq: "About me"}
							}
					}
			) {
				edges {
					node {
						fields {
							slug
						}
						internal {
							contentFilePath
						}
					}
				}
			}
		}
	`);
	if (aboutPage.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "about" query');
	}
	aboutPage.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: "/en/about",
			component: `${aboutTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				lang: Language.English,
				slug: node.fields.slug,
			},
		});
	});

	const result = await graphql(`
        query {
            allMdx(filter: { frontmatter: { published: { eq: true }, type: {ne: "single-page"} } }) {
                edges {
                    node {
                        fields {
                            slug
							slugtaglist {
                                tag
                                slug
                            }
                        }
						internal {
							contentFilePath
						}
                    }
                }
            }
        }
    `);
	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}
	const tagList = new Set();
	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				lang: Language.English,
				slug: node.fields.slug,
			},
		});
		node.fields.slugtaglist?.forEach(
			(slugtag: { tag: string; slug: string }) => {
				if (!tagList.has(slugtag.tag)) {
					tagList.add(slugtag.tag);
					createPage({
						path: slugtag.slug,
						component: `${tagTemplate}`,
						context: {
							lang: Language.English,
							tag: slugtag.tag,
						},
					});
				}
			},
		);
	});
};

export { createPages };
