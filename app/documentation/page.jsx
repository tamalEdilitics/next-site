import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";

const Documentation = () => {
  const words = [
    {
      text: "Master ",
      className: "text-brandGreen",
    },
    {
      text: "Edilitics ",
      className: "text-brandGreen",
    },
  ];

  return (
    <>
      <Navbar />

      <FeaturePageLanding
        words={words}
        header1={
          <>
            <span className="text-brandGreen">Master Edilitics</span> <br />{" "}
          </>
        }
        header2={"with our detailed Guides and Resources"}
        paragraph1={
          "Access detailed guides and resources on Edilitics to enhance your data analytics capabilities."
        }
        paragraph2={
          "Our documentation provides step-by-step instructions, best practices, and troubleshooting tips, ensuring you maximize the potential of our platform."
        }
      />

      <Footer type={"docs"} />
    </>
  );
};
export default Documentation;
