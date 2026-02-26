import { CityCard } from '@/components/site/CityCard'
import { SectionHeading } from '@/components/site/SectionHeading'
import { getCities } from '@/lib/dataAdapter'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Şehirler',
  description:
    'Sade Nakliyat’ın aktif hizmet verdiği şehirleri, bölge detaylarını ve operasyon avantajlarını inceleyin.',
  path: '/sehirler',
  keywords: ['şehirler arası nakliyat', 'ankara nakliyat', 'kırşehir nakliyat'],
})

export default function CitiesPage() {
  const cities = getCities()

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Hizmet Bölgeleri"
            title="Aktif Çalıştığımız Şehirler"
            description="Yoğun operasyon yürüttüğümüz şehirlerde daha hızlı keşif, daha net fiyatlandırma ve daha planlı teslimat sunuyoruz."
          />
        </section>

        <section className="mt-12">
          <h1 className="sr-only">Şehirler</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
