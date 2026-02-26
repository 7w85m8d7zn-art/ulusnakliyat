import Link from 'next/link'
import { SectionHeading } from '@/components/site/SectionHeading'
import { ServiceExplorer } from '@/components/site/ServiceExplorer'
import { getServices } from '@/lib/dataAdapter'
import { siteConfig } from '@/lib/siteConfig'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Hizmetler',
  description:
    'Evden eve, ofis, şehirler arası, asansörlü ve depolama dahil tüm nakliyat hizmetlerimizi detaylı inceleyin.',
  path: '/hizmetler',
  keywords: ['nakliyat hizmetleri', 'ofis taşıma', 'eşya depolama'],
})

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className="section-y">
      <div className="site-container">
        <header className="surface-card p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Hizmet Listesi</p>
          <h1 className="mt-3 text-balance font-heading text-4xl font-semibold text-slate-950 sm:text-5xl">
            Tüm Nakliyat Hizmetlerimiz
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Her hizmet kartında hızlı inceleme açabilir, dilerseniz tam detay sayfasına geçebilirsiniz.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              WhatsApp'tan Sor
            </a>
            <Link
              href="/iletisim#teklif-formu"
              className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700"
            >
              Teklif Formu
            </Link>
          </div>
        </header>

        <section className="mt-14">
          <SectionHeading
            title={`${services.length} Hizmet Tek Sayfada`}
            description="Hizmetler arasında karşılaştırma yapabilir, uygun paketi hızlıca seçebilirsiniz."
          />

          <div className="mt-8">
            <ServiceExplorer services={services} />
          </div>
        </section>
      </div>
    </div>
  )
}
