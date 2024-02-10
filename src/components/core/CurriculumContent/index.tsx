import { Button } from "../Button";
import { ClientComponent } from "./client";

interface ICurriculumContent {
  fullWidth: boolean;
}

export const CurriculumContent: React.FC<ICurriculumContent> = ({
  fullWidth,
}) => (
  <>
    <ClientComponent fullWidth={fullWidth} />

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-white">
        <span className="flex flex-row w-full items-center justify-between">
          <h3 className="font-bold text-lg text-gray-600">All Curriculums!</h3>

          <form method="dialog">
            <button className="bg-white transition-all duration-100 hover:brightness-90 px-2 rounded-md">
              Close
            </button>
          </form>
        </span>

        <p className="py-4 text-gray-500">
          Press ESC key or click the button below to close
        </p>
        <div className="modal-action sm:flex-col items-center w-full flex gap-4">
          <span className="w-full flex flex-row sm:flex-col gap-4">
            <Button
              hierarchy="primary"
              component="a"
              className="uppercase justify-center m-0 p-0"
              href="/english-cv-bruno-alves.pdf"
              isDownload
              fullWidth
            >
              <p className="p-none text-sm font-medium uppercase text-white">
                ENGLISH CURRICULUM
              </p>
            </Button>
            <Button
              hierarchy="primary"
              component="a"
              className="uppercase justify-center"
              href="/portugues-cv-bruno-alves.pdf"
              isDownload
              fullWidth
            >
              <p className="p-none text-sm font-medium uppercase text-white">
                PORTUGUESE CURRICULUM
              </p>
            </Button>
          </span>
        </div>
      </div>
    </dialog>
  </>
);
