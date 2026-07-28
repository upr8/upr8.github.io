import { expect, test } from "@playwright/test";
import { LANGS } from "./constants";

for (const lang of LANGS) {
	test.describe(`tag cloud (${lang})`, () => {
		test("clicking a word navigates to its tag page", async ({ page }) => {
			await page.goto(`/${lang}/`);
			const firstLink = page.locator("#wordcloud-svg a.wordcloud-link").first();
			await expect(firstLink).toBeVisible({ timeout: 10_000 });

			const tagText =
				(await firstLink.locator(".wordcloud-word").textContent())?.trim() ??
				"";
			expect(tagText.length).toBeGreaterThan(0);

			await firstLink.click();
			await expect(page).toHaveURL(new RegExp(`/${lang}/tag/[^/]+/?$`));
			await expect(page).toHaveTitle(new RegExp(`Tag: #${tagText}`));
		});

		test("recolors words on theme change (no full re-layout)", async ({
			page,
		}) => {
			await page.goto(`/${lang}/`);
			const firstWord = page.locator("#wordcloud-svg .wordcloud-word").first();
			await expect(firstWord).toBeVisible({ timeout: 10_000 });

			const beforeFill = await firstWord.evaluate(
				(el) => getComputedStyle(el).fill,
			);
			await page.locator("#theme-switcher-label").click();

			await expect
				.poll(() => firstWord.evaluate((el) => getComputedStyle(el).fill))
				.not.toBe(beforeFill);
		});

		test("falls back to a plain link list when JavaScript is disabled", async ({
			browser,
		}) => {
			const context = await browser.newContext({ javaScriptEnabled: false });
			const page = await context.newPage();
			await page.goto(`/${lang}/`);

			// Without JS, the d3-cloud script never runs, so the SVG stays empty...
			await expect(page.locator("#wordcloud-svg .wordcloud-word")).toHaveCount(
				0,
			);
			// ...and the <noscript> fallback (inert/unparsed with JS enabled) renders instead.
			const fallbackLinks = page.locator(
				'nav[aria-label="Tag cloud"] noscript a',
			);
			await expect(fallbackLinks.first()).toBeVisible();

			await context.close();
		});
	});
}
