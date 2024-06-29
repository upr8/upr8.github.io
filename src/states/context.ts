import React, { type Dispatch } from "react";
import { type SiteState, getInitialSiteState } from "./state";
import type { SiteActions } from "./actions";

export const SiteContext = React.createContext<{
	state: SiteState;
	dispatch: Dispatch<SiteActions>;
}>({
	state: getInitialSiteState(),
	dispatch: () => undefined,
});
