import type { APIRoute } from 'astro';
import { getAllLocations, LOCATION_SERVICES } from '@/data/locations';

const siteUrl = 'https://glenhausgardenroom.com';
const lastmod = new Date().toISOString().split('T')[0];

// Static pages
const staticPages: { path: string; priority: string; changefreq: string }[] = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/locations', priority: '0.8', changefreq: 'monthly' },
  { path: '/garden-rooms', priority: '0.9', changefreq: 'weekly' },
  { path: '/decking', priority: '0.9', changefreq: 'weekly' },
  { path: '/projects', priority: '0.7', changefreq: 'monthly' },
];

function urlEntry(path: string, priority: string, changefreq: string): string {
  const loc = path ? `${siteUrl}${path}` : siteUrl + '/';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(): string {
  const entries: string[] = staticPages.map((p) => urlEntry(p.path, p.priority, p.changefreq));

  for (const location of getAllLocations()) {
    entries.push(urlEntry(`/${location.slug}`, '0.8', 'monthly'));
    for (const service of LOCATION_SERVICES) {
      entries.push(urlEntry(`/${location.slug}/${service}`, '0.7', 'monthly'));
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;
}

export const GET: APIRoute = () => {
  const sitemap = generateSitemap();
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
