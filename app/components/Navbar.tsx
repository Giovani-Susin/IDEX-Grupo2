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
      <div className="mx-auto max-w-[1920px] px-10">
        <div className="flex h-20 items-center justify-between">

          <Link href="/" className="shrink-0">
            <Image src="/logo.svg" alt="IDEX Logo" width={160} height={54} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-white font-bold text-base tracking-widest hover:text-gray-300 transition"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button isIconOnly variant="ghost" className="rounded-full w-11 h-11">
              <Image src="/ICON - User.svg" alt="Usuário" width={38} height={38} />
            </Button>

            <Button isIconOnly variant="ghost" className="rounded-full w-11 h-11">
              <Image src="/ICON - Config.svg" alt="Configurações" width={38} height={38} />
            </Button>

            <button
              type="button"
              className="md:hidden ml-2 p-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020604] px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="block px-3 py-3 text-white font-bold tracking-wide hover:bg-white/5 rounded-md"
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