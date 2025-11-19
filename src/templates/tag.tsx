import React, { type FC } from "react";
import { type PageProps, graphql } from "gatsby";

import Link from "@/components/link";
import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import BlogCard from "@/components/cards/blog-post-card";
import { ArchivePostCard } from "@/components/cards";
import { LibraryBookCard } from "@/components/cards";

interface Props extends PageProps {
	data: Queries.TagPageQuery;
	pageContext: PageContext;
}

const TagIndexTemplate: FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section>
					<h2 className="mt-8 text-xl italic font-semibold text-secondary">
						{data.blog.totalCount > 0 ? (
							<>
								Posts in my{" "}
								<Link variant="underline" to="/en/blog">
									blog
								</Link>{" "}
								:
							</>
						) : (
							<>
								There is no post in my{" "}
								<Link variant="underline" to="/en/blog">
									blog
								</Link>{" "}
								with this tag.
							</>
						)}
					</h2>
					{data.blog.edges
						.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
						.map(({ node }) => (
							<BlogCard key={node.id} BlogNode={node} headingLevel={3} />
						))}
				</section>
				<hr className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600" />
				<section>
					<h2 className="mt-8 text-xl italic font-semibold text-secondary">
						{data.library.totalCount > 0 ? (
							<>
								Books in my{" "}
								<Link variant="underline" to="/en/library">
									library
								</Link>
								:
							</>
						) : (
							<>
								There is no books in my{" "}
								<Link variant="underline" to="/en/library">
									library
								</Link>{" "}
								with this tag.
							</>
						)}
					</h2>
					<div className="flex flex-wrap justify-around">
						{data.library.edges
							.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
							.map(({ node }) => (
								<LibraryBookCard key={node.id} BookNode={node} />
							))}
					</div>
				</section>
				<hr className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600" />
				<section>
					<h2 className="mt-8 text-xl italic font-semibold text-secondary">
						{data.archive.totalCount > 0 ? (
							<>
								Links in my{" "}
								<Link variant="underline" to="/en/archive">
									archive
								</Link>
								:
							</>
						) : (
							<>
								There is no link in my{" "}
								<Link variant="underline" to="/en/archive">
									archive
								</Link>{" "}
								with this tag.
							</>
						)}
					</h2>
					{data.archive.edges
						.filter(({ node }) => node.frontmatter?.lang === pageContext.lang)
						.map(({ node }) => (
							<ArchivePostCard key={node.id} ArchiveNode={node} headingLevel={3} />
						))}
				</section>
			</article>
		</Layout>
	);
};

export default TagIndexTemplate;
export { Head } from "@/components/gatsby-head";

export const query = graphql`
    query TagPage($tag: String!) {
        blog: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: true }
                    type: { eq: "blog" }
                }
            }
            sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    ...BlogNode
                }
            }
        }
        library: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: true }
                    type: { eq: "book" }
                }
            }
            sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    ...BookNode
                }
            }
        }
        archive: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: true }
                    type: { eq: "archive" }
                }
            }
            sort: {frontmatter: {date: DESC}}
        ) {
            totalCount
            edges {
                node {
                    ...ArchiveNode
                }
            }
        }
    }
`;
