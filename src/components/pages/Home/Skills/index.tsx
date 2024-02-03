import { Carousel } from "./Carousel";

const Skills = () => (
  <div className="relative flex flex-col gap-8 w-full h-full justify-between">
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Skills
      </h2>
    </header>

    <Carousel />
  </div>
);

export { Skills };
