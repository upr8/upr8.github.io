import type { CollectionEntry } from 'astro:content';

// Content collection entry types
export type BlogEntry = CollectionEntry<'blog'>;
export type LibraryEntry = CollectionEntry<'library'>;
export type ArchiveEntry = CollectionEntry<'archive'>;
export type PagesEntry = CollectionEntry<'pages'>;

// Union type for all content entries
export type ContentEntry = BlogEntry | LibraryEntry | ArchiveEntry;
