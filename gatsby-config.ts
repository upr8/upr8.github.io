import { Edge } from "@/gatsby/types";
import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
	path: ".env",
});

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
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				// You can add multiple tracking ids and a pageView event will be fired for all of them.
				trackingIds: [process.env.GTAG],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageView hits from custom paths
					exclude: ["/preview/**", "/do-not-track/me/too/"],
				},
			},
		},
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
				mdxOptions: {
					remarkPlugins: [require("remark-gfm")],
				},
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1035,
							linkImagesToOriginal: false,
							// showCaptions: true,
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "files",
							ignoreFileExtensions: ["png", "jpg", "jpeg", "bmp", "tiff"],
						},
					},
					{
						resolve: "gatsby-remark-autolink-headers",
						options: {
							icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: "autolink-hdrs",
							removeAccents: true,
							isIconAfterHeader: true,
							elements: ["h2", "h3", "h4", "h5", "h6"],
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
				background_color: "#f5f5f5",
				theme_color: "#bfdbfe",
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
