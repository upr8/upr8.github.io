import { getLocalStorage } from "../utils";

export interface SiteState {
	theme: Theme;
	lang: Language;
}

export enum Language {
	English = "en",
	Persian = "fa",
}

export enum Theme {
	Light = "light",
	Dark = "dark",
}

export const getInitialSiteState = (): SiteState => {
	const storedTheme = getLocalStorage({ key: "theme" });
	const storedLang = getLocalStorage({ key: "lang" });
	return {
		theme: storedTheme === Theme.Dark ? Theme.Dark : Theme.Light,
		lang: storedLang === Language.Persian ? Language.Persian : Language.English,
	};
};
