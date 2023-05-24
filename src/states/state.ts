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

export const initialSiteState: SiteState = {
	theme: Theme.Dark,
	lang: Language.English,
};
