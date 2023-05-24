import {
	ActionType,
	SiteActions,
	ToggleLanguage,
	ToggleTheme,
} from "./actions";
import { Language, SiteState, Theme } from "./state";

export function siteReducer(state: SiteState, action: SiteActions): SiteState {
	switch (action.type) {
		case ActionType.ToggleLanguage:
			return {
				...state,
				lang:
					state.lang === Language.English ? Language.Persian : Language.English,
			};
		case ActionType.ToggleTheme:
			return {
				...state,
				theme: state.theme === Theme.Light ? Theme.Dark : Theme.Light,
			};
		default:
			return state;
	}
}

// helper functions to simplify the caller
export const toggleLanguage = (): ToggleLanguage => ({
	type: ActionType.ToggleLanguage,
});

export const toggleTheme = (): ToggleTheme => ({
	type: ActionType.ToggleTheme,
});
