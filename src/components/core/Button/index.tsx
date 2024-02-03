"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface IButton extends PropsWithChildren {
  className?: string;
  hierarchy?: "primary" | "secondary";
  fullWidth?: boolean;
  href?: string;
  isDownload?: boolean;
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
}) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`flex flex-row  px-4 py-2 rounded-2 ${
      fullWidth ? "w-full max-w-full" : "w-fit max-w-[160px]"
    } ${hierarchyStyles[hierarchy]} ${className}`}
    href={href}
    download={isDownload}
  >
    {children}
  </motion.a>
);

export { Button };
