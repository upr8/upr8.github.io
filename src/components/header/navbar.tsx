import React, { type FC } from "react";

import Link from "@/components/link";
import ThemeSwitcher from "./theme-switcher";

const NavBar: FC = () => {
	return (
		<nav aria-label="Main navigation">
			<ul className="flex justify-between px-4 bg-nav text-primary">
				<li>
					<Link to="/" variant="nav" aria-label="Navigate to home page">Home</Link>
				</li>
				<li>
					<Link to="/en/blog" variant="nav" aria-label="Navigate to blog posts">Blog</Link>
				</li>
				<li>
					<ThemeSwitcher />
				</li>
				<li>
					<Link to="/en/library" variant="nav" aria-label="Navigate to library and book reviews">Library</Link>
				</li>
				<li>
					<Link to="/en/archive" variant="nav" aria-label="Navigate to curated archives">Archive</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
