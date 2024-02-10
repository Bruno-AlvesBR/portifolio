"use client";
import { Button } from "../Button";

interface IClientComponent {
  fullWidth: boolean;
}

export const ClientComponent: React.FC<IClientComponent> = ({ fullWidth }) => (
  <Button
    component="button"
    hierarchy="secondary"
    className="uppercase justify-center"
    fullWidth={fullWidth}
    onClick={() => (document.getElementById("my_modal_1") as any).showModal()}
  >
    <p className="p-none text-4 font-semibold uppercase text-blue600">
      CURRICULUM
    </p>
  </Button>
);
