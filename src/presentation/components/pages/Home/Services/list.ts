import { ReactNode } from "react";

import desktopComputerIcon from "@/assets/icons/desktop-computer-icon";
import webIcon from "@/assets/icons/web-design-icon";
import worldWebIcon from "@/assets/icons/world-web-icon";

interface IServiceList {
  id: number;
  name: string;
  icon: any;
  description: string;
}

const serviceList: Array<IServiceList> = [
  {
    id: 0,
    name: "UI / UX Design",
    icon: webIcon,
    description:
      "Possuo conhecimentos teóricos e práticos relacionados a design de protótipos.",
  },
  {
    id: 1,
    name: "Web Application",
    icon: desktopComputerIcon,
    description:
      "Desenvolvo software com interfaces acessíveis e claras, sempre evoluindo conforme o mercado.",
  },
  {
    id: 2,
    name: "Back-End Application",
    icon: worldWebIcon,
    description:
      "Desenvolvo sistemas internos relacionados a API's rest, possibilitando seu consumo em interfaces front-end.",
  },
];

export { serviceList };
