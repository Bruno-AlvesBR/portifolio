import { motion } from "framer-motion";
import { useRouter } from "next/router";

import MenuIcon from "@/assets/icons/menu";
import { Option } from "../Option";
import { menuList } from "../list";

interface IMenu {
  setIsOpenedMenu(value: boolean): void;
  isOpenedMenu: boolean;
}

const Menu: React.FC<IMenu> = ({ isOpenedMenu, setIsOpenedMenu }) => {
  const { asPath } = useRouter();

  return (
    <div className="flex flex-row w-fit h-full relative items-center">
      <motion.button
        onClick={() => setIsOpenedMenu(!isOpenedMenu)}
        whileTap={{ scale: 0.9 }}
        className="hidden sm:flex w-full h-full min-w-12 max-w-12 max-h-12 justify-center relative"
      >
        <MenuIcon />
      </motion.button>

      <div className="flex w-full h-full gap-6 sm:hidden">
        {menuList.map((option) => (
          <Option
            key={option.id}
            {...option}
            isSelected={
              asPath.includes(option.slug) ||
              (!asPath.includes("#") && option.slug === "start")
            }
          />
        ))}
      </div>
    </div>
  );
};

export { Menu };
