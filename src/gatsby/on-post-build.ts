import fs from "node:fs";
import path from "node:path";
import type { GatsbyNode } from "gatsby";

const RSS_FILES = [
	"en/rss.xml",
	"en/blog/rss.xml",
	"en/library/rss.xml",
	"en/archive/rss.xml",
];

const STYLESHEET_INSTRUCTION = '<?xml-stylesheet href="/rss.xsl" type="text/xsl"?>';

const onPostBuild: GatsbyNode["onPostBuild"] = async ({ graphql }) => {
	const result = await graphql<{
		site: { siteMetadata: { siteUrl: string } };
	}>(`
		query {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`);

	const siteUrl = result.data?.site.siteMetadata.siteUrl;
	if (!siteUrl) {
		console.warn("Could not get siteUrl from site metadata");
		return;
	}

	const publicDir = path.join(process.cwd(), "public");

	for (const rssFile of RSS_FILES) {
		const filePath = path.join(publicDir, rssFile);

		if (fs.existsSync(filePath)) {
			let content = fs.readFileSync(filePath, "utf8");

			const feedUrl = `${siteUrl}/${rssFile}`;

			// Insert stylesheet instruction after XML declaration
			content = content.replace(
				'<?xml version="1.0" encoding="UTF-8"?>',
				`<?xml version="1.0" encoding="UTF-8"?>\n${STYLESHEET_INSTRUCTION}`,
			);

			// Insert atom:link self-reference after <channel> opening
			const atomLink = `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`;
			content = content.replace(
				/<channel><title>/,
				`<channel>${atomLink}<title>`,
			);

			fs.writeFileSync(filePath, content);
			console.log(`Added XSL stylesheet and atom:link to ${rssFile}`);
		}
	}
};

export { onPostBuild };
