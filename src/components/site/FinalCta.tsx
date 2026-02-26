import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Hızlı Teklif</p>
          <h2 className="mt-3 max-w-3xl text-balance font-heading text-3xl font-semibold sm:text-4xl">
            Taşınma Planınızı Bugün Netleştirin
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Ekspertiz sonrası net fiyat alın, taşıma gününde sürpriz yaşamayın. WhatsApp veya telefonla
            aynı gün içinde planlama başlatabilirsiniz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              {siteConfig.phoneDisplay} - Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white"
            >
              WhatsApp Mesajı Gönder
            </a>
            <Link
              href="/iletisim#teklif-formu"
              className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Teklif Formunu Doldur
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
