import { useSiteMetadata } from "@/hooks/use-site-metadata";
import * as React from "react";

interface Props {
	href: string;
	title?: string;
	className?: string;
	children: React.ReactElement;
}

const A = ({ href, title, className, children }: Props) => {
	const { siteUrl } = useSiteMetadata();
	const target =
		href.startsWith(siteUrl) || href.startsWith("#") ? "_self" : "_blank";
	return (
		<a href={href} title={title} target={target} className={className}>
			{children}
		</a>
	);
};

export default A;
