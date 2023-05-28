import React from "react";
import { Link, graphql } from "gatsby";

import { TagList } from "@/components/tags";

interface Props {
	ArchiveNode: Queries.ArchiveNodeFragment;
}

const ArchivePostCard: React.FC<Props> = ({ ArchiveNode }) => (
	<div className="mt-8 md:flex md:items-center ">
		<div>
			<p className="inline-block pt-2 text-sm italic text-secondary">
				{ArchiveNode.frontmatter?.date}
			</p>
		</div>
		<div className="ps-6 pe-6">
			<Link to={ArchiveNode.frontmatter?.externalLink || "#"}>
				<h3 className="text-xl font-semibold text-primary">
					{ArchiveNode.frontmatter?.title}
				</h3>
			</Link>
			<Link
				to={
					(ArchiveNode.frontmatter?.hasReview && ArchiveNode.fields?.slug) ||
					"#"
				}
			>
				<div className="md:flex">
					<p className="text-secondary">{ArchiveNode.frontmatter?.desc}</p>
					{ArchiveNode.fields?.slugTagList && (
						<TagList tags={ArchiveNode.fields?.slugTagList} />
					)}
				</div>
			</Link>
		</div>
	</div>
);

export default ArchivePostCard;

export const query = graphql`
    fragment ArchiveNode on Mdx {
        id
        frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            lang
            desc
            externalLink
            hasReview
        }
        fields {
            slug
            ...Tags
        }
    }
`;
