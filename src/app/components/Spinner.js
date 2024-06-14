import Image from "next/image";
export default function Spinner()
{
    return(
        <Image
        width= {200}
        height={200}
        src="/ring.svg" alt="Imagem carregando" />
    );
}