import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { getLocaleFromLang } from "../../utils";

// https://ogp.me/#type_website
export enum OgTypes {
	website = "website",
}

export interface SeoData {
	lang: string;
	title: string;
	desc: string;
	slung: string;
	type: OgTypes;
	cover?: string;
}

interface Props {
	seoData: SeoData;
}

const SEO: React.FC<Props> = ({ seoData }) => {
	const { title, favIcon, siteUrl } = useSiteMetadata();
	const url = `${siteUrl}${seoData.slung}`;
	const locale = getLocaleFromLang(seoData.lang);
	return (
		<Helmet title={seoData.title} titleTemplate={`%s | ${title}`}>
			<link rel="icon" href={favIcon} type="image/x-icon" />
			<link rel="shortcut icon" href={favIcon} type="image/x-icon" />
			<meta name="robots" content="noindex" />
			<meta name="description" content={seoData.desc} />
			<meta property="og:title" content={seoData.title} />
			<meta name="twitter:title" content={seoData.title} />
			<meta property="og:description" content={seoData.desc} />
			<meta name="twitter:description" content={seoData.desc} />
			<meta property="og:locale" content={locale} />
			<meta property="og:type" content={seoData.type} />
			<meta property="og:url" content={url} />
			<meta name="twitter:site" content={url} />
			{seoData.cover && <meta name="og:image" content={seoData.cover} />}
			{seoData.cover && <meta name="twitter:card" content={seoData.cover} />}
		</Helmet>
	);
};
export default SEO;
