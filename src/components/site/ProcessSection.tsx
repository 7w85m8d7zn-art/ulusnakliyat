import { processSteps } from '@/lib/dataAdapter'
import { SectionHeading } from '@/components/site/SectionHeading'

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Süreç"
          title="4 Adımda Planlı Taşınma"
          description="İlk çağrıdan teslimata kadar tüm operasyon tek ekip sorumluluğunda ilerler."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-heading text-3xl font-semibold text-brand-700">{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
