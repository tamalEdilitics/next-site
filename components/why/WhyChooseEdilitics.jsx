"use client";

import whyChooseContent from "@/lib/static/WhyContent";
import TypewriterEffectSmooth from "../global/TypeWriter";
import WhyComponent from "./WhyComponent";

const WhyChooseEdilitics = () => {
  const words = [
    {
      text: "Why ",
    },
    {
      text: "Choose ",
    },
    {
      text: "Edilitics?",
      className: "text-brandGreen",
    },
  ];

  return (
    <div className="features_test_bg_2 flex flex-col md:min-h-screen relative md:pt-0 pt-8 ">
      <div className="  flex flex-col items-center  relative  my-auto ">
        <div className="flex flex-col md:min-h-screen py-10 features_test_bg_2 md:w-screen">
          <div className="w-full md:flex hidden flex-col justify-center items-center">
            <TypewriterEffectSmooth
              words={words}
              cursorClassName={"xl:h-12"}
              className={"text-[2.2em]"}
            />
          </div>

          <div className="flex flex-col items-center md:hidden text-defaultIconColor w-full">
            <h2 className="text-defaultIconColor md:hidden  md:text-[2.3em] text-[28px] leading-[1.4] w-full font-semibold md:leading-[130%] inline-block md:text-center text-center ">
              Why
              <br /> <span className="text-brandGreen">Choose Edilitics?</span>
            </h2>
          </div>

          <div className="md:h-[80vh] md:mt-0 mt-10">
            <WhyComponent
              item={whyChooseContent.effortless}
              cusmtomHeight={true}
            />
          </div>
        </div>

        <WhyComponent
          item={whyChooseContent.breakDownSilos}
          reverse={true}
          bg={"features_test_bg_2"}
        />
        <WhyComponent
          item={whyChooseContent.seamlessGrowth}
          bg={"features_test_bg"}
        />
        <WhyComponent
          item={whyChooseContent.maximizeROI}
          reverse={true}
          bg={"features_test_bg_2"}
        />
        <WhyComponent
          item={whyChooseContent.fastTrack}
          bg={"features_test_bg"}
        />
        <WhyComponent
          item={whyChooseContent.outpaceCompetition}
          bg={"features_test_bg_2"}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default WhyChooseEdilitics;
