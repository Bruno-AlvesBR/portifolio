"use client";
import { motion } from "framer-motion";

import { Link } from "@/components/ui/Link";

interface IOptionClient {
  label: string;
  slug: string;
  isSelected: boolean;
  onClick?(): void;
  setSelectedHash(event: string): void;
}

const OptionClient: React.FC<IOptionClient> = ({
  isSelected,
  label,
  slug,
  onClick,
  setSelectedHash,
}) => (
  <motion.div
    whileHover={{ opacity: 0.5, transition: { duration: 0.1 } }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <Link
      href={slug ? `#${slug}` : ""}
      noDecoration
      onClick={() => setSelectedHash(slug)}
      className={`font-semibold uppercase ${
        isSelected ? "text-blue700" : "text-blue900"
      }`}
    >
      {label}
    </Link>
  </motion.div>
);

export { OptionClient };
