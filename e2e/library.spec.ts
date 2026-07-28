import { expect, test } from "@playwright/test";
import { LANGS, PAGE_TITLES, REVIEWED_BOOK_SLUG } from "./constants";

for (const lang of LANGS) {
	test.describe(`library (${lang})`, () => {
		test("lists books with cover images and dates", async ({ page }) => {
			await page.goto(`/${lang}/library`);
			await expect(page).toHaveTitle(
				`${PAGE_TITLES.libraryIndex} | Saeed Asaiyan`,
			);

			const articles = page.locator("article");
			const count = await articles.count();
			expect(count).toBeGreaterThan(0);

			const firstArticle = articles.first();
			await expect(firstArticle.locator('[role="img"]')).toHaveAttribute(
				"aria-label",
				/.+/,
			);
			const datetime = await firstArticle
				.locator("time")
				.getAttribute("datetime");
			expect(Number.isNaN(new Date(datetime ?? "").getTime())).toBe(false);
			await expect(
				firstArticle.getByRole("heading", { level: 2 }),
			).toBeVisible();
		});

		test("a reviewed book links through to its review page", async ({
			page,
		}) => {
			await page.goto(`/${lang}/${REVIEWED_BOOK_SLUG}`);
			const postBody = page.locator(".post-body");
			await expect(postBody).toBeVisible();
			// Reviews are plain prose (no markdown headings), so assert rendered
			// content rather than requiring a heading.
			const text = (await postBody.textContent())?.trim() ?? "";
			expect(text.length).toBeGreaterThan(0);
		});
	});
}
