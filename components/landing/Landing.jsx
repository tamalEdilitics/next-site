"use client";

import FeaturePageLanding from "../global/FeaturePageLanding";
import LandingDesktop from "./LandingDesktop";

const Landing = () => {
  const words = [
    {
      text: "Effortless ",
    },
    {
      text: "No-Code ",
      className: "text-brandGreen",
    },
    {
      text: "Data Analytics ",
    },
  ];

  return (
    <>
      <div className="md:block hidden">
        <LandingDesktop />
      </div>

      <div className="md:hidden block">
        <FeaturePageLanding
          words={words}
          header1={
            <>
              Effortless
              <br /> <span className="text-brandGreen">No-Code</span> Data
              Analytics
            </>
          }
          header2={"Unlock Insights Instantly"}
          paragraph1={
            "Edilitics automates tasks, replicates and transforms data seamlessly, delivering visualizations for immediate insights."
          }
          paragraph2={
            "Experience advanced data analytics now with our intuitive platform designed to unlock actionable insights effortlessly."
          }
        />
      </div>
    </>
  );
};

export default Landing;
