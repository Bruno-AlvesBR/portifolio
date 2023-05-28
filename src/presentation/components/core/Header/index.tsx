import { motion } from "framer-motion";
import { menuList } from "./list";
import { Option } from "./Option";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="relative min-h-[80px] max-h-[80px]" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="h-full fixed top-0 w-full min-h-[80px] max-h-[80px] bg-white1000 flex justify-center items-center z-10 box-border border-b-[1px] border-b-gray400">
          <div className="w-full max-w-[80rem] h-full flex flex-row justify-between items-center mx-2">
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

            <div className="flex flex-row w-fit gap-6 h-full">
              {menuList.map((option) => (
                <Option
                  key={option.id}
                  {...option}
                  isSelected={
                    asPath.includes(option.slug) ||
                    (!asPath.includes("#") && option.slug === "inicio")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { Header };
