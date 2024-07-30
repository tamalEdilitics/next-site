"use client";

import { useMounted } from "@/lib/utils/hooks/useMounted";
import TypewriterEffectSmooth from "../global/TypeWriter";
import IntegrateCard from "./IntegrateCard";
import ReplicateCard from "./ReplicateCard";
import TransformCard from "./TransformCard";
import VisualizeCard from "./VisualizeCard";

const Features = () => {
  const words = [
    {
      text: "Your ",
    },
    {
      text: "All-in-One ",
    },
    {
      text: "Data ",
      className: "text-brandGreen",
    },
    {
      text: "Analytics ",
      className: "text-brandGreen",
    },
    {
      text: "Solution",
      className: "text-brandGreen",
    },
  ];

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div className="md:min-h-screen  features_test_bg  relative flex flex-col md:max-w-[auto]   md:px-6  items-center  mx-auto  py-8 ">
      <div className="my-auto mx-auto z-5 relative flex flex-col gap-14">
        <h2 className="leading-[1.3] text-center text-[27px] font-medium text-defaultIconColor block md:hidden">
          Your All-in-One
          <br />{" "}
          <span className="text-brandGreen">Data Analytics Solutions</span>{" "}
        </h2>

        <div className="w-full md:flex hidden flex-col justify-center items-center">
          <TypewriterEffectSmooth
            words={words}
            cursorClassName={"xl:h-12 h-10 md:-top-[6px]"}
            className={"md:text-[2.2em] text-center"}
          />
        </div>

        <div className="">
          <div className="md:px-[2rem] md:max-w-[68em] max-w-[96vw] mx-auto md:gap-[1rem]  items-center  md:w-[68.75em] flex md:flex-row flex-col">
            <IntegrateCard />

            <div className="flex h-full  flex-col items-center justify-center z-10">
              <div className="arrow flex md:-rotate-90 flex-col">
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                {window?.innerWidth > 768 && (
                  <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1 "></span>
                )}
              </div>
            </div>

            <ReplicateCard />
          </div>

          <div className="w-[55%] mx-auto flex md:flex-row flex-col items-center justify-between md:my-[0.8rem] -my-3 ">
            <div className="flex h-full  flex-col items-center justify-center opacity-0">
              <div className="arrow flex -rotate-90 flex-col">
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                {window?.innerWidth > 768 && (
                  <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1 "></span>
                )}
              </div>
            </div>

            <div className="flex h-full  flex-col items-center justify-center rotate-90 z-[1]">
              <div className="arrow flex -rotate-90 flex-col">
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                {window?.innerWidth > 768 && (
                  <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1 "></span>
                )}
              </div>
            </div>
          </div>

          <div className="md:px-[2rem] md:max-w-[68em] mx-auto md:gap-[1rem] max-w-[96vw] items-center  md:w-[68.75em] flex md:flex-row flex-col-reverse">
            <VisualizeCard />

            <div className="flex h-full  flex-col items-center justify-center rotate-180">
              <div className="arrow flex md:-rotate-90 rotate-180 flex-col">
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1"></span>
                {window?.innerWidth > 768 && (
                  <span className="h-[1rem] w-[1rem] 3xl:-m-[2.5px] xl:-m-[3px] lg:-m-1 "></span>
                )}
              </div>
            </div>

            <TransformCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
