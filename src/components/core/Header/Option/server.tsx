import { PropsWithChildren } from "react";

interface IOptionServer {
  isSelected: boolean;
}

const OptionServer: React.FC<PropsWithChildren<IOptionServer>> = ({
  isSelected,
  children,
}) => (
  <div
    className={`text-white relative h-full sm:h-fit sm:m-4 flex items-center ${
      isSelected
        ? "before:w-full before:h-1 before:absolute before:bottom-0 before:bg-blue700 before:rounded-2"
        : ""
    }`}
  >
    {children}
  </div>
);

export { OptionServer };
