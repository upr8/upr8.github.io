import { expect, test, type Locator } from "@playwright/test";
import {
	ARCHIVE_FIXTURE,
	CODE_POST_SLUG,
	CODE_POST_TAGS,
	LANGS,
	REVIEWED_BOOK_SLUG,
	REVIEWED_BOOK_TAGS,
} from "./constants";

// TagList's only <li> elements are its tag pills, distinct from a card's
// content/review link (which sits outside any <li>).
async function tagPillTexts(container: Locator): Promise<string[]> {
	const texts = await container.locator("li a").allTextContents();
	return texts.map((t) => t.trim().replace(/^#/, "")).sort();
}

for (const lang of LANGS) {
	test.describe(`tags (${lang})`, () => {
		test("clicking a tag pill navigates to a filtered tag page", async ({
			page,
		}) => {
			await page.goto(`/${lang}/blog`);
			const tagLink = page.locator(`a[href^="/${lang}/tag/"]`).first();
			await expect(tagLink).toBeVisible();
			const tagText = (await tagLink.textContent())?.trim() ?? "";
			expect(tagText.length).toBeGreaterThan(0);

			await tagLink.click();
			// Optional trailing slash: prod (GitHub Pages) canonicalizes to a
			// trailing slash; local `astro preview` does not.
			await expect(page).toHaveURL(new RegExp(`/${lang}/tag/[^/]+/?$`));
			await expect(page).toHaveTitle(new RegExp(`Tag: ${tagText}`));
			await expect(page.locator("article").first()).toBeVisible();
		});

		test("a post page's own tag list matches its frontmatter tags exactly", async ({
			page,
		}) => {
			await page.goto(`/${lang}/${CODE_POST_SLUG}`);
			const postTagList = page.locator("article .mt-32");
			expect(await tagPillTexts(postTagList)).toEqual(
				[...CODE_POST_TAGS].sort(),
			);
		});

		test("a library card's tag list matches its frontmatter tags exactly", async ({
			page,
		}) => {
			await page.goto(`/${lang}/library`);
			const card = page.locator("article").filter({
				has: page.locator(`a[href="/${lang}/${REVIEWED_BOOK_SLUG}"]`),
			});
			expect(await tagPillTexts(card)).toEqual([...REVIEWED_BOOK_TAGS].sort());
		});
	});
}

test.describe("tags: archive card", () => {
	test("an archive card's tag list matches its frontmatter tags exactly", async ({
		page,
	}) => {
		await page.goto("/en/archive");
		const card = page
			.locator("article")
			.filter({ hasText: ARCHIVE_FIXTURE.title });
		expect(await tagPillTexts(card)).toEqual([...ARCHIVE_FIXTURE.tags].sort());
	});
});
