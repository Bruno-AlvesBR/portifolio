"use client";
import { useEffect, useState } from "react";

import { HeaderServer } from "./server";

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <HeaderServer
      setIsOpenedMenu={setIsOpenedMenu}
      isOpenedMenu={isOpenedMenu}
    />
  );
};

export { Header };
