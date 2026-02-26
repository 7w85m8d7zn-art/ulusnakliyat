'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/data/products'
import { AppointmentModal } from './AppointmentModal'

interface FeaturedGridProps {
  products: Product[]
}

export function FeaturedGrid({ products }: FeaturedGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Öne Çıkan Hizmetler
          </h2>
          <p className="text-gray-600 text-lg">
            Microblading, kalıcı eyeliner, dudak renklendirme, kirpik ve cilt bakımı uygulamalarımızdan seçmeler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/urun/${product.slug}`}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Tag Overlay */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold">
                      {product.category === 'populer' ? 'Popüler' : 'Uzman Uygulama'}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-rose transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description.substring(0, 60)}...
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Seans başlangıç</p>
                      <p className="text-2xl font-serif font-bold">₺{product.priceFrom.toLocaleString('tr-TR')}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
                    >
                      →
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/koleksiyonlar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Tüm Hizmetleri Gör
            </motion.button>
          </Link>
        </div>

        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
