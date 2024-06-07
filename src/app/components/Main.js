'use client'
import Image from "next/image";
import Header from "./header";
import NotFound from "../not-found";
import styles from "./main.module.css"
import { useEffect, useState } from "react";
export default function Main(){

  const [listProdutos, setListaProdutos] = useState([]);
  const [listPrecoMaior, setListaPrecoMaior] = useState([]);

  useEffect(()=>{
    const getProduct = async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListaProdutos(data);
      setListaPrecoMaior(data);

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
      const newList = [...listPrecoMaior].sort((a, b)=>
        b.price.localeCompare(a.price)
      );
      setListaPrecoMaior(newList);
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
    <button className={styles.botao} onClick={precoMaior}>+</button>
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
