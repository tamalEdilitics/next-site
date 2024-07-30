"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const VisualizationIntuitive = () => {
  const [active, setActive] = useState(1);
  const [done, setDone] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(1);

  return (
    <div className="features_test_bg_2 flex flex-col md:min-h-screen relative md:py-0 py-8">
      <div className=" md:px-[5em] px-7 flex flex-col items-center gap-10  relative  my-auto ">
        <Image
          id="parallax-back"
          src={"/assets/grid.svg"}
          width={500}
          height={420}
          alt="Background Grid"
          className={clsx(
            "absolute md:block hidden md:w-full md:h-auto h-[420px] w-[500px] md:top-[-213px] opacity-75  md:left-[-363px] top-[83px] left-0"
          )}
        />

        <div className="w-full max-w-none items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto grid md:grid-cols-2">
          <div className="w-full md:p-8 flex flex-col items-center  md:gap-10 gap-5">
            <h2 className="text-defaultIconColor md:text-[2.3em] text-[40px] leading-[1.3] font-medium w-full md:font-bold md:leading-[130%] inline-block text-center ">
              Intuitive Data Visualization
            </h2>

            <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] leading-[1.4] text-[16px] font-normal md:leading-[160%] no-underline block  text-center ">
              Our user-friendly interface enables you to easily create and
              customize visualizations, providing insightful and actionable data
              representations.
            </p>
          </div>

          <ul className="mt-10 md:gap-[2em] text-defaultIconColor z-[50] w-full">
            <li
              className="relative flex items-baseline gap-6 pb-5 cursor-pointer"
              onClick={() => {
                setDone([]);
                setAccordionOpen(1);
                setActive(1);
              }}
            >
              <div
                className={clsx(
                  "effortlessAccordionLine",
                  done?.includes(1) && "before:bg-purple"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className={clsx(
                    "effortlessAccordionCircle",
                    (active === 1 || done?.includes(1)) && "fill-purple"
                  )}
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm">
                <p className="effortlessAccordionHeader">
                  Select Your Data Set
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 1
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Select the data set you want to visualize from our extensive
                    list of supported sources.
                  </p>
                </div>
              </div>
            </li>

            <li
              className="relative flex items-baseline gap-6 pb-5 cursor-pointer"
              onClick={() => {
                setDone([1]);
                setAccordionOpen(2);
                setActive(2);
              }}
            >
              <div
                className={clsx(
                  "effortlessAccordionLine",
                  done?.includes(2) && "before:bg-purple"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className={clsx(
                    "effortlessAccordionCircle",
                    (active === 2 || done?.includes(2)) && "fill-purple"
                  )}
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm">
                <p className="effortlessAccordionHeader">
                  Design Your Dashboard
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 2
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Use our intuitive interface to design and personalize your
                    dashboards with a variety of charts and visualization
                    options.
                  </p>
                </div>
              </div>
            </li>

            <li
              className="relative flex items-baseline gap-6 pb-5 cursor-pointer"
              onClick={() => {
                setDone([1, 2]);
                setAccordionOpen(3);
                setActive(3);
              }}
            >
              <div
                className={clsx(
                  "effortlessAccordionLine",
                  done?.includes(3) && "before:bg-purple"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className={clsx(
                    "effortlessAccordionCircle",
                    (active === 3 || done?.includes(3)) && "fill-purple"
                  )}
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm">
                <p className="effortlessAccordionHeader">
                  Preview and Validate Visualizations
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 3
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Preview your visualizations to ensure data accuracy and
                    effectiveness, making necessary adjustments for optimal
                    results.
                  </p>
                </div>
              </div>
            </li>

            <li
              className="relative flex items-baseline gap-6 pb-5 cursor-pointer"
              onClick={() => {
                setDone([1, 2, 3]);
                setAccordionOpen(4);
                setActive(4);
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className={clsx(
                    "effortlessAccordionCircle",
                    (active === 4 || done?.includes(4)) && "fill-purple"
                  )}
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm">
                <p className="effortlessAccordionHeader">
                  Publish and Share Dashboards
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 4
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Publish your dashboards and share them with stakeholders for
                    real-time insights and data-driven decision-making.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisualizationIntuitive;
