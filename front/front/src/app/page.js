"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3004/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo}>
          <p style={{fontWeight: 'bold', fontSize: 23}}>{produtos.titulo}</p>
          <img style={{width: 145}} src={produtos.imagem}/>
          <p>{produtos.dataCad}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          
        
          <Link href={`/produto/${produtos.codigo}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}