import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.rodapes}>
            <h1>
                Siga-nos nas redes sociais
                <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"/>    
                <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"/>    
                <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"/>    
                <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"/>    
            </h1>
        </footer>
    )
}