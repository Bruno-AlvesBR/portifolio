import { ImageEffect } from "./ImageEffect";
import { Buttons } from "./Buttons";

const Introduction: React.FC = () => (
  <div
    id="start"
    className="w-full min-h-[100vh] flex flex-row sm:flex-col sm:justify-center mx-auto items-center justify-center snap-center"
  >
    <div className="relative sm:max-w-[400px] sm:flex-col sm:gap-8 md:gap-14 flex flex-row w-fit gap-56 items-center justify-center">
      <div className="flex flex-col sm:w-full w-max h-fit gap-10 sm:order-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-blue600 font-bold text-12 uppercase sm:text-8">
            Bruno Alves
          </h2>

          <p className="text-6 font-light sm:text-4 text-white">
            {"I'm "}
            <strong>Full-Stack Developer</strong>
          </p>
        </div>

        <Buttons />
      </div>

      <ImageEffect />
    </div>
  </div>
);

export { Introduction };
