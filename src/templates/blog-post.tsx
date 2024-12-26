import React, { type FC, type ReactNode } from "react";
import { graphql, type PageProps } from "gatsby";

import MdxContainer from "@/components/mdx-container";
import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import { TagList } from "@/components/tags";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

interface Props extends Omit<PageProps, "children"> {
	data: Queries.BlogPostQuery;
	children: ReactNode;
	pageContext: PageContext;
}

const BlogPostTemplate: FC<Props> = ({ data, pageContext, children }) => {
	const { enableTableOfContents } = useSiteMetadata();
	const toc =
		enableTableOfContents && data.mdx?.tableOfContents
			? {
					TableOfContents: data.mdx
						?.tableOfContents as Queries.TableOfContentsFragment,
				}
			: {};
	return (
		<Layout pageContext={pageContext}>
			<MdxContainer {...toc}>{children}</MdxContainer>
			{data.mdx?.fields?.slugTagList && (
				<div className="mt-32">
					<p className="mt-8 text-center text-secondary">Tags of this Post:</p>
					<TagList tags={data.mdx?.fields?.slugTagList} />
				</div>
			)}
		</Layout>
	);
};

export default BlogPostTemplate;
export { Head } from "@/components/gatsby-head";

export const query = graphql`
    query BlogPost($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                lang
                desc
            }
            fields {
                slug
                ...Tags
            }
            ...TableOfContents
        }
    }
`;
