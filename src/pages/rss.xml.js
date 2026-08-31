import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export async function GET(context) {
  const posts = (await getCollection('journal', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  return rss({
    title: `${site.name} | Journal`,
    description: 'Notes on building, learning, people, and the little things worth noticing.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/journal/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
