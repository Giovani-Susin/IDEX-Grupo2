"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["HOME", "OFERTAS", "DESTAQUES"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-black">
      <div className="mx-auto max-w-[1280px] px-10">
        <div className="flex items-center justify-between">

          <Link href="/" className="shrink-0">
            <Image 
              src="/logo.svg" 
              alt="IDEX Logo" 
              width={200} 
              height={54} 
              priority 
              className="
                transition-all duration-300 ease-out
                hover:scale-110 
                active:scale-90
                w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]
                hover:drop-shadow-[0_0_15px_rgba(119,38,189,1)]
              "
              />
          </Link>

          <nav className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="
                  relative
                  text-white font-bold text-lg tracking-widest
                  transition-all duration-300
                  hover:text-purple-400
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-purple-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button isIconOnly variant="ghost" className="rounded-full w-11 h-11">
              <Image 
                src="/ICON - User.svg" 
                alt="Usuário" 
                width={40} 
                height={40}
                className="
                  transition-all duration-300 ease-out
                  hover:scale-115 
                  active:scale-95
                " 
              />
            </Button>

            <Button isIconOnly variant="ghost" className="rounded-full w-11 h-11">
              <Image 
                src="/ICON - Config.svg" 
                alt="Configurações" 
                width={40} 
                height={40} 
                className="
                  transition-all duration-300 ease-out
                  hover:scale-115 
                  active:scale-95
                "
              />
            </Button>

            <button
              type="button"
              className="
                md:hidden 
                text-white 
                hover:bg-white/10 
                rounded-lg
                transition-all duration-300 ease-out
                hover:scale-115 
                active:scale-95
              " 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
              <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020604] px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="
              block 
              px-3 
              py-3 
              rounded-md
              text-white font-bold text-lg tracking-wide 
              transition-all duration-300
              hover:text-purple-400
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}