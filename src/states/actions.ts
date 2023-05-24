export enum ActionType {
	ToggleTheme = 0,
	ToggleLanguage = 1,
}

export interface ToggleTheme {
	type: ActionType.ToggleTheme;
}

export interface ToggleLanguage {
	type: ActionType.ToggleLanguage;
}

export type SiteActions = ToggleTheme | ToggleLanguage;
