'use client'
import Image from "next/image";
import Header from "./header";
import NotFound from "../not-found";
import styles from "./main.module.css"
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";
export default function Main(){

  const [listProdutos, setListaProdutos] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);


  useEffect(()=>{
    const getProduct = async()=>{
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListaProdutos(data);
      setListComplete(data)
    }catch{
        setErrorFetch(true);
    };

  }
     
    
    getProduct();
  }, []);



    const orderAz = () =>{
      const newList = [...listProdutos].sort((a, b)=>
        a.title.localeCompare(b.title)
      );
      setListaProdutos(newList);
    }


    const orderZa = () =>{
      const newList = [...listProdutos].sort((a, b)=>
        b.title.localeCompare(a.title)
      );
      setListaProdutos(newList);
    }

    const precoMaior = () =>{
      let newList = [...listProdutos].sort((a, b)=>
        a.price - b.price
      );
      setListaProdutos(newList);
    }


   const precoMenor = () =>{
      let newList = [...listProdutos].sort((a, b)=>
        a.price - b.price
      );
      newList = newList.reverse();
      setListaProdutos(newList);
    }
  

    
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

      if(errorFetch ==true){
        return <ErrorGetData/> 
      }

    if(listProdutos[0] == null){
      return <center><Spinner/></center>
    }

    return ( 
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

      {listProdutos.map((products)=> 
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
              <Link href={`/products/${products.id}`}><p>Ver mais</p></Link>

            </div>
      )}
    </main>
    </>
  );
}
