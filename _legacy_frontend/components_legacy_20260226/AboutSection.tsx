'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">Hakkımızda</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Su Perisi Güzellik Salonu’nda microblading, kalıcı eyeliner, dudak renklendirme, kirpik ve cilt bakımı gibi
            hizmetleri hijyenik, konforlu ve profesyonel bir ortamda sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/img1.png"
              alt="Salonumuzdan bir görünüm"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Deneyimli uzman kadromuzla, yüz hatlarınıza ve cilt tipinize uygun kişiselleştirilmiş uygulamalar yapıyoruz.
              Amacımız; doğal, zarif ve uzun süre kalıcı sonuçlar elde etmeniz.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Kullandığımız ürün ve teknikler güncel standartlara uygundur. Her işlem öncesinde detaylı analiz yapar,
              işlem sonrası bakım önerileriyle süreci birlikte yönetiriz.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Microblading & Kaş Tasarımı</h4>
                  <p className="text-gray-600">Yüzünüze uygun doğal kaş tasarımı ve kalıcı uygulamalar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Kalıcı Eyeliner & Dudak Renklendirme</h4>
                  <p className="text-gray-600">Gün boyu taze görünüm için profesyonel pigment uygulamaları</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Lazer Epilasyon & Cilt Bakımı</h4>
                  <p className="text-gray-600">3 farklı lazer seçeneği ve cilt tipinize uygun bakım protokolleri</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
