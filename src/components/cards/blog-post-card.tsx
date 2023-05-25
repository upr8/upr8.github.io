import React from "react";
import { Link, graphql } from "gatsby";

import { TagList } from "../tags";

interface Props {
	BlogNode: Queries.BlogNodeFragment;
}

const BlogPostCard: React.FC<Props> = ({ BlogNode }) => (
	<div className="mt-8 md:flex md:items-center ">
		<div>
			<p className="inline-block pt-2 text-sm italic text-secondary">
				{BlogNode.frontmatter?.date}
			</p>
		</div>
		<div className="ps-6 pe-6">
			<Link to={BlogNode.fields?.slug || "#"}>
				<h3 className="text-xl font-semibold text-primary">
					{BlogNode.frontmatter?.title}
				</h3>
			</Link>
			<div className="md:flex">
				<p className="text-secondary">{BlogNode.frontmatter?.desc}</p>
				{BlogNode.fields?.slugTagList && (
					<TagList tags={BlogNode.fields?.slugTagList} />
				)}
			</div>
		</div>
	</div>
);

export default BlogPostCard;

export const query = graphql`
    fragment BlogNode on Mdx {
        id
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
    }
`;
