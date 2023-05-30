import { useSiteMetadata } from "@/hooks/use-site-metadata";
import * as React from "react";

interface Props {
	href: string;
	title?: string;
	children: React.ReactElement;
}

const A = ({ href, title, children }: Props) => {
	const { siteUrl } = useSiteMetadata();
	const target = href.startsWith(siteUrl) ? "_self" : "_blank";
	return (
		<a href={href} title={title} target={target}>
			{children}
		</a>
	);
};

export default A;
