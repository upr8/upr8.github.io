import React, { type FC } from "react";
import { graphql } from "gatsby";

import Link from "@/components/link";
import { TagList } from "@/components/tags";
import Stars from "@/components/tags/stars";

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
	return (
		<article
			className="z-10 flex mx-4 mt-4 overflow-hidden border rounded-lg shadow-md border-primary"
			style={{
				width: "24rem",
				height: "16rem",
			}}
			aria-label={`Book: ${BookNode.frontmatter?.title || "Untitled"}`}
		>
			<div
				className="w-64 h-full bg-gray-500 bg-center bg-no-repeat bg-cover"
				style={coverStyle}
				role="img"
				aria-label={`Cover image for ${BookNode.frontmatter?.title || "book"}`}
			/>
			<div className="flex flex-col items-center justify-between w-full px-2">
				<p className="inline-block h-40 mt-2 overflow-hidden text-center text-primary">
					{BookNode.frontmatter?.desc}
				</p>
				<time className="inline-block pt-2 text-sm italic text-secondary" dateTime={BookNode.frontmatter?.date || undefined}>
					Read Date: {BookNode.frontmatter?.date}
				</time>
				{BookNode.frontmatter?.rate && (
					<Stars rate={BookNode.frontmatter?.rate} />
				)}
				{BookNode.fields?.slugTagList && (
					<TagList tags={BookNode.fields?.slugTagList} />
				)}
				<div className="h-8">
					{BookNode.frontmatter?.hasReview && (
						<Link
							variant="nav"
							className="mt-2 font-medium"
							to={BookNode.fields?.slug || "#"}
							aria-label={`Read review of ${BookNode.frontmatter?.title || "this book"}`}
						>
							Review
						</Link>
					)}
				</div>
			</div>
		</article>
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
