'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function FloatingCtas() {
  return (
    <div className="fixed inset-x-3 z-40 md:hidden" style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-xl shadow-slate-900/15 backdrop-blur">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-2 py-3 text-xs font-semibold text-slate-800 transition hover:bg-slate-200"
        >
          Ara
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-2 py-3 text-xs font-semibold text-white transition hover:bg-emerald-700"
        >
          WhatsApp
        </a>
        <Link
          href="/iletisim#teklif-formu"
          className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-2 py-3 text-xs font-semibold text-white transition hover:bg-brand-700"
        >
          Teklif Al
        </Link>
      </div>
    </div>
  )
}
