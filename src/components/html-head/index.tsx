import React, { type FC } from "react";
import Helmet from "react-helmet";

import type { PageContext } from "@/gatsby/types";
import { Language, SiteContext, Theme } from "@/states";

interface Props {
	pageContext: PageContext;
}

const HtmlHead: FC<Props> = ({ pageContext }) => {
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
				} font-sans`}
			/>
		</Helmet>
	);
};

export default HtmlHead;
