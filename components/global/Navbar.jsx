"use client";

import { cn } from "@/lib/utils/cn";
import Logo from "@/public/assets/Icons/logo.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { TbDatabasePlus, TbTransform } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
        document.getElementById("blurrable").style.filter = "blur(0px)";
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <div className="relative  w-full">
      <div
        className={cn(
          "flex w-full flex-col fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] top-0  z-[9999999] md:pr-2 md:pl-8 md:h-20 h-[70px] items-center justify-center space-x-4  bg-backgroundPrimary border-b-r-l md:shadow-md"
        )}
      >
        <nav
          className={clsx(
            " border-gray-200 text-defaultIconColor z-40  md:max-w-[90vw] mx-auto w-full  relative"
          )}
        >
          <div
            className={clsx(
              "md:max-w-[90vw]  bg-backgroundPrimary h-full  flex flex-wrap md:flex-nowrap items-center justify-between md:mx-auto md:px-2 relative md:pt-0 md:pb-0 pt-5 pb-3 z-[999999] mx:px-0 px-3 md:shadow-none transition-all ease-in-out duration-500",
              !navbarOpened ? "shadow-md rounded-b-[20px]" : ""
            )}
          >
            <Link
              href={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse md:w-[197px] w-[180px]"
            >
              <Image
                src={Logo}
                alt="Edilitics Logo"
                className="md:h-[2.5rem] h-[2.3rem] "
              />
            </Link>

            <div
              className={clsx(
                "items-center justify-between  w-full md:flex md:w-auto md:order-1 md:relative hidden"
              )}
              id="navbar-cta"
            >
              <ul className="flex flex-col text-[17px] font-medium p-4 md:p-0  border border-gray-100 border-t-0 rounded-t-none rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                <li
                  className=" relative"
                  ref={dropdownRef}
                  onClick={() => {
                    setActive(!active);

                    document.getElementById("blurrable").style.filter = active
                      ? "blur(0px)"
                      : "blur(10px)";
                  }}
                >
                  <p
                    className={clsx(
                      " flex items-center gap-1 cursor-pointer py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent   duration-200 transition-all ease-in-out  text-[15.5px]",
                      active ||
                        pathname === "/integrate" ||
                        pathname === "/replicate" ||
                        pathname === "/transform" ||
                        pathname === "/visualize"
                        ? "text-brandGreen hover:text-brandGreen "
                        : "text-defaultIconColor hover:text-purple"
                    )}
                  >
                    Features{" "}
                    {active ? (
                      <IoIosArrowUp className="md:mt-[2px]" />
                    ) : (
                      <IoIosArrowDown className="md:mt-[2px]" />
                    )}
                  </p>

                  <div
                    className={clsx(
                      "features_test_bg_2   shadow-md4 p-3 grid min-w-[600px] z-[99] rounded-lg  grid-cols-2 gap-3  absolute top-[45px] -left-1 transition-all duration-200 ease-in-out",
                      active ? "opacity-1" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex flex-col gap-2 hover:bg-[#1a1a1a]  p-[10px] rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                        pathname === "/integrate" && "bg-[#1a1a1a]"
                      )}
                      onClick={() => {
                        router.push("/integrate");
                        typeof window !== "undefined" &&
                          window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="flex items-start justify-start gap-3">
                        <div className=" h-[35px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
                          <TbDatabasePlus className=" h-[18px] w  text-[27px] text-brandGreen" />
                        </div>

                        <div className="flex flex-col mt-2 gap-2 ">
                          <p className="font-semibold text-brandGreen text-[17px]">
                            Integrate
                          </p>
                          <p className=" text-defaultIconColor text-[15px] leading-[1.3]">
                            Seamlessly connect to a wide range of data sources
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={clsx(
                        "flex flex-col gap-2   hover:bg-[#1a1a1a] p-[10px]  rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                        pathname === "/replicate" && "bg-[#1a1a1a]"
                      )}
                      onClick={() => {
                        router.push("/replicate");
                        typeof window !== "undefined" &&
                          window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="flex items-start justify-start gap-3">
                        <div className=" h-[35px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
                          <RiFlowChart className=" h-[18px] w  text-[27px] text-brandGreen" />
                        </div>

                        <div className="flex flex-col mt-2 gap-2 ">
                          <p className="font-semibold text-brandGreen text-[17px]">
                            Replicate
                          </p>
                          <p className=" text-defaultIconColor text-[15px] leading-[1.3]">
                            Ensure data accuracy with our advanced ELT solution
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={clsx(
                        " flex flex-col gap-2 hover:bg-[#1a1a1a] p-[10px]  rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                        pathname === "/transform" && "bg-[#1a1a1a]"
                      )}
                      onClick={() => {
                        router.push("/transform");
                        typeof window !== "undefined" &&
                          window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="flex items-start justify-start gap-3">
                        <div className=" h-[35px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
                          <TbTransform className=" h-[18px] w  text-[27px] text-brandGreen" />
                        </div>

                        <div className="flex flex-col mt-2 gap-2 ">
                          <p className="font-semibold text-brandGreen text-[17px]">
                            Transform
                          </p>
                          <p className=" text-defaultIconColor text-[15px] leading-[1.3]">
                            Simplify data transformation with our no-code tools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        " flex flex-col gap-2 hover:bg-[#1a1a1a] p-[10px]  rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                        pathname === "/visualize" && "bg-[#1a1a1a]"
                      )}
                      onClick={() => {
                        router.push("/visualize");
                        typeof window !== "undefined" &&
                          window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="flex items-start justify-start gap-3">
                        <div className=" h-[35px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
                          <MdOutlineDashboard className=" h-[18px] w  text-[27px] text-brandGreen" />
                        </div>

                        <div className="flex flex-col mt-2 gap-2 ">
                          <p className="font-semibold text-brandGreen text-[17px]">
                            Visualize
                          </p>
                          <p className=" text-defaultIconColor text-[15px] leading-[1.3]">
                            Transform complex data into actionable insights
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href={"/integrations"}
                    className={clsx(
                      "block py-2 px-3 md:p-0  text-[15.5px] rounded hover:bg-gray-100 md:hover:bg-transparent   duration-200 transition-all ease-in-out  ",
                      pathname === "/integrations"
                        ? "text-brandGreen hover:text-brandGreen"
                        : "text-defaultIconColor hover:text-purple"
                    )}
                  >
                    Integrations
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/pricing"}
                    className={clsx(
                      "block py-2 px-3 md:p-0  text-[15.5px] rounded   duration-200 transition-all ease-in-out  ",
                      pathname === "/pricing"
                        ? "text-brandGreen hover:text-brandGreen"
                        : "text-defaultIconColor hover:text-purple"
                    )}
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/documentation"}
                    className={clsx(
                      "block py-2 px-3 md:p-0  text-[15.5px] rounded    duration-200 transition-all ease-in-out  ",
                      pathname === "/documentation"
                        ? "text-brandGreen hover:text-brandGreen"
                        : "text-defaultIconColor hover:text-purple"
                    )}
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="gap-x-[1em] gap-y-[1em] justify-start items-center flex md:order-2">
              <a
                href={`/`}
                className="button-new transparent-copy border-[1.6px] text-[0.88em] border-none md:inline-block hidden px-[1.5em] py-[0.5em]  login-gradient text-[#fff] rounded-md shadow-md"
                aria-label="Sign Up"
              >
                Sign Up
              </a>

              <a
                href={`/`}
                className="button-new transparent-copy md:inline-block hidden px-[1.5em] py-[0.5em] text-[0.88em]  raw_login-gradient-border text-[#fff] rounded-md"
                aria-label="Login"
              >
                Login
              </a>

              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                role="button"
                aria-label="Toggle Navigation"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-defaultIconColor rounded-lg md:hidden hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-cta"
                aria-expanded="false"
                onClick={() => {
                  setNavbarOpened(!navbarOpened);
                }}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <div className="md:hidden block">
            <FloatingNavbarContent
              active={active}
              navbarOpened={navbarOpened}
              setActive={setActive}
            />
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
