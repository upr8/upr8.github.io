import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";
import Stars from "@/components/tags/stars";
import ContentCard from "./content-card";

interface Props {
	BookNode: Queries.BookNodeFragment;
}

const LibraryBookCard: FC<Props> = ({ BookNode }) => {
	const coverStyle = {
		backgroundImage:
			BookNode.frontmatter?.embeddedImagesLocal?.[0] !== null
				? `url(${BookNode.frontmatter?.embeddedImagesLocal?.[0].publicURL})`
				: "",
	};

	const titleContent = (
		<h2 className="text-2xl font-semibold leading-snug text-primary mb-2">
			{BookNode.frontmatter?.title}
			{BookNode.frontmatter?.rate && (
				<span className="ml-2 inline-block">
					<Stars rate={BookNode.frontmatter?.rate} />
				</span>
			)}
		</h2>
	);

	return (
		<ContentCard
			leftColumn={
				<>
					<div
						className="w-full h-48 @md:w-[120px] @md:h-[180px] bg-gray-400 bg-center bg-no-repeat bg-cover rounded shadow-sm"
						style={coverStyle}
						role="img"
						aria-label={`Cover image for ${BookNode.frontmatter?.title || "book"}`}
					/>
					<time
						className="block mt-2 text-sm font-medium tracking-wide text-accent-primary"
						dateTime={BookNode.frontmatter?.date || undefined}
					>
						{BookNode.frontmatter?.date}
					</time>
				</>
			}
			title={
				BookNode.frontmatter?.hasReview ? (
					<Link
						to={BookNode.fields?.slug || "#"}
						variant="card"
						aria-label={`Read review of ${BookNode.frontmatter?.title}`}
					>
						<div className="group-hover:text-accent-primary transition-colors">
							{titleContent}
						</div>
					</Link>
				) : (
					titleContent
				)
			}
			description={
				<p className="text-base leading-relaxed text-secondary">
					{BookNode.frontmatter?.desc}
				</p>
			}
			tags={
				BookNode.fields?.slugTagList ? (
					<TagList tags={BookNode.fields?.slugTagList} isCenter={false} />
				) : undefined
			}
		/>
	);
};

export default LibraryBookCard;

export const query = graphql`
    fragment BookNode on Mdx {
        id
        frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            lang
            desc
            rate
            hasReview
			embeddedImagesLocal {
				publicURL
			}
        }
        fields {
            slug
            ...Tags
        }
    }
`;
