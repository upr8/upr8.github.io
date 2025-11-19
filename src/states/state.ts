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

	let initialTheme = Theme.Light;
	if (storedTheme === Theme.Dark || storedTheme === Theme.Light) {
		initialTheme = storedTheme;
	} else if (typeof window !== "undefined" && window.matchMedia) {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		initialTheme = prefersDark ? Theme.Dark : Theme.Light;
	}

	return {
		theme: initialTheme,
		lang: storedLang === Language.Persian ? Language.Persian : Language.English,
	};
};
