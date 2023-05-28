import { Edge } from "@/gatsby/types";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	// flags: {
	// 	DEV_SSR: true, //https://www.gatsbyjs.com/docs/debugging-html-builds/#ssr-during-gatsby-develop
	// },
	siteMetadata: {
		title: "Saeed Asaiyan",
		siteUrl: "https://www.asaiyan.com",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/data/`,
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1035,
							linkImagesToOriginal: false,
							// showCaptions: true,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Saeed Asaiyan",
				short_name: "Saeed",
				start_url: "/",
				background_color: "#f7f0eb",
				theme_color: "#a2466c",
				display: "standalone",
				icon: "static/images/favicon/favicon.svg",
				icon_options: {
					purpose: "any maskable",
				},
				cache_busting_mode: "none",
			},
		},
		{
			resolve: "gatsby-plugin-offline",
			options: {},
		},
		{
			resolve: "gatsby-plugin-feed",
			options: {
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
				}
				`,
				feeds: [
					{
						serialize: ({
							query: { site, allMdx },
						}: {
							query: {
								site: {
									siteMetadata: {
										siteUrl: string;
									};
								};
								allMdx: {
									edges: Array<Edge>;
								};
							};
						}) =>
							allMdx.edges.map(({ node }) => ({
								...node.frontmatter,
								date: node?.frontmatter?.date,
								description: node?.frontmatter?.desc,
								url: site.siteMetadata.siteUrl + node.fields?.slug,
								guid: site.siteMetadata.siteUrl + node.fields?.slug,
								custom_elements: [{ "content:encoded": node?.excerpt }],
							})),
						query: `
					{
						allMdx(
							limit: 1000,
							sort: {frontmatter: {date: DESC}},
							filter: { frontmatter: { type: { eq: "blog" }, published: { eq: true } } }
						) {
							edges {
								node {
									body
									fields {
										slug
									}
									frontmatter {
										date
										title
										desc
									}
									excerpt(pruneLength: 200)
								}
							}
						}
					}`,
						output: "/rss.xml",
						title: "Rss Feed",
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				query: `{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						nodes {
							path
						}
					}
				}`,
			},
		},
	],
};

export default config;
