import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface IPopupMenuServer {
  isOpenedMenu: boolean;
}

const PopupMenuServer: React.FC<PropsWithChildren<IPopupMenuServer>> = ({
  isOpenedMenu,
  children,
}) => (
  <motion.div
    initial={{ top: "-100%" }}
    animate={isOpenedMenu ? { top: "3.75rem" } : { top: "-100%" }}
    className="sm:flex hidden z-10 fixed right-0 flex-col items-center w-full max-w-[180px] gap-0 h-auto bg-white"
  >
    {children}
  </motion.div>
);

export { PopupMenuServer };
