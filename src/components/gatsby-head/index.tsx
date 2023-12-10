import * as React from "react";
import { HeadFC } from "gatsby";
import { PageContext } from "@/gatsby/types";
import { getDirectionFromLang } from "@/utils";

// biome-ignore lint/complexity/noBannedTypes: nothing but PageContext
export const Head: HeadFC<{}, PageContext> = ({
	pageContext: { lang, title },
}) => {
	return (
		<>
			<html lang={lang} dir={getDirectionFromLang(lang)} />
			<title>{title}</title>
		</>
	);
};
