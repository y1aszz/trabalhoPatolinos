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
        <header className='header'>
          <img className='logo' src='https://img.freepik.com/vetores-premium/gato-bonito-lendo-um-livro-conceito-de-desenho-animado-animal-isolado_556653-3388.jpg?w=360'></img>
          <ul>
         <li><Link href="/cadastro" className='voltar' > CADASTRAR </Link></li>
         <li><a href='/'>VOLTAR</a></li>
         </ul>
        </header>
        {children}</body>
    </html>
  )
}
