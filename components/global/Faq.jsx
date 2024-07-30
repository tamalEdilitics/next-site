"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = ({ faqData, gradient }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={clsx(
        "mx-auto flex flex-col items-center gap-2  min-h-screen md:py-0 py-8",
        gradient
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center gap-2 my-auto md:px-8 px-7 max-w-5x"
        )}
      >
        <div className="flex flex-col items-center text-left md:my-[3rem] mb-6 md:mb-0">
          <h2 className=" text-brandGreen text-center md:text-[28px] leading-[1.4] text-[28px]  font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <ul className="md:w-[50%] mt-0 md:mt-6">
          {faqData.map((item, index) => {
            const isOpen = expandedIndex === index;
            const contentRef = useRef(null);

            return (
              <li
                key={index}
                className={`${
                  index !== 0 ? "border-t border-gray-700" : ""
                } border-base-content/10`}
              >
                <button
                  className="relative flex gap-2 items-center w-full py-[40px] text-left  "
                  aria-expanded={isOpen}
                  aria-label="Toggle FAQ"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex-1 text-defaultIconColor md:text-[17px] text-[17px] md:font-semibold font-medium md:leading-[130%] leading-[1.4]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <FaChevronUp className="w-4 h-4 ml-auto text-defaultIconColor" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 ml-auto text-defaultIconColor" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRef.current.scrollHeight}px`
                      : "0",
                  }}
                  ref={contentRef}
                >
                  <div className="pb-5 leading-relaxed text-defaultIconColor opacity-85">
                    <div className="space-y-2  md:text-[1.1em] text-[16px] leading-[1.4] md:leading-[180%]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
