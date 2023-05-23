import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import * as React from "react";

interface Props {
	children: React.ReactNode;
}
const shortcodes = { Link };

const MdxContainer: React.FC<Props> = ({ children }) => {
	return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
};

export default MdxContainer;
