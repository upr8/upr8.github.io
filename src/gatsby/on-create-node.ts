import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

// Transform nodes, each of logic inside here can be extracted to a separated plugin later.
const onCreateNode: GatsbyNode["onCreateNode"] = async ({
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
		if (node.frontmatter.tags) {
			const slugTagList: { tag: string; slug: string }[] = [];
			node.frontmatter.tags.forEach((tag: string) => {
				slugTagList.push({
					tag,
					slug: `/${node.frontmatter.lang}/tag/${tag}`,
				});
			});
			createNodeField({
				node,
				name: "slugtaglist",
				value: slugTagList,
			});
		}
	}
};

export { onCreateNode };
