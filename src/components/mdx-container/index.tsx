import { MDXProvider } from "@mdx-js/react";
import React, { type FC, type ReactNode } from "react";

import { postBody } from "./mdx.module.css";
import { mdxShortCodes } from "./shortcodes";
import { TableOfContentsList } from "./table-of-content";

interface Props {
	children: ReactNode;
	TableOfContents?: Queries.TableOfContentsFragment;
}

const MdxContainer: FC<Props> = ({ TableOfContents, children }) => {
	return (
		<div className={`${postBody} w-full mt-2 px-1 text-primary [unicode-bidi:bidi-override]`}>
			{TableOfContents && (
				<TableOfContentsList tableOfContents={TableOfContents} />
			)}
			<MDXProvider components={mdxShortCodes}>{children}</MDXProvider>
		</div>
	);
};

export default MdxContainer;
