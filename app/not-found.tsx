import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">404</p>
      <h1 className="mt-4 text-balance font-heading text-4xl font-semibold text-slate-950 sm:text-5xl">
        Aradığınız Sayfa Bulunamadı
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        URL değişmiş olabilir veya sayfa kaldırılmış olabilir. Ana sayfaya dönerek hizmetlerimizi inceleyebilirsiniz.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
      >
        Anasayfaya Dön
      </Link>
    </div>
  )
}
