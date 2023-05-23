import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import * as React from "react";

import { postBody } from "./mdx.module.css";

interface Props {
	children: React.ReactNode;
}
const shortcodes = { Link };

const MdxContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className={postBody}>
			<MDXProvider components={shortcodes}>{children}</MDXProvider>
		</div>
	);
};

export default MdxContainer;
