import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";
import { ExternalLink } from "@/components/icons";
import ContentCard from "./content-card";

interface Props {
	ArchiveNode: Queries.ArchiveNodeFragment;
	headingLevel?: 2 | 3;
}

const ArchivePostCard: FC<Props> = ({ ArchiveNode, headingLevel = 2 }) => {
	const HeadingTag = `h${headingLevel}` as const;

	const descriptionContent = (
		<p className="text-base leading-relaxed text-secondary">
			{ArchiveNode.frontmatter?.desc}
		</p>
	);

	const tagsContent = ArchiveNode.fields?.slugTagList ? (
		<TagList tags={ArchiveNode.fields?.slugTagList} isCenter={false} />
	) : undefined;

	return (
		<ContentCard
			leftColumn={
				<time
					className="inline-block text-base font-semibold tracking-wide text-accent-primary"
					dateTime={ArchiveNode.frontmatter?.date || undefined}
				>
					{ArchiveNode.frontmatter?.date}
				</time>
			}
			title={
				<Link
					to={ArchiveNode.frontmatter?.externalLink || "#"}
					target="_blank"
					rel="noreferrer"
					variant="card"
					aria-label={`Visit external link: ${ArchiveNode.frontmatter?.title} (opens in new tab)`}
				>
					<HeadingTag className="text-2xl font-semibold leading-snug text-primary group-hover:text-accent-primary transition-colors mb-2">
						{ArchiveNode.frontmatter?.title} <ExternalLink />
					</HeadingTag>
				</Link>
			}
			description={
				ArchiveNode.frontmatter?.hasReview ? (
					<Link
						to={(ArchiveNode.frontmatter?.hasReview && ArchiveNode.fields?.slug) || "#"}
						className="no-underline hover:underline"
						aria-label={`Read notes about: ${ArchiveNode.frontmatter?.title}`}
					>
						{descriptionContent}
					</Link>
				) : (
					descriptionContent
				)
			}
			tags={tagsContent}
		/>
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
