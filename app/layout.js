import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from './components/ReuseableComponents'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catalyst Canvas | Impactful initiatives ',
  description: 'A canvas for impactful initiatives, Developed by spadeshub',
  icons: '/icon.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Layout>{children}</Layout></body>
    </html>
  )
}
