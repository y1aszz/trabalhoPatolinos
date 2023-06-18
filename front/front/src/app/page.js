"use client"
import Link from 'next/link';
import styles from './page.module.css'



export default async function Home() {

  const req = await fetch("http://localhost:3004/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
   
    <main className={styles.moin}> 
<div className='container2'>
      {produtos.map(produtos => (
        <div className={styles.separa} key={produtos.codigo}>

          <ul className={styles.ulPage}>

          <li><p style={{fontWeight: 'bold', fontSize: 16, marginTop:10}}>{produtos.titulo}</p></li>
          <li><Link href={`/produto/${produtos.codigo}`}><img style={{width: 145}} src={produtos.imagem}/></Link></li>
          <li>{produtos.dataCad}</li>
          <li>R${produtos.preco}</li>
          <li><Link className='verMais' href={`/produto/${produtos.codigo}`}>VER MAIS</Link></li>
          
          </ul>
        
        </div>

      ))}
      
      </div>
    </main>
  )
}