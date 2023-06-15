import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Livraria online',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'blue',
         
        }}
        >
          <ul>
          <li>Cadastrar</li>
          </ul>
        </header>
        {children}</body>
    </html>
  )
}
