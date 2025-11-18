import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	a11yLight as lightTheme,
	a11yDark as darkTheme,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SiteContext, Theme } from "@/states";

interface Props {
	className: string;
	children: string;
}

const CodeWithHighlight = ({ className, children }: Props) => {
	const match = /language-(\w+)/.exec(className || "");
	const { state } = React.useContext(SiteContext);
	return match ? (
		<SyntaxHighlighter
			language={match[1]}
			PreTag="div"
			wrapLongLines={false}
			showLineNumbers={false}
			style={state.theme === Theme.Dark ? darkTheme : lightTheme}
			customStyle={{ marginTop: "0.5em" }}
		>
			{children.trimEnd()}
		</SyntaxHighlighter>
	) : (
		<code className={`bg-nav rounded-md px-1 ${className}`}>{children}</code>
	);
};

export default CodeWithHighlight;
