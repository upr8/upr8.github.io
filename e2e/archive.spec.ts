import { expect, test } from "@playwright/test";
import { ARCHIVE_EMPTY_STATE, LANGS, PAGE_TITLES } from "./constants";

for (const lang of LANGS) {
	test.describe(`archive (${lang})`, () => {
		test("renders entries with external links, or the empty state", async ({
			page,
		}) => {
			await page.goto(`/${lang}/archive`);
			await expect(page).toHaveTitle(
				`${PAGE_TITLES.archiveIndex} | Saeed Asaiyan`,
			);

			const articles = page.locator("article");
			const count = await articles.count();

			if (count === 0) {
				// No Persian archive entries exist today (0 .fa.mdx files) — assert the
				// empty state instead of failing on a legitimately empty collection.
				await expect(page.getByText(ARCHIVE_EMPTY_STATE[lang])).toBeVisible();
				return;
			}

			const externalLink = articles.first().locator('a[target="_blank"]');
			await expect(externalLink).toHaveAttribute("rel", "noreferrer");
			const href = await externalLink.getAttribute("href");
			expect(href).toMatch(/^https?:\/\//);
			await expect(externalLink.locator("svg title")).toHaveText(
				"External Link",
			);

			const datetime = await articles
				.first()
				.locator("time")
				.getAttribute("datetime");
			expect(Number.isNaN(new Date(datetime ?? "").getTime())).toBe(false);
		});
	});
}
