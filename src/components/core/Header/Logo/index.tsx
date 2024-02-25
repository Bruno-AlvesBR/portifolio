"use client";
import { Link } from "@/components/ui/Link";

interface ILogo {
  handleSelectOption(path: string, modalBlocked?: boolean): void;
}

const Logo: React.FC<ILogo> = ({ handleSelectOption }) => (
  <div className="flex flex-row">
    <Link
      href="/#start"
      onClick={() => handleSelectOption(null, true)}
      noDecoration
      className="active:scale-75 transition-transform w-fit h-fit text-6 font-semibold text-white"
    >
      {Object.values("BRUNO").map((item) => (
        <span key={item} className="hover:scale-125 transition-all">
          {item}
        </span>
      ))}
    </Link>
  </div>
);

export { Logo };
