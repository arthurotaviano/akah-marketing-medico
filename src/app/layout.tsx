import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AKAH Marketing Médico',
  description: 'A AKAH é uma agência de marketing especializada em médicos. Não fazemos post. Fazemos crescimento, com metodologia, estratégia e resultado mensurável.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
