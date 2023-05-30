import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

import { postBody } from "./mdx.module.css";
import { mdxShortCodes } from "./shortcodes";
import { TableOfContentsList } from "./table-of-content";

interface Props {
	children: React.ReactNode;
	TableOfContents?: any;
}

const MdxContainer: React.FC<Props> = ({ TableOfContents, children }) => {
	return (
		<div className={postBody}>
			{TableOfContents && (
				<TableOfContentsList tableOfContents={TableOfContents} />
			)}
			<MDXProvider components={mdxShortCodes}>{children}</MDXProvider>
		</div>
	);
};

export default MdxContainer;
