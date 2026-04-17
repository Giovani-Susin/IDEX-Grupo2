"use client";

import Image from "next/image";

interface Jogo {
  id: number;
  titulo: string;
  imagem: string;
  precoOriginal: number;
  precoComDesconto: number | null;
  percentualDesconto: number | null;
}

const jogos: Jogo[] = [
  {
    id: 1,
    titulo: "Undertale",
    imagem: "/jogos/UNDERTALE 1.svg",
    precoOriginal: 19.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 2,
    titulo: "Dead by Daylight",
    imagem: "/jogos/DBD 1.svg",
    precoOriginal: 59.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 3,
    titulo: "Hades",
    imagem: "/jogos/HADES 1.svg",
    precoOriginal: 44.99,
    precoComDesconto: 29.99,
    percentualDesconto: 33,
  },
  {
    id: 4,
    titulo: "Noita",
    imagem: "/jogos/NOITA 1.svg",
    precoOriginal: 34.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 5,
    titulo: "Age of Empires II",
    imagem: "/jogos/AGE 1.svg",
    precoOriginal: 49.99,
    precoComDesconto: 34.99,
    percentualDesconto: 30,
  },
  {
    id: 6,
    titulo: "Disco Elysium",
    imagem: "/jogos/DISCO 2.svg",
    precoOriginal: 74.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 7,
    titulo: "Final Fantasy VII",
    imagem: "/jogos/FINAL 2.svg",
    precoOriginal: 149.99,
    precoComDesconto: 89.99,
    percentualDesconto: 40,
  },
  {
    id: 8,
    titulo: "Enigma of Fear",
    imagem: "/jogos/ENIGMADOMEDO 1.svg",
    precoOriginal: 29.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 9,
    titulo: "Skyrim",
    imagem: "/jogos/SKYRIM 1.svg",
    precoOriginal: 79.99,
    precoComDesconto: 39.99,
    percentualDesconto: 50,
  },
  {
    id: 10,
    titulo: "Celeste",
    imagem: "/jogos/CELESTE 1.svg",
    precoOriginal: 39.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
  {
    id: 11,
    titulo: "Terraria",
    imagem: "/jogos/TERRARIA 1.svg",
    precoOriginal: 24.99,
    precoComDesconto: 12.49,
    percentualDesconto: 50,
  },
  {
    id: 12,
    titulo: "The Witcher 3",
    imagem: "/jogos/THEWITCHER 1.svg",
    precoOriginal: 89.99,
    precoComDesconto: null,
    percentualDesconto: null,
  },
];

function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function JogosEmDestaque() {
  return (
    <section className="jogos-destaque-section">
      <div className="jogos-destaque-container">
        <h2 className="titulo-componentes">Jogos em Destaque</h2>
        <div className="jogos-destaque-grid">
          {jogos.map((jogo) => (
            <div key={jogo.id} className="jogo-card">
              <div className="jogo-capa-wrapper">
                <Image
                  src={jogo.imagem}
                  alt={jogo.titulo}
                  fill
                  className="jogo-capa-img"
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1440px) 20vw, 280px"
                />
                <div className="jogo-capa-overlay" />
              </div>
              <div className="jogo-preco-faixa">
                {jogo.percentualDesconto && (
                  <span className="jogo-desconto-badge">
                    -{jogo.percentualDesconto}%
                  </span>
                )}
                <div className="jogo-precos">
                  {jogo.precoComDesconto ? (
                    <>
                      <span className="jogo-preco-original">
                        {formatarPreco(jogo.precoOriginal)}
                      </span>
                      <span className="jogo-preco-atual">
                        {formatarPreco(jogo.precoComDesconto)}
                      </span>
                    </>
                  ) : (
                    <span className="jogo-preco-atual jogo-preco-unico">
                      {formatarPreco(jogo.precoOriginal)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
