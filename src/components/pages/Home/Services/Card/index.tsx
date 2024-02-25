import { ReactNode, SVGProps } from "react";
import DesktopIcon from "@/assets/icons/desktop-computer-icon";
import Image from "next/image";

interface IServiceCard {
  name: string;
  description: string;
  iconPath: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  name,
  description,
  iconPath,
}) => (
  <div className="sm:gap-2 relative w-full max-w-[20rem] sm:px-2 sm:h-auto sm:max-w-full border-[0.1px] border-white/10 bg-black/40 backdrop-blur-sm flex flex-col sm:flex-row gap-4 items-center sm:py-2 py-6 justify-between shadow-xl rounded-md">
    <div className="sm:justify-between sm:w-full sm:gap-2 gap-4 flex flex-col items-center">
      <Image
        src={iconPath}
        width={200}
        height={200}
        quality={25}
        className="sm:max-w-[3rem] sm:max-h-[3rem] md:max-w-[5rem] md:max-h-[5rem] order-1"
        alt={""}
      />

      <h3 className="md:text-5 text-9 font-semibold text-blue600 text-center">
        {name}
      </h3>
    </div>

    <p className="sm:px-0 px-4 md:text-4 text-6 font-light text-white">
      {description}
    </p>
  </div>
);

export { ServiceCard };
