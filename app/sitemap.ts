import type { MetadataRoute } from 'next';

const BASE_URL = 'https://servicebookpros.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/features',
    '/pricing',
    '/about',
    '/contact',
    '/switch-from-housecall-pro',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/pricing' ? 0.9 : 0.7,
  }));
}
