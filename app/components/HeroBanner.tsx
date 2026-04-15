import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";

type Slide = {
  background: string;
  logo: string;
};

export default function HeroBanner({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-[35dvh] md:h-[45dvh] lg:h-[55dvh] overflow-hidden">

      <ParallaxLayer speed={0.3}>
        <Image
          src={slide.background}
          alt="background"
          fill
          sizes="100vw"
          priority
          className="object-cover scale-110"
        />
      </ParallaxLayer>

      <div className="absolute inset-0 bg-black/30" />

      <ParallaxLayer speed={0.6}>
        <div className="flex items-center justify-center h-full">
        <div className="relative 
            w-[85vw] 
            md:w-[65vw] 
            lg:w-[60vw] 
            xl:w-[55vw] 
            2xl:w-[50vw] 
            max-w-[900px] 
            h-[30dvh] 
            max-h-[400px]"
            >
            <Image
              src={slide.logo}
              alt="logo"
              fill
              sizes="
                (max-width: 768px) 85vw,
                (max-width: 1024px) 65vw,
                (max-width: 1280px) 60vw,
                (max-width: 1536px) 55vw,
                50vw
                "
              className="object-contain"
            />
          </div>
        </div>
      </ParallaxLayer>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-[100%] h-full bg-gradient-to-r from-purple-400 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}