import { Language } from "../states";

export const getDirectionFromLang = (lang: string) => {
	return lang === Language.English ? "ltr" : "rtl";
};
