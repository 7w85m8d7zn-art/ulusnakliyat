'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'

const navItems = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/surec', label: 'Süreç' },
  { href: '/iletisim', label: 'İletişim' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/hizmetler') {
      return pathname === '/hizmetler' || pathname === '/koleksiyonlar' || pathname.startsWith('/urun/')
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-fit">
          <p className="font-heading text-2xl font-semibold tracking-tight text-slate-950">
            {siteConfig.brand}
          </p>
          <p className="text-xs text-slate-500">Sigortalı ve Sözleşmeli Nakliyat</p>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActiveRoute(item.href) ? 'text-brand-700' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
          >
            Ara: {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/iletisim#teklif-formu"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Teklif Al
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Menüyü aç veya kapat"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700 lg:hidden"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isOpen ? (
              <path d="M6 6L18 18M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  isActiveRoute(item.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-1 gap-2">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
            >
              WhatsApp Yaz
            </a>
            <Link
              href="/iletisim#teklif-formu"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Teklif Formu
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
