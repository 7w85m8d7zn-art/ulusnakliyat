'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Ad Soyad *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Adınız ve soyadınız"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="ornek@eposta.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Telefon Numarası *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="05XX XXX XX XX"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          Hizmet / Konu *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
        >
          <option value="">Hizmet seçiniz</option>
          <option value="microblading">Microblading / Kaş Tasarımı</option>
          <option value="eyeliner">Kalıcı Eyeliner</option>
          <option value="dudak">Dudak Renklendirme</option>
          <option value="kirpik">Kirpik (Lifting / İpek Kirpik)</option>
          <option value="lazer">Lazer Epilasyon</option>
          <option value="cilt">Cilt Bakımı</option>
          <option value="fiyat">Fiyat Bilgisi</option>
          <option value="diger">Diğer</option>
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Mesaj *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="İstediğiniz işlem, tarih/saat tercihiniz ve varsa ek notlarınızı yazabilirsiniz..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all resize-none"
        />
      </motion.div>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center"
        >
          <p className="font-semibold">✓ Mesajınız başarıyla gönderildi!</p>
          <p className="text-sm mt-1">Su Perisi ekibi en kısa sürede WhatsApp veya telefon ile dönüş yapacaktır.</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </motion.button>

      <p className="text-center text-gray-600 text-sm">
        Hızlı iletişim için WhatsApp’tan yazabilirsiniz.
      </p>
    </form>
  )
}
