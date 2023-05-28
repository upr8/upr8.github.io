import * as React from "react";
import { Link } from "gatsby";

const Footer: React.FC<{}> = () => {
	return (
		<footer className="box-border flex flex-row justify-between pt-4 mt-8 mb-4 border-t-2 border-primary">
			<p className="text-center align-middle text-secondary">
				Copyright © 2023 by <Link to="/en/about">Saeed Asaiyan</Link>.
			</p>
			<ul className="flex justify-center">
				<li className="mx-4">
					<a href={"https://github.com/yruc"}>
						<svg
							className="w-8 h-8 fill-current text-secondary "
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="title"
						>
							<span id="title">Github</span>
							<path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3" />
						</svg>
					</a>
				</li>
				<li className="mx-4">
					<a href={"https://linkedin.com/in/asaiyan"}>
						<svg
							className="w-8 h-8 text-blue-700 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="title"
						>
							<span id="title">LinkedIn</span>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
