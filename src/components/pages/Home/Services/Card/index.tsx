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
  <div className="relative w-full max-w-[20rem] sm:h-auto sm:max-w-full bg-white1000 flex flex-col gap-2 items-center px-6 py-6 justify-between shadow-xl rounded-md">
    <div className="gap-4 flex sm:flex-row flex-col items-center">
      <Image
        src={iconPath}
        width={200}
        height={200}
        quality={25}
        className="sm:max-w-[3rem] sm:max-h-[3rem] md:max-w-[5rem] md:max-h-[5rem]"
        alt={""}
      />

      <h3 className="md:text-6 text-9 font-semibold text-blue600 text-center">
        {name}
      </h3>
    </div>

    <p className="md:text-4 text-6 text-black800">{description}</p>
  </div>
);

export { ServiceCard };
