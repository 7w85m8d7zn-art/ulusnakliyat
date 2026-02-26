'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyButtons } from '@/components/StickyButtons'
import { products } from '@/data/products'

interface ProductDetailClientProps {
  product: Product
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [selectedSize, setSelectedSize] = useState('')

  const whatsappMessage = encodeURIComponent(
    `Merhaba, ${product.name} hizmeti hakkında bilgi almak istiyorum.\nUygulama süresi, fiyat bilgisi ve randevu için yardımcı olur musunuz?`
  )

  const whatsappLink = `https://wa.me/905306249382?text=${whatsappMessage}`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index ? 'ring-2 ring-rose' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Title & Category */}
              <div className="mb-6">
                <div className="inline-block bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold mb-4">
                  {product.category === 'populer' ? 'Popüler' : 'Uzman Uygulama'}
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg">
                  {product.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-gray-600 text-sm mb-2">Seans Başlangıç</p>
                <p className="text-5xl font-serif font-bold">
                  ₺{product.priceFrom.toLocaleString('tr-TR')}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Bilgilendirme amaçlı seans başlangıç fiyatıdır
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Seçenek</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-rose bg-rose/10'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Seans / Paket</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all flex items-center justify-center font-semibold ${
                        selectedSize === size
                          ? 'border-rose bg-rose/10'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.921 1.226-1.129 1.48-.215.255-.42.27-.715.09-.295-.189-1.243-.459-2.37-1.475-.874-.778-1.464-1.742-1.635-2.038-.16-.296-.017-.458.12-.606.123-.122.294-.314.442-.471.149-.157.198-.256.297-.416.1-.162.049-.305-.024-.429-.073-.123-.67-1.616-.92-2.206-.247-.609-.5-.52-.67-.529-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.634.803 5.11 2.323 7.177l-2.422 8.842 9.072-2.382a9.861 9.861 0 004.773 1.216h.005c5.396 0 9.747-4.363 9.747-9.798 0-2.64-.806-5.117-2.327-7.184-.529-.822-1.223-1.55-2.062-2.152-.838-.602-1.817-.972-2.8-1.069-.973-.093-1.951.023-2.868.326-.917.303-1.755.81-2.363 1.468-.608.658-1.014 1.438-1.178 2.27-.164.832-.057 1.719.311 2.472z" />
                  </svg>
                  WhatsApp’tan Bilgi Al
                </motion.a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Uygulama Detayları</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start gap-3">
                    <span>✓</span>
                    <span>Hijyenik ortam ve kişiye özel uygulama planı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✓</span>
                    <span>İşlem öncesi analiz ve uygulama bilgilendirmesi yapılır</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✓</span>
                    <span>İşlem sonrası bakım önerileri paylaşılır</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✓</span>
                    <span>Uygulama öncesi görüşme için salon ziyareti önerilir</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Diğer Hizmetler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <a href={`/urun/${relatedProduct.slug}`} className="group cursor-pointer">
                      <div className="relative h-64 overflow-hidden rounded-lg mb-3 bg-gray-100">
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-sm group-hover:text-rose transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-rose text-sm">₺{relatedProduct.priceFrom.toLocaleString('tr-TR')}</p>
                    </a>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
