import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(
                    `text-defaultIconColor text-[2.6em] leading-[100%]  text-center  w-full font-medium`,
                    word.className,
                    className
                  )}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-4 mb-0", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div className="text-xs sm:text-base  font-bold whitespace-nowrap">
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]   h-13 md:h-10 sm:h-6 xl:h-12 relative bg-[#2ebf91]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffectSmooth;
