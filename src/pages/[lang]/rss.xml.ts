import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export function getStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'fa' } }];
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as 'en' | 'fa';

  // Get all published content for this language
  const blogs = await getCollection('blog', ({ data }) => data.published && data.lang === lang);
  const library = await getCollection('library', ({ data }) =>
    data.published && data.lang === lang && data.hasReview
  );

  // Combine and sort by date
  const allContent = [...blogs, ...library].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  // Extract slug from id
  function getSlug(id: string): string {
    return id.split('/')[0];
  }

  return rss({
    title: 'Saeed Asaiyan',
    description: lang === 'fa' ? 'وبلاگ شخصی' : 'Personal blog and notes',
    site: context.site || 'https://www.asaiyan.com',
    stylesheet: '/rss.xsl',
    items: allContent.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.desc || '',
      link: `/${lang}/${getSlug(item.id)}/`,
    })),
    customData: `<language>${lang}</language>`,
  });
}
