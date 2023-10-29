import { Button } from "@/presentation/components/core/Button";

const Buttons = () => (
  <div className="flex flex-row gap-8 sm:flex-wrap sm:w-full sm:gap-4">
    <Button className="uppercase justify-center" fullWidth href="#contatos">
      <p className="p-none text-4 font-semibold uppercase text-white950">
        contato
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
        currículo
      </p>
    </Button>
  </div>
);

export { Buttons };
