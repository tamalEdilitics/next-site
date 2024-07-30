import { getDefaultColor } from "@/lib/utils/getIntegrationColor";
import clsx from "clsx";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

const IntegrationCard = ({ title, image, desc, url, db_type, db_subtype }) => {
  const defauultBg = getDefaultColor(db_type, db_subtype);

  return (
    <div
      className={clsx(
        "min-h-32 min-w-32 group glassmorphism h-full relative mx-auto flex    items-center overflow-hidden rounded-lg bg-transparent  p-4 shadow-lg transition-all duration-300 ease-in-out   hover:transition-all  hover:duration-300 group-hover:ease-in-out sm:flex-col hover:shadow-brandGreen"
      )}
    >
      <div className="flex w-full h-full flex-col items-start transition-all duration-300  ">
        <div className="flex items-center gap-3">
          <div
            className={clsx(
              "flex aspect-square h-[45px] max-h-[45px] w-[45px] max-w-[45px] items-center  rounded-lg p-2",
              defauultBg
            )}
          >
            <Image
              className=" h-full w-full overflow-hidden object-contain"
              src={image}
              alt={title}
              width={45}
              height={45}
            />
          </div>
          <h5
            className={clsx(
              "text-center text-xl  tracking-tight text-defaultIconColor sm:whitespace-nowrap "
            )}
          >
            {title}
          </h5>
        </div>
        <p className="text-defaultIconColor2 text-sm my-3 ml-[2px] select-none mb-5">
          {desc}
        </p>
        {url && (
          <a
            className=" text-brandGreen text-xs cursor-pointer font-medium flex items-center gap-2 mt-auto "
            href={url}
            rel="noreferrer"
            aria-label="Read More"
          >
            Read More
            <LuExternalLink className="cursor-pointer text-brandGreen text-[18px] -mt-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default IntegrationCard;
