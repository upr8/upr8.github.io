import React, { type ReactNode } from "react";

import { useSiteMetadata } from "@/hooks/use-site-metadata";

interface Props {
	href?: string;
	title?: string;
	className?: string;
	children?: ReactNode;
}

const A = ({ href, title, className, children }: Props) => {
	const { siteUrl } = useSiteMetadata();
	const targetRel =
		href && (href.startsWith(siteUrl) || href.startsWith("#"))
			? {
					target: "_self",
				}
			: {
					target: "_blank",
					rel: "noreferrer",
				};
	return (
		<a href={href} title={title} {...targetRel} className={className}>
			{children}
		</a>
	);
};

export default A;
