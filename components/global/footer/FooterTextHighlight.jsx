import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

const FooterTextHighlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1  px-1 rounded-lg bg-gradient-to-r  from-[#6365f1a9] to-[#8360c385]`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export default FooterTextHighlight;
