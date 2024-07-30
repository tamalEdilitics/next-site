import { IoInformationCircleOutline } from "react-icons/io5";

const IndividualAndBundle = () => {
  return (
    <div className="features_test_bg_2" id="blurrable">
      <section className="text-gray-700 body-font overflow-hidden border-t border-transparent">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/4 mt-48 hidden lg:block relative">
            <p className="absolute -top-[8rem] pl-[14px] font-semibold text-defaultIconColor text-[32px] leading-[1.4]">
              Features
              <br />
              <p className="text-[16px] font-normal gap-3 flex items-center">
                <IoInformationCircleOutline className="mt-[1px] text-[17px]" />{" "}
                For Enterprises & Teams
              </p>
            </p>
            <div className="mt-px border-t border-gray-800 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start -mt-px">
                Monthly Price (USD)
              </p>
              <p className="text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                User Limit
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Integrate
              </p>
              <p className="text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Replicate
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Transform
              </p>
              <p className="text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Visualize
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Flows, Data Sources, Dashboards
              </p>
              <p className="text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Compute Time
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Scheduling
              </p>
              <p className=" text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Notifications
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Audit Logs
              </p>
              <p className=" text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                User Management
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-4 flex items-center justify-start">
                Additional Notes
              </p>
            </div>
          </div>

          <div className="flex lg:w-3/4 w-full  lg:border border-gray-800 rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-800 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex gap-6 flex-col items-center justify-center">
                <h2 className="text-[22px] text-defaultIconColor font-bold flex items-center justify-center leading-[1.2]">
                  Free <br /> Forever
                </h2>
                <div
                  onClick={() => {
                    window.location.href = `${
                      import.meta.env.VITE_REDIRECT_URI
                    }/billing?plan=${item?.name}`;
                  }}
                  className="button-new transparent-copy inline-block px-[2em] text-xs py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
                >
                  Start Free
                </div>
              </div>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-800">
                $0
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Any 2 data sources
              </p>
              <p className="h-12 text-defaultIconColor px-6 text-center leading-relaxed flex items-center justify-center">
                2 flows
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                2 flows
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                2 dashboards
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Limited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                30 minutes per month
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Manual
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                In-app and email
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                No
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                No
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Each table is restricted to 100K rows
              </p>
            </div>

            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-transparent border-b-0 relative">
              <div className="px-2 text-center h-48 flex flex-col gap-6 items-center justify-center">
                <h2 className="text-[22px] text-defaultIconColor font-bold flex items-center justify-center leading-[1.2]">
                  Storyteller's <br /> Suite
                </h2>
                <div
                  onClick={() => {
                    window.location.href = `${
                      import.meta.env.VITE_REDIRECT_URI
                    }/billing?plan=${item?.name}`;
                  }}
                  className="button-new transparent-copy inline-block px-[2em] text-xs py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
                >
                  Start Free
                </div>
              </div>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-800">
                $30 (billed annually)
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="h-12 text-defaultIconColor text-center leading-relaxed flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1 hr per user/month
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Daily, CRON
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                In-app, email, and Slack
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Yes (30 days)
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                No
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
            </div>

            <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-800 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col gap-6 items-center justify-center">
                <h2 className="text-[22px] text-defaultIconColor font-bold flex items-center justify-center leading-[1.2]">
                  Data Workflow <br /> Pro
                </h2>
                <div
                  onClick={() => {
                    window.location.href = `${
                      import.meta.env.VITE_REDIRECT_URI
                    }/billing?plan=${item?.name}`;
                  }}
                  className="button-new transparent-copy inline-block px-[2em] text-xs py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
                >
                  Start Free
                </div>
              </div>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-800">
                $40 (billed annually)
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="h-12 text-defaultIconColor text-center leading-relaxed flex items-center justify-center">
                Unlimited
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1 hr per user/month
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Daily, CRON
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                In-app, email, and Slack
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Yes (30 days)
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                No
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
            </div>

            <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-800 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col gap-6 items-center justify-center">
                <h2 className="text-[22px] text-defaultIconColor font-bold flex items-center justify-center leading-[1.2]">
                  Ultimate <br /> Analytics Suite
                </h2>
                <div
                  onClick={() => {
                    window.location.href = `${
                      import.meta.env.VITE_REDIRECT_URI
                    }/billing?plan=${item?.name}`;
                  }}
                  className="button-new transparent-copy inline-block px-[2em] text-xs py-[0.75em] cursor-pointer  raw_login-gradient-border text-[#fff] rounded-md"
                >
                  Start Free
                </div>
              </div>
              <p className="bg-backgroundSecondary text-defaultIconColor h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-800">
                $50 (billed annually)
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="h-12 text-defaultIconColor text-center leading-relaxed flex items-center justify-center">
                Unlimited
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Unlimited
              </p>
              <p className="text-defaultIconColor text-center h-12 flex items-center justify-center">
                1 hr per user/month
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Daily, CRON
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                In-app, email, and Slack
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                Yes (30 days)
              </p>
              <p className=" text-defaultIconColor text-center h-12 flex items-center justify-center">
                No
              </p>
              <p className="bg-backgroundSecondary text-defaultIconColor text-center h-12 flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualAndBundle;
