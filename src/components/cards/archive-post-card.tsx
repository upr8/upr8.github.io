import React from "react";
import { Link, graphql } from "gatsby";

import { TagList } from "@/components/tags";
import { ExternalLink } from "@/components/icons";

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
			<Link to={ArchiveNode.frontmatter?.externalLink || "#"} target="_blank">
				<h3 className="text-xl font-semibold text-primary">
					{ArchiveNode.frontmatter?.title} <ExternalLink />
				</h3>
			</Link>
			{ArchiveNode.frontmatter?.hasReview ? (
				<Link
					to={
						(ArchiveNode.frontmatter?.hasReview && ArchiveNode.fields?.slug) ||
						"#"
					}
				>
					<div className="md:flex">
						<p className="text-secondary">{ArchiveNode.frontmatter?.desc}</p>
						{ArchiveNode.fields?.slugTagList && (
							<TagList
								tags={ArchiveNode.fields?.slugTagList}
								isCenter={false}
							/>
						)}
					</div>
				</Link>
			) : (
				<div className="">
					<p className="text-secondary">{ArchiveNode.frontmatter?.desc}</p>
					{ArchiveNode.fields?.slugTagList && (
						<TagList tags={ArchiveNode.fields?.slugTagList} isCenter={false} />
					)}
				</div>
			)}
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
