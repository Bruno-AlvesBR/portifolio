"use client";
import { useState } from "react";

import { ISkillsList } from "../list";

type ICard = ISkillsList;

export const Card: React.FC<ICard> = ({ label, progress, description, featured }) => {
  const [isHovered, setIsHovered] = useState(false);

  const centeredXAbsoluteContent = " left-[50%] translate-x-[-50%] ";
  const centeredYAbsoluteContent = " top-[50%] translate-y-[-50%] ";

  return (
    <div
      id={"skill-".concat(label)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"before:transition-all before:duration-300 before:absolute before:z-0 before:bottom-0 before:w-full before:left-[50%] before:translate-x-[-50%] before:bg-white/10 before:backdrop-blur-md shadow-md gap-28 flex flex-col h-full w-full border-white/10 bg-black/20 backdrop-blur-2xl overflow-hidden p-4 rounded-md relative my-auto ".concat(
        featured ? "border-yellow-400/50 border-2 shadow-yellow-400/20 shadow-lg" : ""
      ).concat(
        isHovered
          ? " before:opacity-100 before:h-full"
          : " before:opacity-0 before:h-0"
      )}
    >
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <svg
            className="w-6 h-6 text-yellow-400 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      )}

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
