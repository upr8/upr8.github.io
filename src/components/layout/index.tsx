import * as React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import SEO from "../seo";
import { PageContext } from "../../gatsby/types";

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
	return (
		<>
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
