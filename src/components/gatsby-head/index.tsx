import * as React from "react";
import { HeadFC } from "gatsby";
import { PageContext } from "../../gatsby/types";
import { Language } from "../../states";

export const Head: HeadFC<{}, PageContext> = ({
	pageContext: { lang, title },
}) => {
	return (
		<>
			<html lang={lang} dir={lang === Language.English ? "ltr" : "rtl"} />
			<title>{title}</title>
		</>
	);
};
