export const siteConfig = {
  brand: 'Sade Nakliyat',
  legalName: 'Sade Nakliyat ve Lojistik Hizmetleri',
  description:
    'Evden eve, ofis ve şehirler arası nakliyat hizmetlerinde sigortalı, sözleşmeli ve zamanında teslim odaklı profesyonel taşıma çözümleri.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sadenakliyat.com',
  phoneDisplay: '0530 624 93 82',
  phoneTel: '+905306249382',
  whatsappNumber: '905306249382',
  email: 'info@sadenakliyat.com',
  address: 'Kırşehir Merkez / Türkiye',
  serviceArea: 'Kırşehir, Ankara, Kayseri, Nevşehir ve çevre iller',
  workingHours: 'Pazartesi - Cumartesi 08:00 - 22:00',
  latitude: 39.1458,
  longitude: 34.1606,
} as const

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
