"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo}>
          <p>{produtos.titulo}</p>
          <p>{produtos.dataCad}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          <img src={pessoas.imagem}/>
        
          <Link href={`/pessoa/${pessoas.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}