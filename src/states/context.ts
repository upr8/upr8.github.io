import React from "react";
import { SiteState, getInitialSiteState } from "./state";
import { SiteActions } from "./actions";

export const SiteContext = React.createContext<{
	state: SiteState;
	dispatch: React.Dispatch<SiteActions>;
}>({
	state: getInitialSiteState(),
	dispatch: () => undefined,
});
