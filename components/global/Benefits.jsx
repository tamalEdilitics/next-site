"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Benefits = ({ benefits, content1, content2 }) => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative md:py-0 py-16">
      <div className=" md:px-[5em] px-7 flex flex-col items-center gap-10  h-full relative  my-auto ">
        <div className="w-full max-w-none items-center gap-x-[0rem] gap-y-[8.75em] justify-center mx-auto grid md:grid-cols-2">
          <ul className="flex md:order-1 order-2 flex-col md:gap-[1.2em] gap-[1.5rem] text-defaultIconColor z-[50] w-full md:p-8">
            {benefits?.map((item, index) => {
              return (
                <li
                  className="relative flex items-baseline gap-6  cursor-pointer feature_glassmorphism backdrop-blur-md p-4 rounded-[12px]"
                  onClick={() => {
                    if (accordionOpen === index) {
                      setAccordionOpen(-1);
                    } else {
                      setAccordionOpen(index);
                    }
                  }}
                >
                  <div className=" overflow-hidden transition-all duration-300 ease-in-out flex flex-col ">
                    <p className="md:leading-[130%] leading-[1.4]  md:text-[20px] text-[20px] font-semibold    my-auto flex items-center">
                      {item?.title}
                      {accordionOpen === index ? (
                        <FaChevronUp className="w-4 h-4 ml-auto text-brandGreen" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 ml-auto text-brandGreen" />
                      )}
                    </p>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                        accordionOpen === index
                          ? "grid-rows-[1fr] opacity-100 pt-3"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}
                    >
                      <p className="overflow-hidden text-defaultIconColor md:text-[16px] text-[16px] font-normal md:leading-[160%] leading-[1.4] opacity-90">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="h-full w-full bg-transparent  md:order-2 order-1  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent backdrop-blur-2xl  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

            <div className="md:w-[90%] w-full md:p-8 flex flex-col items-start md:gap-10 gap-5 z-[90]">
              <h2 className="text-brandGreen text-center md:text-[28px] text-[27px]  leading-[1.3]  w-full font-semibold inline-block  ">
                Benefits of Using Edilitics
              </h2>

              <p className="text-defaultIconColor text-center flex-[0_auto] w-full md:text-[16px] leading-[1.4] text-[15px] font-normal md:leading-[160%] no-underline block  ">
                {content1}
              </p>
              <p className="text-defaultIconColor text-center flex-[0_auto] w-full md:text-[16px]   leading-[1.4] text-[15px] font-normal md:leading-[160%] no-underline block ">
                {content2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
