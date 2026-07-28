import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { contentLinkSelector, LANGS, REVIEWED_BOOK_SLUG } from "./constants";

const SERIOUS_IMPACTS = new Set(["serious", "critical"]);

async function assertNoSeriousViolations(page: Page) {
	const results = await new AxeBuilder({ page })
		.withTags(["wcag2a", "wcag2aa"])
		.analyze();
	const serious = results.violations.filter((v) =>
		SERIOUS_IMPACTS.has(v.impact ?? ""),
	);
	if (serious.length > 0) {
		console.log(
			JSON.stringify(
				serious.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
				null,
				2,
			),
		);
	}
	expect(serious).toEqual([]);
}

for (const lang of LANGS) {
	test.describe(`accessibility (${lang})`, () => {
		test("homepage has no serious/critical violations", async ({ page }) => {
			await page.goto(`/${lang}/`);
			await assertNoSeriousViolations(page);
		});

		test("a blog post has no serious/critical violations", async ({ page }) => {
			await page.goto(`/${lang}/blog`);
			await page
				.locator("article")
				.first()
				.locator(contentLinkSelector(lang))
				.click();
			await assertNoSeriousViolations(page);
		});

		test("a reviewed book page has no serious/critical violations", async ({
			page,
		}) => {
			await page.goto(`/${lang}/${REVIEWED_BOOK_SLUG}`);
			await assertNoSeriousViolations(page);
		});
	});
}
