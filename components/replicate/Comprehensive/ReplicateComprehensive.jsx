import ReplicationBeam from "../ReplicationBeam";
import ComprehensivePoints from "./ComprehensivePoints";

const ReplicateComprehensive = () => {
  const broadConnectivityContent = [
    {
      title: "Flexible Scheduling & Control",
      content:
        "Update your data with instant triggers, daily schedules, and advanced Cron expressions. Manage workflows effortlessly with pause and resume functionality.",
    },
    {
      title: "Error Management & Alerts",
      content:
        "Ensure reliable data replication with detailed error logs and real-time alerts via in-app messages, email, or Slack for quick issue resolution.",
    },
    {
      title: "Secure & Efficient Replication",
      content:
        "Experience secure, encrypted data transfer with optimized performance for fast and efficient data replication.",
    },
  ];

  return (
    <div className="features_test_bg flex flex-col md:min-h-screen relative md:py-8 py-8">
      <div className=" md:px-[5em] px-6 flex flex-col items-center gap-5 relative  my-auto max-w-screen-xl mx-auto">
        <div className=" md:flex flex-col  items-center text-center mb-8">
          <h2 className="text-defaultIconColor md:text-[3em] text-[40px] leading-[1.3]  w-full md:font-semibold font-medium   md:leading-[3.3rem] ">
            Comprehensive ELT Replication Capabilities
          </h2>
          <p className="text-defaultIconColor text-[16px] leading-[1.4] md:w-[65%] my-6 ">
            Edilitics enables data replication across databases and warehouses
            with full or incremental loads, ensuring efficient performance and
            reduced load times.
          </p>
        </div>

        <div className="w-full max-w-none flex md:flex-row flex-col items-center gap-x-[8.75em] gap-y-[8.75em] justify-center mx-auto">
          <div className=" md:w-[50%] md:max-w-[50%] h-full  rounded-[1.25em] w-full">
            <ReplicationBeam />
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

export default ReplicateComprehensive;
