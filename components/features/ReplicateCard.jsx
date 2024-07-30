"use client";

import * as animationData from "@/lib/static/Replicate2.json";
import { useMounted } from "@/lib/utils/hooks/useMounted";
import clsx from "clsx";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";

const ReplicateCard = () => {
  const isMounted = useMounted();
  const lottieRef = useRef(null);

  const router = useRouter();
  const [playMarque, setPlayMarque] = useState(
    window.innerWidth > 768 ? true : false
  );

  // useEffect(() => {
  //   if (lottieRef && isMounted) lottieRef.current?.pause();
  // }, [isMounted]);

  return (
    isMounted && (
      <div
        className="feature_card group z-[2]"
        onClick={() => {
          router.push("/replicate");
        }}
        onMouseEnter={() => {
          setPlayMarque(false);
          lottieRef.current?.play();
        }}
        onMouseLeave={() => {
          setPlayMarque(true);
          lottieRef.current?.pause();
        }}
      >
        <div className="flex items-start gap-3">
          <div className=" h-[40px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
            <RiFlowChart className=" h-[20px] w  text-[27px] text-brandGreen" />
          </div>

          <div className="flex flex-col gap-3">
            <p className=" md:text-[1.3em] md:leading-[1] pt-2 text-[19px] p font-bold leading-[1.4]  flex items-center  justify-between md:bg-transparent text-brandGreen ">
              Replicate
              <MdArrowOutward className="text-brandGreen text-[1.5rem] opacity-0 duration-200 transition-all ease-in-out group-hover:opacity-85 " />
            </p>
            <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] text-[15px] font-normal md:leading-[160%] leading-[1.4] no-underline block my-0 ">
              Ensure data accuracy with our advanced "Extract, Load and
              Transform" solution.
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "absolute bottom-[1px] -right-[15px] transition-all duration-500 ease-in-out w-[130px]",
            playMarque ? "opacity-30" : "opacity-85"
          )}
        >
          <Lottie
            animationData={animationData}
            lottieRef={lottieRef}
            autoplay={false}
          />
        </div>
      </div>
    )
  );
};

export default ReplicateCard;
