import HeroSelector from "./components/HeroSelector";
import Carousel from "@/app/components/Carousel";
import JogosEmDestaque from "./components/JogosEmDestaque";
import { Feedback } from "./components/Feedback";

const Page = () => {
  return (
    <div>
      <section id="home">
        <HeroSelector/>
      </section>
      <section id="ofertas">
        <Carousel />
      </section>
      <section id="destaques">
        <JogosEmDestaque />
      </section>
      <Feedback />
    </div>
  );
};

export default Page;
