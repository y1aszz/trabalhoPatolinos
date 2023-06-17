'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [dataCad, setDataCad] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            dataCad: dataCad,
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
            
            <img className='imagemcadas' src='https://storage.googleapis.com/kotakode-prod-public/images/b774070f-c8b9-4896-bebc-7d7e51ccbac1-undraw_reading_time_gvg0-1.png'></img>
           
            <form className='contact_form' onSubmit={cadastrar}>
                
                <div className='titulo'> 
                <input id='texto' placeholder='Titulo' type="text" name="titulo"
                onChange={e => setTitulo(e.target.value)}/>  
                </div>

                <div className='data'>
                <input id='texto' placeholder='Data de cadastro' type="date" name="dataCad"
                onChange={e => setDataCad(e.target.value)}/>
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
                <input id='texto' placeholder='Digite a URL da imagem' type="text" name="imagem"
                onChange={e => setImagem(e.target.value)}/>
                </div>

                <div className='submit'> 
                <button id="form_button" type='submit'>Cadastrar</button>
                </div>
                
               

               
            </form>
            </div>

  



    );
}