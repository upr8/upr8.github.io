import { expect, test } from "@playwright/test";
import { LANGS } from "./constants";

for (const lang of LANGS) {
	test.describe(`seo (${lang})`, () => {
		test("homepage has expected meta tags", async ({ page }) => {
			await page.goto(`/${lang}/`);
			await expect(page).toHaveTitle(/\| Saeed Asaiyan$/);
			await expect(page.locator('meta[name="description"]')).toHaveAttribute(
				"content",
				/.+/,
			);

			// BaseHead.astro hardcodes the canonical origin to asaiyan.com regardless
			// of whether this test is targeting localhost or prod — a genuinely
			// target-independent assertion, not a bug when run locally.
			await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
				"href",
				`https://www.asaiyan.com/${lang}/`,
			);
			await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
				"content",
				lang === "fa" ? "fa_IR" : "en_US",
			);
			await expect(
				page.locator('link[rel="alternate"][type="application/rss+xml"]'),
			).toHaveAttribute("href", `/${lang}/rss.xml`);
			await expect(page.locator('link[rel="sitemap"]')).toHaveAttribute(
				"href",
				"/sitemap-index.xml",
			);
		});
	});
}
