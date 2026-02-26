import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dijital Showroom - Gelinlik Kiralama & Özel Tasarım',
  description: 'Gelinlik mağazaları için demo showroom sitesi',
  icons: {
    icon: '/favicon.ico?v=1',
    shortcut: '/favicon.ico?v=1',
    apple: '/favicon.ico?v=1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
