"use client";
import { Button } from "../Button";

interface IClientComponent {
  fullWidth: boolean;
}

export const ClientComponent: React.FC<IClientComponent> = ({ fullWidth }) => (
  <Button
    component="button"
    hierarchy="secondary"
    className="uppercase justify-center border-white"
    fullWidth={fullWidth}
    onClick={() => (document.getElementById("my_modal_1") as any).showModal()}
  >
    <p className="p-none text-4 font-semibold uppercase text-white950">
      CURRICULUM
    </p>
  </Button>
);
