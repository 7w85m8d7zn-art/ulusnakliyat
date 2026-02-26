'use client'

import { useEffect, useState } from 'react'
import { SectionHeading } from '@/components/site/SectionHeading'
import { testimonialFallback } from '@/lib/dataAdapter'

type Review = {
  author: string
  rating: number
  text: string
  relativeTime: string
}

function normalizeReview(input: any): Review | null {
  if (!input || typeof input !== 'object') return null

  const author = typeof input.author === 'string' ? input.author : 'Müşteri'
  const rating = typeof input.rating === 'number' ? input.rating : 5
  const text = typeof input.text === 'string' ? input.text : ''
  const relativeTime = typeof input.relativeTime === 'string' ? input.relativeTime : 'Yakın zamanda'

  if (!text.trim()) return null

  return {
    author,
    rating: Math.max(1, Math.min(5, Math.round(rating))),
    text,
    relativeTime,
  }
}

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>(testimonialFallback)

  useEffect(() => {
    let active = true

    fetch('/api/reviews', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('reviews unavailable')
        return response.json()
      })
      .then((data) => {
        if (!active || !Array.isArray(data)) return
        const normalized = data.map(normalizeReview).filter(Boolean) as Review[]
        if (normalized.length > 0) {
          setReviews(normalized.slice(0, 6))
        }
      })
      .catch(() => {
        // Keep fallback reviews when endpoint is unavailable.
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Gerçek Taşınma Deneyimleri"
          description="Müşterilerimizin hız, iletişim ve teslimat süreci hakkında paylaştığı yorumlardan öne çıkanlar."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.author}-${review.text.slice(0, 16)}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-amber-500">{'★'.repeat(review.rating)}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{review.text}”</p>
              <div className="mt-5 border-t border-slate-100 pt-4 text-sm">
                <p className="font-semibold text-slate-900">{review.author}</p>
                <p className="text-slate-500">{review.relativeTime}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
