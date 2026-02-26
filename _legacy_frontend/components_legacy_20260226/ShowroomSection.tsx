'use client'

import { motion } from 'framer-motion'

export function ShowroomSection() {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/shoowroom.png"
              alt="Su Perisi Güzellik Salonu"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Salonumuzu Ziyaret Edin
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Microblading, kalıcı eyeliner, dudak renklendirme, kirpik uygulamaları ve cilt bakımı hizmetlerimiz için salonumuzu ziyaret edebilirsiniz. İşlem öncesi danışmanlık ve analiz hizmeti sunuyoruz.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2C3E50 text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold">Adres</h4>
                  <p className="text-gray-600">Kırşehir Merkez (Randevu ile)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2C3E50 text-2xl">⏰</span>
                <div>
                  <h4 className="font-semibold">Çalışma Saatleri</h4>
                  <p className="text-gray-600">Pzt - Cum: 09:00 - 19:00 | Cmt: 10:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2C3E50 text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold">İletişim</h4>
                  <p className="text-gray-600">
                    <a href="https://wa.me/905306249382" target="_blank" rel="noreferrer" className="hover:underline">
                      WhatsApp'tan Yaz: 0530 624 93 82
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
