import * as React from "react";
import { Link, type PageProps, graphql } from "gatsby";
import Layout from "@/components/layout";
import type { PageContext } from "@/gatsby/types";
import BlogCard from "@/components/cards/blog-post-card";
import { ArchivePostCard } from "@/components/cards";
import { LibraryBookCard } from "@/components/cards";

export { Head } from "@/components/gatsby-head";

interface Props extends PageProps {
	data: Queries.TagPageQuery;
	pageContext: PageContext;
}

const TagIndexTemplate: React.FC<Props> = ({ data, pageContext }) => {
	return (
		<Layout pageContext={pageContext}>
			<article>
				<section>
					<div className="mt-8 text-xl italic font-semibold text-secondary">
						{data.blog.totalCount > 0 ? (
							<>
								Posts in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/blog"
								>
									blog
								</Link>{" "}
								:
							</>
						) : (
							<>
								There is no post in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/blog"
								>
									blog
								</Link>{" "}
								with this tag.
							</>
						)}
					</div>
					{data.blog.edges.map(({ node }) => (
						<BlogCard key={node.id} BlogNode={node} />
					))}
				</section>
				<hr className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600" />
				<section>
					<div className="mt-8 text-xl italic font-semibold text-secondary">
						{data.library.totalCount > 0 ? (
							<>
								Books in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/library"
								>
									library
								</Link>
								:
							</>
						) : (
							<>
								There is no books in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/library"
								>
									library
								</Link>{" "}
								with this tag.
							</>
						)}
					</div>
					<div className="flex flex-wrap justify-around">
						{data.library.edges.map(({ node }) => (
							<LibraryBookCard key={node.id} BookNode={node} />
						))}
					</div>
				</section>
				<hr className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600" />
				<section>
					<div className="mt-8 text-xl italic font-semibold text-secondary">
						{data.archive.totalCount > 0 ? (
							<>
								Links in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/archive"
								>
									archive
								</Link>
								:
							</>
						) : (
							<>
								There is no link in my{" "}
								<Link
									className="underline underline-offset-4 hover:no-underline"
									to="/en/archive"
								>
									archive
								</Link>{" "}
								with this tag.
							</>
						)}
					</div>
					{data.archive.edges.map(({ node }) => (
						<ArchivePostCard key={node.id} ArchiveNode={node} />
					))}
				</section>
			</article>
		</Layout>
	);
};

export default TagIndexTemplate;

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
