import { ReactNode, SVGProps } from "react";

import webIcon from "@/assets/icons/web-design-icon";
import desktopIcon from "@/assets/icons/desktop-computer-icon";

interface IServiceList {
  id: number;
  name: string;
  iconPath: string;
  description: string;
}

const serviceList: Array<IServiceList> = [
  {
    id: 0,
    name: "UI / UX Design",
    iconPath: "/assets/svg/web-design-icon.svg",
    description:
      "Possuo conhecimento teórico e prático relacionado ao design de prototipação.",
  },
  {
    id: 1,
    name: "Aplicação Web",
    iconPath: "/assets/svg/desktop-computer-icon.svg",
    description:
      "Desenvolvo software com interfaces acessíveis e claras, sempre evoluindo de acordo com o mercado.",
  },
  {
    id: 2,
    name: "Aplicação Back-End",
    iconPath: "/assets/svg/world-web-icon.svg",
    description:
      "Desenvolvo sistemas internos relacionados a APIs REST, permitindo seu consumo em interfaces front-end.",
  },
];

export { serviceList };
