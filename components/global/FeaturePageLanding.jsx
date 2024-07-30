"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LandingCredits from "../landing/LandingCredits";
import TypewriterEffectSmooth from "./TypeWriter";

const FeaturePageLanding = ({
  words,
  header1,
  header2,
  paragraph1,
  paragraph2,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="md:max-h-screen md:h-[100vh] md:min-h-[auto] min-h-[100vh] overflow-hidden relative flex flex-col md:py-3  px-7 md:px-6 py-12">
      <div className="h-full w-full dark:bg-[#010409] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex mx-auto  my-auto items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#010409] backdrop-blur-2xl bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col my-auto  items-center justify-center md:max-w-[1230px] w-full  relative blurrable">
          <div className="flex flex-col items-center ">
            <div className="hidden md:block">
              <TypewriterEffectSmooth words={words} />
            </div>

            <div className="flex flex-col items-center md:hidden text-defaultIconColor w-full">
              <h1 className="leading-[1.3] text-center text-[35px] font-medium">
                {header1}
              </h1>
            </div>

            <h2 className=" text-defaultIconColor opacity-70 text-[25px] md:text-[30px] md:leading-[1] leading-[1.3]  font-semibold md:mt-2 mt-6 text-center w-full">
              {header2}
            </h2>

            <p className="text-defaultIconColor md:break-words md:w-[50%] w-full text-center text-[16px] md:text-[1.13em] font-normal leading-[160%] no-underline block md:my-6 md:mt-14 my-6 ">
              {paragraph1}
            </p>

            <p className="text-defaultIconColor md:break-words md:w-[50%] w-full text-center text-[16px] md:text-[1.13em] font-normal leading-[160%] no-underline block md:mb-12 md:my-0 mb-6 ">
              {paragraph2}
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-x-[1rem]  justify-start items-center gap-y-[3em] ">
            <Link
              href={`/auth`}
              className={clsx(
                "button-new transparent-copy border-[1.5px] text-[16px] md:text-[1em] border-none md:inline-block px-[2em] py-[0.75em] login-gradient text-[#fff] rounded-md shadow-md md:h-auto h-[47px] md:min-h-[auto] min-h-[47px] flex items-center justify-center",
                pathname === "/documentation" && "md:hidden hidden"
              )}
              aria-label="Sign Up For Free"
            >
              Sign Up For Free
            </Link>

            <Link
              href={
                pathname === "/documentation"
                  ? process.env.NEXT_PUBLIC_DOCS_URL
                  : "/schedule-a-demo"
              }
              className="button-new transparent-copy hidden md:inline-block px-[2em] text-[16px] md:text-[1em] py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
            >
              {pathname !== "/documentation"
                ? "Schedule a Demo"
                : "Read Our Documentation"}
            </Link>
          </div>

          {pathname === "/pricing" && (
            <div className="md:block hidden">
              <LandingCredits />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturePageLanding;
