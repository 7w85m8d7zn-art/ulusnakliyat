import { QuoteForm } from '@/components/site/QuoteForm'
import { SectionHeading } from '@/components/site/SectionHeading'
import { siteConfig } from '@/lib/siteConfig'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'İletişim',
  description:
    'Sade Nakliyat iletişim kanalları, teklif formu ve WhatsApp hattı ile hızlı fiyat ve ekspertiz talebi oluşturun.',
  path: '/iletisim',
  keywords: ['nakliyat iletişim', 'teklif formu', 'whatsapp nakliyat'],
})

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="İletişim"
            title="Teklif Alın, Taşınmayı Bugün Planlayın"
            description="Telefon, WhatsApp veya form üzerinden bize ulaşın. Operasyon ekibimiz en kısa sürede net fiyat ve uygun tarih planı sunar."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Telefon</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="mt-2 block text-lg font-semibold text-slate-900">
                {siteConfig.phoneDisplay}
              </a>
            </article>
            <article className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">WhatsApp</p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg font-semibold text-slate-900"
              >
                Mesaj Gönder
              </a>
            </article>
            <article className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">E-posta</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg font-semibold text-slate-900">
                {siteConfig.email}
              </a>
            </article>
            <article className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Bölge</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{siteConfig.serviceArea}</p>
            </article>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <QuoteForm />

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <h2 className="font-heading text-2xl font-semibold text-slate-950">Ofis Konumu</h2>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.address}</p>
            </div>

            <div className="h-[360px]">
              <iframe
                title="Sade Nakliyat Konumu"
                src="https://www.google.com/maps?q=K%C4%B1r%C5%9Fehir%20Merkez&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-5 text-sm text-slate-600">
              Operasyon planı ve keşif için lütfen önceden iletişime geçin.
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
