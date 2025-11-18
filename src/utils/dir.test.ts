import { describe, it, expect } from "vitest";
import { getDirectionFromLang } from "./dir";
import { Language } from "../states";

describe("getDirectionFromLang", () => {
	it("should return 'ltr' for English language", () => {
		const result = getDirectionFromLang(Language.English);
		expect(result).toBe("ltr");
	});

	it("should return 'rtl' for Persian language", () => {
		const result = getDirectionFromLang(Language.Persian);
		expect(result).toBe("rtl");
	});

	it("should return 'ltr' for English language code 'en'", () => {
		const result = getDirectionFromLang("en");
		expect(result).toBe("ltr");
	});

	it("should return 'rtl' for Persian language code 'fa'", () => {
		const result = getDirectionFromLang("fa");
		expect(result).toBe("rtl");
	});

	it("should return 'rtl' for any non-English language string", () => {
		const result = getDirectionFromLang("ar");
		expect(result).toBe("rtl");
	});

	it("should return 'rtl' for empty string", () => {
		const result = getDirectionFromLang("");
		expect(result).toBe("rtl");
	});
});
