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
      "I design pleasant and useful interfaces to improve the user experience",
  },
  {
    id: 1,
    name: "Web Application",
    icon: desktopComputerIcon,
    description:
      "I develop interactive, robust, dynamic and responsive websites",
  },
  {
    id: 2,
    name: "Back-End Application",
    icon: worldWebIcon,
    description: "I develop api's to be consumed by the system's",
  },
];

export { serviceList };
