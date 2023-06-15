import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Livraria online',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="shadow-2xl background-color-blue">
         <Link href="/cadastro" className='voltar' > CADASTRAR </Link>
        </header>
        {children}</body>
    </html>
  )
}
