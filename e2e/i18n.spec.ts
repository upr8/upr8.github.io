import { expect, test } from "@playwright/test";

// LanguageSwitcher's checkbox (#toggleLang) is visually hidden ("hidden peer");
// its wrapping <label> is what actually receives the click.
test.describe("language switcher", () => {
	test("toggles from a content page (/en/blog -> /fa/blog) and updates html attributes", async ({
		page,
	}) => {
		await page.goto("/en/blog");
		await expect(page.locator("html")).toHaveAttribute("lang", "en");
		await expect(page.locator("html")).toHaveAttribute("dir", "ltr");

		await page.locator("#lang-switcher-label").click();
		// Optional trailing slash: prod (GitHub Pages) canonicalizes to a
		// trailing slash; local `astro preview` does not.
		await expect(page).toHaveURL(/\/fa\/blog\/?$/);
		await expect(page.locator("html")).toHaveAttribute("lang", "fa");
		await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
	});

	test("toggles back from Persian to English on a content page", async ({
		page,
	}) => {
		await page.goto("/fa/library");
		await page.locator("#lang-switcher-label").click();
		await expect(page).toHaveURL(/\/en\/library\/?$/);
		await expect(page.locator("html")).toHaveAttribute("lang", "en");
		await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
	});

	test("toggles correctly from each language root page", async ({ page }) => {
		await page.goto("/en/");
		await page.locator("#lang-switcher-label").click();
		await expect(page).toHaveURL(/\/fa\/$/);

		await page.locator("#lang-switcher-label").click();
		await expect(page).toHaveURL(/\/en\/$/);
	});

	test("EN/FA indicator labels swap visibility on toggle", async ({ page }) => {
		await page.goto("/en/");
		await expect(page.locator("#en-label")).toBeVisible();
		await expect(page.locator("#fa-label")).toBeHidden();

		await page.locator("#lang-switcher-label").click();
		await page.waitForURL(/\/fa\/$/);
		await expect(page.locator("#fa-label")).toBeVisible();
		await expect(page.locator("#en-label")).toBeHidden();
	});
});
