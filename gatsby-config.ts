import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "",
		favIcon: "",
		siteUrl: "https://www.yourdomain.tld",
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
	],
};

export default config;
