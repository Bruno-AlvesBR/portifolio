import { Button } from "../Button";
import { ClientComponent } from "./client";

interface ICurriculumContent {
  fullWidth?: boolean;
}

export const CurriculumContent: React.FC<ICurriculumContent> = ({
  fullWidth = false,
}) => (
  <>
    <ClientComponent fullWidth={fullWidth} />

    <dialog
      id="my_modal_1"
      className="modal before:bg-black/60 before:w-full before:h-full before:absolute"
    >
      <div className="modal-box bg-white/30 backdrop-blur-lg flex flex-col gap-6">
        <span className="flex flex-col w-full items-center justify-center gap-1">
          <h3 className="font-bold text-lg text-white">Todos os Currículos!</h3>

          <form method="dialog">
            <button className="absolute top-4 right-4 bg-zinc-950/30 text-white transition-all duration-100 hover:brightness-90 px-2 rounded-md">
              ✕
            </button>
          </form>

          <p className="flex sm:hidden text-white text-3 font-light text-center">
            {"("}Pressione ESC ou clique no botão abaixo para fechar{")"}
          </p>
        </span>

        <div className="modal-action sm:flex-col items-center w-full flex gap-4">
          <span className="w-full flex flex-row sm:flex-col gap-4">
            <Button
              hierarchy="tertiary"
              component="a"
              className="uppercase justify-center m-0 p-0"
              href="/english-cv-bruno-alves.pdf"
              isDownload
              fullWidth
            >
              <p className="p-none text-sm font-medium uppercase text-white text-center">
                CURRÍCULO EM INGLÊS
              </p>
            </Button>
            <Button
              hierarchy="tertiary"
              component="a"
              className="uppercase justify-center"
              href="/portugues-cv-bruno-alves.pdf"
              isDownload
              fullWidth
            >
              <p className="p-none text-sm font-medium uppercase text-white text-center">
                CURRÍCULO EM PORTUGUÊS
              </p>
            </Button>
          </span>
        </div>
      </div>
    </dialog>
  </>
);
