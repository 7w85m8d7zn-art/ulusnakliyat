import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/dataAdapter'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/urun/${service.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={service.images[0]}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            {service.categoryLabel}
          </p>
          <p className="text-sm font-semibold text-slate-900">{service.startingPriceLabel}</p>
        </div>

        <h3 className="font-heading text-xl font-semibold text-slate-950">{service.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>

        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/urun/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          Detayı İncele
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
