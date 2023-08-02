'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [cadastro, setCadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            cadastro: cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3004/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className='container'>
            <h3 className='conta'>CADASTRO DE LIVROS</h3>
            
            <image className='imagemcadas' alt="foto" src='https://www.fused.com/assets/svg/illustrations/reading.png'/>
           
            <form className='contact_form' onSubmit={cadastrar}>
                
                <div className='titulo'> 
                <input id='texto' placeholder='Titulo' type="text" name="titulo"
                onChange={e => setTitulo(e.target.value)}/>  
                </div>

                <div className='data'>
                <input placeholder='Data de cadastro' type="date" name="cadastro"
                onChange={e => setCadastro(e.target.value)}/>
                </div>

                <div className='preco'>
                <input id='texto' placeholder='Preço' type="text" name="preco"
                onChange={e => setPreco(e.target.value)}/> 
                </div>

                <div className='descricao'>
                <input id='texto' placeholder='Descrição' type="text" name="descricao"
                onChange={e => setDescricao(e.target.value)}/>
                </div>

                <div className='urlImage'>
                <input className='textoaa' id='texto' placeholder='Digite a URL da imagem' type="text" name="imagem"
                onChange={e => setImagem(e.target.value)}/>
                </div>

                <div className='submit'> 
                <button id="form_button" type='submit'>Cadastrar</button>
                </div>
                
               

               
            </form>
            </div>

  



    );
}
