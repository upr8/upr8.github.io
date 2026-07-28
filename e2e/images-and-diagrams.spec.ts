import { expect, test, type Locator } from "@playwright/test";
import {
	D2_DIAGRAM_POST_SLUG,
	LANGS,
	RASTER_IMAGE_POST_SLUG,
} from "./constants";

async function expectImagesLoaded(images: Locator) {
	const count = await images.count();
	expect(count).toBeGreaterThan(0);

	for (let i = 0; i < count; i++) {
		const img = images.nth(i);
		await expect(img).toHaveAttribute("src", /.+/);
		// These <img> tags use native loading="lazy", so naturalWidth stays 0
		// until the element nears the viewport — scroll it into view first.
		await img.scrollIntoViewIfNeeded();
		await expect
			.poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth), {
				message: `image ${await img.getAttribute("src")} should have decoded successfully`,
			})
			.toBeGreaterThan(0);
	}
}

for (const lang of LANGS) {
	test.describe(`images and diagrams (${lang})`, () => {
		// The d2 CLI (an external binary, not an npm package) renders .d2 sources to
		// SVG as a `pnpm run diagrams` prebuild step; Astro's image pipeline then
		// optimizes and hashes them. Both stages are outside the dependency bump
		// itself but are exactly the kind of thing a broken build could silently drop.
		test("a post embedding a D2-generated diagram renders it", async ({
			page,
		}) => {
			await page.goto(`/${lang}/${D2_DIAGRAM_POST_SLUG}`);
			const images = page.locator(".post-body img");
			await expectImagesLoaded(images);

			const srcs = await images.evaluateAll((els) =>
				els.map((el) => (el as HTMLImageElement).src),
			);
			expect(srcs.some((src) => src.includes(".d2."))).toBe(true);
		});

		test("a post embedding raster images renders them", async ({ page }) => {
			await page.goto(`/${lang}/${RASTER_IMAGE_POST_SLUG}`);
			const images = page.locator(".post-body img");
			await expectImagesLoaded(images);

			const count = await images.count();
			expect(count).toBeGreaterThanOrEqual(2);
		});
	});
}
