import Image from "next/image"


export default async function Produto({params}){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id)
    const data = await response.json();
    return(
        <div className={styles.card} key={data.id}>
          <h2 className={styles.titulo}>Título: {data.title}</h2>
          <h2>Preço: {data.price}</h2>
          <h2 className={styles.desc}>Descrição: {data.description}</h2>
          <h2>Categoria: {data.category}</h2>
          <h2>Estoque: {data.rating.count}</h2>
          <Image 
          width= {150}
          height={150}
          src={data.image}/>
        </div>
  )
}  