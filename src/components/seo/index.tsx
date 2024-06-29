import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { getLocaleFromLang } from "@/utils";
import type { PageContext } from "@/gatsby/types";

// https://ogp.me/#type_website
export enum OgTypes {
	website = "website",
}

interface Props {
	pageContext: PageContext;
}

const SEO: React.FC<Props> = ({ pageContext }) => {
	const { title, siteUrl } = useSiteMetadata();
	const url = `${siteUrl}${pageContext.slug}`;
	const locale = getLocaleFromLang(pageContext.lang);
	return (
		<Helmet title={pageContext.title} titleTemplate={`%s | ${title}`}>
			<meta name="description" content={pageContext.desc} />
			<meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
			<meta property="og:title" content={pageContext.title} />
			<meta name="twitter:title" content={pageContext.title} />
			<meta property="og:description" content={pageContext.desc} />
			<meta name="twitter:description" content={pageContext.desc} />
			<meta property="og:locale" content={locale} />
			<meta property="og:type" content={OgTypes.website} />
			<meta property="og:url" content={url} />
			<meta name="twitter:site" content={url} />
		</Helmet>
	);
};
export default SEO;
