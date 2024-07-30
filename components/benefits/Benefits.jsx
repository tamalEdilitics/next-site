"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Benefits = ({ benefits }) => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative md:py-0 py-16">
      <div className=" md:px-[5em] px-7 flex flex-col items-center gap-10  h-full relative  my-auto ">
        {/* <Image
          id="parallax-back"
          src={"/assets/grid.svg"}
          width={500}
          height={420}
          alt="Background Grid"
          className={clsx(
            "absolute md:w-full md:block hidden md:h-auto h-[420px] w-[500px] opacity-75 md:top-[-213px] md:left-[211px] top-[83px] left-0"
          )}
        /> */}

        <div className="w-full max-w-none items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto grid md:grid-cols-2">
          <ul className="flex md:order-1 order-2 flex-col md:gap-[1.2em] gap-[1.5rem] text-defaultIconColor z-[50] w-full md:p-8">
            {benefits?.map((item, index) => {
              return (
                <li
                  className="relative flex items-baseline gap-6  cursor-pointer shadow-md backdrop-blur-md p-4 rounded-[8px]"
                  onClick={() => {
                    if (accordionOpen === index) {
                      setAccordionOpen(-1);
                    } else {
                      setAccordionOpen(index);
                    }
                  }}
                >
                  <div className=" overflow-hidden transition-all duration-300 ease-in-out flex flex-col ">
                    <p className="md:leading-[130%] leading-[1.4]  md:text-[1.7em] text-[20px] font-bold  text-brandGreen  my-auto flex items-center">
                      {item?.title}
                      {accordionOpen === index ? (
                        <FaChevronUp className="w-4 h-4 ml-auto text-defaultIconColor" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 ml-auto text-defaultIconColor" />
                      )}
                    </p>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                        accordionOpen === index
                          ? "grid-rows-[1fr] opacity-100 pt-3"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}
                    >
                      <p className="overflow-hidden text-defaultIconColor md:text-[1.05em] text-[16px] font-normal md:leading-[160%] leading-[1.4] ">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="w-full md:p-8 flex flex-col items-center md:order-2 order-1 md:gap-10 gap-5">
            <h2 className="text-defaultIconColor md:text-[2.4em] text-[40px] leading-[1.3] font-medium w-full md:font-medium md:leading-[130%] inline-block text-center ">
              Benefits of Using Edilitics
            </h2>

            <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] leading-[1.4] text-[16px] font-normal md:leading-[160%] no-underline block  text-center ">
              {content1}
            </p>
            <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em]   leading-[1.4] text-[16px] font-normal md:leading-[160%] no-underline block text-center ">
              Start integrating your data today and experience the power of
              seamless data connectivity with Edilitics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
