import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { PopupMenu } from "./PupupMenu";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

import { container, contentNav } from "./style";

interface IHeaderServer {
  setIsOpenedMenu(event: boolean): void;
  isOpenedMenu: boolean;
}

const HeaderServer: React.FC<PropsWithChildren<IHeaderServer>> = ({
  isOpenedMenu,
  setIsOpenedMenu,
}) => (
  <>
    <div className="relative min-h-[3.75rem] max-h-[3.75rem]" />

    <header className={container}>
      <nav className={contentNav}>
        <Logo />

        <Menu setIsOpenedMenu={setIsOpenedMenu} isOpenedMenu={isOpenedMenu} />
      </nav>
    </header>

    <PopupMenu isOpenedMenu={isOpenedMenu} setIsOpenedMenu={setIsOpenedMenu} />
  </>
);

export { HeaderServer };
