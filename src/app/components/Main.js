'use client'
import Image from "next/image"; //importa o component nativo do next
import Header from "./header"; //importa o header para que seja renderizado
import NotFound from "../not-found"; //importa o conteudo de uma pagina não encontrada
import styles from "./main.module.css" //importa o styles para poder ser estilizado
import { useEffect, useState } from "react"; //adicionar e gerenciar os estados de componentes do react
import Spinner from "./Spinner"; //importa o simbolo da bolinha carregando, ao recarregar a pagina
import ErrorGetData from "./ErrorGetData"; //quando for mudado algo na rota da fakestore, deve aparecer que o servidor caiu, pois não está conseguindo ser encontrado
import Link from "next/link"; //link tbm é um componete nativo do next
export default function Main(){
//definindo o componente Main
  const [listProdutos, setListaProdutos] = useState([]); //declarando o estado do listProdutos passando uma lista vazia
  const [listComplete, setListComplete] = useState([]); //tambem está passando uma lista vazia
  const [search, setSearch] = useState(""); //seach está sendo passado tambem como uma string vazia
  const [errorFetch, setErrorFetch] = useState(false); //errorFetch está sendo iniciado como false, mais para frente o seu estado irá mudar


  useEffect(()=>{
    const getProduct = async()=>{ //esta declarando uma função assincrona
    try{
      //o try vai tentar realizar as requisições, se der certo, vai converter para JSON
      //o getProduct está fazendo uma requisiçãopara obter os dados da API
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListaProdutos(data);
      setListComplete(data)
    }catch{
        setErrorFetch(true); //o catch vai aparecer se ocorrer um erro, ai o setErrorFetch(true) é chamado para indicar que aconteceu um problema durante a busca
    };

  }
     
    
    getProduct(); //busca dados da API
  }, []);


  /*orderAz vai ordenar o listProutos em ordem alfabetica, do maior para o menor de A a Z*/
    const orderAz = () =>{
      const newList = [...listProdutos].sort((a, b)=> //ordenar a nova lista com base no titulo
        a.title.localeCompare(b.title)
      );
      setListaProdutos(newList); //atualiza o estado listProdutos com a nova lista ordenada
    }

    /*Faz qause a mesma coisa que o orderAz, porem de Z a A, o certo seria utilizar o reverse
    mas da certo do jeito que eu fiz*/
    const orderZa = () =>{
      const newList = [...listProdutos].sort((a, b)=>
        b.title.localeCompare(a.title)
      );
      setListaProdutos(newList); //atualiza o estado listProdutos com a nova lista ordenada
    }
/*Vai ordenar em ordem crescente, quase o mesmo esquema que realizamos nas letras só
que com os numeros*/ 
    const precoMaior = () =>{
      let newList = [...listProdutos].sort((a, b)=> //ordenar a nova lista com base no preço
        a.price - b.price
      );
      setListaProdutos(newList); //atualiza o estado listProdutos com a nova lista ordenada
    }

//vai retornar o precoMenor em ordem decrescente 
   const precoMenor = () =>{
      let newList = [...listProdutos].sort((a, b)=>
        a.price - b.price
      );
      newList = newList.reverse(); //o reverse serve para inverter oq será feito, sem mudar muito o codigo
      setListaProdutos(newList); //atualiza o estado listProdutos com a nova lista ordenada
    }
  

    /*vai filtar o listProdutos, dependendo do que for escrito, se nada for escrito (vazio) devera retornar a listComplete*/
  const searchText = (text) => {
    setSearch(text);
    if(text.trim() == ""){
      setListaProdutos(listComplete);
      return
    }
    const newList = listProdutos.filter((product) =>
    product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
    setListaProdutos(newList);
  }

      if(errorFetch ==true){ //vai verificar se o errorFetch é verdadeiro, se for vai retornar o componente <ErrorGetData/>
        return <ErrorGetData/> 
      }

      //vai verificar se o listProdutos está vazio, se estiver, vai retornar o component <spinner/>
    if(listProdutos[0] == null){
      return <center><Spinner/></center>
    }

    return ( //estrutura padrão do HTML para "renderizar" algo no JSX 
    <>
   <input type="text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText( event.target.value)}/>
    <main className={styles.main}>
    <div>
    <button className={styles.botao} onClick={orderAz}>Az</button>
    </div>

    <div>
    <button className={styles.botao} onClick={orderZa}>Za</button>
    </div>

    <div>
    <button className={styles.botao} onClick={precoMaior}>-</button>
    </div>

    <div>
    <button className={styles.botao} onClick={precoMenor}>+</button>
    </div>

      {listProdutos.map((products)=> //o map vai mapear cada produto de uma forma individual
            <div className={styles.card} key={products.id}>
              <h2 className={styles.titulo}>Título: {products.title}</h2>
              <h2>Preço: {products.price}</h2>
              <h2 className={styles.desc}>Descrição: {products.description}</h2>
              <h2>Categoria: {products.category}</h2>
              <h2>Estoque: {products.rating.count}</h2>
              <Image 
              width= {150}
              height={150}
              src={products.image}/>
              <Link href={"/produto/" + products.id}><p>Ver mais</p></Link>

            </div>
      )}
    </main>
    </>
  );
}
