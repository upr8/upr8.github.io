import type { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
	({ actions }) => {
		const { createTypes } = actions;

		createTypes(`
    type SiteSiteMetadata {
      title: String
      siteUrl: String
      linkedin: String
      github: String
      enableTableOfContents: Boolean
    }
  `);
	};
