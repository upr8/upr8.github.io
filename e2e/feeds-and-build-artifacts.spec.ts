import { expect, test } from "@playwright/test";
import { contentLinkSelector, LANGS } from "./constants";

for (const lang of LANGS) {
	test.describe(`rss feed (${lang})`, () => {
		test("rss.xml is well-formed and has items", async ({ request }) => {
			const res = await request.get(`/${lang}/rss.xml`);
			expect(res.status()).toBe(200);
			expect(res.headers()["content-type"]).toMatch(/xml/);

			const body = await res.text();
			expect(body).toMatch(/<rss[\s>]/);
			expect(body).toContain("<item>");
		});
	});
}

test.describe("build-only artifacts", () => {
	// Sitemap and PWA manifest are only emitted by `astro build`, not `astro dev`.
	// These specs degrade gracefully if ever run against a dev server by mistake.

	test("sitemap-index.xml lists real, populated per-page sitemaps", async ({
		request,
	}) => {
		const indexRes = await request.get("/sitemap-index.xml");
		test.skip(
			indexRes.status() === 404,
			"sitemap is only emitted by `astro build`, not `astro dev`",
		);
		expect(indexRes.status()).toBe(200);
		const indexBody = await indexRes.text();
		expect(indexBody).toContain("<sitemapindex");

		// Follow the index to an actual per-page sitemap chunk; request it by
		// pathname (not the absolute <loc>, which is always the prod origin
		// regardless of target) so this resolves against whichever target
		// (local preview or prod) this test run is actually pointed at.
		const locMatch = indexBody.match(/<loc>(.*?)<\/loc>/);
		expect(locMatch).not.toBeNull();
		const nestedPath = new URL(locMatch?.[1] ?? "").pathname;

		const nestedRes = await request.get(nestedPath);
		expect(nestedRes.status()).toBe(200);
		const nestedBody = await nestedRes.text();
		expect(nestedBody).toContain("<urlset");
		expect(nestedBody).toContain("/en/blog");
		expect(nestedBody).toContain("/fa/blog");

		const urlCount = (nestedBody.match(/<url>/g) ?? []).length;
		expect(urlCount).toBeGreaterThan(50);
	});

	test("manifest.webmanifest is present", async ({ request }) => {
		const res = await request.get("/manifest.webmanifest");
		test.skip(
			res.status() === 404,
			"PWA manifest is only emitted by `astro build`, not `astro dev`",
		);
		expect(res.status()).toBe(200);
		const manifest = await res.json();
		expect(manifest.name).toBe("Saeed Asaiyan");
		expect(manifest.short_name).toBe("Saeed");
	});

	test("rss.xsl stylesheet is served", async ({ request }) => {
		const res = await request.get("/rss.xsl");
		expect(res.status()).toBe(200);
	});

	test("raw .mdx source endpoint returns frontmatter for a discovered post", async ({
		page,
		request,
	}) => {
		// Discover a real slug from the rendered page rather than hardcoding one.
		await page.goto("/en/blog");
		const href = await page
			.locator("article")
			.first()
			.locator(contentLinkSelector("en"))
			.getAttribute("href");
		expect(href).toBeTruthy();

		const res = await request.get(`${href}.mdx`);
		expect(res.status()).toBe(200);
		// In `output: 'static'`, this endpoint's Response is pre-rendered to a
		// static file at build time and re-served by whatever static file server
		// is in front (astro preview locally, GitHub Pages in prod) — the
		// Content-Type it set at build time isn't guaranteed to survive, so just
		// confirm we got the raw source back, not an HTML error page.
		expect(res.headers()["content-type"]).not.toMatch(/html/);
		const body = await res.text();
		expect(body.startsWith("---")).toBe(true);
	});
});
