import * as React from "react";
import type { PageProps } from "gatsby";
import { SiteContext, initialSiteState, siteReducer } from "../../states";

const WrapGatsbyPage: React.FC<PageProps> = ({ children }) => {
	const [state, dispatch] = React.useReducer(siteReducer, initialSiteState);

	return (
		<SiteContext.Provider value={{ state, dispatch }}>
			{children}
		</SiteContext.Provider>
	);
};

export default WrapGatsbyPage;
