"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { MenuIcon } from "@/assets/icons/menu";
import { Option } from "../Option";
import { menuList } from "../list";

interface IMenu {
  setIsOpenedMenu(value: boolean): void;
  isOpenedMenu: boolean;
}

const Menu: React.FC<IMenu> = ({ isOpenedMenu, setIsOpenedMenu }) => {
  const [selectedHash, setSelectedHash] = useState("start");

  useEffect(() => {
    const hashPath = window.location.hash;

    if (hashPath) setSelectedHash(hashPath.replace("#", ""));
  }, []);

  return (
    <div className="flex flex-row w-fit h-full relative items-center">
      <motion.button
        onClick={() => setIsOpenedMenu(!isOpenedMenu)}
        whileTap={{ scale: 0.9 }}
        className="border-b-back hidden sm:flex w-full h-fit min-w-12 max-w-12 max-h-12 justify-center relative"
      >
        <MenuIcon />
      </motion.button>

      <div className="flex w-full h-full gap-6 sm:hidden">
        {menuList.map((option) => (
          <Option
            key={option.id}
            {...option}
            setSelectedHash={setSelectedHash}
            isSelected={selectedHash.includes(option.slug)}
          />
        ))}
      </div>
    </div>
  );
};

export { Menu };
