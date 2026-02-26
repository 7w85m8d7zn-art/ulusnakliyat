'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Randevu almak zorunlu mu?',
    answer:
      'Yoğunluğa göre değişmekle birlikte, işlemlerin rahat ilerlemesi için randevu ile gelmenizi öneriyoruz. WhatsApp üzerinden hızlıca randevu oluşturabilirsiniz.'
  },
  {
    id: 2,
    question: 'Microblading işlemi ne kadar kalıcıdır?',
    answer:
      'Cilt tipine ve bakım rutinine göre değişir. Ortalama 8-18 ay arası kalıcılık beklenir. Rötuş zamanı ve bakım önerilerini işlem sonrası sizinle paylaşıyoruz.'
  },
  {
    id: 3,
    question: 'Kalıcı eyeliner / dudak renklendirme acıtır mı?',
    answer:
      'İşlem öncesinde kullanılan lokal anestezik ürünlerle konfor artırılır. Hassasiyete göre hissiyat değişebilir; uygulama boyunca sizi bilgilendirerek ilerliyoruz.'
  },
  {
    id: 4,
    question: 'Lazer epilasyonda kaç seans gerekir?',
    answer:
      'Kıl yapısı, bölge ve cilt tipine göre seans sayısı değişir. Genellikle 6-10 seans aralığında planlama yapılır. İlk görüşmede kişisel seans planınızı oluşturuyoruz.'
  },
  {
    id: 5,
    question: 'İşlem sonrası bakım gerekiyor mu?',
    answer:
      'Evet. Özellikle microblading, dudak renklendirme ve eyeliner sonrası bakım süreci sonucu doğrudan etkiler. Size özel bakım talimatlarını yazılı olarak paylaşıyoruz.'
  },
  {
    id: 6,
    question: 'Ödeme seçenekleri nelerdir?',
    answer:
      'Nakit, banka transferi/EFT ve (varsa) kredi kartı ile ödeme seçenekleri mevcuttur. Güncel fiyat bilgisi için WhatsApp’tan yazabilirsiniz.'
  }
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">Sık Sorulan Sorular</h2>
          <p className="text-gray-600 text-lg">
            Su Perisi Güzellik Salonu hakkında merak edilen soruların cevaplarını bulabilirsiniz.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-rose flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
