import Link from 'next/link'
import { FinalCta } from '@/components/site/FinalCta'
import { HeroSection } from '@/components/site/HeroSection'
import { SectionHeading } from '@/components/site/SectionHeading'
import { ServiceCard } from '@/components/site/ServiceCard'
import { TestimonialsSection } from '@/components/site/TestimonialsSection'
import { WhyUsSection } from '@/components/site/WhyUsSection'
import { getFeaturedServices } from '@/lib/dataAdapter'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Anasayfa',
  description:
    'Sade Nakliyat ile evden eve, ofis ve şehirler arası taşınmalarda sigortalı ve sözleşmeli profesyonel hizmet alın.',
  path: '/',
  keywords: [
    'nakliyat',
    'evden eve nakliyat',
    'asansörlü nakliyat',
    'şehirler arası nakliyat',
  ],
})

export default function HomePage() {
  const featuredServices = getFeaturedServices(3)
  const problems = [
    {
      title: 'Belirsiz Fiyat ve Sonradan Ek Ücret',
      detail:
        'Ekspertiz sonrası net teklif ve sözleşme ile taşıma günü sürpriz maliyet riskini azaltıyoruz.',
    },
    {
      title: 'Hasar ve Kayıp Endişesi',
      detail:
        'Sigortalı taşıma, standart paketleme ve ekip lideri kontrolü ile eşyaları daha güvenli yönetiyoruz.',
    },
    {
      title: 'Gecikme ve İletişim Sorunu',
      detail:
        'Planlı zaman çizelgesi ve süreç boyunca tek sorumlu iletişim kanalı ile operasyonu görünür kılıyoruz.',
    },
  ]

  return (
    <>
      <HeroSection />

      <section className="section-y">
        <div className="site-container">
          <SectionHeading
            eyebrow="Genel Bilgi"
            title="Taşınma Sürecindeki Temel Sorunları Planlı Operasyonla Çözüyoruz"
            description="Sade Nakliyat; fiyat, zaman ve güvenlik kaynaklı taşınma problemlerini net süreç yönetimiyle kontrol altına alır."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
              <article key={problem.title} className="surface-card p-5">
                <h3 className="text-lg font-semibold text-slate-950">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{problem.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Öne Çıkan Hizmetler"
              title="Taşınma İhtiyacınıza Uygun Çözümler"
              description="Ev, ofis ve şehirler arası taşınmalarda en sık tercih edilen hizmetlerimizi inceleyin."
            />
            <Link
              href="/hizmetler"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
            >
              Tüm Hizmetleri Gör
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />

      <TestimonialsSection />
      <FinalCta />
    </>
  )
}
