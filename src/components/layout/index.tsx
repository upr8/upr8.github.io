import * as React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import SEO from "../seo";
import { PageContext } from "../../gatsby/types";
import HtmlHead from "../html-head";
import { SiteContext, Theme } from "../../states";

interface Props {
	children: React.ReactNode;
	pageContext: PageContext;
	justSeo?: boolean;
}

const Layout: React.FC<Props> = ({
	pageContext,
	justSeo = false,
	children,
}) => {
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
