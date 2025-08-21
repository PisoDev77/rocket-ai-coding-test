import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '사주팔자 앱',
  description: '사주팔자 정보를 확인할 수 있는 애플리케이션',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-suit bg-gray-50">
        {children}
      </body>
    </html>
  )
}