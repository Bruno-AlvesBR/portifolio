import { PropsWithChildren } from "react";

interface IMaxContainer extends PropsWithChildren {
  className?: string;
}

const MaxContainer: React.FC<IMaxContainer> = ({ children, className }) => (
  <div
    className={`relative m-auto flex flex-col w-full justify-center items-center max-w-[80rem] gap-6 md:px-4 sm:px-2 ${className}`}
  >
    {children}
  </div>
);

export { MaxContainer };
