import type { Metadata } from 'next'
import { Playfair_Display, Inter, Noto_Serif, Noto_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hôn nhân Công giáo | Nghiên cứu Chuyên sâu',
  description:
    'Báo cáo nghiên cứu chuyên sâu: Vẻ đẹp, Bản chất và Những Thách đố Hiện đại của Hôn nhân Công giáo. Tìm hiểu về Bí tích Hôn phối, Thần học Thân xác và mục vụ đồng hành.',
  keywords: ['Hôn nhân Công giáo', 'Bí tích Hôn phối', 'Thần học thân xác', 'Amoris Laetitia', 'Familiaris Consortio', 'Gia đình Công giáo', 'Mục vụ gia đình', 'Tôn kính tổ tiên', 'Lễ gia tiên Công giáo'],
  authors: [{ name: 'HNCG Theology Scholar' }],
  creator: 'HNCG Theology Scholar',
  publisher: 'HNCG Research',
  openGraph: {
    title: 'Hôn nhân Công giáo',
    description: 'Báo cáo nghiên cứu chuyên sâu về vẻ đẹp và bản chất Bí tích Hôn phối, cùng các chỉ dẫn mục vụ gia đình hiện đại.',
    url: 'https://hncg-web.vercel.app',
    siteName: 'HNCG Theology Report',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544274944-77e8a93e3edc?q=80&w=1200&auto=format&fit=crop', // Ảnh minh họa OG Image đẹp (nhà thờ/thánh giá)
        width: 1200,
        height: 630,
        alt: 'Bí tích Hôn nhân Công giáo',
      },
    ],
    locale: 'vi_VN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hôn nhân Công giáo',
    description: 'Khám phá vẻ đẹp và chiều sâu thần học của Bí tích Hôn phối Công giáo.',
    images: ['https://images.unsplash.com/photo-1544274944-77e8a93e3edc?q=80&w=1200&auto=format&fit=crop'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${inter.variable} ${notoSerif.variable} ${notoSans.variable} antialiased bg-ivory`}
    >
      <body className="font-body-serif min-h-screen">{children}</body>
    </html>
  )
}
