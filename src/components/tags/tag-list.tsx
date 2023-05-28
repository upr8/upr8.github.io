import * as React from "react";
import { Link, graphql } from "gatsby";

interface Props {
	tags: readonly ({
		readonly tag: string | null;
		readonly slug: string | null;
	} | null)[];
}

const TagList: React.FC<Props> = ({ tags }) => {
	return (
		<ul className="flex flex-wrap items-baseline justify-center mt-2 ms-1 md:mt-0">
			{tags?.map((tag) => (
				<li
					key={tag?.tag}
					className="z-10 inline-block px-2 m-1 text-sm border-2 rounded-full shadow-sm bg-nav text-primary"
				>
					<Link to={`${tag?.slug}`}>#{tag?.tag}</Link>
				</li>
			))}
		</ul>
	);
};

export default TagList;

export const query = graphql`
    fragment Tags on MdxFields {
        slugTagList {
            tag
            slug
        }
    }
`;
