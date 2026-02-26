import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FAQAccordion } from '@/components/site/FAQAccordion'
import { SectionHeading } from '@/components/site/SectionHeading'
import { ServiceCard } from '@/components/site/ServiceCard'
import { faqItems, getRelatedServices, getServiceBySlug, getServices } from '@/lib/dataAdapter'
import { siteConfig } from '@/lib/siteConfig'
import { createPageMetadata } from '@/lib/seo'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return createPageMetadata({
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız hizmet bulunamadı.',
      path: `/urun/${params.slug}`,
    })
  }

  return createPageMetadata({
    title: service.name,
    description: `${service.description} Başlangıç fiyatı ${service.startingPriceLabel}.`,
    path: `/urun/${service.slug}`,
    keywords: [service.name, ...service.tags],
  })
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = getRelatedServices(service.slug, 3)

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <Image
                src={service.images[0]}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {service.images.slice(0, 3).map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={image}
                    alt={`${service.name} görsel ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
              {service.categoryLabel}
            </p>

            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold text-slate-950 sm:text-5xl">
              {service.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>

            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Başlangıç Fiyatı</p>
              <p className="mt-2 font-heading text-3xl font-semibold text-slate-950">{service.startingPriceLabel}</p>
            </div>

            <div className="mt-6 space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Paket Seçenekleri</h2>
              <div className="flex flex-wrap gap-2">
                {service.colors.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Uygun Taşıma Tipleri</h2>
              <div className="flex flex-wrap gap-2">
                {service.sizes.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Ara ve Hızlı Fiyat Al
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Merhaba, ${service.name} hizmetiniz için teklif almak istiyorum.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
              >
                WhatsApp ile Bilgi Al
              </a>
              <Link
                href="/iletisim#teklif-formu"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                Teklif Formuna Git
              </Link>
            </div>
          </article>
        </div>

        <section className="mt-16">
          <SectionHeading
            title="Bu Hizmet İçin Sık Sorulan Sorular"
            description="Operasyon detayları ve fiyatlandırma süreci için hızlı cevaplar."
          />
          <div className="mt-8">
            <FAQAccordion items={faqItems.slice(0, 6)} />
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            title="Diğer Hizmetler"
            description="Taşınma planınıza göre birlikte tercih edilen hizmetler."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((relatedService) => (
              <ServiceCard key={relatedService.id} service={relatedService} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
