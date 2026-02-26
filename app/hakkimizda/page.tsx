import { SectionHeading } from '@/components/site/SectionHeading'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Hakkımızda',
  description:
    'Sade Nakliyat ekibini, çalışma prensiplerimizi ve neden güvenle tercih edildiğimizi yakından tanıyın.',
  path: '/hakkimizda',
  keywords: ['nakliyat firması', 'hakkımızda', 'sigortalı taşıma'],
})

const values = [
  {
    title: 'Planlı Operasyon',
    description:
      'Her taşıma öncesinde kapsam, ekip ve zaman çizelgesi netleştirilir. Süreç rastlantıya bırakılmaz.',
  },
  {
    title: 'Şeffaf Fiyatlandırma',
    description:
      'Ekspertiz sonrası yazılı teklif sunar, taşıma gününde ek sürpriz maliyet oluşturmadan ilerleriz.',
  },
  {
    title: 'Müşteri İletişimi',
    description:
      'Taşıma boyunca tek sorumlu ekip lideriyle sürekli iletişim sağlarız.',
  },
  {
    title: 'Hasar Önleme Disiplini',
    description:
      'Paketleme standardı, ekipman seçimi ve taşıma tekniği ile hasar riskini sistemli biçimde azaltırız.',
  },
]

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Taşınma Sürecini Güvenli ve Yönetilebilir Hale Getiriyoruz"
            description="Sade Nakliyat, bireysel ve kurumsal taşınmalarda operasyonel kalite, zaman yönetimi ve müşteri iletişimini bir arada sunmak için kuruldu."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Misyonumuz</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Taşınma gününü müşterilerimiz için stres kaynağı olmaktan çıkarıp, planlı bir operasyon sürecine
                dönüştürmek. Her taşıma işinde güvenlik, hız ve şeffaflık standartlarını korumak.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Vizyonumuz</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                İç Anadolu başta olmak üzere Türkiye genelinde referans gösterilen, kalite süreçleri tanımlı ve yüksek
                müşteri memnuniyetine sahip bir lojistik marka olmak.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            title="Çalışma Prensiplerimiz"
            description="Operasyon kalitesini sürdürülebilir kılan temel prensiplerimiz."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
