import * as React from "react";
import { Link } from "gatsby";

const Header: React.FC<{}> = () => {
	return (
		<header className="mb-32">
			<div className="box-border flex items-center justify-between min-w-0 m-0">
				<div className="my-0 text-3xl font-semibold">Saeed Asaiyan</div>
				<button type="button">DarkMode</button>
			</div>
			<div className="box-border flex flex-wrap items-center justify-between pb-4 mt-4 border-b-2">
				<nav className="text-lg">
					<Link className="no-underline me-4" to="/en/blog">
						blog
					</Link>
					<Link className="no-underline me-4" to="/en/library">
						library
					</Link>
					<Link className="no-underline me-4" to="/en/about">
						about
					</Link>
				</nav>
				<div />
			</div>
		</header>
	);
};

export default Header;
