"use client";

import { motion } from "framer-motion";

import { MenuIcon } from "@/assets/icons/menu";
import { Option } from "../Option";
import { menuList } from "../list";

interface IMenu {
  selectedHash: string;
  handleSelectOption(path: string): void;
}

const Menu: React.FC<IMenu> = ({ selectedHash, handleSelectOption }) => (
  <div className="flex flex-row w-fit h-full relative items-center">
    <button
      onClick={() => handleSelectOption(selectedHash)}
      className="border-b-back hidden sm:flex w-full h-fit min-w-12 sm:min-w-6 max-w-12 sm:max-w-6 max-h-12 sm:max-h-6 justify-center relative"
    >
      <MenuIcon />
    </button>

    <div className="flex w-full h-full gap-6 sm:hidden">
      {menuList.map((option) => (
        <Option
          key={option.id}
          {...option}
          handleSelectOption={handleSelectOption}
          isSelected={selectedHash?.includes(option.slug)}
        />
      ))}
    </div>
  </div>
);

export { Menu };
