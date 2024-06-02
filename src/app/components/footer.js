import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.rodapes}>
            <h1>
                Siga-nos nas redes sociais
            </h1>
            <ul className={styles.redes}>
                <li>
                    <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/fluency/48/instagram-new.png"/>    
                    <span>Instagram</span>
                </li>

                <li>
                    <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/color/48/whatsapp--v1.png"/>    
                    <span>Whatsapp</span>
                </li>

                <li>
                    <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/color/48/twitter--v1.png"/>    
                    <span>Twitter</span>
                </li>

                <li>
                    <img className={styles.imgs} width= {20} height={20} src="https://img.icons8.com/color/48/facebook-new.png"/>    
                    <span>Facebook</span>
                </li>
            </ul>
        </footer>
    )
}