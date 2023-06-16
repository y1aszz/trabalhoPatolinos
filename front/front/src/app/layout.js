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
         <li className='voltando'><a href='/'>VOLTAR</a></li>
         </ul>
         <a href=''><img className='carrinho' src='https://cdn.icon-icons.com/icons2/1830/PNG/512/cart2-115853_115816.png'></img></a>
      
        </header>
        {children}</body>
    </html>
  )
}
