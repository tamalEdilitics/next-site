import Faq from "@/components/global/Faq";
import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import VisualizeComprehensive from "@/components/visualization/Comprehensive/VisualizeComprehensive";
import VisualizationIntuitive from "@/components/visualization/VisualizationIntuitive";
import VisualizeBenefits from "@/components/visualization/VisualizeBenefits";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("visualize");

const Page = () => {
  const words = [
    {
      text: "Visualize ",
      className: "text-brandGreen",
    },
    {
      text: "your ",
      className: "text-brandGreen",
    },
    {
      text: "data ",
      className: "text-brandGreen",
    },
  ];

  const faqData = [
    {
      question:
        "What charting and personalization options are available on the platform",
      answer:
        "Edilitics offers an extensive array of charting options, including bar charts, line graphs, pie charts, scatter plots, and more. Personalization features enable you to customize colors, labels, and data points to meet your specific requirements, ensuring that your dashboards are both insightful and visually compelling.",
    },
    {
      question:
        "Does the Visualize module support data transformation capabilities",
      answer:
        "While the Visualize module is primarily designed for data visualization, it includes basic data transformation functionalities such as filtering, sorting, and aggregation. For more advanced data transformation needs, users should leverage the Transform module.",
    },
    {
      question:
        "How is my dashboard data stored and what is the refresh frequency",
      answer:
        "In Edilitics, only the final aggregated data required for each chart is encrypted and securely stored within our databases. New data is fetched from the data source according to the predefined refresh schedule or when manually triggered by a user. This method optimizes costs by minimizing unnecessary database queries.",
    },
    {
      question: "How can I share my dashboards with others",
      answer:
        "Dashboards can be published directly within Edilitics and shared with platform members or external stakeholders via secure links sent by email. External stakeholders must validate an OTP for each view to access and visualize the dashboard, ensuring robust data security. This facilitates real-time, data-driven decision-making across your organization.",
    },
    {
      question: "How do I ensure my visualizations are mobile-friendly",
      answer:
        "Edilitics visualizations are designed to be responsive and mobile-friendly. Once your dashboard is customized for the web, Edilitics automatically creates a responsive version for mobile use, ensuring accessibility and readability on smartphones and tablets.",
    },
  ];

  return (
    <>
      <Navbar />

      <div id="blurrable">
        <FeaturePageLanding
          words={words}
          header1={
            <>
              <span className="text-brandGreen">Visualize your data</span>
            </>
          }
          header2={"for Comprehensive and Customizable Insights"}
          paragraph1={
            "Edilitics empowers you to visualize your data with ease, offering a robust suite of interactive charts and personalization options."
          }
          paragraph2={
            "Our platform equips you with the tools to create insightful and actionable visualizations, enabling confident data-driven decisions."
          }
        />

        <VisualizeComprehensive />
        <VisualizationIntuitive />
        <VisualizeBenefits />

        <Faq faqData={faqData} gradient={"features_test_bg_2"} />
        <Footer type={"integrate"} />
      </div>
    </>
  );
};
export default Page;
