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
		custom_elements: [{ "content:encoded": node?.excerpt }],
	}));

const createFeedQuery = (typeFilter: string) => `{
	allMdx(
		limit: 1000,
		sort: {frontmatter: {date: DESC}},
		filter: { frontmatter: { type: { ${typeFilter} }, published: { eq: true } } }
	) {
		edges {
			node {
				fields { slug }
				frontmatter { date, title, desc }
				excerpt(pruneLength: 200)
			}
		}
	}
}`;

const feeds = [
	{
		serialize,
		query: createFeedQuery('in: ["blog", "book", "archive"]'),
		output: "/rss.xml",
		title: "Saeed Asaiyan - All Updates",
	},
	{
		serialize,
		query: createFeedQuery('eq: "blog"'),
		output: "/blog/rss.xml",
		title: "Saeed Asaiyan - Blog",
	},
	{
		serialize,
		query: createFeedQuery('eq: "book"'),
		output: "/library/rss.xml",
		title: "Saeed Asaiyan - Library",
	},
	{
		serialize,
		query: createFeedQuery('eq: "archive"'),
		output: "/archive/rss.xml",
		title: "Saeed Asaiyan - Archive",
	},
];

export { feeds };
