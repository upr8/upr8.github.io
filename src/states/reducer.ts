import { setLocalStorage } from "../utils";
import {
	ActionType,
	type SiteActions,
	type ToggleLanguage,
	type ToggleTheme,
} from "./actions";
import { Language, type SiteState, Theme } from "./state";

export function siteReducer(state: SiteState, action: SiteActions): SiteState {
	const toggledTheme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
	const toggledLang =
		state.lang === Language.English ? Language.Persian : Language.English;
	switch (action.type) {
		case ActionType.ToggleLanguage:
			setLocalStorage({ key: "lang", value: toggledLang });
			return {
				...state,
				lang: toggledLang,
			};
		case ActionType.ToggleTheme:
			setLocalStorage({ key: "theme", value: toggledTheme });
			return {
				...state,
				theme: toggledTheme,
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
