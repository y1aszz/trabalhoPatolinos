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
          <ul className='ul'> 
          <li className='li'><Link href="/cadastro" className='voltar' > CADASTRAR </Link></li>
         <li className='voltando'><a href='/'>VOLTAR</a></li>
         </ul>
         <img className='carrinho' src='https://th.bing.com/th/id/OIP.0YDQ9pyRA9pWbplB_j4dkAAAAA?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
        </header>
       {children}

       <footer>

    <ul className='socialIco'>
      <li className='nome'>Jamili Amaral</li>

      <li className='social-icon__item'><a className='social-icon__link' href="https://github.com/jenzinha">
          <img className='imagemLogo' src='https://img.icons8.com/?size=1x&id=12598&format=png' name="logo-git"></img></a></li>

      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/jamili-souza-amaral-08587b262/">
          <img className='imagemLogo' src='https://img.icons8.com/?size=1x&id=60443&format=png' name="logo-linkedin"></img></a></li>
      
   
    
    </ul>

    <ul className='socialIco2'>
      <li className='nome'>Yasmim Sordi</li>

      <li className='social-icon__item'><a className='social-icon__link' href="">
          <img className='imagemLogo' src='https://img.icons8.com/?size=1x&id=12598&format=png' name="logo-git"></img></a></li>

      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/yasmim-favoretto-7a367b266/">
          <img className='imagemLogo' src='https://img.icons8.com/?size=1x&id=60443&format=png' name="logo-linkedin"></img></a></li>
      
      
    
    </ul>


    <p>&copy;2023 Yasmim Sordi e Jamili Amaral | All Rights Reserved</p>
       </footer>
        </body>
    </html>
  )
}
