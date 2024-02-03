import { Button } from "@/components/core/Button";

const Buttons = () => (
  <div className="flex flex-row gap-8 sm:flex-wrap sm:w-full sm:gap-4">
    <Button className="uppercase justify-center" fullWidth href="#contacts">
      <p className="p-0 text-4 font-semibold uppercase text-white950">
        CONTACTS
      </p>
    </Button>

    <Button
      hierarchy="secondary"
      className="uppercase justify-center"
      href="/bruno-alves-curriculo.pdf"
      fullWidth
      isDownload
    >
      <p className="p-none text-4 font-semibold uppercase text-blue600">
        CURRICULUM
      </p>
    </Button>
  </div>
);

export { Buttons };
