import HeroBanner from "./HeroBanner";

type Slide = {
  background: string;
  logo: string;
};

const slides: Slide[] = [
  { background: "/hero/fundo1.webp", logo: "/hero/logo1.png" },
  { background: "/hero/fundo2.webp", logo: "/hero/logo2.png" },
  { background: "/hero/fundo3.webp", logo: "/hero/logo3.png" },
  { background: "/hero/fundo4.webp", logo: "/hero/logo4.png" },
  { background: "/hero/fundo5.webp", logo: "/hero/logo5.png" },
  { background: "/hero/fundo6.webp", logo: "/hero/logo6.png" },
];

export default function HeroSelector() {
  const selected = slides[Math.floor(Math.random() * slides.length)];

  return <HeroBanner slide={selected} />;
}