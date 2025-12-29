import React, { type FC, type ReactNode } from "react";

import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import HtmlHead from "@/components/html-head";
import SkipLink from "@/components/skip-link";
import type { PageContext } from "@/gatsby/types";
import { SiteContext, Theme } from "@/states";

interface Props {
	children: ReactNode;
	pageContext: PageContext;
	justSeo?: boolean;
}

const Layout: FC<Props> = ({ pageContext, justSeo = false, children }) => {
	const { state } = React.useContext(SiteContext);

	// Sync theme class with body and html elements
	React.useEffect(() => {
		const isDark = state.theme === Theme.Dark;
		const targetBodyClass = `body-theme-${state.theme}`;

		// Only update if the theme has actually changed
		if (!document.body.classList.contains(targetBodyClass)) {
			document.body.classList.remove("body-theme-light", "body-theme-dark");
			document.body.classList.add(targetBodyClass);
		}

		// Only update dark class if needed
		const hasDarkClass = document.documentElement.classList.contains("dark");
		if (isDark && !hasDarkClass) {
			document.documentElement.classList.add("dark");
		} else if (!isDark && hasDarkClass) {
			document.documentElement.classList.remove("dark");
		}
	}, [state.theme]);

	return (
		<>
			<HtmlHead pageContext={pageContext} />
			<SEO pageContext={pageContext} />
			<SkipLink />
			<div className="antialiased pt-10">
				{justSeo ? (
					<div>{children}</div>
				) : (
					<div className="box-border max-w-full px-4 sm:mx-4 lg:max-w-4xl lg:mx-auto">
						<Header
							pageTitle={pageContext.title}
							pageSubtitle={pageContext.desc}
						/>
						<Main>{children}</Main>
						<Footer />
					</div>
				)}
			</div>
		</>
	);
};

export default Layout;
