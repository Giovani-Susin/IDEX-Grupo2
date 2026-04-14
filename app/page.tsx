import HeroSelector from "./components/HeroSelector";
import Carousel from "@/app/components/Carousel";
import JogosEmDestaque from "./components/JogosEmDestaque";

const page = () => {
  return (
    <div>
      <HeroSelector/>
      <Carousel />
      <JogosEmDestaque />
    </div>
  )
}


export default Page;
