import { Carousel } from "./Carousel";

const Skills = () => (
  <div
    id="skills"
    className="sm:px-6 relative flex flex-col gap-0 w-full min-h-[100vh] justify-center snap-center px-32"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Skills
      </h2>
    </header>

    <Carousel />
  </div>
);

export { Skills };
