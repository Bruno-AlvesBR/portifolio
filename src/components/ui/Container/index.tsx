import {
  DetailedHTMLProps,
  HTMLAttributes,
  HtmlHTMLAttributes,
  LegacyRef,
  PropsWithChildren,
} from "react";

type ContainerType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface IMaxContainer extends PropsWithChildren, ContainerType {
  className?: string;
  id?: string;
}

const MaxContainer: React.FC<IMaxContainer> = ({
  children,
  id,
  className,
  ref,
}) => (
  <div ref={ref} className={`w-full h-full ${className}`}>
    <div
      id={id}
      className="relative m-auto flex w-full justify-center items-center max-w-[80rem] gap-6 md:px-4 sm:px-2"
    >
      {children}
    </div>
  </div>
);

export { MaxContainer };
