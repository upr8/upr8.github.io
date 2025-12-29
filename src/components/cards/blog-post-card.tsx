import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";
import ContentCard from "./content-card";

interface Props {
	BlogNode: Queries.BlogNodeFragment;
	headingLevel?: 2 | 3;
}

const BlogPostCard: FC<Props> = ({ BlogNode, headingLevel = 2 }) => {
	const HeadingTag = `h${headingLevel}` as const;

	return (
		<ContentCard
			leftColumn={
				<time
					className="inline-block text-sm font-medium tracking-wide text-accent-primary"
					dateTime={BlogNode.frontmatter?.date || undefined}
				>
					{BlogNode.frontmatter?.date}
				</time>
			}
			title={
				<Link
					to={BlogNode.fields?.slug || "#"}
					variant="card"
					aria-label={`Read blog post: ${BlogNode.frontmatter?.title}`}
				>
					<HeadingTag className="text-2xl font-semibold leading-snug text-primary group-hover:text-accent-primary transition-colors mb-2">
						{BlogNode.frontmatter?.title}
					</HeadingTag>
				</Link>
			}
			description={
				<p className="text-base leading-relaxed text-secondary">
					{BlogNode.frontmatter?.desc}
				</p>
			}
			tags={
				BlogNode.fields?.slugTagList ? (
					<TagList tags={BlogNode.fields?.slugTagList} isCenter={false} />
				) : undefined
			}
		/>
	);
};

export default BlogPostCard;

export const query = graphql`
    fragment BlogNode on Mdx {
        id
        frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            lang
            desc
        }
        fields {
            slug
            ...Tags
        }
    }
`;
