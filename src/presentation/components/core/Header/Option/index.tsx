import { Link } from "@/presentation/components/ui/Link";
import { motion } from "framer-motion";

interface IOption {
  label: string;
  slug: string;
  isSelected: boolean;
}

const Option: React.FC<IOption> = ({ label, slug, isSelected }) => (
  <div
    className={`relative h-full sm:h-fit sm:m-4 flex items-center ${
      isSelected
        ? "before:w-full before:h-1 before:absolute before:bottom-0 before:bg-blue700 before:rounded-2"
        : ""
    }`}
  >
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={`${slug ? `#${slug}` : ""}`}
        noDecoration
        className={`font-semibold uppercase ${
          isSelected ? "text-blue700" : "text-blue900"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  </div>
);

export { Option };
