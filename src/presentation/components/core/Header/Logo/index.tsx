import { motion } from "framer-motion";

const Logo = () => (
  <div className="flex flex-row">
    {Object.values("Bruno").map((item) => (
      <motion.h1
        key={item}
        className="w-fit h-fit text-8 font-semibold cursor-default text-blue600"
        whileHover={{ scale: 1.5 }}
      >
        {item}
      </motion.h1>
    ))}
  </div>
);

export { Logo };
