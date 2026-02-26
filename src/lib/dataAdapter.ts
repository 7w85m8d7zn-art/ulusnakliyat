import { cities } from '@/data/cities'
import { products, type Product } from '@/data/products'

export type Service = Product & {
  categoryLabel: string
  startingPriceLabel: string
}

export type City = (typeof cities)[number]

function formatTry(value: number) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value)
}

function mapService(product: Product): Service {
  return {
    ...product,
    categoryLabel:
      product.category === 'populer' ? 'Bireysel Nakliyat' : 'Kurumsal ve Uzman Taşıma',
    startingPriceLabel: `${formatTry(product.priceFrom)}'den başlar`,
  }
}

export function getServices() {
  return products.map(mapService)
}

export function getServiceBySlug(slug: string) {
  return getServices().find((service) => service.slug === slug) || null
}

export function getFeaturedServices(limit = 6) {
  return getServices().slice(0, limit)
}

export function getRelatedServices(slug: string, limit = 3) {
  return getServices()
    .filter((service) => service.slug !== slug)
    .slice(0, limit)
}

export function getCities() {
  return cities
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug) || null
}

export const whyUsItems = [
  {
    title: 'Sigortalı Taşıma Güvencesi',
    description: 'Tüm operasyonlarda eşyalarınızı sözleşmeli ve sigortalı süreçle taşıyoruz.',
  },
  {
    title: 'Asansörlü ve Hızlı Operasyon',
    description: 'Yüksek katlarda dış cephe asansörü ile güvenli ve hızlı yükleme sağlıyoruz.',
  },
  {
    title: 'Zamanında Teslimat',
    description: 'Planlanan gün ve saat aralığına bağlı kalarak teslimat disiplini ile çalışıyoruz.',
  },
  {
    title: 'Uzman Paketleme ve Montaj',
    description: 'Kırılabilir eşyalar, beyaz eşya ve mobilyalar için profesyonel ambalaj uyguluyoruz.',
  },
]

export const processSteps = [
  {
    title: 'Talep ve Ön Bilgi',
    description:
      'Telefon veya WhatsApp ile taşınma bilgilerini alıyor, ihtiyacınızı netleştiriyoruz.',
  },
  {
    title: 'Ekspertiz ve Net Teklif',
    description:
      'Adres ve eşya durumuna göre ücretsiz ekspertiz yapıyor, sürprizsiz fiyat sunuyoruz.',
  },
  {
    title: 'Paketleme ve Taşıma',
    description:
      'Taşıma günü uzman ekip paketleme, yükleme, sevkiyat ve yerleşim adımlarını yürütüyor.',
  },
  {
    title: 'Teslim ve Kontrol',
    description:
      'Yeni adreste kurulum, montaj ve son kontrolle süreci tamamlıyor, teslim formunu kapatıyoruz.',
  },
]

export const faqItems = [
  {
    question: 'Nakliyat fiyatı nasıl belirleniyor?',
    answer:
      'Eşya hacmi, kat durumu, mesafe, asansör ihtiyacı ve paketleme kapsamına göre ekspertiz sonrası net teklif veriyoruz.',
  },
  {
    question: 'Taşıma sırasında sözleşme yapıyor musunuz?',
    answer:
      'Evet. Tüm taşımalarda hizmet kapsamını ve sorumlulukları belirten yazılı sözleşme düzenliyoruz.',
  },
  {
    question: 'Eşyalar sigortalı mı taşınıyor?',
    answer:
      'Sigortalı taşıma seçeneği tüm operasyonlarda sunulur. Poliçe kapsamı teklif aşamasında paylaşılır.',
  },
  {
    question: 'Asansörlü nakliyat her binada kullanılabilir mi?',
    answer:
      'Bina önü uygunluğu ve belediye kuralları kontrol edildikten sonra teknik olarak mümkün alanlarda uygulanır.',
  },
  {
    question: 'Taşıma süresi ortalama ne kadar?',
    answer:
      'Şehir içi standart daire taşımaları çoğunlukla aynı gün içinde tamamlanır. Şehirler arası süre rota bazlı planlanır.',
  },
  {
    question: 'Parça eşya taşımada minimum hizmet var mı?',
    answer:
      'Evet. 1 parça eşyadan başlayarak parça eşya taşımada planlı sevkiyat yapıyoruz.',
  },
  {
    question: 'Ofis taşımasında iş kaybını nasıl azaltıyorsunuz?',
    answer:
      'Mesai dışı planlama, etaplı geçiş ve öncelikli ekipman taşıma modeliyle operasyon kesintisini düşürüyoruz.',
  },
  {
    question: 'Hafta sonu taşıma yapıyor musunuz?',
    answer: 'Evet. Cumartesi tam gün, yoğun dönemlerde Pazar planlı operasyon seçeneği sunuyoruz.',
  },
  {
    question: 'Depolama hizmetinizde güvenlik nasıl sağlanıyor?',
    answer:
      'Depolarımız kamera sistemleriyle izlenir; paketler etiketli takip edilir ve yalnızca yetkili teslim prosedürü uygulanır.',
  },
  {
    question: 'Teklif formuna yazdıktan sonra ne kadar sürede dönüş alırım?',
    answer:
      'Mesai saatlerinde genellikle 15-30 dakika içinde, yoğunluk durumunda aynı gün içerisinde geri dönüş sağlıyoruz.',
  },
]

export const testimonialFallback = [
  {
    author: 'Merve A.',
    rating: 5,
    text: 'Taşınma günü ekip tam saatinde geldi. Paketleme düzenliydi ve eşyalarda hiçbir hasar olmadı.',
    relativeTime: '2 hafta önce',
  },
  {
    author: 'Yusuf K.',
    rating: 5,
    text: 'Ofis taşımasını mesai bitiminde tamamladılar. Ertesi sabah kesintisiz işe devam ettik.',
    relativeTime: '1 ay önce',
  },
  {
    author: 'Elif T.',
    rating: 5,
    text: 'Şehirler arası taşımada teslim tarihi aynen tuttu. İletişim süreci boyunca çok profesyonellerdi.',
    relativeTime: '3 ay önce',
  },
]
