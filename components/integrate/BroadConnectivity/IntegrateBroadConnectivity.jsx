"use client";

import { IntegrateAnimatedBeamShow } from "../IntegrateBeam";
import ConnectivityPoints from "./ConnectivityPoints";

const IntegrateBroadConnectivity = () => {
  const broadConnectivityContent = [
    {
      title: " Versatile Integration Options",
      content:
        "Edilitics supports various databases, cloud storage, and data warehouses, offering seamless integration of data from different sources for efficient processes and flexible architecture.",
    },
    {
      title: "Unified Data Management",
      content:
        "Edilitics' connectivity consolidates data from multiple sources into one system, simplifying management, enhancing analysis, and ensuring comprehensive views for informed decision-making.",
    },
    {
      title: "Future-Proof Connectivity",
      content:
        "Edilitics supports current and emerging data technologies, adapting to evolving environments. It meets present and future needs, keeping you ahead in a changing landscape and safeguarding your investment.",
    },
  ];

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative py-8">
      <div className=" md:px-[5em] px-6 flex flex-col items-center gap-5 relative  my-auto max-w-screen-xl mx-auto">
        <div className=" md:flex flex-col  items-center text-center mb-8">
          <h2 className="text-brandGreen md:text-[28px] text-[27px] leading-[1.3]  w-full md:font-semibold font-medium  ">
            Broad Connectivity
          </h2>
          <p className="text-defaultIconColor text-[16px] leading-[1.4] md:w-[65%] my-6 ">
            Edilitics makes it effortless to connect to your preferred data
            sources, ensuring you have all the information you need in one
            place.
          </p>
        </div>

        <div className="w-full max-w-none grid md:grid-cols-2 flex-col items-center gap-x-[6rem] gap-y-[8.75em] justify-center mx-auto">
          <div className=" h-full  rounded-[1.25em] w-full  flex flex-col items-center justify-center">
            <IntegrateAnimatedBeamShow />
          </div>

          <div className="flex flex-col md:gap-[2em] md:mt-0 mt-4 gap-6   h-full w-full">
            {broadConnectivityContent.map((item, index) => {
              return <ConnectivityPoints item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateBroadConnectivity;
