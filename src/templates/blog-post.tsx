import * as React from "react";
import { graphql, PageProps } from "gatsby";
import MdxContainer from "@/components/mdx-container";
import Layout from "@/components/layout";
import { PageContext } from "@/gatsby/types";
import { TagList } from "@/components/tags";

export { Head } from "@/components/gatsby-head";

interface Props extends Omit<PageProps, "children"> {
	data: Queries.BlogPostQuery;
	children: React.ReactNode;
	pageContext: PageContext;
}

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext, children }) => {
	const toc = data.mdx?.tableOfContents
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
