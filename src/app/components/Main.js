import Image from "next/image";
import Header from "./header";
import NotFound from "../not-found";
import styles from "./main.module.css"
export default async function Main(){
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return (
    <main className={styles.main}>
      {data.map((products)=> 
            <div className={styles.card} key={products.id}>
              <h2>Titulo{products.title}</h2>
              <h2>Preço{products.price}</h2>
              <h2>Descrição{products.description}</h2>
              <h2>Categoria{products.category}</h2>
              <Image 
              width= {300}
              height={300}
              src={products.image}/>
            </div>
      )}
    </main>
  );
}