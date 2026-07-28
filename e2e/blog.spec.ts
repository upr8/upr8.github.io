import { expect, test } from "@playwright/test";
import {
	CODE_POST_SLUG,
	contentLinkSelector,
	LANGS,
	PAGE_TITLES,
} from "./constants";

for (const lang of LANGS) {
	test.describe(`blog (${lang})`, () => {
		test("lists published posts with parseable dates and a content link", async ({
			page,
		}) => {
			await page.goto(`/${lang}/blog`);
			await expect(page).toHaveTitle(
				`${PAGE_TITLES.blogIndex} | Saeed Asaiyan`,
			);

			const articles = page.locator("article");
			const count = await articles.count();
			expect(count).toBeGreaterThan(0);

			for (let i = 0; i < count; i++) {
				const article = articles.nth(i);
				const datetime = await article.locator("time").getAttribute("datetime");
				expect(datetime).toBeTruthy();
				expect(Number.isNaN(new Date(datetime ?? "").getTime())).toBe(false);
				await expect(article.locator(contentLinkSelector(lang))).toHaveCount(1);
			}
		});

		test("navigating into a post renders its content", async ({ page }) => {
			await page.goto(`/${lang}/blog`);
			await page
				.locator("article")
				.first()
				.locator(contentLinkSelector(lang))
				.click();

			// Optional trailing slash: prod (GitHub Pages) canonicalizes to a
			// trailing slash; local `astro preview` does not.
			await expect(page).toHaveURL(new RegExp(`/${lang}/[^/]+/?$`));
			const postBody = page.locator(".post-body");
			await expect(postBody).toBeVisible();
			// Not every post is guaranteed to contain a markdown heading, so assert
			// rendered content rather than requiring one.
			const text = (await postBody.textContent())?.trim() ?? "";
			expect(text.length).toBeGreaterThan(0);
		});

		test("copy-code button copies a code block to the clipboard", async ({
			page,
			context,
		}) => {
			await context.grantPermissions(["clipboard-read", "clipboard-write"]);
			await page.goto(`/${lang}/${CODE_POST_SLUG}`);

			const firstButton = page.locator(".post-body pre .copy-button").first();
			await expect(firstButton).toBeVisible();
			await firstButton.click();
			await expect(firstButton).toHaveClass(/copied/);

			const clipboardText = await page.evaluate(() =>
				navigator.clipboard.readText(),
			);
			expect(clipboardText.length).toBeGreaterThan(0);
		});
	});
}
