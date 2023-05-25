import { Language } from "../states";

export const getLocaleFromLang = (lang: string) => {
	return lang === Language.English ? "en_US" : "fa_IR";
};
