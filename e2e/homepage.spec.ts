import { expect, test } from "@playwright/test";
import { HOME_HEADINGS, LANGS } from "./constants";

for (const lang of LANGS) {
	test.describe(`homepage (${lang})`, () => {
		test("renders hero, tag cloud, and latest content sections", async ({
			page,
		}) => {
			await page.goto(`/${lang}/`);

			await expect(page.locator("html")).toHaveAttribute("lang", lang);
			await expect(page.locator("html")).toHaveAttribute(
				"dir",
				lang === "fa" ? "rtl" : "ltr",
			);
			await expect(page.locator("body")).toHaveClass(
				new RegExp(lang === "fa" ? "body-lang-farsi" : "body-lang-english"),
			);

			await expect(
				page.getByRole("heading", {
					name: HOME_HEADINGS[lang].favoriteTopics,
					level: 2,
				}),
			).toBeVisible();

			// d3-cloud layout runs async after hydration; give it a generous timeout.
			await expect(
				page.locator("#wordcloud-svg .wordcloud-word").first(),
			).toBeVisible({ timeout: 10_000 });

			const postsSection = page.locator("section").filter({
				has: page.getByRole("heading", {
					name: HOME_HEADINGS[lang].latestPosts,
					level: 2,
				}),
			});
			await expect(postsSection.locator("article").first()).toBeVisible();
			await expect(
				postsSection.getByRole("link", { name: /view all|مشاهده/i }),
			).toHaveAttribute("href", `/${lang}/blog`);

			const booksSection = page.locator("section").filter({
				has: page.getByRole("heading", {
					name: HOME_HEADINGS[lang].latestFromLibrary,
					level: 2,
				}),
			});
			await expect(booksSection.locator("article").first()).toBeVisible();
			await expect(
				booksSection.getByRole("link", { name: /view all|مشاهده/i }),
			).toHaveAttribute("href", `/${lang}/library`);
		});
	});
}
