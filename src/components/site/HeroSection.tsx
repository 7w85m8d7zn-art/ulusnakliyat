import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function HeroSection() {
  return (
    <section id="hero" className="relative scroll-mt-28 overflow-hidden border-b border-slate-200/80 bg-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="site-container grid grid-cols-1 gap-8 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Kurumsal Nakliyat Çözümleri
          </p>

          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Güvenli, Hızlı ve Sigortalı
            <span className="text-brand-700"> Nakliyat Hizmeti</span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {siteConfig.serviceArea} için evden eve, ofis ve şehirler arası taşıma operasyonlarını
            uzman ekiplerle, sözleşmeli ve zamanında teslim odaklı yönetiyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim#teklif-formu"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Ücretsiz Ekspertiz Talep Et
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              WhatsApp'tan Yaz
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Deneyim</dt>
              <dd className="mt-2 font-heading text-2xl font-semibold text-slate-950">10+ yıl</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Teslimat</dt>
              <dd className="mt-2 font-heading text-2xl font-semibold text-slate-950">%98 zamanında</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Müşteri</dt>
              <dd className="mt-2 font-heading text-2xl font-semibold text-slate-950">5000+</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&auto=format&fit=crop&q=80"
              alt="Sade Nakliyat taşıma operasyonu"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="surface-card p-5 sm:p-6">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Hızlı Başlangıç</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Adres ve tarih bilgilerinizi iletin, ekip aynı gün içinde geri dönüş yapıp net teklif planını oluştursun.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Telefonla Başla
              </a>
              <Link
                href="/iletisim#teklif-formu"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                Formu Doldur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
