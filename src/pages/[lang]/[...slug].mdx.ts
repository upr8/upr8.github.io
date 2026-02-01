import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import type { BlogEntry, LibraryEntry } from '@/types';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const getStaticPaths: GetStaticPaths = async () => {
  const langs: Array<'en' | 'fa'> = ['en', 'fa'];
  const paths: Array<{
    params: { lang: string; slug: string };
    props: { filePath: string };
  }> = [];

  for (const lang of langs) {
    // Get blog posts
    const posts = await getCollection('blog', (entry: BlogEntry) =>
      entry.data.published && entry.data.lang === lang
    );

    // Get books with reviews
    const books = await getCollection('library', (entry: LibraryEntry) =>
      entry.data.published && entry.data.lang === lang && entry.data.hasReview
    );

    // Add blog posts paths
    for (const post of posts) {
      const slug = post.id.split('/')[0];
      paths.push({
        params: { lang, slug },
        props: { filePath: `data/blog/${slug}/index.${lang}.mdx` },
      });
    }

    // Add book review paths
    for (const book of books) {
      const slug = book.id.split('/')[0];
      paths.push({
        params: { lang, slug },
        props: { filePath: `data/library/${slug}/index.${lang}.mdx` },
      });
    }
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { filePath } = props as { filePath: string };

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.readFile(fullPath, 'utf-8');

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return new Response('File not found', { status: 404 });
  }
};
