import React from "react";
import { SiteState, initialSiteState } from "./state";
import { SiteActions } from "./actions";

export const SiteContext = React.createContext<{
	state: SiteState;
	dispatch: React.Dispatch<SiteActions>;
}>({
	state: initialSiteState,
	dispatch: () => undefined,
});
