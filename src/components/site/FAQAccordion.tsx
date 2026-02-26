'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <article key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-slate-900">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
