import Benefits from "@/components/global/Benefits";
import Faq from "@/components/global/Faq";
import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import TransformComprehensive from "@/components/transform/Comprehensive/TransformComprehensive";
import SeamlessDataTransformation from "@/components/transform/SeamlessDataTransformation";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("transform");

const Page = () => {
  const words = [
    {
      text: "Streamline ",
    },
    {
      text: "Data ",
      className: "text-brandGreen",
    },
    {
      text: "Transformation",
      className: "text-brandGreen",
    },
  ];

  const faqData = [
    {
      question:
        "What no-code transformation templates are available, and what if a pre-built option isn't suitable",
      answer:
        "Edilitics offers a comprehensive suite of pre-built no-code transformation templates, covering operations such as joins, unions, null value handling, filtering, sorting, and timezone adjustments. If a pre-built template doesn't meet your needs, our integrated Python code editor enables custom transformations, addressing complex data manipulations and unique edge cases.",
    },
    {
      question:
        "Is the actual data impacted during the configuration of a transformation flow",
      answer:
        "No, during the configuration phase, transformations are applied to an extracted sample of data, leaving the actual dataset unaffected. Only when the configuration is saved and scheduled will the actual data be extracted, transformed, and synchronized to the target system, incorporating all necessary manipulations and cleansing.",
    },
    {
      question: "How can I test and validate my data transformations",
      answer:
        "You can iteratively test and validate each transformation step using our integrated validation suite. This ensures data accuracy and reliability, guaranteeing that your data adheres to quality standards before full-scale deployment.",
    },
    {
      question: "How are transformation workflows executed in Edilitics",
      answer:
        "Transformation workflows in Edilitics are executed on dedicated virtual machines, provisioned in real-time. These machines receive encrypted credentials and configuration details necessary for execution and are terminated upon completion, ensuring robust data security and compliance.",
    },
    {
      question: "What is Compute, and how is its usage monitored",
      answer:
        "Compute refers to the duration required for executing a transformation workflow. It is measured from the provisioning of the virtual machine until all data is synchronized to the target system. Detailed logs of compute consumption are maintained for each workflow, ensuring transparency and accountability.",
    },
  ];

  const benefits = [
    {
      title: "Simplify Data Preparation",
      content:
        "Transform your data effortlessly with our no-code tools or custom coding options. Cleanse, prepare, and customize datasets seamlessly, making data preparation accessible for all users.",
    },
    {
      title: "Automate Workflows",
      content:
        "Streamline processes with automated triggers and advanced scheduling. Use instant triggers, daily schedules, and Cron expressions to keep your data consistently updated without manual effort.",
    },
    {
      title: "Enhance Data Accuracy",
      content:
        "Edit and reprocess transformations to ensure the highest data quality. Manage columns, handle null values, and perform complex aggregations for accurate, reliable data.",
    },
    {
      title: "Improve Decision Making",
      content:
        "Access real-time processed data for timely, informed insights. Ensure your data is always current to support quick, confident decision-making.",
    },
    {
      title: "Ensure Data Security",
      content:
        "Protect your data with advanced encryption during transfer and at rest. Benefit from detailed error logs and real-time alerts for secure, reliable data transformation processes.",
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
              Streamline
              <br />{" "}
              <span className="text-brandGreen">Data Transformation</span>
            </>
          }
          header2={"with No-Code Simplicity"}
          paragraph1={
            "Edilitics simplifies data transformation with intuitive no-code tools and advanced customization options, ensuring clean, accurate data for enhanced decision-making."
          }
          paragraph2={
            "Streamline data transformation processes with ease and precision."
          }
        />
        <TransformComprehensive />
        <SeamlessDataTransformation />
        <Benefits
          benefits={benefits}
          content1={
            "Edilitics offers intuitive no-code tools and custom coding options for seamless data transformation. Automate workflows with instant triggers, daily schedules, and Cron expressions."
          }
          content2={
            "Ensure data accuracy with easy editing and reprocessing. Access real-time data for timely insights. Enjoy secure data transformation with advanced encryption and robust error handling."
          }
        />

        <Faq faqData={faqData} gradient={"features_test_bg_2"} />
        <Footer type={"integrate"} />
      </div>
    </>
  );
};
export default Page;
