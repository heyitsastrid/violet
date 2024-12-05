import rss, { pagesGlobToRssItems } from '@astrojs/rss';
rss({
	stylesheet: '/pretty-feed-v3.xsl',
});
export async function GET(context) {
  return rss({
    title: 'astrid\'s blog',
    description: 'a bunch of random stuff i like to write bout',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blogs/*.md')),
    customData: `<language>en-GB</language>`,
  });
}
