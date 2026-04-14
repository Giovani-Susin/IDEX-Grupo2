import HeroSelector from "./components/HeroSelector";
import Carousel from "@/app/components/Carousel";
import JogosEmDestaque from "./components/JogosEmDestaque";
import { Feedback } from "./components/Feedback";

const Page = () => {
  return (
    <div>
      <HeroSelector/>
      <Carousel />
      <JogosEmDestaque />
      <Feedback />  
    </div>
  );
};

export default Page;
