import { Button } from "@/components/core/Button";
import { CurriculumContent } from "@/components/core/CurriculumContent";

const Buttons = () => (
  <div className="flex flex-row gap-8 sm:flex-wrap sm:w-full sm:gap-4">
    <Button
      component="a"
      className="uppercase justify-center"
      fullWidth
      href="#contacts"
    >
      <p className="p-0 text-4 font-semibold uppercase text-white950">
        CONTATOS
      </p>
    </Button>

    <CurriculumContent fullWidth />
  </div>
);

export { Buttons };
