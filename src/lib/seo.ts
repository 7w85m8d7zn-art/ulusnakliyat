import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

function normalizeSiteUrl() {
  return siteConfig.siteUrl.endsWith('/')
    ? siteConfig.siteUrl.slice(0, -1)
    : siteConfig.siteUrl
}

export function absoluteUrl(path = '/') {
  const safePath = path.startsWith('/') ? path : `/${path}`
  return `${normalizeSiteUrl()}${safePath}`
}

type MetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url,
      title,
      description,
      siteName: siteConfig.brand,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
