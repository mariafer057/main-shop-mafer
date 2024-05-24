import Image from "next/image";
import Header from "./components/header";
import styles from "./page.module.css";
export default async function Home() {
const response = await fetch("https://api.escuelajs.co/api/v1/products");
const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products)=> 
            <div className={styles.card} key={products.id}>
              <p>{products.title}</p>
              <Image 
              width= {300}
              height={300}
              src={products.image}/>
            </div>
      )}
    </main>
  );
}
