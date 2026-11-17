import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Rótulo exibido em posts marcados com `example: true` no frontmatter. */
export const EXAMPLE_POST_LABEL = 'Publicação de exemplo';

/** Posts públicos (sem rascunhos), do mais recente ao mais antigo. */
export async function getPublishedPosts(limit?: number): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return limit === undefined ? posts : posts.slice(0, limit);
}
