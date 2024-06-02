import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cebecalhos}> 
         <h1 className={styles.letra}>
            
                Bem-vindo!
                <br/>
                Compre o que desejar
                <button className={styles.botao}>Novo Produto</button>
               
                <div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGHAWjP9fQ&#x2F;BAGfhcOGEt0F-5t7LxjMtQ&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGHAWjP9fQ&#x2F;BAGfhcOGEt0F-5t7LxjMtQ&#x2F;view?utm_content=DAGHAWjP9fQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Online Shop</a> de mariafernandaalves057@gmail.com

                <img className={styles.imgs}
              width= {20}
              height={20}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nN2TPQoCMRBGnyBYiwewsxc8hKuIp/EI4ilEEDyC5aK4pZ3llrs2WtmoCP4RSLEgrJlsIuqD6Sbfy88E/oUQeAA3YOhDEGmBqhNQwxPzjMi2FnmCjgPBJk9QAuKCgt67axoUCF+avEMVOFqE34EWhkwsBFMENIXhZ6COkLVAMJKGq4+2N9z5DKhIBWMdEOrRdYqaoitwARp4oAwcLKYokkj6wE4oWPFNdIEtkAKBg74X0szREwd9nxcEenECtB30/TBPua+9xM7fMm8AAAAASUVORK5CYII="/>
            </h1>
        </header>
    )
}