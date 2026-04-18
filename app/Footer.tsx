import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type LinkUnderlineProps = {
  children: ReactNode;
  href?: string;
};

const LinkUnderline = ({ children, href = "#" }: LinkUnderlineProps) => (
  <a href={href} className="relative group">
    <span className="transition-colors duration-300 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_6px_rgba(155,109,255,0.6)]">
      {children}
    </span>
    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-purple-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
  </a>
);

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

    <p>
      IDE © Todos os direitos reservados.
    </p>
    <p className="mt-2 flex gap-2 text-sm">
      <LinkUnderline>Termos de Uso</LinkUnderline>
      <span>|</span>
      <LinkUnderline>Política de Privacidade</LinkUnderline>
      <span>|</span>
      <LinkUnderline>Política de Cookies</LinkUnderline>
    </p>

    <div className="absolute right-5 bottom-0 mt-10 mb-5 pointer-events-none">
      <Image
        src="/logo-ide-branca.svg"
        alt="logo do instagram"
        width={90}
        height={50}
        className="
          opacity-25 lg:opacity-35
          scale-60 lg:scale-75
          select-none
        "
      />
    </div>

  </footer>
    );
}

