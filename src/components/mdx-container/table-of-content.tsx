// https://github.com/NickyMeuleman/gatsby-theme-nicky-blog/blob/fe66d8908f477fea71cdfd0d3d1b59940a7d2ba1/theme/src/components/TagListPage.tsx
import React from "react";
import { useActiveId } from "@/hooks/use-active-id";
import { graphql } from "gatsby";

export interface TableOfContents {
	items: TableOfContentsItem[];
}

export interface TableOfContentsItem {
	url?: string;
	title?: string;
	items?: TableOfContentsItem[];
}

interface Props {
	tableOfContents: TableOfContents;
}

function getIds(items: TableOfContentsItem[]) {
	return items.reduce<string[]>((acc, item) => {
		if (item.url) {
			// url has a # as first character, remove it and add the raw CSS-id
			acc.push(item.url.slice(1));
		}
		if (item.items) {
			acc.push(...getIds(item.items));
		}
		return acc;
	}, []);
}

function renderItems(
	items: TableOfContentsItem[],
	activeId: string,
	isRecursiveCall?: boolean,
) {
	return (
		<ol className={`p-2 list-none ${isRecursiveCall ? "ps-8" : ""}`}>
			{items.map((item) => {
				if (!item.url) {
					return null;
				}
				return (
					<li key={item.url} className={isRecursiveCall ? "mt-1" : "mt-2"}>
						<a
							href={item.url}
							className={`${
								activeId === item.url.slice(1)
									? "text-primary"
									: "text-secondary"
							}`}
						>
							{item.title}
						</a>
						{item.items && renderItems(item.items, activeId, true)}
					</li>
				);
			})}
		</ol>
	);
}

const TableOfContentsList: React.FC<Props> = ({ tableOfContents }) => {
	const { items } = tableOfContents;
	if (!items) {
		return <></>;
	}
	const activeId = useActiveId(getIds(items));
	return (
		<section>
			<div className="text-3xl font-semibold text-primary">
				Table of contents
			</div>
			<div className="ps-2">{renderItems(items, activeId)}</div>
		</section>
	);
};

export const TableOfContents = graphql`
    fragment TableOfContents on Mdx {
        tableOfContents
    }
`;

export { TableOfContentsList };
