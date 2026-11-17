import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_DESCRIPTION, SITE_LOCALE, SITE_TITLE } from '../consts';
import { getPublishedPosts } from '../lib/posts';
import { postPath } from '../lib/routes';

export const GET: APIRoute = async ({ site }) => {
	if (!site) throw new Error('Defina `site` em astro.config.mjs para gerar o RSS.');
	const posts = await getPublishedPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site,
		customData: `<language>${SITE_LOCALE.toLowerCase()}</language>`,
		items: posts.map(({ id, data }) => ({
			title: data.title,
			description: data.description,
			pubDate: data.pubDate,
			link: postPath(id),
		})),
	});
};
