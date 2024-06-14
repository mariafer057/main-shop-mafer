'use client'
import Image from "next/image";
import Header from "./header";
import NotFound from "../not-found";
import styles from "./main.module.css"
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
export default function Main(){

  const [listProdutos, setListaProdutos] = useState([]);

  useEffect(()=>{
    const getProduct = async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListaProdutos(data);
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
  
    if(listProdutos[0] == null){
      return <center><Spinner/></center>
    }

    return ( 
    <>
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
            </div>
      )}
    </main>
    </>
  );
}
