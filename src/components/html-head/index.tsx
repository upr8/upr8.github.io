import * as React from "react";
import Helmet from "react-helmet";
import { PageContext } from "@/gatsby/types";
import { Language, SiteContext, Theme } from "@/states";

interface Props {
	pageContext: PageContext;
}

const HtmlHead: React.FC<Props> = ({ pageContext }) => {
	const { state } = React.useContext(SiteContext);
	return (
		<Helmet>
			<body
				className={`${
					state.theme === Theme.Light ? "body-theme-light" : "body-theme-dark"
				} bg-body ${
					pageContext.lang === Language.English
						? "body-lang-english"
						: "body-lang-farsi"
				} font-body`}
			/>
		</Helmet>
	);
};

export default HtmlHead;
