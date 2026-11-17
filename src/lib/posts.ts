import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Rótulo exibido em posts marcados com `example: true` no frontmatter. */
export const EXAMPLE_POST_LABEL = 'Publicação de exemplo';

/** Posts públicos (sem rascunhos), do mais recente ao mais antigo. */
export async function getPublishedPosts(limit?: number): Promise<Post[]> {
	const published = await getCollection('blog', ({ data }) => !data.draft);
	// `toSorted` não altera o array devolvido pelo cache da coleção.
	const posts = published.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return limit === undefined ? posts : posts.slice(0, limit);
}
