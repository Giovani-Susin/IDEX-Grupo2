import Image from "next/image";
import Link from "next/link";

export default function Footer () {
  return (
  <footer className="footer relative flex flex-col justify-center items-center pt-[25px] pb-20">
    <div className="flex flex-row gap-3 mb-5 max-h-[30px]">
      <Link href="https://www.instagram.com/ide_jr/" target="_blank" rel="noopener noreferrer">
        <Image 
        src="/logo-instagram.svg"  
        alt="logo do instagram" 
        width={30} 
        height={30} 
        className="
          transition-all duration-300 ease-out 
          hover:scale-110 
          hover:brightness-125 
          hover:drop-shadow-[0_0_5px_rgba(139,58,189,1)]
          active:scale-95"
        />
      </Link>
      <Link href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/logo-linkedin.svg"  
          alt="logo do linkedin" 
          width={30} 
          height={30}
          className="
            transition-all duration-300 ease-out 
            hover:scale-110 
            hover:brightness-125 
            hover:drop-shadow-[0_0_5px_rgba(139,58,189,1)]
            active:scale-95"
        />
      </Link>
      <Link href="https://idejr.com.br/" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/logo-ide-branca.svg"  
          alt="logo da IDE" 
          width={54} 
          height={30}
          className="
            transition-all duration-300 ease-out 
            hover:scale-110 
            hover:brightness-125 
            hover:drop-shadow-[0_0_5px_rgba(139,58,189,1)]
            active:scale-95"
        />
      </Link>
    </div>

    <div className="text-center text-white">
      <p className="font-bold">
        IDE © Todos os direitos reservados.
      </p>
    </div>
    <p className="mt-2">
    <a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a> | <a href="#">Política de Cookies</a>
    </p>

    <div className="absolute flex mt-10 mb-5 right-5 bottom-0">
        <Image src="/logo-ide-branca.svg"  alt="logo do instagram" width={90} height={50}/>
    </div>

  </footer>
    );
}

