import { expect, test } from "@playwright/test";
import { CODE_POST_SLUG, LANGS, NAV_ITEMS } from "./constants";

for (const lang of LANGS) {
	test.describe(`navigation (${lang})`, () => {
		test("desktop nav links navigate to each section", async ({ page }) => {
			await page.goto(`/${lang}/about`);
			const desktopNav = page.locator("#main-nav ul").first();

			for (const item of NAV_ITEMS[lang]) {
				// Accessible name comes from aria-label, which overrides visible text.
				await desktopNav.getByRole("link", { name: item.ariaLabel }).click();
				const expectedPath = item.path ? `/${lang}/${item.path}` : `/${lang}/`;
				// Optional trailing slash: prod (GitHub Pages) canonicalizes to a
				// trailing slash; local `astro preview` does not.
				await expect(page).toHaveURL(new RegExp(`${expectedPath}/?$`));
			}
		});

		test("mobile hamburger menu opens, reveals links, and closes on navigation", async ({
			page,
		}) => {
			await page.setViewportSize({ width: 375, height: 812 });
			await page.goto(`/${lang}/blog`);

			const menuButton = page.locator("#mobile-menu-button");
			const mobileMenu = page.locator("#mobile-menu");
			const firstMobileLink = mobileMenu.locator(".mobile-nav-link").first();
			const menuIcon = page.locator("#menu-icon");
			const closeIcon = page.locator("#close-icon");

			// The collapsed state clips via a zero-height `overflow:hidden` ancestor,
			// which Playwright's toBeVisible() doesn't treat as hiding the (still
			// full-height) descendant link — assert on the opacity-0 container itself.
			await expect(menuButton).toHaveAttribute("aria-expanded", "false");
			await expect(mobileMenu).not.toBeVisible();
			await expect(menuIcon).toBeVisible();
			await expect(menuIcon.locator("svg title")).toHaveText("Menu");
			await expect(closeIcon).toBeHidden();

			await menuButton.click();
			await expect(menuButton).toHaveAttribute("aria-expanded", "true");
			await expect(mobileMenu).toBeVisible();
			await expect(firstMobileLink).toBeVisible();
			await expect(menuIcon).toBeHidden();
			await expect(closeIcon).toBeVisible();
			await expect(closeIcon.locator("svg title")).toHaveText("Close");

			await firstMobileLink.click();
			await expect(menuButton).toHaveAttribute("aria-expanded", "false");
			await expect(mobileMenu).not.toBeVisible();
			await expect(menuIcon).toBeVisible();
			await expect(closeIcon).toBeHidden();
		});

		test("reading progress gradient updates while scrolling a post", async ({
			page,
		}) => {
			await page.goto(`/${lang}/${CODE_POST_SLUG}`);
			const nav = page.locator("#main-nav");
			const initialStyle = await nav.getAttribute("style");

			await page.mouse.wheel(0, 8000);
			await page.waitForTimeout(200);
			const scrolledStyle = await nav.getAttribute("style");

			expect(scrolledStyle).not.toBe(initialStyle);
		});
	});
}
