import { VisualizationBeam } from "../VisualizationBeam";
import ComprehensivePoints from "./ComprehensivePoints";

const VisualizeComprehensive = () => {
  const broadConnectivityContent = [
    {
      title: "User-Friendly Interface",
      content:
        "Easily create and arrange visualizations with our intuitive point-and-click interface. Apply filters, interact with charts in real-time, and drill down into data for deeper analysis.",
    },
    {
      title: "Scheduling and Updates",
      content:
        "Keep dashboards current with flexible scheduling. Set automatic updates or choose manual updates to control refresh times and reduce costs.",
    },
    {
      title: "Personalization and Sharing",
      content:
        "Customize your experience with dark or light modes, securely share dashboards with OTP verification, duplicate dashboards for various use cases, and add interactive elements for engagement.",
    },
  ];

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative md:py-8 py-8">
      <div className=" md:px-[5em] px-6 flex flex-col items-center gap-5 relative  my-auto max-w-screen-xl mx-auto">
        <div className=" md:flex flex-col  items-center text-center mb-8">
          <h2 className="text-defaultIconColor md:text-[3em] text-[40px] leading-[1.3]  w-full md:font-semibold font-medium   md:leading-[3.3rem] ">
            Comprehensive Visualization Capabilities
          </h2>
          <p className="text-defaultIconColor text-[16px] leading-[1.4] md:w-[65%] my-6 ">
            Edilitics offers a robust suite of visualization tools, enabling you
            to create, customize, and interact with your data effortlessly.
            Enjoy advanced features like filters and interactive elements for
            in-depth analysis and engagement.
          </p>
        </div>

        <div className="w-full max-w-none flex md:flex-row flex-col items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto">
          <div className=" md:w-[50%] md:max-w-[50%] h-full  rounded-[1.25em] w-full">
            <VisualizationBeam />
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

export default VisualizeComprehensive;
