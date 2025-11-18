import React, { type FC } from "react";

import Link from "@/components/link";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { Github, Linkedin } from "@/components/icons";

const Footer: FC = () => {
	const { linkedin, github } = useSiteMetadata();

	return (
		<footer className="box-border flex flex-row justify-between pt-4 mt-8 mb-4 border-t-2 border-primary">
			<p className="text-center align-middle text-secondary">
				Copyright © {new Date().getFullYear()} by <Link to="/en/about" variant="nav" className="font-medium" aria-label="Navigate to about page">Saeed Asaiyan</Link>.
			</p>
			<ul className="flex justify-center" aria-label="Social media links">
				{github && (
					<li className="mx-4">
						<Github link={github} />
					</li>
				)}
				{linkedin && (
					<li className="mx-4">
						<Linkedin link={linkedin} />
					</li>
				)}
			</ul>
		</footer>
	);
};

export default Footer;
