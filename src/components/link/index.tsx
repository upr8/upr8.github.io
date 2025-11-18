import React, { type FC, type ReactNode } from "react";
import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";

type LinkVariant = "default" | "nav" | "card" | "subtle" | "underline";

interface LinkProps extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
	variant?: LinkVariant;
	unstyled?: boolean;
	children: ReactNode;
}

const variantStyles: Record<LinkVariant, string> = {
	default: "text-accent-primary hover:text-accent-hover transition-colors duration-150",
	nav: "no-underline text-primary hover:text-accent-primary transition-colors",
	card: "no-underline group",
	subtle: "text-secondary hover:text-primary transition-colors duration-150",
	underline: "underline underline-offset-4 [text-decoration-color:color-mix(in_srgb,var(--color-link-primary)_50%,transparent)] hover:decoration-accent-hover",
};

const Link: FC<LinkProps> = ({
	variant = "default",
	unstyled = false,
	className,
	children,
	...props
}) => {
	const variantClass = unstyled ? "" : variantStyles[variant];
	const combinedClassName = [variantClass, className].filter(Boolean).join(" ");

	return (
		<GatsbyLink {...props} className={combinedClassName || undefined}>
			{children}
		</GatsbyLink>
	);
};

export default Link;
