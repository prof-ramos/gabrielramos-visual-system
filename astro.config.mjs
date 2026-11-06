// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Set SITE_URL to the canonical production URL in Cloudflare Pages.
	site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:4321',
	output: 'static',
	trailingSlash: 'always',
	server: { host: '127.0.0.1', port: 4321 },
	integrations: [sitemap()],
});
