import { expect, test } from "@playwright/test";
import { FOOTER_ARIA_LABELS, GITHUB_URL, LANGS } from "./constants";

for (const lang of LANGS) {
	test.describe(`footer (${lang})`, () => {
		test("renders the copyright, RSS, and GitHub links with working icons", async ({
			page,
		}) => {
			await page.goto(`/${lang}/`);
			const footer = page.locator("footer");
			await expect(footer).toBeVisible();

			const copyrightLink = footer.getByRole("link", {
				name: FOOTER_ARIA_LABELS[lang].copyright,
			});
			await expect(copyrightLink).toHaveAttribute("href", `/${lang}/about`);

			const rssLink = footer.getByRole("link", {
				name: FOOTER_ARIA_LABELS[lang].rss,
			});
			await expect(rssLink).toHaveAttribute("href", `/${lang}/rss.xml`);
			await expect(rssLink).toHaveAttribute("target", "_blank");
			await expect(rssLink).toHaveAttribute("rel", "noreferrer");
			await expect(rssLink.locator("svg title")).toHaveText("RSS Feed");

			const githubLink = footer.getByRole("link", {
				name: FOOTER_ARIA_LABELS[lang].github,
			});
			await expect(githubLink).toHaveAttribute("href", GITHUB_URL);
			await expect(githubLink).toHaveAttribute("target", "_blank");
			await expect(githubLink).toHaveAttribute("rel", "noreferrer");
			await expect(githubLink.locator("svg title")).toHaveText("GitHub");
		});
	});
}
