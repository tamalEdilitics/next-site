"use client";

import { DATABASETYPES } from "@/lib/static/IntegrationConfig";
import Circle from "@/lib/utils/Circle";
import { cn } from "@/lib/utils/cn";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import AnimatedBeam from "../global/Animated";

export function VisualizationBeam() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const sourceDatabases = DATABASETYPES.filter(
    (item) =>
      item.filter.includes("Data Warehouses") ||
      item.filter.includes("Databases")
  );

  const dataWarehouses = DATABASETYPES.filter((item) =>
    item.filter.includes("Data Warehouses")
  );

  const [iconIndexes, setIconIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [iconIndexes2, setIconIndexes2] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [iconIndexes3, setIconIndexes3] = useState([0, 1]);

  const [fade, setFade] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIconIndexes3((prevIndexes) =>
          prevIndexes.map((index, i) => (currentIndex + i) % 2)
        );
        setCurrentIndex3((prevIndex) => (prevIndex + 1) % 2);
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIconIndexes((prevIndexes) =>
          prevIndexes.map(
            (index, i) => (currentIndex + i) % sourceDatabases.length
          )
        );
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % sourceDatabases.length
        );
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIconIndexes2((prevIndexes) =>
          prevIndexes.map(
            (index, i) => (currentIndex2 + i) % dataWarehouses.length
          )
        );
        setCurrentIndex2(
          (prevIndex) => (prevIndex + 1) % dataWarehouses.length
        );
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="flex overflow-hidden relative justify-center items-center  w-full max-w-full bg-transparent"
      ref={containerRef}
    >
      <div className="flex flex-col gap-10 justify-between items-stretch w-full h-full ">
        <div className="flex flex-row justify-between items-center">
          <Circle ref={div1Ref} hide={true}>
            <Image
              src={DATABASETYPES[iconIndexes[0]]?.image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
            />
          </Circle>
          <Circle ref={div5Ref} hide={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              fill="#2ebf91"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
          </Circle>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Circle ref={div2Ref} hide={false}>
            <Image
              src={sourceDatabases[iconIndexes[0]]?.image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
            />
          </Circle>
          <div
            ref={div4Ref}
            className={cn(
              "z-10 flex md:h-[5em] md:w-[5em] w-[65px]  h-[60px]  items-center bg-[#01040996] justify-center rounded-[10px] raw_login-gradient-border shadow-md4 object-contain overflow-hidden"
            )}
          >
            {currentIndex3 === 0 ? (
              <Image
                src={"/assets/Icons/logo-icon.png"}
                className={clsx(
                  "text-black w-full h-full object-contain p-3",
                  fade
                    ? "fade-enter fade-enter-active"
                    : "fade-exit fade-exit-active"
                )}
                width={60}
                height={60}
                alt="logo image"
              />
            ) : (
              <MdOutlineDashboard
                className={clsx(
                  " h-[40px] w-[40px]  text-[27px] text-brandGreen",
                  fade
                    ? "fade-enter fade-enter-active"
                    : "fade-exit fade-exit-active"
                )}
              />
            )}
          </div>
          <Circle ref={div6Ref} hide={false}>
            <svg
              stroke="currentColor"
              width="40px"
              height="40px"
              fill="#2ebf91"
              stroke-width="0"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
            </svg>
          </Circle>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Circle ref={div3Ref} hide={true}>
            <Image
              src={DATABASETYPES[iconIndexes[3]]?.image}
              alt=""
              className={
                fade
                  ? "fade-enter fade-enter-active"
                  : "fade-exit fade-exit-active"
              }
            />
          </Circle>
          <Circle ref={div7Ref} hide={false}>
            <svg
              stroke="#2ebf91"
              stroke-width="1"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="43px"
              height="43px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
              <path d="M7 20l10 0"></path>
              <path d="M9 16l0 4"></path>
              <path d="M15 16l0 4"></path>
              <path d="M8 12l3 -3l2 2l3 -3"></path>
            </svg>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        hide={true}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        hide={true}
        reverse={true}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={10}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={-10}
        endYOffset={10}
      />
    </div>
  );
}
