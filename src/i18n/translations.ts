/**
 * Translation system for English and Persian (Farsi) localization
 */

export type Lang = 'en' | 'fa';

export interface Translations {
  nav: {
    home: string;
    blog: string;
    library: string;
    archive: string;
    about: string;
    ariaHome: string;
    ariaBlog: string;
    ariaLibrary: string;
    ariaArchive: string;
    ariaAbout: string;
    mainNavigation: string;
  };
  menu: {
    open: string;
    close: string;
  };
  theme: {
    toggle: string;
    switchToLight: string;
    switchToDark: string;
    currentlyLight: string;
    currentlyDark: string;
  };
  home: {
    favoriteTopics: string;
    latestPosts: string;
    latestFromLibrary: string;
    viewAll: string;
    viewAllArrow: string;
  };
  blog: {
    description: string;
    emptyState: string;
  };
  library: {
    description: string;
    emptyState: string;
  };
  archive: {
    description: string;
    emptyState: string;
  };
  tag: {
    blogPosts: string;
    books: string;
    archivedLinks: string;
    emptyState: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
  accessibility: {
    skipToContent: string;
    rssAriaLabel: string;
    githubAriaLabel: string;
    readBlogPost: (title: string) => string;
    readReview: (title: string) => string;
    coverImage: (title: string) => string;
    visitExternalLink: (title: string) => string;
    readNotes: (title: string) => string;
    socialLinks: string;
  };
  footer: {
    copyright: string;
  };
  lang: {
    switchTo: string;
    current: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    blog: 'Blog',
    library: 'Library',
    archive: 'Archive',
    about: 'About',
    ariaHome: 'Navigate to home page',
    ariaBlog: 'Navigate to blog posts',
    ariaLibrary: 'Navigate to library and book reviews',
    ariaArchive: 'Navigate to curated archives',
    ariaAbout: 'Navigate to about page',
    mainNavigation: 'Main navigation and reading progress',
  },
  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  theme: {
    toggle: 'Toggle theme',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    currentlyLight: 'Theme switcher, currently light mode',
    currentlyDark: 'Theme switcher, currently dark mode',
  },
  home: {
    favoriteTopics: 'Favorite Topics',
    latestPosts: 'Latest Posts',
    latestFromLibrary: 'Latest from the Library',
    viewAll: 'View all',
    viewAllArrow: '→',
  },
  blog: {
    description: 'List of Blog posts',
    emptyState: 'No blog posts yet.',
  },
  library: {
    description: 'List of books that I read',
    emptyState: 'No books yet.',
  },
  archive: {
    description: 'List of links',
    emptyState: 'No archived links yet.',
  },
  tag: {
    blogPosts: 'Blog Posts',
    books: 'Books',
    archivedLinks: 'Archived Links',
    emptyState: 'No content found with this tag.',
  },
  notFound: {
    title: 'Page Not Found',
    message: "The page you're looking for doesn't exist.",
    goHome: 'Go Home',
  },
  accessibility: {
    skipToContent: 'Skip to main content',
    rssAriaLabel: 'Subscribe to RSS feed (opens in new tab)',
    githubAriaLabel: 'Visit GitHub profile (opens in new tab)',
    readBlogPost: (title: string) => `Read blog post: ${title}`,
    readReview: (title: string) => `Read review of ${title}`,
    coverImage: (title: string) => `Cover image for ${title}`,
    visitExternalLink: (title: string) => `Visit external link: ${title} (opens in new tab)`,
    readNotes: (title: string) => `Read notes about: ${title}`,
    socialLinks: 'Social media and feed links',
  },
  footer: {
    copyright: 'Navigate to about page',
  },
  lang: {
    switchTo: 'Switch to Persian',
    current: 'Language switcher, currently English',
  },
};

const fa: Translations = {
  nav: {
    home: 'خانه',
    blog: 'بلاگ',
    library: 'کتابخانه',
    archive: 'آرشیو',
    about: 'درباره',
    ariaHome: 'رفتن به صفحه اصلی',
    ariaBlog: 'رفتن به نوشته‌ها',
    ariaLibrary: 'رفتن به کتابخانه و نقد کتاب‌ها',
    ariaArchive: 'رفتن به آرشیو',
    ariaAbout: 'رفتن به صفحه درباره',
    mainNavigation: 'منوی اصلی و نوار پیشرفت خواندن',
  },
  menu: {
    open: 'باز کردن منو',
    close: 'بستن منو',
  },
  theme: {
    toggle: 'تغییر تم',
    switchToLight: 'تغییر به تم روشن',
    switchToDark: 'تغییر به تم تاریک',
    currentlyLight: 'تنظیم تم، در حال حاضر روشن',
    currentlyDark: 'تنظیم تم، در حال حاضر تاریک',
  },
  home: {
    favoriteTopics: 'موضوعات مورد علاقه',
    latestPosts: 'آخرین نوشته‌ها',
    latestFromLibrary: 'آخرین کتاب‌ها از کتابخانه',
    viewAll: 'مشاهده همه',
    viewAllArrow: '←',
  },
  blog: {
    description: 'فهرست نوشته‌های بلاگ',
    emptyState: 'هنوز نوشته‌ای منتشر نشده است.',
  },
  library: {
    description: 'فهرست کتاب‌هایی که خوانده‌ام',
    emptyState: 'هنوز کتابی اضافه نشده است.',
  },
  archive: {
    description: 'فهرست لینک‌ها',
    emptyState: 'هنوز لینکی آرشیو نشده است.',
  },
  tag: {
    blogPosts: 'نوشته‌های بلاگ',
    books: 'کتاب‌ها',
    archivedLinks: 'لینک‌های آرشیو شده',
    emptyState: 'محتوایی با این برچسب یافت نشد.',
  },
  notFound: {
    title: 'صفحه یافت نشد',
    message: 'صفحه‌ای که به دنبال آن هستید وجود ندارد.',
    goHome: 'بازگشت به خانه',
  },
  accessibility: {
    skipToContent: 'رفتن به محتوای اصلی',
    rssAriaLabel: 'اشتراک در خوراک RSS (در تب جدید باز می‌شود)',
    githubAriaLabel: 'مشاهده پروفایل گیت‌هاب (در تب جدید باز می‌شود)',
    readBlogPost: (title: string) => `خواندن نوشته: ${title}`,
    readReview: (title: string) => `خواندن نقد ${title}`,
    coverImage: (title: string) => `تصویر جلد ${title}`,
    visitExternalLink: (title: string) => `مشاهده لینک خارجی: ${title} (در تب جدید باز می‌شود)`,
    readNotes: (title: string) => `خواندن یادداشت‌ها درباره: ${title}`,
    socialLinks: 'لینک‌های شبکه‌های اجتماعی و خوراک',
  },
  footer: {
    copyright: 'رفتن به صفحه درباره',
  },
  lang: {
    switchTo: 'تغییر به انگلیسی',
    current: 'تنظیم زبان، در حال حاضر فارسی',
  },
};

const translations: Record<Lang, Translations> = { en, fa };

/**
 * Get translations for a specific language
 */
export function t(lang: Lang): Translations {
  return translations[lang] || translations.en;
}

export { en, fa };
