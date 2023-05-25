import * as React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="box-border w-full max-w-5xl min-w-0 px-4 py-1 mx-auto">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
