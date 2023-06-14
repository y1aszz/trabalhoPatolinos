'use client'

import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = { codigo: parseInt(params.codigo) }

    const idJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
        <p>{produto.titulo}</p>
          <p>{produto.dataCad}</p>
          <p>{produto.preco}</p>
          <p>{produto.descricao}</p>
          <img src={produto.imagem}/>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}