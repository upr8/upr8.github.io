import * as React from "react";
import NavBar from "./navbar";

const Header: React.FC<{}> = () => {
	return (
		<header className="border-b-2 border-primary">
			<NavBar />
			<div className="pt-32 pb-16 text-center">
				<h1 className="text-4xl font-extrabold text-primary">{"PageTitle"}</h1>
				<div className="text-xl font-bold text-secondary">{"PageSubtitle"}</div>
			</div>
		</header>
	);
};

export default Header;
