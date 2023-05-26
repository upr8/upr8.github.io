import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

import { postBody } from "./mdx.module.css";
import { mdxShortCodes } from "./shortcodes";

interface Props {
	children: React.ReactNode;
}

const MdxContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className={postBody}>
			<MDXProvider components={mdxShortCodes}>{children}</MDXProvider>
		</div>
	);
};

export default MdxContainer;
