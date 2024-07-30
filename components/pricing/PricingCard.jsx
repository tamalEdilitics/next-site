import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const PricingCard = ({ item, index, userType, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        key={index}
        className={clsx(
          "flex  min-h-[400px] md:w-[366px] w-[80%] backdrop-blur-md flex-col content-stretch items-stretch justify-between gap-3 rounded-2xl feature_glassmorphism p-5 text-defaultIconColor ease-in-out transition-all duration-300 hover:shadow-brandGreen hover:border-[#2ebf917d] hover:shadow-md shadow-md md:shadow-none hover:transition-all hover:duration-200 hover:ease-in-out"
        )}
      >
        <div className="flex items-center space-x-2">
          <div className=" flex w-full items-center justify-center gap-2">
            <h1 className="md:text-base text-[25px] leading-[1.4] font-medium">
              {item?.name}
            </h1>{" "}
          </div>
        </div>

        <div className="flex  flex-col items-center gap-7">
          <div className="flex flex-col gap-3 items-center text-center ">
            <p
              className={clsx(
                "whitespace-nowrap text-center md:text-[3.6em] text-[40px] leading-[100%] font-bold text-defaultIconColor"
              )}
            >
              $
              {userType === "solo"
                ? Math.round(item?.soloPrice)
                : Math.round(item?.price)}
            </p>
            {item?.price === 0 ? (
              <div className="items-center justify-center text-center text-defaultIconColor2 ">
                <p className="md:text-xs text-[16px] leading-[1.3] md:leading-[1.4]">
                  per month
                </p>
                <p className="md:text-xs text-[16px] leading-[1.3] md:leading-[1.4]">
                  * limited access
                </p>
              </div>
            ) : (
              <div className="items-center justify-center text-center text-defaultIconColor2 ">
                <p className="md:text-xs text-[16px] leading-[1.3] md:leading-[1.4]">
                  {userType === "solo" ? "per month" : "per user per month"}
                </p>
                <p className="md:text-xs text-[16px] leading-[1.3] md:leading-[1.4]">
                  * billed annually
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="my-2 text-center md:text-sm text-[16px] leading-[1.4] text-defaultIconColor min-h-[2rem]">
          {userType === "solo" ? item?.useCaseSolo : item?.useCase}
        </p>

        <hr className={clsx("opacity-50")} />

        <div className=" mt-2 flex  flex-col items-start space-y-2">
          {item?.modules?.map((module, index) => {
            return (
              <p
                className={clsx(
                  "flex items-center gap-3 md:text-[1em] text-[16px] leading-[1.4] font-[400]"
                )}
                key={index}
              >
                {item?.hiddenModules?.includes(module) ? (
                  <Image
                    src={"/assets/Icons/cross.svg"}
                    width={15}
                    height={15}
                    alt="Cross Logo"
                  />
                ) : (
                  <Image
                    src={"/assets/Icons/tick.svg"}
                    width={15}
                    height={15}
                    alt="Tickmark"
                  />
                )}
                {module}
              </p>
            );
          })}
          <p
            className="flex items-center gap-3 text-[16px] leading-[1.4] md:text-[1em] font-[400]"
            key={index}
          >
            {item?.name === "Data Visualization Studio" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rounded-full text-[1em] opacity-90"
              >
                <path
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="#F75E5F"
                ></path>
                <path
                  d="M8.00947 9.73472L5.98477 11.7469C5.76323 11.9684 5.49098 12.0813 5.16802 12.0854C4.84504 12.0896 4.5686 11.9768 4.33869 11.7469C4.11715 11.5253 4.00638 11.251 4.00638 10.9238C4.00638 10.5967 4.11715 10.3223 4.33869 10.1008L6.35083 8.07609L4.33869 6.07361C4.11715 5.85207 4.00429 5.57981 4.00011 5.25683C3.99592 4.93387 4.10878 4.65744 4.33869 4.42753C4.56023 4.20599 4.83458 4.09521 5.16173 4.09521C5.48888 4.09521 5.76323 4.20599 5.98477 4.42753L8.00947 6.43967L10.0119 4.42753C10.2335 4.20599 10.5078 4.09521 10.835 4.09521C11.1621 4.09521 11.4365 4.20599 11.658 4.42753C11.886 4.6555 12 4.93145 12 5.25539C12 5.57933 11.886 5.85207 11.658 6.07361L9.64588 8.07609L11.658 10.1008C11.8796 10.3223 11.9903 10.5967 11.9903 10.9238C11.9903 11.251 11.8796 11.5253 11.658 11.7469C11.4301 11.9748 11.1541 12.0888 10.8302 12.0888C10.5062 12.0888 10.2335 11.9748 10.0119 11.7469L8.00947 9.73472Z"
                  fill="white"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full text-sm opacity-90"
              >
                <circle
                  cx="8"
                  cy="7.99988"
                  r="7"
                  stroke="#0AC470"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6.40073 10.2399L4.16073 7.99988L3.41406 8.74655L6.40073 11.7332L12.8007 5.33321L12.0541 4.58655L6.40073 10.2399Z"
                  fill="#0AC470"
                ></path>
              </svg>
            )}
            Compute -{" "}
            {item?.price === 0
              ? "30 mins"
              : type === "core"
              ? userType === "solo"
                ? "60 mins"
                : "60 mins / user"
              : userType === "solo"
              ? "120 mins"
              : "120 mins / user"}{" "}
            / mo
          </p>

          <p
            className="flex items-center gap-3 text-[16px] leading-[1.4] md:text-[1em] font-[400]"
            key={index}
          >
            {item?.price === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rounded-full text-[1em] opacity-90"
              >
                <path
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="#F75E5F"
                ></path>
                <path
                  d="M8.00947 9.73472L5.98477 11.7469C5.76323 11.9684 5.49098 12.0813 5.16802 12.0854C4.84504 12.0896 4.5686 11.9768 4.33869 11.7469C4.11715 11.5253 4.00638 11.251 4.00638 10.9238C4.00638 10.5967 4.11715 10.3223 4.33869 10.1008L6.35083 8.07609L4.33869 6.07361C4.11715 5.85207 4.00429 5.57981 4.00011 5.25683C3.99592 4.93387 4.10878 4.65744 4.33869 4.42753C4.56023 4.20599 4.83458 4.09521 5.16173 4.09521C5.48888 4.09521 5.76323 4.20599 5.98477 4.42753L8.00947 6.43967L10.0119 4.42753C10.2335 4.20599 10.5078 4.09521 10.835 4.09521C11.1621 4.09521 11.4365 4.20599 11.658 4.42753C11.886 4.6555 12 4.93145 12 5.25539C12 5.57933 11.886 5.85207 11.658 6.07361L9.64588 8.07609L11.658 10.1008C11.8796 10.3223 11.9903 10.5967 11.9903 10.9238C11.9903 11.251 11.8796 11.5253 11.658 11.7469C11.4301 11.9748 11.1541 12.0888 10.8302 12.0888C10.5062 12.0888 10.2335 11.9748 10.0119 11.7469L8.00947 9.73472Z"
                  fill="white"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full text-sm opacity-90"
              >
                <circle
                  cx="8"
                  cy="7.99988"
                  r="7"
                  stroke="#0AC470"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6.40073 10.2399L4.16073 7.99988L3.41406 8.74655L6.40073 11.7332L12.8007 5.33321L12.0541 4.58655L6.40073 10.2399Z"
                  fill="#0AC470"
                ></path>
              </svg>
            )}
            Audit Logs{" "}
            {item?.price !== 0 && (
              <>- {type === "core" ? "7 days" : "30 days"}</>
            )}
          </p>

          {userType !== "solo" && (
            <p
              className="flex items-center gap-3 text-[16px] leading-[1.4] md:text-[1em] font-[400]"
              key={index}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full text-sm opacity-90"
              >
                <circle
                  cx="8"
                  cy="7.99988"
                  r="7"
                  stroke="#0AC470"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6.40073 10.2399L4.16073 7.99988L3.41406 8.74655L6.40073 11.7332L12.8007 5.33321L12.0541 4.58655L6.40073 10.2399Z"
                  fill="#0AC470"
                ></path>
              </svg>
              Users{" "}
              {item?.price === 0
                ? "- Upto 2"
                : type === "core"
                ? "- Upto 10"
                : "- Unlimited"}
            </p>
          )}
        </div>

        <div
          onClick={() => {
            window.location.href = `${
              import.meta.env.VITE_REDIRECT_URI
            }/billing?plan=${item?.name}`;
          }}
          className={clsx(
            "button-new text-center transparent-copy mt-4 inline-block  text-[16px] md:text-[0.99em] py-[0.75em] cursor-pointer   text-[#fff] rounded-md ease-in-out duration-500 transition-all",
            isHovered
              ? "login-gradient border-[1.3px] border-transparent"
              : "raw_login-gradient-border"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Start Free
        </div>
      </div>
    </>
  );
};

export default PricingCard;
