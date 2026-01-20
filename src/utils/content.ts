import { getCollection } from 'astro:content';
import type { BlogEntry, LibraryEntry, ArchiveEntry } from '@/content/types';

type Lang = 'en' | 'fa';

export interface TagData {
  text: string;
  count: number;
  url: string;
}

// Tags to exclude from tag clouds
const EXCLUDED_TAGS = new Set([
  'fiction',
  'non-fiction',
  // Country names
  'uk',
  'usa',
  'iran',
  'germany',
  'czech',
  'japan',
  'portugal',
  'brazil',
]);

/**
 * Extract slug from content entry ID
 */
export function getSlug(id: string): string {
  const parts = id.split('/');
  return parts[0];
}

/**
 * Get latest published blog posts for a given language
 */
export async function getLatestPosts(lang: Lang, limit: number = 5): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', (entry: BlogEntry) =>
    entry.data.published && entry.data.lang === lang
  );
  posts.sort((a: BlogEntry, b: BlogEntry) => b.data.date.getTime() - a.data.date.getTime());
  return posts.slice(0, limit);
}

/**
 * Get the latest published books from the library for a given language
 */
export async function getLatestBooks(lang: Lang, limit: number = 5): Promise<LibraryEntry[]> {
  const books = await getCollection('library', (entry: LibraryEntry) =>
    entry.data.published && entry.data.lang === lang
  );
  books.sort((a: LibraryEntry, b: LibraryEntry) => b.data.date.getTime() - a.data.date.getTime());
  return books.slice(0, limit);
}

/**
 * Get tag data from all content collections for a given language
 * Returns tags sorted by count (descending) with URLs
 */
export async function getTagData(
  lang: Lang,
  options: { maxTags?: number; minCount?: number } = {}
): Promise<TagData[]> {
  const { maxTags = 50, minCount = 1 } = options;

  // Get all content
  const [blogs, library, archives] = await Promise.all([
    getCollection('blog', (entry: BlogEntry) =>
      entry.data.published && entry.data.lang === lang
    ),
    getCollection('library', (entry: LibraryEntry) =>
      entry.data.published && entry.data.lang === lang
    ),
    getCollection('archive', (entry: ArchiveEntry) =>
      entry.data.published && entry.data.lang === lang
    ),
  ]);

  // Collect tag counts
  const tagCounts = new Map<string, number>();
  for (const post of [...blogs, ...library, ...archives]) {
    if (post.data.tags) {
      for (const tag of post.data.tags) {
        if (!EXCLUDED_TAGS.has(tag)) {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        }
      }
    }
  }

  // Filter, sort, and format
  return Array.from(tagCounts.entries())
    .filter(([_, count]) => count >= minCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxTags)
    .map(([tag, count]) => ({
      text: tag,
      count,
      url: `/${lang}/tag/${tag}`,
    }));
}
