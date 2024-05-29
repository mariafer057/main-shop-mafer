import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cebecalhos}>            <h1>
                olá
                <Image 
              width= {300}
              height={300}
              src="https://www.flaticon.com/br/icone-gratis/compras-online_6745169?term=carrinho&page=1&position=9&origin=search&related_id=6745169"/>
            </h1>
        </header>
    )
}