import Link from 'next/link'
import { SectionHeading } from '@/components/site/SectionHeading'
import { processSteps } from '@/lib/dataAdapter'
import { siteConfig } from '@/lib/siteConfig'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Süreç',
  description:
    'Nakliyat sürecimizin adımlarını, planlama yaklaşımımızı ve operasyon standartlarımızı detaylı inceleyin.',
  path: '/surec',
  keywords: ['nakliyat süreci', 'taşınma adımları', 'operasyon planı'],
})

export default function ProcessPage() {
  const processNotes = [
    {
      title: 'Operasyon Öncesi Kontrol',
      detail: 'Ekspertiz, bina erişimi, asansör uygunluğu ve ekip planı taşıma gününden önce netleştirilir.',
    },
    {
      title: 'Taşıma Günü Koordinasyonu',
      detail: 'Saha lideri tüm ekibi yönetir; paketleme, yükleme ve sevkiyat tek plan üzerinden yürütülür.',
    },
    {
      title: 'Teslim Sonrası Kapanış',
      detail: 'Yerleşim, montaj ve son kontrol adımları tamamlanmadan süreç kapatılmaz.',
    },
  ]

  return (
    <>
      <section className="section-y">
        <div className="site-container">
          <header className="surface-card p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Süreç Yönetimi</p>
            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold text-slate-950 sm:text-5xl">
              Taşınma Sürecini Baştan Sona Planlı Yürütüyoruz
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              İlk keşiften teslimat kontrolüne kadar her adım net tanımlıdır. Böylece zaman, maliyet ve operasyon
              kalitesi öngörülebilir hale gelir.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
              >
                Süreci Telefonda Planla
              </a>
              <Link
                href="/iletisim#teklif-formu"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
              >
                Teklif Formu
              </Link>
            </div>
          </header>
        </div>
      </section>

      <section className="section-y">
        <div className="site-container">
          <SectionHeading
            eyebrow="4 Adım"
            title="Taşınma Süreci Adımları"
            description="Planlama, taşıma ve teslimat aşamalarını standardize ederek operasyon kalitesini koruyoruz."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="surface-card p-5">
                <p className="font-heading text-3xl font-semibold text-brand-700">{index + 1}</p>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {processNotes.map((item) => (
              <article key={item.title} className="surface-card p-5">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
