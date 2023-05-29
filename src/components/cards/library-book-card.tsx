import React from "react";
import { Link, graphql } from "gatsby";

import { TagList } from "@/components/tags";
import Stars from "@/components/tags/stars";

interface Props {
	BookNode: Queries.BookNodeFragment;
}

const LibraryBookCard: React.FC<Props> = ({ BookNode }) => {
	const coverStyle = {
		backgroundImage:
			BookNode.frontmatter?.embeddedImagesLocal?.[0] !== null
				? `url(${BookNode.frontmatter?.embeddedImagesLocal?.[0].publicURL})`
				: "",
	};
	return (
		<div
			className="z-10 flex mx-4 mt-4 overflow-hidden border rounded-lg shadow-md border-primary"
			style={{
				width: "24rem",
				height: "16rem",
			}}
		>
			<div
				className="w-64 h-full bg-gray-500 bg-center bg-no-repeat bg-cover"
				style={coverStyle}
			/>
			<div className="flex flex-col items-center justify-between w-full px-2">
				<p className="inline-block h-40 mt-2 overflow-hidden text-center text-primary">
					{BookNode.frontmatter?.desc}
				</p>
				<div className="inline-block pt-2 text-sm italic text-secondary">
					Read Date: {BookNode.frontmatter?.date}
				</div>
				{BookNode.frontmatter?.rate && (
					<Stars rate={BookNode.frontmatter?.rate} />
				)}
				{BookNode.fields?.slugTagList && (
					<TagList tags={BookNode.fields?.slugTagList} />
				)}
				<div className="h-8">
					{BookNode.frontmatter?.hasReview && (
						<Link
							className="mt-2 text-primary"
							to={BookNode.fields?.slug || "#"}
						>
							Review
						</Link>
					)}
				</div>
			</div>
		</div>
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
