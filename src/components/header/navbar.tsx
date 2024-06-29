import React, { type FC } from "react";
import { Link } from "gatsby";

import ThemeSwitcher from "./theme-switcher";

const NavBar: FC = () => {
	return (
		<ul className="flex justify-between px-4 bg-nav text-primary">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/en/blog">Blog</Link>
			</li>
			<li>
				<ThemeSwitcher />
			</li>
			<li>
				<Link to="/en/library">Library</Link>
			</li>
			<li>
				<Link to="/en/archive">Archive</Link>
			</li>
		</ul>
	);
};

export default NavBar;
