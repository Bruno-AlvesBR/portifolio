"use client";
import { useState } from "react";

import { ISkillsList } from "../list";

type ICard = ISkillsList;

export const Card: React.FC<ICard> = ({ label, progress, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const centeredXAbsoluteContent = " left-[50%] translate-x-[-50%] ";
  const centeredYAbsoluteContent = " top-[50%] translate-y-[-50%] ";

  return (
    <div
      id={"skill-".concat(label)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"before:transition-all before:duration-300 before:absolute before:z-0 before:bottom-0 before:w-full before:left-[50%] before:translate-x-[-50%] before:bg-white/10 before:backdrop-blur-md shadow-md gap-28 flex flex-col h-full w-full border-white/10 bg-black/20 backdrop-blur-2xl overflow-hidden p-4 rounded-md relative my-auto ".concat(
        isHovered
          ? "before:opacity-100 before:h-full"
          : "before:opacity-0 before:h-0"
      )}
    >
      <h3
        className={"absolute w-full text-center text-lg font-bold text-white transition-all duration-500"
          .concat(centeredXAbsoluteContent)
          .concat(isHovered ? " top-2" : centeredYAbsoluteContent)}
      >
        {label}
      </h3>

      <p
        className={"absolute w-full px-3 text-md font-normal text-white transition-all duration-300 "
          .concat(centeredXAbsoluteContent)
          .concat(
            isHovered
              ? "opacity-100 bottom-[50%] translate-y-[50%]"
              : "opacity-0 -bottom-[100%]"
          )}
      >
        {description}
      </p>
    </div>
  );
};
