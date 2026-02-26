import Image from 'next/image'
import Link from 'next/link'
import type { City } from '@/lib/dataAdapter'

interface CityCardProps {
  city: City
}

export function CityCard({ city }: CityCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/sehirler/${city.slug}`}>
        <div className="relative aspect-[16/9]">
          <Image
            src={city.image}
            alt={`${city.name} nakliyat hizmeti`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <h3 className="font-heading text-2xl font-semibold text-slate-950">{city.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{city.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {city.highlights.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <Link href={`/sehirler/${city.slug}`} className="inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800">
          Bölge Detayını Gör
        </Link>
      </div>
    </article>
  )
}
