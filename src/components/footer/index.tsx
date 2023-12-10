import * as React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { Github, Linkedin } from "@/components/icons";

const Footer: React.FC = () => {
	const { linkedin, github } = useSiteMetadata();

	return (
		<footer className="box-border flex flex-row justify-between pt-4 mt-8 mb-4 border-t-2 border-primary">
			<p className="text-center align-middle text-secondary">
				Copyright © 2023 by{" "}
				<Link
					className="underline underline-offset-4 hover:no-underline"
					to="/en/about"
				>
					Saeed Asaiyan
				</Link>
				.
			</p>
			<ul className="flex justify-center">
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
