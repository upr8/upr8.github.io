import React, { type FC } from "react";
import { Link, graphql } from "gatsby";

import { TagList } from "@/components/tags";

interface Props {
	BlogNode: Queries.BlogNodeFragment;
}

const BlogPostCard: FC<Props> = ({ BlogNode }) => (
	<article className="mt-8 md:flex md:items-center ">
		<div>
			<time className="inline-block pt-2 text-sm italic text-secondary" dateTime={BlogNode.frontmatter?.date || undefined}>
				{BlogNode.frontmatter?.date}
			</time>
		</div>
		<div className="ps-6 pe-6">
			<Link to={BlogNode.fields?.slug || "#"} aria-label={`Read blog post: ${BlogNode.frontmatter?.title}`}>
				<h3 className="text-xl font-semibold">
					{BlogNode.frontmatter?.title}
				</h3>
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
