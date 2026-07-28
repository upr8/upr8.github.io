import { expect, test } from "@playwright/test";

// ThemeSwitcher's checkbox (#toggleTheme) is visually hidden ("hidden peer");
// its wrapping <label id="theme-switcher-label"> is what actually receives the click.
test.describe("theme switcher", () => {
	test("defaults to light, toggles to dark, and persists across reload", async ({
		page,
	}) => {
		await page.emulateMedia({ colorScheme: "light" });
		await page.goto("/en/");

		const html = page.locator("html");
		await expect(html).not.toHaveClass(/dark/);
		await expect(page.locator("#sun-icon")).toBeVisible();
		await expect(page.locator("#moon-icon")).toBeHidden();

		await page.locator("#theme-switcher-label").click();
		await expect(html).toHaveClass(/dark/);
		await expect(html).toHaveAttribute("data-theme", "dark");
		await expect(page.locator("body")).toHaveClass(/body-theme-dark/);
		await expect(page.locator("#moon-icon")).toBeVisible();
		await expect(page.locator("#sun-icon")).toBeHidden();

		// Validates BaseHead.astro's inline FOUC-prevention script applies the
		// stored theme before paint, not just after the toggle script runs.
		await page.reload();
		await expect(html).toHaveClass(/dark/);
		await expect(page.locator("#moon-icon")).toBeVisible();
	});

	test("initializes dark theme from prefers-color-scheme when no theme is stored", async ({
		page,
	}) => {
		await page.emulateMedia({ colorScheme: "dark" });
		await page.goto("/en/");

		await expect(page.locator("html")).toHaveClass(/dark/);
		await expect(page.locator("#moon-icon")).toBeVisible();
	});
});
