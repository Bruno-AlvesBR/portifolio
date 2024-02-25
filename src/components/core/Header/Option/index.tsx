import { Link } from "@/components/ui/Link";

interface IOption {
  label: string;
  slug: string;
  isSelected: boolean;
  onClick?(): void;
  handleSelectOption(path: string): void;
}

const Option: React.FC<IOption> = ({
  isSelected,
  label,
  handleSelectOption,
  slug,
}) => (
  <div
    className={`text-white relative sm:h-fit sm:w-full flex items-center justify-center`}
  >
    <Link
      href={slug ? `#${slug}` : ""}
      noDecoration
      onClick={() => handleSelectOption(slug)}
      className={`flex justify-center active:scale-75 sm:active:scale-90 transition-all hover:opacity-50 uppercase sm:w-full sm:py-4 ${
        isSelected ? "text-white font-bold" : "text-white/90"
      }`}
    >
      {label}
    </Link>
  </div>
);

export { Option };
