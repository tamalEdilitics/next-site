"use client";

import { DATABASETYPES } from "@/lib/static/IntegrationConfig";
import Circle from "@/lib/utils/Circle";
import { cn } from "@/lib/utils/cn";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TbTransform } from "react-icons/tb";
import AnimatedBeam from "../global/Animated";

const TransformationBeam = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const sourceDatabases = DATABASETYPES.filter((e) => {
    return (
      (e.pipeline.cdc.source ||
        e.pipeline.full.source ||
        e.pipeline.incremental.source) &&
      !e.filter.includes("Data Warehouses")
    );
  });

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
    <div className="bg-transparent  flex flex-col items-center">
      <div
        className="flex overflow-hidden relative justify-center items-center  w-full mx-auto  max-w-full my-auto "
        ref={containerRef}
      >
        <div className="flex flex-col gap-10 justify-between items-stretch w-full h-full ">
          <div className="flex flex-row justify-between items-center">
            <Circle ref={div1Ref} hide={false}>
              <Image
                src={DATABASETYPES[iconIndexes[0]]?.image}
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
            <Circle ref={div5Ref} hide={true}>
              <Image
                src={dataWarehouses[iconIndexes2[0]]?.image}
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
            <Circle ref={div2Ref} hide={false}>
              <Image
                src={sourceDatabases[iconIndexes[0]]?.image}
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
                <TbTransform
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
              <Image
                src={dataWarehouses[iconIndexes2[1]]?.image}
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
            <Circle ref={div3Ref} hide={false}>
              <Image
                src={DATABASETYPES[iconIndexes[3]]?.image}
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
            <Circle ref={div7Ref} hide={true}>
              <Image
                src={dataWarehouses[iconIndexes2[2]]?.image}
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
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={10}
          endYOffset={-10}
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
          curvature={-10}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          hide={true}
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
          curvature={75}
          endYOffset={10}
          hide={true}
        />
      </div>
    </div>
  );
};

export default TransformationBeam;
