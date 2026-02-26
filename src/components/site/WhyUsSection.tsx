import { whyUsItems } from '@/lib/dataAdapter'
import { SectionHeading } from '@/components/site/SectionHeading'

export function WhyUsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden Biz"
          title="Güven Veren Nakliyat Standartları"
          description="Her operasyonu planlı, takipli ve sözleşmeli yürütüyor; taşınma gününde stresi minimuma indiriyoruz."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
