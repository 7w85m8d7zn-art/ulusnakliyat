import type { MetadataRoute } from 'next'
import { getCities, getServices } from '@/lib/dataAdapter'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/hizmetler',
    '/surec',
    '/sehirler',
    '/hakkimizda',
    '/iletisim',
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = getServices().map((service) => ({
    url: absoluteUrl(`/urun/${service.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const cityRoutes: MetadataRoute.Sitemap = getCities().map((city) => ({
    url: absoluteUrl(`/sehirler/${city.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes]
}
