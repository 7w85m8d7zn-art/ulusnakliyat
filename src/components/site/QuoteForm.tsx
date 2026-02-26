'use client'

import { useMemo, useState } from 'react'
import { getWhatsAppUrl } from '@/lib/siteConfig'

type QuoteFormState = {
  fullName: string
  phone: string
  fromLocation: string
  toLocation: string
  moveDate: string
  note: string
  company: string
}

type QuoteFormProps = {
  compact?: boolean
}

const initialState: QuoteFormState = {
  fullName: '',
  phone: '',
  fromLocation: '',
  toLocation: '',
  moveDate: '',
  note: '',
  company: '',
}

export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const endpoint = useMemo(() => {
    const custom = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (custom) return custom

    const adminApi = process.env.NEXT_PUBLIC_ADMIN_API_URL
    if (!adminApi) return ''

    return `${adminApi.replace(/\/$/, '')}/quotes`
  }, [])

  const today = new Date().toISOString().split('T')[0]

  const updateField = (key: keyof QuoteFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = () => {
    const digits = form.phone.replace(/\D/g, '')

    if (form.fullName.trim().length < 3) return 'Lütfen geçerli bir ad soyad girin.'
    if (digits.length < 10) return 'Lütfen geçerli bir telefon numarası girin.'
    if (!form.fromLocation.trim() || !form.toLocation.trim()) return 'Nereden ve nereye alanları zorunludur.'
    if (!form.moveDate) return 'Lütfen taşıma tarihi seçin.'
    return ''
  }

  const buildWhatsAppMessage = () => {
    return [
      'Merhaba, teklif almak istiyorum.',
      `Ad Soyad: ${form.fullName}`,
      `Telefon: ${form.phone}`,
      `Nereden: ${form.fromLocation}`,
      `Nereye: ${form.toLocation}`,
      `Tarih: ${form.moveDate}`,
      `Not: ${form.note || '-'}`,
    ].join('\n')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (form.company.trim()) {
      setSuccess('Talebiniz alındı. Ekibimiz kısa sürede sizinle iletişime geçecek.')
      setForm(initialState)
      return
    }

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: form.fullName,
      phone: form.phone,
      from: form.fromLocation,
      to: form.toLocation,
      date: form.moveDate,
      note: form.note,
      source: 'website-quote-form',
    }

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          setSuccess('Talebiniz kaydedildi. En kısa sürede sizi arayacağız.')
          setForm(initialState)
          return
        }
      }

      const whatsappUrl = getWhatsAppUrl(buildWhatsAppMessage())
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      setSuccess('Teklif mesajınız WhatsApp için hazırlandı. Lütfen mesajı gönderin.')
      setForm(initialState)
    } catch {
      const whatsappUrl = getWhatsAppUrl(buildWhatsAppMessage())
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      setSuccess('Bağlantı kurulamadı. WhatsApp üzerinden devam edebilirsiniz.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="teklif-formu"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      aria-labelledby="quote-form-heading"
    >
      <div className="mb-4">
        <h2
          id="quote-form-heading"
          className={`font-heading font-semibold text-slate-950 ${compact ? 'text-2xl' : 'text-3xl'}`}
        >
          Teklif Al
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Adres ve tarih bilginizi bırakın, net fiyat teklifini hızlıca iletelim.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="sr-only" htmlFor="company-field">
          Firma
        </label>
        <input
          id="company-field"
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          value={form.company}
          onChange={(event) => updateField('company', event.target.value)}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Ad Soyad
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              placeholder="Adınız Soyadınız"
              className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Telefon
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              placeholder="05XX XXX XX XX"
              className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Nereden
            <input
              type="text"
              name="fromLocation"
              required
              value={form.fromLocation}
              onChange={(event) => updateField('fromLocation', event.target.value)}
              placeholder="Örn: Kırşehir Merkez"
              className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Nereye
            <input
              type="text"
              name="toLocation"
              required
              value={form.toLocation}
              onChange={(event) => updateField('toLocation', event.target.value)}
              placeholder="Örn: Ankara Çankaya"
              className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Taşınma Tarihi
          <input
            type="date"
            name="moveDate"
            min={today}
            required
            value={form.moveDate}
            onChange={(event) => updateField('moveDate', event.target.value)}
            className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Not
          <textarea
            name="note"
            rows={3}
            value={form.note}
            onChange={(event) => updateField('note', event.target.value)}
            placeholder="Kat bilgisi, asansör durumu, parça eşya gibi detayları yazabilirsiniz."
            className="resize-none rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>

        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        ) : null}
        {success ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{success}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
        </button>
      </form>
    </section>
  )
}
