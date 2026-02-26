import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'
import { Footer } from '@/components/site/Footer'
import { FloatingCtas } from '@/components/site/FloatingCtas'
import { Navbar } from '@/components/site/Navbar'
import { siteConfig } from '@/lib/siteConfig'
import './globals.css'

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: siteConfig.legalName,
  image: `${siteConfig.siteUrl}/favicon.ico`,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kırşehir',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  areaServed: siteConfig.serviceArea,
  openingHours: 'Mo-Sa 08:00-22:00',
  priceRange: '$$',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand} | Güvenli ve Hızlı Nakliyat`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.brand} | Güvenli ve Hızlı Nakliyat`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-slate-50 text-slate-900 antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <Navbar />
        <main className="min-h-[calc(100vh-80px)] pb-24 md:pb-0">{children}</main>
        <Footer />
        <FloatingCtas />
      </body>
    </html>
  )
}
