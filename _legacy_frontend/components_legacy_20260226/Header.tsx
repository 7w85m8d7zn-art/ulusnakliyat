'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { AppointmentModal } from './AppointmentModal'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const prevBodyOverflow = document.body.style.overflow
    const prevBodyOverflowX = document.body.style.overflowX
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevHtmlOverflowX = document.documentElement.style.overflowX

    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.overflowX = 'hidden'

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.body.style.overflowX = prevBodyOverflowX
      document.documentElement.style.overflow = prevHtmlOverflow
      document.documentElement.style.overflowX = prevHtmlOverflowX
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-serif font-bold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="leading-none">Su Perisi</span>
              <span className="hidden sm:block text-[11px] font-sans font-medium tracking-wide text-gray-500 mt-1">
                Güzellik Salonu
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-rose transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/koleksiyonlar" className="text-sm hover:text-rose transition-colors">
                Hizmetler
              </Link>
              <Link href="/hakkimizda" className="text-sm hover:text-rose transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-sm hover:text-rose transition-colors">
                Randevu Oluştur
              </Link>
            </nav>

            {/* Right actions (mobile + desktop) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/905306249382"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp'tan yaz"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/70 backdrop-blur px-3 py-2 hover:border-gray-300"
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-green-600">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.19 1.62 6.02L0 24l6.15-1.61A11.95 11.95 0 0 0 12.02 24C18.64 24 24 18.62 24 12c0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.9c-1.8 0-3.56-.48-5.1-1.4l-.37-.22-3.65.96.97-3.55-.24-.36A9.85 9.85 0 0 1 2.1 12c0-5.46 4.46-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.89A9.82 9.82 0 0 1 21.9 12c0 5.46-4.42 9.9-9.88 9.9Zm5.77-7.4c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.11 2.98 1.26 3.18c.16.2 2.19 3.34 5.29 4.68.74.32 1.31.51 1.76.65.74.24 1.42.2 1.95.12.6-.09 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.6-.36Z" />
                </svg>
              </a>


              {/* Hamburger (mobile) */}
              <motion.button
                type="button"
                aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
                whileTap={{ scale: 0.95 }}
                className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/70 backdrop-blur px-3 py-2"
              >
                {isMenuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed left-0 top-0 w-screen h-screen z-[55] bg-black/55 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="fixed left-0 top-0 w-screen h-screen z-[60] md:hidden flex items-start justify-center pt-28 pointer-events-none">
              <motion.div
                className="w-[92vw] max-w-[380px] bg-white shadow-2xl rounded-2xl overflow-hidden pointer-events-auto -translate-y-8"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.18 }}
              >
              <div className="flex flex-col max-h-[70vh]">
                <div className="h-20 px-5 flex items-center justify-between border-b border-gray-100">
                  <span className="text-base font-medium">Menü</span>
                  <button
                    type="button"
                    aria-label="Menüyü kapat"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="px-5 py-5 overflow-y-auto bg-white max-h-[calc(70vh-5rem)]">
                  <nav className="flex flex-col">
                    <Link
                      href="/"
                      className="text-lg font-medium py-2.5 border-b border-gray-100 hover:text-rose transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Ana Sayfa
                    </Link>
                    <Link
                      href="/koleksiyonlar"
                      className="text-lg font-medium py-2.5 border-b border-gray-100 hover:text-rose transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hizmetler
                    </Link>
                    <Link
                      href="/hakkimizda"
                      className="text-lg font-medium py-2.5 border-b border-gray-100 hover:text-rose transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      href="/iletisim"
                      className="text-lg font-medium py-2.5 border-b border-gray-100 hover:text-rose transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Randevu Oluştur
                    </Link>
                  </nav>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsModalOpen(true)
                      }}
                      className="w-full rounded-md bg-rose px-4 py-3 text-white text-sm font-semibold hover:opacity-90 transition"
                    >
                      Randevu Oluştur
                    </button>
                    <a
                      href="https://wa.me/905306249382"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 hover:border-gray-300"
                    >
                      WhatsApp’tan Yaz
                    </a>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setIsMenuOpen(false)
        }}
      />
    </>
  )
}
