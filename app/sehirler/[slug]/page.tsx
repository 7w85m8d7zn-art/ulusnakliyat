import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SectionHeading } from '@/components/site/SectionHeading'
import { ServiceCard } from '@/components/site/ServiceCard'
import { getCityBySlug, getFeaturedServices, getCities } from '@/lib/dataAdapter'
import { siteConfig } from '@/lib/siteConfig'
import { createPageMetadata } from '@/lib/seo'

type CityDetailPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getCities().map((city) => ({ slug: city.slug }))
}

export function generateMetadata({ params }: CityDetailPageProps): Metadata {
  const city = getCityBySlug(params.slug)

  if (!city) {
    return createPageMetadata({
      title: 'Şehir Bulunamadı',
      description: 'Aradığınız şehir sayfası bulunamadı.',
      path: `/sehirler/${params.slug}`,
    })
  }

  return createPageMetadata({
    title: `${city.name} Nakliyat`,
    description: `${city.name} için ${city.shortDescription}`,
    path: `/sehirler/${city.slug}`,
    keywords: [`${city.name} nakliyat`, `${city.name} evden eve nakliyat`],
  })
}

export default function CityDetailPage({ params }: CityDetailPageProps) {
  const city = getCityBySlug(params.slug)

  if (!city) {
    notFound()
  }

  const services = getFeaturedServices(3)

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/6] min-h-[260px]">
            <Image
              src={city.image}
              alt={`${city.name} nakliyat hizmet bölgesi`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">Şehir Detayı</p>
              <h1 className="mt-3 text-balance font-heading text-4xl font-semibold text-white sm:text-5xl">
                {city.name} Nakliyat Hizmeti
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">{city.detailDescription}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-2">
            <section className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Hizmet Verdiğimiz Bölgeler</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {city.neighborhoods.map((district) => (
                  <li key={district} className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {district}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Bölgesel Avantajlar</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {city.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 p-6 sm:flex-row sm:p-8">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
            >
              {city.name} İçin Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                `${city.name} bölgesi için nakliyat teklifi almak istiyorum.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
            >
              WhatsApp Teklif
            </a>
            <Link
              href="/iletisim#teklif-formu"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              Teklif Formuna Git
            </Link>
          </div>
        </article>

        <section className="mt-14">
          <SectionHeading
            title={`${city.name} İçin Öne Çıkan Hizmetler`}
            description="Bu bölgede en çok talep edilen taşıma hizmetleri."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
