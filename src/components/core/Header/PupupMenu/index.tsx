import { PopupMenuServer } from "./server";
import { PopupMenuClient } from "./client";

interface IPopupMenu {
  setIsOpenedMenu(value: boolean): void;
  isOpenedMenu: boolean;
}

const PopupMenu: React.FC<IPopupMenu> = ({ isOpenedMenu, setIsOpenedMenu }) => (
  <PopupMenuServer isOpenedMenu={isOpenedMenu}>
    <PopupMenuClient
      isOpenedMenu={isOpenedMenu}
      setIsOpenedMenu={setIsOpenedMenu}
    />
  </PopupMenuServer>
);

export { PopupMenu };
