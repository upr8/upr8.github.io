import { expect, test } from "@playwright/test";
import { NOT_FOUND_MESSAGE } from "./constants";

test.describe("404 page", () => {
	test("unknown routes render the bilingual not-found page", async ({
		page,
	}) => {
		const res = await page.goto("/en/this-page-does-not-exist");
		expect(res?.status()).toBe(404);

		// The 404 message also appears (once) as the page's meta-description-driven
		// header subtitle outside #main-content — scope to the actual page content.
		const content = page.locator("#main-content");
		await expect(
			content.getByRole("heading", { name: "404", level: 2 }),
		).toBeVisible();
		await expect(content.getByText(NOT_FOUND_MESSAGE.en)).toBeVisible();
		await expect(content.getByText(NOT_FOUND_MESSAGE.fa)).toBeVisible();

		await expect(content.locator('a[href="/en/"]')).toBeVisible();
		await expect(content.locator('a[href="/fa/"]')).toBeVisible();
	});
});
