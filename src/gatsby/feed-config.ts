import type { Edge } from "./types";

interface FeedQuery {
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
}

const serialize = ({ query: { site, allMdx } }: FeedQuery) =>
	allMdx.edges.map(({ node }) => ({
		title: node.frontmatter?.title,
		date: node.frontmatter?.date,
		description: node.frontmatter?.desc,
		url: site.siteMetadata.siteUrl + node.fields?.slug,
		guid: site.siteMetadata.siteUrl + node.fields?.slug,
		custom_elements: [
			{
				"content:encoded":
					node.frontmatter?.hasReview === false ? "" : node?.excerpt,
			},
		],
	}));

const createFeedQuery = (typeFilter: string, lang: string) => `{
	allMdx(
		limit: 1000,
		sort: {frontmatter: {date: DESC}},
		filter: { frontmatter: { type: { ${typeFilter} }, lang: { eq: "${lang}" }, published: { eq: true } } }
	) {
		edges {
			node {
				fields { slug }
				frontmatter { date, title, desc, hasReview }
				excerpt(pruneLength: 200)
			}
		}
	}
}`;

const createFeeds = (siteUrl: string) => [
	{
		serialize,
		query: createFeedQuery('in: ["blog", "book", "archive"]', "en"),
		output: "/en/rss.xml",
		title: "Saeed Asaiyan - All Updates",
		site_url: `${siteUrl}/en`,
	},
	{
		serialize,
		query: createFeedQuery('eq: "blog"', "en"),
		output: "/en/blog/rss.xml",
		title: "Saeed Asaiyan - Blog",
		site_url: `${siteUrl}/en/blog`,
	},
	{
		serialize,
		query: createFeedQuery('eq: "book"', "en"),
		output: "/en/library/rss.xml",
		title: "Saeed Asaiyan - Library",
		site_url: `${siteUrl}/en/library`,
	},
	{
		serialize,
		query: createFeedQuery('eq: "archive"', "en"),
		output: "/en/archive/rss.xml",
		title: "Saeed Asaiyan - Archive",
		site_url: `${siteUrl}/en/archive`,
	},
];

export { createFeeds };
