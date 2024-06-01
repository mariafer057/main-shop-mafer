import styles from "./header.module.css";
import Link from "next/link";
//import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cebecalhos}> 
         <h1>
                Bem-vindo!
                <img className={styles.imgs}
              width= {20}
              height={20}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nN2TPQoCMRBGnyBYiwewsxc8hKuIp/EI4ilEEDyC5aK4pZ3llrs2WtmoCP4RSLEgrJlsIuqD6Sbfy88E/oUQeAA3YOhDEGmBqhNQwxPzjMi2FnmCjgPBJk9QAuKCgt67axoUCF+avEMVOFqE34EWhkwsBFMENIXhZ6COkLVAMJKGq4+2N9z5DKhIBWMdEOrRdYqaoitwARp4oAwcLKYokkj6wE4oWPFNdIEtkAKBg74X0szREwd9nxcEenECtB30/TBPua+9xM7fMm8AAAAASUVORK5CYII="/>
            </h1>
        </header>
    )
}