import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type LinkUnderlineProps = {
  children: ReactNode;
  href?: string;
};

type FooterIconProps = {
  href: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const FooterIcon = ({
  href,
  src,
  alt = 'Footer Icon',
  width = 30,
  height = 30,
}: FooterIconProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="
          transition-all duration-300 ease-out 
          hover:scale-110 
          hover:brightness-125 
          hover:drop-shadow-[0_0_5px_rgba(139,58,189,1)]
          active:scale-95"
      />
    </Link>
  );
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
    <div className="pointer-events-none absolute top-0 left-0 w-full h-[1px] overflow-hidden">
      <div className="w-full h-full bg-linear-to-r from-purple-400 to-transparent animate-shimmer" />
    </div>
    <div className="flex flex-row gap-3 mb-5 max-h-[30px]">
      <FooterIcon
        href="https://www.instagram.com/ide_jr/"
        src="/logo-instagram.svg"
      />

      <FooterIcon
        href="https://www.linkedin.com/company/empresa-júnior-ide/"
        src="/logo-linkedin.svg"
      />

      <FooterIcon
        href="https://idejr.com.br/"
        src="/logo-ide-branca.svg"
        width={54}
        height={30}
      />
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
          scale-[0.6] lg:scale-[0.75]
          select-none
        "
      />
    </div>

  </footer>
    );
}

