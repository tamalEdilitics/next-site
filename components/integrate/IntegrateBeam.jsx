"use client";

import { DATABASETYPES } from "@/lib/static/IntegrationConfig";
import { cn } from "@/lib/utils/cn";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { forwardRef, useEffect, useRef, useState } from "react";
import { TbDatabasePlus } from "react-icons/tb";
import AnimatedBeam from "../global/Animated";

const Circle = forwardRef(({ className, children, hide }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex md:h-[5em] md:w-[5em] w-[60px]  h-[60px]  items-center bg-[#010409]  justify-center rounded-[10px]  shadow-md4 object-contain overflow-hidden p-4",
        hide && "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
});

export function IntegrateAnimatedBeamShow() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const [iconIndexes, setIconIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [fade, setFade] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconIndexes2, setIconIndexes2] = useState([0, 1]);

  const [currentIndex2, setCurrentIndex2] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIconIndexes2((prevIndexes) =>
          prevIndexes.map((index, i) => (currentIndex + i) % 2)
        );
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % 2);
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIconIndexes((prevIndexes) =>
          prevIndexes.map(
            (index, i) => (currentIndex + i) % DATABASETYPES.length
          )
        );
        setCurrentIndex((prevIndex) => (prevIndex + 1) % DATABASETYPES.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const animationConfig = {
    delay: 0,
    duration: 3,
  };

  return (
    <div
      className="flex relative justify-center items-center md:w-[90%] w-full max-w-full bg-transparent"
      ref={containerRef}
    >
      <div className="flex flex-col gap-10 justify-between items-stretch w-full h-full relative">
        <div className="flex flex-row justify-between items-center">
          <Circle ref={div1Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[0]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[5]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
        </div>

        <div className="flex flex-row justify-between items-center">
          <Circle ref={div2Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[1]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
          <div
            ref={div4Ref}
            className={cn(
              "z-10 flex md:h-[5em] md:w-[5em] w-[60px]  h-[60px]  items-center bg-[#01040996] justify-center rounded-[10px] raw_login-gradient-border shadow-md4 object-contain overflow-hidden"
            )}
          >
            {currentIndex2 === 0 ? (
              <Image
                src={"/assets/Icons/logo-icon.png"}
                className={clsx(
                  "text-black w-full h-full object-contain p-3 bg-[#01040996]",
                  fade
                    ? "fade-enter fade-enter-active"
                    : "fade-exit fade-exit-active"
                )}
                alt="logo image"
                width={60}
                height={60}
              />
            ) : (
              <TbDatabasePlus
                className={clsx(
                  " h-[40px] w-[40px]  text-[27px] text-brandGreen",
                  fade
                    ? "fade-enter fade-enter-active"
                    : "fade-exit fade-exit-active"
                )}
              />
            )}
          </div>
          <Circle ref={div6Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[2]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Circle ref={div3Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[3]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src={DATABASETYPES[iconIndexes[4]].image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
              width={60}
              height={60}
            />
          </Circle>
        </div>

        <div className="flex flex-col items-center absolute -translate-x-2/4 -translate-y-2/4 left-2/4 md:top-[280px] top-[250px]">
          {typeof window !== "undefined" && window?.innerWidth < 768 ? (
            <button
              className="relative w-full inline-flex h-[47px] md:min-h-[auto] min-h-[47px] overflow-hidden rounded-md p-[1px] focus:outline-none "
              onClick={() => {
                router.push("/integrations");
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              aria-label="View All Integrations"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2EBF91_0%,#8360c3_50%,#2EBF91_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-backgroundSecondary px-3 py-1 text-[16px]  text-defaultIconColor backdrop-blur-3xl">
                View All
              </span>
            </button>
          ) : (
            <div
              className="button-new transparent-copy inline-block px-[2em] text-[16px] md:text-[1em] py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
              onClick={() => {
                router.push("/integrations");
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              View All Integrations
            </div>
          )}
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        animationConfig={animationConfig}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        animationConfig={animationConfig}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        animationConfig={animationConfig}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        animationConfig={animationConfig}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        animationConfig={animationConfig}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        animationConfig={animationConfig}
      />
    </div>
  );
}
