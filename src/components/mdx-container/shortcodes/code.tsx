import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	solarizedDark,
	solarizedLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SiteContext, Theme } from "../../../states";

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
			wrapLongLines={true}
			showLineNumbers={true}
			style={state.theme === Theme.Dark ? solarizedDark : solarizedLight}
		>
			{children}
		</SyntaxHighlighter>
	) : (
		<code className={className}>{children}</code>
	);
};

export default CodeWithHighlight;
