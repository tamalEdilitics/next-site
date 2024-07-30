import Image from "next/image";

const LandingCredits = () => {
  return (
    <div className="flex md:flex-row mt-6  w-full items-center justify-center z-50 text-defaultIconColor md:gap-5 gap-2">
      <div className="flex items-center md:gap-3 gap-1">
        <Image
          src={"/assets/Icons/tick.svg"}
          width={15}
          height={15}
          alt="Tickmark"
        />
        <p className="md:text-[14px] text-[13px]">No Code</p>
      </div>
      <div className="flex items-center md:gap-3 gap-1">
        <Image
          src={"/assets/Icons/tick.svg"}
          width={15}
          height={15}
          alt="Tickmark"
        />

        <p className="md:text-[14px] text-[13px]">Free Forever</p>
      </div>

      <div className="flex items-center md:gap-3 gap-1">
        <Image
          src={"/assets/Icons/tick.svg"}
          width={15}
          height={15}
          alt="Tickmark"
        />
        <p className="md:text-[14px] text-[13px]">No Credit Card Required</p>
      </div>
    </div>
  );
};

export default LandingCredits;
