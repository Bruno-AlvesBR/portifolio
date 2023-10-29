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
      "Possuo conhecimentos teóricos e práticos relacionados a design de protótipos.",
  },
  {
    id: 1,
    name: "Web Application",
    iconPath: "/assets/svg/desktop-computer-icon.svg",
    description:
      "Desenvolvo software com interfaces acessíveis e claras, sempre evoluindo conforme o mercado.",
  },
  {
    id: 2,
    name: "Back-End Application",
    iconPath: "/assets/svg/world-web-icon.svg",
    description:
      "Desenvolvo sistemas internos relacionados a API's rest, possibilitando seu consumo em interfaces front-end.",
  },
];

export { serviceList };
