import React, { type FC, type ReactElement } from "react";
import type { PageProps } from "gatsby";

import { SiteContext, getInitialSiteState, siteReducer } from "@/states";

interface Props extends Omit<PageProps, "children"> {
	children: ReactElement;
}

const WrapGatsbyPage: FC<Props> = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		siteReducer,
		getInitialSiteState(),
	);

	return (
		<SiteContext.Provider value={{ state, dispatch }}>
			{children}
		</SiteContext.Provider>
	);
};

export default WrapGatsbyPage;
