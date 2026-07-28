import { expect, test } from "@playwright/test";
import { LANGS, REVIEWED_BOOK_SLUG } from "./constants";

// global.css swaps --font-sans/--font-display per language via the
// .body-lang-english / .body-lang-farsi classes (Tailwind v4 @theme + custom
// properties) — a prime regression target for the pending Tailwind and
// Fontsource package bumps.
const EXPECTED_BODY_FONT: Record<string, RegExp> = {
	en: /IBM Plex Sans/i,
	fa: /Vazirmatn/i,
};

// `font-display` (used on Header's <h1> and card titles) resolves to the
// self-hosted "Gandom" display font on Farsi, and to the English sans stack
// otherwise (see --font-display-fa / --font-display in global.css).
const EXPECTED_HEADING_FONT: Record<string, RegExp> = {
	en: /IBM Plex Sans/i,
	fa: /Gandom/i,
};

for (const lang of LANGS) {
	test.describe(`typography (${lang})`, () => {
		test("body applies the expected font-sans stack and loads a font file", async ({
			page,
		}) => {
			const fontResponses: { url: string; status: number }[] = [];
			page.on("response", (res) => {
				if (/\.woff2?(\?|$)/i.test(new URL(res.url()).pathname)) {
					fontResponses.push({ url: res.url(), status: res.status() });
				}
			});

			// Nav labels ("Home"/"خانه" etc.) render in font-sans on every page,
			// guaranteeing real glyph usage (and thus a font fetch) in both langs.
			await page.goto(`/${lang}/`);
			await page.waitForLoadState("networkidle");

			const bodyFont = await page.evaluate(
				() => getComputedStyle(document.body).fontFamily,
			);
			expect(bodyFont).toMatch(EXPECTED_BODY_FONT[lang]);

			expect(fontResponses.length).toBeGreaterThan(0);
			for (const { url, status } of fontResponses) {
				expect(status, `expected ${url} to load successfully`).toBe(200);
			}
		});

		test("a content heading applies the expected font-display stack", async ({
			page,
		}) => {
			// Page templates with a hardcoded "terminal-style" title (blog/library/
			// archive/about index, e.g. "$> journalctl") force a monospace override
			// in Header.astro regardless of font-display — use a real content page
			// (a book review) instead, where font-display governs the heading normally.
			await page.goto(`/${lang}/${REVIEWED_BOOK_SLUG}`);

			const heading = page.locator("h1").first();
			const headingFont = await heading.evaluate(
				(el) => getComputedStyle(el).fontFamily,
			);
			expect(headingFont).toMatch(EXPECTED_HEADING_FONT[lang]);
		});
	});
}
