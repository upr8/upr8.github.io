import React, { type FC, useState } from "react";

import Link from "@/components/link";
import ThemeSwitcher from "./theme-switcher";
import { Menu, Close } from "@/components/icons";

const navItems = [
	{ to: "/", label: "Home", ariaLabel: "Navigate to home page" },
	{ to: "/en/blog", label: "Blog", ariaLabel: "Navigate to blog posts" },
	{ to: "/en/library", label: "Library", ariaLabel: "Navigate to library and book reviews" },
	{ to: "/en/archive", label: "Archive", ariaLabel: "Navigate to curated archives" },
	{ to: "/en/about", label: "About", ariaLabel: "Navigate to about page" },
];

const NavBar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav aria-label="Main navigation" className="bg-nav">
			<div className="flex items-center justify-between px-4">
				{/* Mobile menu button */}
				<button
					type="button"
					onClick={toggleMenu}
					className="sm:hidden p-2 -ml-2 text-primary hover:text-accent-primary transition-colors"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? <Close /> : <Menu />}
				</button>

				{/* Desktop navigation */}
				<ul className="hidden sm:flex sm:items-center sm:gap-6 text-primary">
					{navItems.map((item) => (
						<li key={item.to}>
							<Link to={item.to} variant="nav" aria-label={item.ariaLabel}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Theme switcher - always visible */}
				<div className="flex items-center">
					<ThemeSwitcher />
				</div>
			</div>

			{/* Mobile navigation menu */}
			<div
				id="mobile-menu"
				className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<ul className="flex flex-col px-4 pb-4 pt-2 space-y-2 text-primary">
					{navItems.map((item) => (
						<li key={item.to}>
							<Link
								to={item.to}
								variant="nav"
								aria-label={item.ariaLabel}
								onClick={closeMenu}
								className="block py-2"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
