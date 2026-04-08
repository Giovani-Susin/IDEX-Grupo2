import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";

type Slide = {
  background: string;
  logo: string;
};

export default function HeroBanner({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      <ParallaxLayer speed={0.3} blur>
        <Image
          src={slide.background}
          alt="background"
          fill
          className="object-cover scale-110"
          priority
        />
      </ParallaxLayer>

      <div className="absolute inset-0 bg-black/40" />

      <ParallaxLayer speed={0.6}>
        <div className="flex items-center justify-center h-full">
        <div className="relative 
            w-[80vw] 
            md:w-[60vw] 
            lg:w-[50vw] 
            xl:w-[40vw] 
            2xl:w-[35vw] 
            max-w-[900px] 
            h-[30vh] 
            max-h-[400px]"
            >
            <Image
              src={slide.logo}
              alt="logo"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </ParallaxLayer>

    </div>
  );
}