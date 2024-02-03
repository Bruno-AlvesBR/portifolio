"use client";
import { useEffect, useState } from "react";

import { Option } from "../Option";
import { menuList } from "../list";

interface IPopupMenuClient {
  setIsOpenedMenu(value: boolean): void;
  isOpenedMenu: boolean;
}

const PopupMenuClient: React.FC<IPopupMenuClient> = ({ setIsOpenedMenu }) => {
  const [selectedHash, setSelectedHash] = useState("start");

  useEffect(() => {
    const hashPath = window.location.hash;

    if (hashPath) setSelectedHash(hashPath.replace("#", ""));
  }, []);

  return (
    <>
      {menuList.map((option) => (
        <Option
          setSelectedHash={setSelectedHash}
          key={option.id}
          onClick={() => setIsOpenedMenu(false)}
          {...option}
          isSelected={selectedHash.includes(option.slug)}
        />
      ))}
    </>
  );
};

export { PopupMenuClient };
