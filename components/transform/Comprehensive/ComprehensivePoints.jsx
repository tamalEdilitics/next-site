import Image from "next/image";

const ComprehensivePoints = ({ item }) => {
  return (
    <div className="flex flex-col gap-3  md:bg-transparent bg-[#1a1a1a] md:p-0 p-3 rounded-[20px]">
      <div className="text-defaultIconColor flex items-center md:items-start gap-2">
        <div className="md:w-[2.3em] md:h-[2.3em] h-[32px]  w-[32px] min-h-[32px]  min-w-[32px]  aspect-square  rounded-md p-[6px] box-gradient flex flex-col items-center justify-center">
          <Image
            src={"/assets/integrate/databases.svg"}
            alt="Databases"
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="md:text-[1.3em] text-[18px] md:pt-2 font-bold  inline-block md:bg-transparent text-brandGreen ">
            {item?.title}
          </p>
          <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] text-[16px] font-normal md:leading-[160%] leading-[1.4] no-underline  my-0 md:p-0 p-[12px]  rounded-md md:block hidden">
            {item?.content}
          </p>
        </div>
      </div>
      <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] text-[16px] font-normal md:leading-[160%] leading-[1.4] no-underline my-0 md:p-0 p-[12px] bg-[#0e0e0e] rounded-md md:hidden block">
        {item?.content}
      </p>
    </div>
  );
};

export default ComprehensivePoints;
