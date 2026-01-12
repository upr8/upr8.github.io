import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Base schema for common frontmatter fields
const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  lang: z.enum(['en', 'fa']).default('en'),
  published: z.boolean().default(false),
  desc: z.string().optional().default(''),
  tags: z.array(z.string()).optional().default([]),
});

// Blog posts collection
const blog = defineCollection({
  loader: glob({ pattern: '**/[!_]*.mdx', base: './data/blog' }),
  schema: baseSchema.extend({
    type: z.literal('blog'),
  }),
});

// Library/Book reviews collection
const library = defineCollection({
  loader: glob({ pattern: '**/[!_]*.mdx', base: './data/library' }),
  schema: ({ image }) =>
    baseSchema.extend({
      type: z.literal('book'),
      author: z.string().optional(),
      publishDate: z.string().optional(),
      translator: z.string().optional(),
      translatePublisher: z.string().optional(),
      rate: z.number().min(1).max(5).optional(),
      hasReview: z.boolean().default(true),
      embeddedImagesLocal: z.array(image()).optional(),
    }),
});

// Archive/External links collection
const archive = defineCollection({
  loader: glob({ pattern: '**/[!_]*.mdx', base: './data/archive' }),
  schema: baseSchema.extend({
    type: z.literal('archive'),
    externalLink: z.string().url(),
    hasReview: z.boolean().default(false),
  }),
});

// Single pages collection (Home, About)
const pages = defineCollection({
  loader: glob({ pattern: '**/[!_]*.mdx', base: './data/pages' }),
  schema: baseSchema.extend({
    type: z.literal('single-page'),
  }),
});

export const collections = {
  blog,
  library,
  archive,
  pages,
};
