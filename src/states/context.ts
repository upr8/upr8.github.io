import React from "react";
import { type SiteState, getInitialSiteState } from "./state";
import type { SiteActions } from "./actions";

export const SiteContext = React.createContext<{
	state: SiteState;
	dispatch: React.Dispatch<SiteActions>;
}>({
	state: getInitialSiteState(),
	dispatch: () => undefined,
});
