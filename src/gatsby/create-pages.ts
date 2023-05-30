import path from "path";
import { GatsbyNode } from "gatsby";
import { Language } from "../states";
import {
	CreateAboutPageQueryResult,
	CreatePagesQueryResult,
	PageContext,
} from "./types";

const archiveTemplate = path.resolve("./src/templates/archive-index.tsx");
const libraryTemplate = path.resolve("./src/templates/library-index.tsx");
const blogTemplate = path.resolve("./src/templates/blog-index.tsx");
const postTemplate = path.resolve("./src/templates/blog-post.tsx");
const aboutTemplate = path.resolve("./src/templates/about.tsx");
const homeTemplate = path.resolve("./src/templates/home.tsx");
const tagTemplate = path.resolve("./src/templates/tag.tsx");

const homeMdx = path.resolve("./data/pages/home/index.en.mdx");

const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
	reporter,
}) => {
	const { createPage } = actions;

	const homePageContext: PageContext = {
		lang: Language.English,
		title: "/home/saeed",
		desc: "Hello 👋!",
		slug: "/",
	};
	createPage({
		path: "/",
		component: `${homeTemplate}?__contentFilePath=${homeMdx}`,
		context: homePageContext,
	});

	const blogIndexPageContext: PageContext = {
		lang: Language.English,
		title: "/dev/log",
		desc: "List of Blog posts",
		slug: "/en/blog",
	};

	createPage({
		path: "/en/blog",
		component: `${blogTemplate}`,
		context: blogIndexPageContext,
	});

	const archiveIndexPageContext: PageContext = {
		lang: Language.English,
		title: "$> find . -type l -ls",
		desc: "List of links",
		slug: "/en/archive",
	};

	createPage({
		path: "/en/archive",
		component: `${archiveTemplate}`,
		context: archiveIndexPageContext,
	});

	const libraryIndexPageContext: PageContext = {
		lang: Language.English,
		title: "$> ldconfig -p",
		desc: "List of book that I read",
		slug: "/en/library",
	};

	createPage({
		path: "/en/library",
		component: `${libraryTemplate}`,
		context: libraryIndexPageContext,
	});

	const aboutPageQueryResult: CreateAboutPageQueryResult = await graphql(`
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
	if (aboutPageQueryResult.errors) {
		reporter.panicOnBuild("🚨  ERROR: Loading about page query error");
	}
	const aboutNodes = aboutPageQueryResult.data?.allMdx.edges;
	if (aboutNodes) {
		aboutNodes.forEach(({ node }) => {
			if (node.fields?.slug) {
				const pageContext: PageContext = {
					lang: Language.English,
					slug: node.fields.slug,
					title: "$> who am i",
					desc: "About me",
				};
				createPage({
					path: "/en/about",
					component: `${aboutTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
					context: pageContext,
				});
			} else {
				reporter.panicOnBuild("🚨  ERROR: About Page without fields?");
			}
		});
	} else {
		reporter.panicOnBuild("🚨  ERROR: No About Page Found");
	}

	const pagesQueryResult: CreatePagesQueryResult = await graphql(`
        query {
            allMdx(filter: { frontmatter: {
								published: { eq: true },
								type: {ne: "single-page"} 
								}
							}
				)
			{
                edges {
                    node {
						frontmatter{
							title
							desc
							hasReview
						}
                        fields {
                            slug
							slugTagList {
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
	if (pagesQueryResult.errors) {
		reporter.panicOnBuild("🚨  ERROR: Loading createPostPages query errors");
	}
	const tagList = new Set();
	const createPagesNodes = pagesQueryResult.data?.allMdx.edges;
	if (createPagesNodes) {
		createPagesNodes.forEach(({ node }) => {
			if (node.fields?.slug && node.frontmatter?.title) {
				if (node.frontmatter?.hasReview !== false) {
					const pageContext: PageContext = {
						lang: Language.English,
						slug: node.fields.slug,
						title: node.frontmatter.title,
						desc: node.frontmatter.desc || "",
					};
					createPage({
						path: node.fields.slug,
						component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
						context: pageContext,
					});
				}
			} else {
				reporter.panicOnBuild("🚨  ERROR: Page without fields?");
			}
			node.fields?.slugTagList?.forEach(
				(slugtag: { tag: string; slug: string }) => {
					if (!tagList.has(slugtag.tag)) {
						tagList.add(slugtag.tag);
						const pageContext: PageContext = {
							lang: Language.English,
							tag: slugtag.tag,
							title: `#${slugtag.tag}`,
							desc: `List of content tagged with "${slugtag.tag}"`,
							slug: slugtag.slug,
						};
						createPage({
							path: slugtag.slug,
							component: `${tagTemplate}`,
							context: pageContext,
						});
					}
				},
			);
		});
	} else {
		reporter.panicOnBuild('🚨  ERROR: Empty "createPages" query result');
	}
};

export { createPages };
