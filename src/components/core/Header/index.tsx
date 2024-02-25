"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { HeaderServer } from "./server";
import { PopupMenu } from "./PupupMenu";

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [selectedHash, setSelectedHash] = useState("start");

  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, []);

  const handleSelectOption = (path: string, modalBlocked?: boolean) => {
    if (modalBlocked) setIsOpenedMenu(false);
    else setIsOpenedMenu(!isOpenedMenu);

    setSelectedHash(path);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          maxWidth: ["0%", "100%"],
          opacity: [0, 1],
          transition: { duration: 1 },
        }}
        className="hover:opacity-100 overflow-hidden z-20 fixed left-[50%] translate-x-[-50%] top-4 py-2 px-8 sm:px-5 border-[0.1px] border-white/10 bg-black/20 backdrop-blur-sm w-fit sm:w-[80vw] flex items-center justify-center rounded-badge"
      >
        <HeaderServer
          selectedHash={selectedHash}
          handleSelectOption={handleSelectOption}
        />
      </motion.header>

      <PopupMenu
        isOpenedMenu={isOpenedMenu}
        selectedHash={selectedHash}
        handleSelectOption={handleSelectOption}
      />
    </>
  );
};

export { Header };
