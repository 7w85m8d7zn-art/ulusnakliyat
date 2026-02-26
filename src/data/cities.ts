export interface CityPageData {
  id: string
  slug: string
  name: string
  shortDescription: string
  detailDescription: string
  neighborhoods: string[]
  highlights: string[]
  image: string
}

export const cities: CityPageData[] = [
  {
    id: '1',
    slug: 'kirsehir',
    name: 'Kırşehir',
    shortDescription: 'Merkez ve tüm ilçelerde aynı gün ekspertiz, planlı taşıma.',
    detailDescription:
      'Kırşehir merkez, Kaman, Mucur ve çevre bölgelerde evden eve ve ofis taşıma operasyonlarını hızlı planlama ile yürütüyoruz.',
    neighborhoods: ['Merkez', 'Kaman', 'Mucur', 'Çiçekdağı'],
    highlights: ['Aynı gün ücretsiz ekspertiz', 'Asansörlü taşıma', 'Sözleşmeli hizmet'],
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    slug: 'ankara',
    name: 'Ankara',
    shortDescription: 'Çankaya, Keçiören, Yenimahalle dahil yoğun hatlarda düzenli sevkiyat.',
    detailDescription:
      'Ankara içi ve Ankara çıkışlı şehirler arası taşımalarda geniş araç filosu ve deneyimli ekiplerle güvenli hizmet sunuyoruz.',
    neighborhoods: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Etimesgut'],
    highlights: ['Şehir içi hızlı planlama', 'Kurumsal ofis taşıma', 'Takipli sevkiyat'],
    image:
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60d?w=1400&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    slug: 'kayseri',
    name: 'Kayseri',
    shortDescription: 'Talas ve Melikgazi ağırlıklı asansörlü nakliyat çözümleri.',
    detailDescription:
      'Kayseri bölgesinde yüksek katlı binalar için asansörlü nakliyat ve hassas eşya paketleme hizmetleri sunuyoruz.',
    neighborhoods: ['Melikgazi', 'Kocasinan', 'Talas', 'İncesu'],
    highlights: ['Yüksek kat çözümü', 'Kırılabilir eşya koruma', 'Hafta sonu taşıma'],
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1400&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    slug: 'nevsehir',
    name: 'Nevşehir',
    shortDescription: 'Kapadokya bölgesine özel planlı taşımacılık ve depolama desteği.',
    detailDescription:
      'Nevşehir ve çevresinde sezonluk taşınmalar, yazlık-kışlık eşya transferleri ve depolama süreçlerini yönetiyoruz.',
    neighborhoods: ['Merkez', 'Ürgüp', 'Avanos', 'Göreme'],
    highlights: ['Sezonluk taşınma planı', 'Depolama entegrasyonu', 'Şehirler arası transfer'],
    image:
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1400&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    slug: 'aksaray',
    name: 'Aksaray',
    shortDescription: 'Parça eşya ve aile taşınmalarında ekonomik çözümler.',
    detailDescription:
      'Aksaray ilinde parça eşya, öğrenci taşınması ve tam ev taşıma hizmetlerini bütçe odaklı paketlerle sunuyoruz.',
    neighborhoods: ['Merkez', 'Ortaköy', 'Eskil', 'Sultanhanı'],
    highlights: ['Parça eşya sevkiyatı', 'Öğrenci dostu planlar', 'Güvenli ambalaj'],
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1400&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    slug: 'kirikkale',
    name: 'Kırıkkale',
    shortDescription: 'Kısa sürede ekspertiz ve şehir içi/şehir dışı taşımada net fiyat.',
    detailDescription:
      'Kırıkkale merkezli taşınmalarda sürpriz masraf oluşturmadan ekspertiz sonrası net fiyatlandırma ile hizmet veriyoruz.',
    neighborhoods: ['Merkez', 'Yahşihan', 'Keskin', 'Bahşılı'],
    highlights: ['Net fiyat teklifi', 'Sözleşmeli süreç', 'Zamanında teslimat'],
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&auto=format&fit=crop&q=80',
  },
]
