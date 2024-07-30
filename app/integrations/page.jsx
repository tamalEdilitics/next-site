import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import getPageMetaData from "@/lib/utils/getPageMetaData";
import Integrations from "../../components/integrations/Integrations";

export const metadata = getPageMetaData("integrations");

const page = () => {
  const words = [
    {
      text: "Seamless ",
    },
    {
      text: "Data ",
      className: "text-brandGreen",
    },
    {
      text: "Integration",
      className: "text-brandGreen",
    },
  ];
  return (
    <div>
      <Navbar />
      <FeaturePageLanding
        words={words}
        header1={
          <>
            Seamless
            <br /> <span className="text-brandGreen">Data Integrations</span>
          </>
        }
        header2={" for Comprehensive Connectivity Solutions"}
        paragraph1={
          "Edilitics automates tasks, replicates and transforms data seamlessly, delivering visualizations for immediate insights."
        }
        paragraph2={
          "Experience advanced data analytics now with our intuitive platform designed to unlock actionable insights effortlessly."
        }
      />
      <Integrations />
      <div className="mt-10" id="blurrable">
        <Footer type={"integrations"} />
      </div>
    </div>
  );
};

export default page;
