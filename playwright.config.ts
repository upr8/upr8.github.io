import { defineConfig, devices } from "@playwright/test";

const PORT = 4322;
// Use 'localhost', not '127.0.0.1': Astro's preview server binds to the
// hostname 'localhost' resolves to, which on some systems is IPv6-only
// (::1) — probing 127.0.0.1 there hangs until the webServer timeout.
const LOCAL_URL = `http://localhost:${PORT}`;

// Unset PLAYWRIGHT_BASE_URL -> boot a local build+preview and test against it.
// Set (e.g. to https://www.asaiyan.com) -> hit that live origin directly.
const baseURL = process.env.PLAYWRIGHT_BASE_URL || LOCAL_URL;
const isRemoteTarget = !!process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
	testDir: "./e2e",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: [["list"], ["html", { open: "never" }]],
	timeout: 30_000,
	expect: {
		timeout: 5_000,
	},
	use: {
		baseURL,
		trace: "on-first-retry",
		screenshot: "only-on-failure",
		video: "off",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	// No local server to boot when the target is already a live, externally-hosted URL.
	...(isRemoteTarget
		? {}
		: {
				webServer: {
					// `astro build` (via npm run build) is required locally because the sitemap,
					// PWA manifest/service worker, and RSS output are only fully materialized in
					// build output, not under `astro dev`.
					command: `npm run build && npm run preview -- --port ${PORT}`,
					url: LOCAL_URL,
					reuseExistingServer: !process.env.CI,
					timeout: 180_000,
					stdout: "pipe",
					stderr: "pipe",
				},
			}),
});
