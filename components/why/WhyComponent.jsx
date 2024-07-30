import { Highlight } from "@/lib/utils/Highlight";
import clsx from "clsx";
import TypewriterEffectSmooth from "../global/TypeWriter";

const WhyComponent = ({ item, reverse, bg, cusmtomHeight }) => {
  // break the title to form an array of words
  // Function to convert title string into array of objects
  const convertTitleToWords = (title) => {
    return title.split(" ").map((word) => ({ text: word + " " }));
  };

  // Use the function to create the words array
  const words = convertTitleToWords(item.title);

  return (
    <div
      className={clsx(
        "w-full relative overflow-hidden",
        bg,
        cusmtomHeight
          ? "md:h-full"
          : "md:h-[80vh]  h-[auto]  md:min-h-[auto] md:py-0 py-10"
      )}
    >
      {/* <Image
        id="parallax-back"
        src={"/assets/grid.svg"}
        alt="Background Grid"
        className={clsx(
          "absolute md:block hidden md:w-full md:h-auto h-[420px] w-[500px] opacity-75",
          !reverse
            ? "md:top-[-213px]  md:left-[-363px]  top-[83px] left-0"
            : "md:top-[-213px] md:left-[211px] top-[83px] left-0"
        )}
        width={500}
        height={420}
      /> */}
      <div
        className={clsx(
          "h-full w-full items-center gap-x-[1em]  max-w-screen-xl  justify-center mx-auto grid md:grid-cols-2 gap-y-8 md:px-[5em] px-7",
          bg
        )}
      >
        <div
          className={clsx(
            "md:p-8 flex flex-col text-center items-center my-auto h-full",
            reverse ? "md:order-2" : "md:order-1"
          )}
        >
          <h2 className="text-defaultIconColor md:hidden  md:text-[2.3em] text-[25px] leading-[1.4] w-full font-bold md:leading-[130%] inline-block md:text-center text-center ">
            {item.title}
          </h2>

          <div className="h-full w-full dark:bg-transparent bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative md:flex hidden items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent backdrop-blur-2xl bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <TypewriterEffectSmooth
              words={words}
              className={
                "text-defaultIconColor  md:text-[1.6em] text-[25px] leading-[1] font-bold md:text-center text-center"
              }
              cursorClassName={"md:-top-[12px]"}
            />
          </div>
        </div>

        <div
          className={clsx(
            "relative md:h-full  flex flex-col justify-center items-center md:gap-5  gap-3 w-full",
            !reverse ? "md:order-2" : "md:order-1"
          )}
        >
          <div className="frontendcard_sub mr-auto">
            <Highlight
              className={
                "md:text-[1.2em] text-[16px] leading-[1.4]  ml-2 w-fit "
              }
            >
              {item.content[0].title}
            </Highlight>
            <div className="bg-[#0e0e0e] h-full   rounded-lg p-2 w-full">
              <p className="text-defaultIconColor md:text-[1.1em] text-[15px]  md:pt-[5px] leading-[1.4]">
                {item.content[0].desc}
              </p>
            </div>
          </div>

          <div className="frontendcard_sub ml-auto">
            <Highlight
              className={
                "md:text-[1.2em] text-[16px] leading-[1.4]  ml-2 w-fit "
              }
            >
              {item.content[1].title}
            </Highlight>
            <div className="bg-[#0e0e0e] h-full  rounded-lg p-2">
              <p className="text-defaultIconColor md:text-[1.1em] text-[15px] md:pt-[5px] leading-[1.4]">
                {item.content[1].desc}
              </p>
            </div>
          </div>

          <div className="frontendcard_sub mr-auto">
            <Highlight
              className={
                "md:text-[1.1em] text-[16px] leading-[1.4]  ml-2 w-fit "
              }
            >
              {item.content[2].title}
            </Highlight>
            <div className="bg-[#0e0e0e] h-full rounded-lg p-2">
              <p className="text-defaultIconColor md:text-[1.1em] text-[15px] md:pt-[5px] leading-[1.4]">
                {item.content[2].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyComponent;
