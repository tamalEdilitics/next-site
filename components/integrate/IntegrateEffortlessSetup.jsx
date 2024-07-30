"use client";

import clsx from "clsx";
import { useState } from "react";

const IntegrateEffortlessSetup = () => {
  const [active, setActive] = useState(1);
  const [done, setDone] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(1);

  return (
    <div className="features_test_bg_2 flex flex-col md:min-h-screen relative md:pt-0 pt-16 ">
      <div className=" md:px-[5em] px-7 flex flex-col items-center gap-10  relative  my-auto ">
        <div className="w-full max-w-none items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto grid md:grid-cols-2">
          <div className="h-full w-full bg-transparent   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent backdrop-blur-2xl  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

            <div className="md:w-[90%] w-full md:p-8 flex flex-col items-start md:gap-10 gap-5 z-[90]">
              <h2 className="text-brandGreen text-center md:text-[28px] text-[27px]  leading-[1.3]  w-full font-semibold inline-block  ">
                Effortless Integration Setup
              </h2>

              <p className="text-defaultIconColor text-center flex-[0_auto] w-full md:text-[16px] leading-[1.4] text-[15px] font-normal md:leading-[160%] no-underline block  ">
                No technical expertise required.
              </p>
              <p className="text-defaultIconColor text-center flex-[0_auto] w-full md:text-[16px]   leading-[1.4] text-[15px] font-normal md:leading-[160%] no-underline block ">
                Our user-friendly interface enables you to set up data
                integrations effortlessly.{" "}
                <span className="hidden md:inline">
                  Experience seamless integration with minimal effort.
                </span>
              </p>
            </div>
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
                  Select Your Data Source
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 1
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Choose from our extensive catalog of supported databases and
                    data storage solutions to define your unique source for
                    seamless integration.
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
                  Provide Authentication Credentials
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 2
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Enter the necessary authentication credentials securely to
                    ensure a safe and reliable connection to your chosen data
                    sources.
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
                  Test and Validate Connection
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 3
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Ensure everything is connected correctly with our built-in
                    testing tool to verify if this is the data you intend to
                    integrate.
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
                  Save Configuration and Sync
                </p>

                <div
                  className={`grid overflow-hidden mt-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen === 4
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="effortlessAccordionP">
                    Start synchronizing your data in real-time, ensuring that
                    all your data sources are up-to-date and accurately
                    reflected in your system.
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

export default IntegrateEffortlessSetup;
