"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
  className?: string;
  hierarchy?: "primary" | "secondary";
  fullWidth?: boolean;
  href?: string;
  isDownload?: boolean;
  onClick?(): void;
  component: "a" | "button";
}

const hierarchyStyles = {
  primary: "bg-blue600 border-none",
  secondary: "bg-transparent border-blue600 border-[1px]",
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
      whileHover={{ filter: "brightness(0.5)" }}
      whileTap={{ scale: 0.9 }}
      className={`flex flex-row  px-4 py-2 rounded-2 ${
        fullWidth ? "w-full max-w-full" : "w-fit max-w-[160px]"
      } ${hierarchyStyles[hierarchy]} ${className}`}
      href={href}
      onClick={onClick}
      download={isDownload}
    >
      {children}
    </Component>
  );
};

export { Button };
