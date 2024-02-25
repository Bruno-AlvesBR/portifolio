"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  className?: string;
  hierarchy?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  href?: string;
  isDownload?: boolean;
  onClick?(): void;
  component: "a" | "button";
}

const hierarchyStyles = {
  primary: " bg-blue600 border-none ",
  secondary: " bg-transparent border-white/20 border-[0.1px] ",
  tertiary: " bg-transparent border-none hover:bg-blue600 ",
};

const Button: React.FC<IButton> = ({
  children,
  className,
  fullWidth = false,
  hierarchy = "primary",
  href = "",
  isDownload = false,
  onClick,
  component,
}) => {
  const Component = motion[component];

  return (
    <Component
      whileTap={{ scale: 0.9 }}
      className={"hover:bg-white/20 hover:border-[1px] border transition-colors flex flex-row px-4 py-2 rounded-2 "
        .concat(fullWidth ? "w-full max-w-full" : "w-fit max-w-[160px]")
        .concat(hierarchyStyles[hierarchy])
        .concat(className)}
      href={href}
      onClick={onClick}
      download={isDownload}
    >
      {children}
    </Component>
  );
};

export { Button };
