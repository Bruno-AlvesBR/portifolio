import NextLink, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useMemo,
} from "react";

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
      className={`text-4 hover:underline focus:underline w-fit outline-blue700 ${className}`}
      {...props}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <a target={target}>{children}</a>
    </NextLink>
  );
};

export { Link };
