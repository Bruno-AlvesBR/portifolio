"use client";

import { Option } from "../Option";
import { menuList } from "../list";

interface IPopupMenu {
  isOpenedMenu: boolean;
  selectedHash: string;
  handleSelectOption(path: string): void;
}

const PopupMenu: React.FC<IPopupMenu> = ({
  isOpenedMenu,
  selectedHash,
  handleSelectOption,
}) => (
  <span
    onClick={() => handleSelectOption(null)}
    className={"before:hidden sm:flex before:z-10 before:w-full before:absolute before:h-full before:bg-black/40 before:backdrop-blur-sm ".concat(
      isOpenedMenu ? "sm:before:flex" : "before:hidden"
    )}
  >
    <div
      className={"border-[0.1px] border-white/10 overflow-hidden scrollbar-hide overflow-y-auto hidden sm:flex top-[6rem] rounded-badge transition-all duration-150 w-[80%] left-[50%] translate-x-[-50%] fixed flex-col right-0 z-10 bg-black/20 backdrop-blur-md justify-center items-center ".concat(
        isOpenedMenu
          ? "min-h-max h-fit max-h-[400px] opacity-100"
          : "max-h-0 border-none opacity-0"
      )}
    >
      {menuList.map((option) => (
        <Option
          key={option.id}
          handleSelectOption={handleSelectOption}
          isSelected={selectedHash?.includes(option.slug)}
          {...option}
        />
      ))}
    </div>
  </span>
);

export { PopupMenu };
