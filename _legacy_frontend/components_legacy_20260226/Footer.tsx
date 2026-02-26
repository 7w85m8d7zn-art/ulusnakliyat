'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Su Perisi Güzellik Salonu</h3>
            <p className="text-gray-400">Microblading, kalıcı eyeliner, dudak renklendirme, kirpik, lazer epilasyon ve cilt bakımı</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Microblading / Kaş Tasarımı</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Kalıcı Eyeliner</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Dudak Renklendirme</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Kirpik (Lifting / İpek Kirpik)</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Sık Sorulan Sorular</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <p className="text-gray-400 text-sm mb-3">
              İstanbul, Üsküdar (Randevu ile)
            </p>
            <a href="https://wa.me/905306249382" className="text-gray-400 hover:text-white transition-colors font-medium text-sm">
              WhatsApp: 0530 624 93 82
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Su Perisi Güzellik Salonu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
