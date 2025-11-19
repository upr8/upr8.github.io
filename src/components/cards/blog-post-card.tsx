import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";

interface Props {
	BlogNode: Queries.BlogNodeFragment;
	headingLevel?: 2 | 3;
}

const BlogPostCard: FC<Props> = ({ BlogNode, headingLevel = 2 }) => {
	const HeadingTag = `h${headingLevel}` as const;
	return (
		<article className="mt-8 @md:flex @md:items-center">
			<div>
				<time className="inline-block pt-2 text-sm italic text-secondary" dateTime={BlogNode.frontmatter?.date || undefined}>
					{BlogNode.frontmatter?.date}
				</time>
			</div>
			<div className="ps-6 pe-6">
				<Link to={BlogNode.fields?.slug || "#"} variant="card" aria-label={`Read blog post: ${BlogNode.frontmatter?.title}`}>
					<HeadingTag className="text-xl font-semibold text-primary group-hover:text-accent-primary transition-colors">
						{BlogNode.frontmatter?.title}
					</HeadingTag>
				</Link>
				<div className="">
					<p className="text-secondary">{BlogNode.frontmatter?.desc}</p>
					{BlogNode.fields?.slugTagList && (
						<TagList tags={BlogNode.fields?.slugTagList} isCenter={false} />
					)}
				</div>
			</div>
		</article>
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
