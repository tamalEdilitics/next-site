"use client";

import { DATABASETYPES } from "@/lib/static/IntegrationConfig";
import { getDefaultColor } from "@/lib/utils/getIntegrationColor";
import { useMounted } from "@/lib/utils/hooks/useMounted";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import { TbDatabasePlus } from "react-icons/tb";

const IntegrateCard = () => {
  const isMounted = useMounted();

  const router = useRouter();
  const [playMarque, setPlayMarque] = useState(
    window.innerWidth > 768 ? false : true
  );

  const extractColor = (bgClass) => {
    if (!bgClass) return "";
    const match = bgClass.match(/\[(#.*?)\]/);
    return match ? match[1] : "";
  };

  return (
    isMounted && (
      <div
        className="feature_card group z-20 justify-between"
        onClick={() => {
          router.push("/integrate");
        }}
        onMouseEnter={() => {
          setPlayMarque(true);
        }}
        onMouseLeave={() => {
          setPlayMarque(false);
        }}
      >
        <div className="flex items-start gap-3">
          <div className=" h-[40px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
            <TbDatabasePlus className=" h-[20px] w  text-[27px] text-brandGreen" />
          </div>

          <div className="flex flex-col gap-3">
            <p className=" md:text-[1.3em] md:leading-[1] pt-2 text-[19px] p font-bold leading-[1.4]  flex items-center  justify-between md:bg-transparent text-brandGreen ">
              Integrate
              <MdArrowOutward className="text-brandGreen text-[1.5rem] opacity-0 duration-200 transition-all ease-in-out group-hover:opacity-85 " />
            </p>
            <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] text-[16px] font-normal md:leading-[160%] leading-[1.4] no-underline block my-0 ">
              Seamlessly connect to a wide range of data sources with our
              user-friendly interface.
            </p>
          </div>
        </div>

        <Marquee
          autoFill
          className="max-w-full w-auto"
          speed={40}
          direction="left"
          play={playMarque}
        >
          {DATABASETYPES?.map((item, index) => {
            const defaultbg = getDefaultColor(item?.type, item?.db_subtype);
            const bgColor = extractColor(defaultbg);

            return (
              <div
                className={clsx(
                  "flex aspect-square h-[45px] max-h-[45px] w-[45px] max-w-[45px] items-center  rounded-lg p-2 ml-5 md:opacity-50 md:group-hover:opacity-100 group-hover:duration-200 group-hover:transition-all group-hover:ease-in-out"
                )}
                style={{ backgroundColor: playMarque ? bgColor : "#3939395a" }}
                key={index}
              >
                <Image
                  className="h-full w-full overflow-hidden object-contain "
                  src={item?.image}
                  alt={item?.title}
                  width={45}
                  height={45}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    )
  );
};

export default IntegrateCard;
