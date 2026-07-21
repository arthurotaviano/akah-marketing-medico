import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { Header } from './components/header'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
})

const title = 'AKAH • Marketing Médico'
const description = 'A AKAH é uma agência de marketing especializada em médicos. Não fazemos post. Fazemos crescimento, com metodologia, estratégia e resultado mensurável.'
const url = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className='min-w-[320px]'>
        <Header />
        {children}
      </body>
    </html>
  )
}
