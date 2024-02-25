import { PropsWithChildren } from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";

interface IHeaderServer {
  selectedHash: string;
  handleSelectOption(path: string, modalBlocked?: boolean): void;
}

const HeaderServer: React.FC<PropsWithChildren<IHeaderServer>> = ({
  selectedHash,
  handleSelectOption,
}) => (
  <nav className="w-full max-w-[80rem] relative h-fit flex flex-row justify-between items-center gap-20 sm:gap-3">
    <Logo handleSelectOption={handleSelectOption} />

    <Menu handleSelectOption={handleSelectOption} selectedHash={selectedHash} />
  </nav>
);

export { HeaderServer };
