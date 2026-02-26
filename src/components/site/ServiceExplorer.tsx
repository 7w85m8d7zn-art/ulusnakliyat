'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Service } from '@/lib/dataAdapter'
import { siteConfig } from '@/lib/siteConfig'

type ServiceExplorerProps = {
  services: Service[]
}

export function ServiceExplorer({ services }: ServiceExplorerProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (!selectedService) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null)
        setSelectedImage(0)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedService])

  const handleOpen = (service: Service) => {
    setSelectedService(service)
    setSelectedImage(0)
  }

  const handleClose = () => {
    setSelectedService(null)
    setSelectedImage(0)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={service.images[0]}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                  {service.categoryLabel}
                </p>
                <p className="text-sm font-semibold text-slate-900">{service.startingPriceLabel}</p>
              </div>

              <h3 className="font-heading text-xl font-semibold text-slate-950">{service.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleOpen(service)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Detaylı İncele
                </button>
                <Link
                  href={`/urun/${service.slug}`}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
                >
                  Sayfaya Git
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedService ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="Detay penceresini kapat"
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedService.name} detayları`}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
              <p className="font-heading text-xl font-semibold text-slate-950">{selectedService.name}</p>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={selectedService.images[selectedImage]}
                    alt={selectedService.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {selectedService.images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-xl border ${
                        index === selectedImage ? 'border-brand-500' : 'border-slate-200'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedService.name} görsel ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 18vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                  {selectedService.categoryLabel}
                </p>

                <h3 className="font-heading text-3xl font-semibold text-slate-950">{selectedService.name}</h3>

                <p className="text-sm leading-relaxed text-slate-600">{selectedService.description}</p>

                <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Başlangıç Fiyatı</p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-slate-950">
                    {selectedService.startingPriceLabel}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Paketler</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedService.colors.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Uygun Taşıma Tipleri</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedService.sizes.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Hemen Ara
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Merhaba, ${selectedService.name} hizmetiniz için detaylı bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    WhatsApp Sor
                  </a>
                </div>

                <Link
                  href={`/urun/${selectedService.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  Tam Sayfa Detayı Aç
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  )
}
