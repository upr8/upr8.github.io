export type Lang = "en" | "fa";
export const LANGS: Lang[] = ["en", "fa"];

interface NavItem {
	path: string;
	label: string;
	ariaLabel: string;
}

// Nav link accessible names come from `aria-label`, which overrides the visible
// text as the link's accessible name — always query by ariaLabel, not by label.
export const NAV_ITEMS: Record<Lang, NavItem[]> = {
	en: [
		{ path: "", label: "Home", ariaLabel: "Navigate to home page" },
		{ path: "blog", label: "Blog", ariaLabel: "Navigate to blog posts" },
		{
			path: "library",
			label: "Library",
			ariaLabel: "Navigate to library and book reviews",
		},
		{
			path: "archive",
			label: "Archive",
			ariaLabel: "Navigate to curated archives",
		},
		{ path: "about", label: "About", ariaLabel: "Navigate to about page" },
	],
	fa: [
		{ path: "", label: "خانه", ariaLabel: "رفتن به صفحه اصلی" },
		{ path: "blog", label: "بلاگ", ariaLabel: "رفتن به نوشته‌ها" },
		{
			path: "library",
			label: "کتابخانه",
			ariaLabel: "رفتن به کتابخانه و نقد کتاب‌ها",
		},
		{ path: "archive", label: "لینک‌ها", ariaLabel: "رفتن به آرشیو" },
		{ path: "about", label: "درباره", ariaLabel: "رفتن به صفحه درباره" },
	],
};

export const HOME_HEADINGS: Record<
	Lang,
	{ favoriteTopics: string; latestPosts: string; latestFromLibrary: string }
> = {
	en: {
		favoriteTopics: "Favorite Topics",
		latestPosts: "Latest Posts",
		latestFromLibrary: "Latest from the Library",
	},
	fa: {
		favoriteTopics: "موضوعات مورد علاقه",
		latestPosts: "آخرین نوشته‌ها",
		latestFromLibrary: "آخرین کتاب‌ها از کتابخانه",
	},
};

// Hardcoded terminal-style titles (not content-driven, safe to assert exactly)
export const PAGE_TITLES = {
	blogIndex: "$> journalctl",
	libraryIndex: "$> ldconfig -p",
	archiveIndex: "$> find . -type l -ls",
} as const;

export const ARCHIVE_EMPTY_STATE: Record<Lang, string> = {
	en: "No archived links yet.",
	fa: "هنوز لینکی آرشیو نشده است.",
};

export const NOT_FOUND_MESSAGE: Record<Lang, string> = {
	en: "The page you're looking for doesn't exist.",
	fa: "صفحه‌ای که به دنبال آن هستید وجود ندارد.",
};

// Stable content fixtures verified against data/ at plan time — safe to hardcode.
// A library entry with hasReview: true in both languages.
export const REVIEWED_BOOK_SLUG = "i-and-thou";
// A published blog post (both languages) whose body contains fenced code blocks.
export const CODE_POST_SLUG = "bind-first-configuration";
// A published blog post (both languages) embedding a D2-generated SVG diagram
// (data/blog/gatsby-to-astro/islands-architecture.d2) via markdown image syntax.
export const D2_DIAGRAM_POST_SLUG = "gatsby-to-astro";
// A published blog post (both languages) embedding two raster images
// (two-high-chairs.png, google-family-link.jpg), optimized to .webp at build time.
export const RASTER_IMAGE_POST_SLUG = "when-the-buyer-is-not-the-user";

// Frontmatter `tags` arrays for known fixtures, used to assert TagList renders
// the exact tag set for a given item (not just "some tags exist").
export const CODE_POST_TAGS = ["linux", "networking"];
export const REVIEWED_BOOK_TAGS = [
	"philosophy",
	"existentialism",
	"theology",
	"relationships",
	"dialogue",
];
// English-only archive entry (hasReview: false) used to check TagList on an
// archive card specifically.
export const ARCHIVE_FIXTURE = {
	title: "Python Performance Tuning: 20 Simple Tips",
	tags: ["management", "programming", "python"],
};

/** The internal content link within a card, distinct from its TagList pills (which link to /{lang}/tag/{tag}). */
export function contentLinkSelector(lang: Lang): string {
	return `a[href^="/${lang}/"]:not([href*="/tag/"])`;
}

export const FOOTER_ARIA_LABELS: Record<
	Lang,
	{ copyright: string; rss: string; github: string }
> = {
	en: {
		copyright: "Navigate to about page",
		rss: "Subscribe to RSS feed (opens in new tab)",
		github: "Visit GitHub profile (opens in new tab)",
	},
	fa: {
		copyright: "رفتن به صفحه درباره",
		rss: "اشتراک در خوراک RSS (در تب جدید باز می‌شود)",
		github: "مشاهده پروفایل گیت‌هاب (در تب جدید باز می‌شود)",
	},
};

export const GITHUB_URL = "https://github.com/upr8";
