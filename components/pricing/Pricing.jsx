"use client";

import { bundles, microservices } from "@/lib/static/PricingConfig";
import { Radio } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import BusinessAndBundle from "./BusinessAndBundle";
import BusinessAndMicro from "./BusinessAndMicro";
import IndividualAndBundle from "./IndividualAndBundle";
import IndividualAndMicro from "./IndividualAndMicro";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [type, setType] = useState("premium");
  const [userType, setUserType] = useState("team");
  const [showComparePlans, setShowComparePlans] = useState(false);

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const scrollTo = params.get("scrollto");

  //   if (scrollTo) {
  //     setShowComparePlans(true);
  //     const element = document.getElementById(scrollTo);

  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

  return (
    <>
      <div
        className="features_test_bg min-h-screen py-8 flex flex-col justify-evenly relative md:mt-[5rem]"
        id="blurrable"
      >
        <div className="flex justify-center gap-5 items-center relative  max-w-[90vw] mx-auto w-full">
          <div
            className={clsx(
              "flex w-[12rem] items-center justify-between  rounded-full bg-backgroundSecondary shadow-md  p-[6px] "
            )}
          >
            <div
              className={clsx(
                "w-[60%] cursor-pointer rounded-full p-[6px] text-center flex flex-col items-center  text-[16px]  md:text-[0.9em] leading-[1.4] transition-all duration-500",
                type === "premium" || type !== "core"
                  ? "bg-brandGreen  text-[#000]"
                  : "text-defaultIconColor"
              )}
              onClick={() => {
                setType("premium");
              }}
            >
              Premium
            </div>
            <div
              className={clsx(
                "w-[40%] cursor-pointer rounded-full p-[6px] text-center  text-[16px]  md:text-[0.9em] leading-[1.4]  transition-all duration-500",
                type === "core"
                  ? "bg-brandGreen  text-[#000]"
                  : "text-defaultIconColor"
              )}
              onClick={() => {
                setType("core");
              }}
            >
              Core
            </div>
          </div>
        </div>

        <div className="flex md:justify-end md:gap-5 gap-2 items-center justify-center relative  max-w-[90vw] mx-auto md:my-0 my-5 w-full ">
          <Radio
            checked={userType === "team"}
            onClick={() => {
              setUserType("team");
            }}
          >
            <span className="text-[17px] text-defaultIconColor md:text-[1.13em] leading-[1.4]">
              Enterprise
            </span>
          </Radio>

          <Radio
            className=""
            checked={userType === "solo"}
            onClick={() => {
              setUserType("solo");
            }}
          >
            <span className="text-[17px] md:text-[1.13em] leading-[1.4] text-defaultIconColor ">
              Solo
            </span>
          </Radio>
        </div>

        <div className="flex flex-col items-center md:justify-evenly w-full  relative z-[500]  md:py-3 ">
          <div className=" w-full  flex-col content-center md:max-w-[90vw]  mx-auto">
            <div className="my-auto flex md:flex-row flex-col h-full md:items-end items-center gap-[2rem] md:gap-[1rem] ">
              {type === "premium"
                ? Object.entries(bundles).map(([key, item], index) => {
                    return (
                      <PricingCard
                        index={index}
                        item={item}
                        key={key}
                        userType={userType}
                        type={type}
                      />
                    );
                  })
                : Object.entries(microservices).map(([key, item], index) => {
                    return (
                      <PricingCard
                        index={index}
                        item={item}
                        key={key}
                        userType={userType}
                        type={type}
                      />
                    );
                  })}
            </div>
          </div>
        </div>

        <div
          className="md:w-[20%] flex justify-center items-center mx-auto my-8"
          id="compareplan"
        >
          {typeof window !== "undefined" && window?.innerWidth > 768 && (
            <div
              onClick={() => {
                setShowComparePlans(!showComparePlans);
              }}
              className="button-new transparent-copy flex justify-center items-center px-[2em] text-[16px] md:text-[1em] py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
            >
              {!showComparePlans ? (
                <AiOutlinePlus className="text-defaultIconColor mr-2 text-[23px]" />
              ) : (
                <AiOutlineMinus className="text-defaultIconColor mr-2 text-[23px]" />
              )}{" "}
              Compare Plan Features
            </div>
          )}
        </div>
      </div>

      <div className="md:px-[3rem] features_test_bg_2 hidden md:block">
        <div
          className=" flex flex-col justify-evenly relative  mx-auto "
          id="blurrable"
        >
          {showComparePlans &&
            (type === "core" && userType === "solo" ? (
              <IndividualAndMicro />
            ) : type === "core" && userType === "team" ? (
              <BusinessAndMicro />
            ) : type === "premium" && userType === "solo" ? (
              <IndividualAndBundle />
            ) : (
              <BusinessAndBundle />
            ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
