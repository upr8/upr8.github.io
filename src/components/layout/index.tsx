import React, { type FC, type ReactNode } from "react";

import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import HtmlHead from "@/components/html-head";
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
		document.body.classList.remove("body-theme-light", "body-theme-dark");
		document.body.classList.add(`body-theme-${state.theme}`);

		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [state.theme]);

	return (
		<>
			<HtmlHead pageContext={pageContext} />
			<SEO pageContext={pageContext} />
			<div className="antialiased">
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
