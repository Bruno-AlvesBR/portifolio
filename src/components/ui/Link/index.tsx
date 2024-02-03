"use client";

import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren, useMemo } from "react";

export interface ILink extends LinkProps, PropsWithChildren<LinkProps> {
  noDecoration?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

const Link: React.FC<ILink> = ({
  href = "/",
  children,
  noDecoration,
  disabled,
  onClick,
  className,
  target,
  ...props
}) => {
  const styles = useMemo(() => {
    const atributtes: Object = {};

    if (noDecoration) Object.assign(atributtes, { textDecoration: "none" });
    if (disabled) Object.assign(atributtes, { pointerEvents: "none" });

    return atributtes;
  }, [noDecoration, disabled]);

  return (
    <NextLink
      href={href}
      style={styles}
      className={`flex text-4 hover:underline focus:underline outline-blue700 ${className}`}
      {...props}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {children}
    </NextLink>
  );
};

export { Link };
