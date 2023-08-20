import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { menuList } from "../list";
import { Option } from "../Option";

interface IPopupMenu {
  setIsOpenedMenu(value: boolean): void;
  isOpenedMenu: boolean;
}

const PopupMenu: React.FC<IPopupMenu> = ({ isOpenedMenu, setIsOpenedMenu }) => {
  const { asPath } = useRouter();

  return (
    <motion.div
      initial={{ top: "-100%" }}
      animate={isOpenedMenu ? { top: "5rem" } : { top: "-100%" }}
      className="z-10 fixed right-0 flex flex-col items-center w-full max-w-[180px] gap-0 h-auto bg-white"
    >
      {menuList.map((option) => (
        <Option
          key={option.id}
          onClick={() => setIsOpenedMenu(false)}
          {...option}
          isSelected={
            asPath.includes(option.slug) ||
            (!asPath.includes("#") && option.slug === "start")
          }
        />
      ))}
    </motion.div>
  );
};

export { PopupMenu };
