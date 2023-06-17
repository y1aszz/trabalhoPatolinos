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
            
            <div className='form'>
            <form  onSubmit={cadastrar}>
                
              
            
                <div className='input-group'>
                    
         
                <img className='imagemcadas' src='https://storage.googleapis.com/kotakode-prod-public/images/b774070f-c8b9-4896-bebc-7d7e51ccbac1-undraw_reading_time_gvg0-1.png'></img>
             

                <div className='cadastrr'>
                <div className='title'>CADASTRO DE LIVROS</div>
                </div>
                    <br/>
                <div className='input-box'> 
                <label for='titulo'>Titulo</label>
                <input id='titulo' type="text" name="titulo"
                onChange={e => setTitulo(e.target.value)}/>  
                </div>

                <div className='input-box'>
                <label for='data'>Data de cadastro</label>
                <input id='data' type="date" name="dataCad"
                onChange={e => setDataCad(e.target.value)}/>
                </div>

                <div className='input-box'>
                <label for='preco'>Preço</label>
                <input id='preco' type="text" name="preco"
                onChange={e => setPreco(e.target.value)}/> 
                </div>

                <div className='input-box'>
                <label for='descricao'>Descrição</label>
                <input type="text" name="descricao"
                onChange={e => setDescricao(e.target.value)}/>
                </div>

                <div className='input-box'>
                <label for='imagemform'>Imagem</label>
                <input type="text" name="imagem"
                onChange={e => setImagem(e.target.value)}/>
                </div>

                <div className='continue-button'> 
                <button type='submit'>Cadastrar</button>
                </div>
                
                </div>

               
            </form>
            </div>
        </div>
    );
}