// Fonte única dos caminhos internos. O site usa `trailingSlash: 'always'`
// (astro.config.mjs): rotas de página terminam em barra.
export const ROUTES = {
	home: '/',
	blog: '/blog/',
	about: '/about/',
	rss: '/rss.xml',
	sitemap: '/sitemap-index.xml',
} as const;

export const postPath = (id: string) => `${ROUTES.blog}${id}/`;

export const NAV_LINKS = [
	{ href: ROUTES.home, label: 'Início' },
	{ href: ROUTES.blog, label: 'Blog' },
	{ href: ROUTES.about, label: 'Sobre' },
] as const;
