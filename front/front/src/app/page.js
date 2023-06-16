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

      {produtos.map(produtos => (
        <div className={styles.separa} key={produtos.codigo}>

          <ul className={styles.ulPage}>

          <li><p style={{fontWeight: 'bold', fontSize: 16, marginTop:10}}>{produtos.titulo}</p></li>
          <li><img style={{width: 145}} src={produtos.imagem}/></li>
          <li>{produtos.dataCad}</li>
          <li>{produtos.preco}</li>
          <li><Link href={`/produto/${produtos.codigo}`}>ver mais</Link></li>
          
          </ul>
        
        </div>
      ))}
    </main>
  )
}