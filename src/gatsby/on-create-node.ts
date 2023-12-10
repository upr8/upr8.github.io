import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

import * as types from "./types";

// Transform nodes, each of logic inside here can be extracted to a separated plugin later.
const onCreateNode: GatsbyNode["onCreateNode"] = async ({
	node,
	actions,
	getNode,
}) => {
	const { createNodeField } = actions;

	if (node.internal.type === "Mdx") {
		const { frontmatter }: types.Edge["node"] = node;

		const slugPath = createFilePath({ node, getNode, basePath: "pages" });
		const slugPlain = slugPath.split(".")[0].replace(/\/index$/i, "");
		createNodeField({
			node,
			name: "slugPlain",
			value: slugPlain,
		});
		if (frontmatter) {
			createNodeField({
				node,
				name: "slug",
				value: `/${frontmatter.lang}${slugPlain}`,
			});
		} else {
			createNodeField({
				node,
				name: "slug",
				value: `/${slugPlain}`,
			});
		}

		if (frontmatter?.tags) {
			const slugTagList: { tag: string; slug: string }[] = [];
			for (const tag of frontmatter.tags) {
				slugTagList.push({
					tag,
					slug: `/${frontmatter.lang}/tag/${tag}`,
				});
			}
			createNodeField({
				node,
				name: "slugTagList",
				value: slugTagList,
			});
		}
	}
};

export { onCreateNode };
