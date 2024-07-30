import { motion } from "framer-motion";
import FooterHighlight from "./FooterHighlight";

const FooterCTA = ({ title, ctaText }) => {
  return (
    <FooterHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" px-4 font-bold text-defaultIconColor  max-w-screen-xl leading-relaxed lg:leading-snug text-center mx-auto  "
      >
        <h2 className="md:text-[30px] md:leading-[100%] text-[30px] leading-[1.3] text-defaultIconColor">
          {title}
        </h2>

        <h3 className=" text-defaultIconColor2 md:text-[16px] md:leading-[1.4] text-[20px] leading-[1.8]  font-semibold mt-5">
          {ctaText}
        </h3>
      </motion.div>

      <div className=" flex md:px-0 px-7 flex-row items-center justify-center  md:gap-4 gap-2  mx-auto  mt-10  w-full md:w-[70%]">
        <a
          href={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/auth`}
          className="button-new transparent-copy border-[1.5px] text-[16px] md:text-[1em] border-none md:inline-block px-[2em] py-[1em]  login-gradient text-[#fff] rounded-md shadow-md md:h-auto h-[47px] flex items-center justify-center"
          aria-label="Sign Up For Free"
        >
          Sign Up For Free
        </a>
      </div>
    </FooterHighlight>
  );
};

export default FooterCTA;
