import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { menuList } from "./list";
import { Option } from "./Option";
import { Logo } from "./Logo";

import { container, contentNav } from "./style";
import { Menu } from "./Menu";
import { PopupMenu } from "./PupupMenu";
import { useState } from "react";

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <>
      <div className="relative min-h-[5rem] max-h-[5rem]" />

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={container}
      >
        <nav className={contentNav}>
          <Logo />

          <Menu setIsOpenedMenu={setIsOpenedMenu} isOpenedMenu={isOpenedMenu} />
        </nav>
      </motion.header>

      <PopupMenu
        isOpenedMenu={isOpenedMenu}
        setIsOpenedMenu={setIsOpenedMenu}
      />
    </>
  );
};

export { Header };
