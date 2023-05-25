import * as React from "react";
import { Link } from "gatsby";
import ThemeSwitcher from "./theme-switcher";

const NavBar: React.FC<{}> = () => {
	return (
		<ul className="flex justify-between px-4 bg-nav text-primary">
			<li>
				<Link to="/en/blog">Blog</Link>
			</li>
			<li>
				<ThemeSwitcher />
			</li>
			<li>
				<Link to="/en/about">About</Link>
			</li>
		</ul>
	);
};

export default NavBar;
