import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";
import { ExternalLink } from "@/components/icons";

interface Props {
	ArchiveNode: Queries.ArchiveNodeFragment;
	headingLevel?: 2 | 3;
}

const ArchivePostCard: FC<Props> = ({ ArchiveNode, headingLevel = 2 }) => {
	const HeadingTag = `h${headingLevel}` as const;
	return (
		<article className="mt-8 @md:flex @md:items-center">
			<div>
				<time className="inline-block pt-2 text-sm italic text-secondary" dateTime={ArchiveNode.frontmatter?.date || undefined}>
					{ArchiveNode.frontmatter?.date}
				</time>
			</div>
			<div className="ps-6 pe-6">
				<Link
					to={ArchiveNode.frontmatter?.externalLink || "#"}
					target="_blank"
					rel="noreferrer"
					variant="card"
					aria-label={`Visit external link: ${ArchiveNode.frontmatter?.title} (opens in new tab)`}
				>
					<HeadingTag className="text-xl font-semibold text-primary group-hover:text-accent-primary transition-colors">
						{ArchiveNode.frontmatter?.title} <ExternalLink />
					</HeadingTag>
				</Link>
				{ArchiveNode.frontmatter?.hasReview ? (
					<Link
						to={
							(ArchiveNode.frontmatter?.hasReview && ArchiveNode.fields?.slug) ||
							"#"
						}
						className="no-underline hover:underline"
						aria-label={`Read notes about: ${ArchiveNode.frontmatter?.title}`}
					>
						<div className="@md:flex">
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
		</article>
	);
};

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
