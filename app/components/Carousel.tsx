"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const games = [
    {
      id: 1,
      titulo: "resident evil 4",
      preco: 169.0,
      desconto: 67.6,
      tags: ["AÇÃO", "TERROR", "SOBREVIVÊNCIA"],
    },
    {
      id: 2,
      titulo: "metal gear solid",
      preco: 284.9,
      desconto: 189.9,
      tags: ["AÇÃO", "AVENTURA", "RPG"],
    },
    {
      id: 4,
      titulo: "monster hunter frontier",
      preco: 129.9,
      desconto: 38.8,
      tags: ["AÇÃO", "RPG"],
    },
    {
      id: 5,
      titulo: "god of war",
      preco: 199.9,
      desconto: 98.4,
      tags: ["AÇÃO", "AVENTURA", "MITOLOGIA"],
    },
    {
      id: 6,
      titulo: "dragon ball fighterz",
      preco: 232.5,
      desconto: 109.90,
      tags: ["AÇÃO", "ANIME", "LUTA"],
    },
    {
      id: 7,
      titulo: "bioshock 2",
      preco: 29.99,
      desconto: 4.49,
      tags: ["AÇÃO", "FPS", "TERROR"],
    },
    {
      id: 10,
      titulo: "gta 5",
      preco: 149.9,
      desconto: 74.9,
      tags: ["AÇÃO", "MUNDO ABERTO", "RPG"],
    },
    {
      id: 12,
      titulo: "fallout 4",
      preco: 59.99,
      desconto: 37.6,
      tags: ["MUNDO ABERTO", "EXPLORAÇÃO"],
    },
    {
      id: 16,
      titulo: "baldurs gate 3",
      preco: 199.9,
      desconto: 150.49,
      tags: ["RPG", "AVENTURA"],
    },
  ];

  const jogoAtual = games[selectedIndex];

  return (
    <div className="flex flex-col mx-auto pt-[80px] pb-0px items-start w-full max-w-[1163px] px-2 md:px-4">

      <div className="flex flex-col">
        <h2 className="titulo-componentes">Ofertas especiais</h2>
      </div>

      {/*carrossel*/}
      <div className="flex flex-row w-full aspect-1163/450 items-stretch">
        <div className="relative w-[82.8%] h-full overflow-hidden rounded-l-xl">
          <div
            className="flex h-full"
            ref={emblaRef}
          >
            <div className="carousel_container">
              {games.map((game) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={game.id}>
                  <Image
                    className="object-cover w-full h-full"
                    src={"/carousel/carousel-" + game.id + ".png"}
                    alt={game.titulo}
                    width={963}
                    height={450}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*botões do carrossel*/}
          <button
            type="button"
            className="absolute top-1/2 left-1 md:left-4 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
            onClick={goToPrev}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-base bg-[#7726BD]/30 group-hover:bg-[#5a1d8f]/60 transition-colors rounded-sm">
              <svg
                className="w-3 h-3 md:w-5 md:h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-1 md:right-4 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
            onClick={goToNext}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-[#7726BD]/30 group-hover:bg-[#5a1d8f]/60 transition-colors rounded-sm">
              <svg
                className="w-3 h-3 md:w-5 md:h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/*barra lateral*/}
        <div className="relative flex w-[17.2%] h-full bg-[#7726BD] rounded-r-xl flex-col p-1 md:p-4">
          {/*desconto*/}
          <div className="absolute flex top-1 md:top-3 right-0 translate-x-1/4 md:translate-x-1/3 rounded-sm md:rounded-md bg-[#00120B] border border-white md:border-2 w-[40px] md:w-[80px] h-[12px] md:h-[25px] z-10 justify-center items-center">
            <h2 className="text-[6px] md:text-[11px] font-semibold font-inter text-white">
              {"-" +
                Math.round(100 - (jogoAtual.desconto / jogoAtual.preco) * 100) +
                "% OFF"}
            </h2>
          </div>

          {/*tags*/}
          <div className="flex flex-1 flex-col justify-center items-center w-full mt-2 md:mt-0">
            {jogoAtual.tags.map((tag, index) => (
              <div
                className="flex rounded-br-lg md:rounded-br-xl rounded-tl-lg md:rounded-tl-xl bg-[#D9D9D9] justify-center items-center w-[90%] md:w-[150px] h-[14px] md:h-[26px] mb-1 md:mb-3"
                key={index}
              >
                <p className="text-black font-extrabold text-center text-[5px] sm:text-[8px] md:text-[13px] font-inter truncate px-1">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          {/*preços*/}
          <div className="flex flex-col justify-center mb-2 md:mb-10">
            <h1 className="text-[#00120B] text-[10px] sm:text-base md:text-3xl font-black font-bai leading-tight">
              {"R$ " + jogoAtual.desconto.toFixed(2).replace(".", ",")}
            </h1>
            <h2 className="text-white text-[6px] sm:text-[10px] md:text-lg font-semibold font-bai -mt-1 opacity-90">
              {"R$ " + jogoAtual.preco.toFixed(2).replace(".", ",")}
            </h2>
          </div>
        </div>
      </div>

      {/*pontos de navegação*/}
      <div className="flex justify-center items-center w-full gap-1 md:gap-3 mt-3 md:mt-5">
        {games.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-500 rounded-sm md:rounded-md h-[4px] md:h-[10px] ${index === selectedIndex ? "w-[15px] md:w-[30px] bg-[#7726BD]/60" : "w-[10px] md:w-[22px] bg-[#FFFFFF]"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
