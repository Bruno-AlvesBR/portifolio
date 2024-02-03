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
      "I have theoretical and practical knowledge related to prototyping design.",
  },
  {
    id: 1,
    name: "Web Application",
    iconPath: "/assets/svg/desktop-computer-icon.svg",
    description:
      "I develop software with accessible and clear interfaces, always evolving according to the market.",
  },
  {
    id: 2,
    name: "Back-End Application",
    iconPath: "/assets/svg/world-web-icon.svg",
    description:
      "I develop internal systems related to REST APIs, enabling their consumption in front-end interfaces.",
  },
];

export { serviceList };
