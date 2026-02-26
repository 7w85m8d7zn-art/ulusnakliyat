import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-heading text-2xl font-semibold text-white">{siteConfig.brand}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">Hizmetler</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/hizmetler" className="transition hover:text-white">
                Evden Eve Nakliyat
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="transition hover:text-white">
                Şehirler Arası Taşıma
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="transition hover:text-white">
                Ofis Taşıma
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="transition hover:text-white">
                Eşya Depolama
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">Hızlı Linkler</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/" className="transition hover:text-white">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="transition hover:text-white">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/surec" className="transition hover:text-white">
                Süreç
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="transition hover:text-white">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/surec" className="transition hover:text-white">
                Sık Sorulan Sorular
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">İletişim</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href={`tel:${siteConfig.phoneTel}`} className="transition hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.</p>
          <p>{siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
