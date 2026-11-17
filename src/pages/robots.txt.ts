import type { APIRoute } from 'astro';
import { ROUTES } from '../lib/routes';
export const GET: APIRoute = ({ site }) => new Response(
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL(ROUTES.sitemap, site)}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
