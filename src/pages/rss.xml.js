import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'astrid’s Blog',
    description: 'a bunch of random stuff i like to write about',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blogs/*.md'),
    ),
	stylesheet: '/pretty-feed-v3.xsl',
  });
}