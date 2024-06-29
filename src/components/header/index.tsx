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
			<div className="pt-32 pb-16 text-center">
				<h1 className="text-4xl font-extrabold text-primary">{pageTitle}</h1>
				<div className="mt-4 text-xl font-bold text-secondary">
					{pageSubtitle}
				</div>
			</div>
		</header>
	);
};

export default Header;
