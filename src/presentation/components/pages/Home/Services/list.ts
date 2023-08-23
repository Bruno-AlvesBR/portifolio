import { SVGProps } from "react";

import webIcon from "@/assets/icons/web-design-icon";

interface IServiceList {
  id: number;
  name: string;
  icon(props: SVGProps<SVGSVGElement>): JSX.Element;
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
    icon: webIcon,
    description:
      "Desenvolvo software com interfaces acessíveis e claras, sempre evoluindo conforme o mercado.",
  },
  {
    id: 2,
    name: "Back-End Application",
    icon: webIcon,
    description:
      "Desenvolvo sistemas internos relacionados a API's rest, possibilitando seu consumo em interfaces front-end.",
  },
];

export { serviceList };
