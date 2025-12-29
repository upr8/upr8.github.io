import React, { type FC, useState } from "react";

import Link from "@/components/link";
import ThemeSwitcher from "./theme-switcher";
import { Menu, Close } from "@/components/icons";
import { useReadingProgress } from "@/hooks/use-reading-progress";

const navItems = [
	{ to: "/", label: "Home", ariaLabel: "Navigate to home page" },
	{ to: "/en/blog", label: "Blog", ariaLabel: "Navigate to blog posts" },
	{ to: "/en/library", label: "Library", ariaLabel: "Navigate to library and book reviews" },
	{ to: "/en/archive", label: "Archive", ariaLabel: "Navigate to curated archives" },
	{ to: "/en/about", label: "About", ariaLabel: "Navigate to about page" },
];

const NavBar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const progress = useReadingProgress();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	const gradientStyle = {
		background: `linear-gradient(to right, var(--color-bg-nav-progress) 0%, var(--color-bg-nav-progress) ${progress}%, var(--color-bg-nav) ${progress}%, var(--color-bg-nav) 100%)`,
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-0">
			<nav
				className="transition-[background] duration-150 max-w-full sm:mx-4 lg:max-w-4xl lg:mx-auto"
				style={gradientStyle}
				role="navigation"
				aria-label="Main navigation and reading progress"
			>
				<div className="flex items-center justify-between px-4 py-1">
				{/* Mobile menu button */}
				<button
					type="button"
					onClick={toggleMenu}
					className="sm:hidden p-1 -ml-1 text-primary hover:text-accent-primary transition-colors"
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
				className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-nav ${
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
		</div>
	);
};

export default NavBar;
