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
	return (
		<>
			<HtmlHead pageContext={pageContext} />
			<SEO pageContext={pageContext} />
			<div
				className={`antialiased ${state.theme === Theme.Dark ? "dark" : ""}`}
			>
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
