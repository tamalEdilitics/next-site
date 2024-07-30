import React from "react";
import TransformationBeam from "../TransformationBeam";
import ComprehensivePoints from "./ComprehensivePoints";

const TransformComprehensive = () => {
  const broadConnectivityContent = [
    {
      title: "Built-in No-Code Functions",
      content:
        "Transform your data with Edilitics' intuitive no-code tools. Cleanse, prepare, and customize your datasets seamlessly without any coding required.",
    },
    {
      title: "Flexible Scheduling & Controls",
      content:
        "Automate data transformations with instant triggers, daily schedules, and advanced Cron expressions. Manage workflows effortlessly with pause and resume functionality.",
    },
    {
      title: "Reliable & Secure Transformations",
      content:
        "Ensure secure and efficient data transformations with detailed error logs, real-time alerts via in-app messages, email, or Slack, and advanced encryption. Enjoy optimized performance for fast and reliable data processing.",
    },
  ];

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative md:py-8 py-8">
      <div className=" md:px-[5em] px-6 flex flex-col items-center gap-5 relative  my-auto max-w-screen-xl mx-auto">
        <div className=" md:flex flex-col  items-center text-center mb-8">
          <h2 className="text-defaultIconColor md:text-[3em] text-[40px] leading-[1.3]  w-full md:font-semibold font-medium   md:leading-[3.3rem] ">
            Comprehensive Transformation Capabilities
          </h2>
          <p className="text-defaultIconColor text-[16px] leading-[1.4] md:w-[65%] my-6 ">
            Transform your data seamlessly with Edilitics' no-code tools and
            custom coding options. Use our intuitive GUI for joins, column
            management, datatype casting, and more. For complex needs, leverage
            Python for custom processing.
          </p>
        </div>

        <div className="w-full max-w-none flex md:flex-row flex-col items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto">
          <div className=" md:w-[50%] md:max-w-[50%] h-full  rounded-[1.25em] w-full">
            <TransformationBeam />
          </div>

          <div className="flex flex-col md:gap-[2em] md:mt-0 mt-4 gap-6  md:w-[50%] md:max-w-[50%] h-full w-full">
            {broadConnectivityContent.map((item, index) => {
              return <ComprehensivePoints item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformComprehensive;
