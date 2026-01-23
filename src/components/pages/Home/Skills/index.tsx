import { Carousel } from "./Carousel";

const Skills = () => (
  <div
    id="skills"
    className="sm:px-6 relative flex flex-col gap-20 w-full min-h-[100vh] justify-center snap-center px-32"
  >
    <header>
      <h2 className="text-blue600 text-8 font-bold uppercase text-center">
        Habilidades
      </h2>
    </header>

    <Carousel />
  </div>
);

export { Skills };
