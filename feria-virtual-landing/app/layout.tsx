import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300','400','500','600','700','800']
});


export const metadata = {
  title: 'Feria Virtual',
  description: 'Landing Davante Feria Virtual',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={manrope.variable}>

        {children}
      </body>
    </html>
  )
}
