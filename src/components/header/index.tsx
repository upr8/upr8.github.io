import React, { type FC } from "react";

import NavBar from "./navbar";

interface Props {
	pageTitle: string;
	pageSubtitle: string;
}

const Header: FC<Props> = ({ pageTitle, pageSubtitle }) => {
	return (
		<header className="border-b-2 border-primary">
			<NavBar />
			<div className="pt-16 pb-8 text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
					{pageTitle}
				</h1>
				<p className="mt-3 text-lg md:text-xl font-medium text-secondary max-w-2xl mx-auto">
					{pageSubtitle}
				</p>
			</div>
		</header>
	);
};

export default Header;
