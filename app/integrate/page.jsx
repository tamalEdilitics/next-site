import Benefits from "@/components/global/Benefits";
import Faq from "@/components/global/Faq";
import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import IntegrateBroadConnectivity from "@/components/integrate/BroadConnectivity/IntegrateBroadConnectivity";
import IntegrateEffortlessSetup from "@/components/integrate/IntegrateEffortlessSetup";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("integrate");

const Page = () => {
  const words = [
    {
      text: "Simplify ",
    },
    {
      text: "Your ",
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

  const faqData = [
    {
      question: "What types of data sources can I integrate with Edilitics",
      answer:
        "Edilitics supports an extensive array of data sources, including SQL and NoSQL databases, cloud storage solutions, and various SaaS applications. Refer to our Integrations page for a comprehensive list of supported data sources.",
    },
    {
      question: "How do I securely provide my authentication credentials",
      answer:
        "You can securely input your authentication credentials through our encrypted interface, ensuring end-to-end data security and compliance with industry standards throughout the integration process.",
    },
    {
      question: "Can I integrate multiple data sources simultaneously",
      answer:
        "Yes, Edilitics enables simultaneous integration of multiple data sources, offering a unified and holistic view of your data from diverse platforms, enhancing data analytics and business intelligence capabilities.",
    },
    {
      question: "How do I test the connection to my data source",
      answer:
        "After entering your credentials, use our built-in connection testing tool to validate the integration. This ensures that your data source is properly connected and ready for data ingestion and analysis.",
    },
    {
      question: "What happens if my data source credentials change",
      answer:
        "If your data source credentials change, you can effortlessly update them in Edilitics. Simply navigate to the edit option in the integration settings menu and update your credentials to maintain an uninterrupted data flow.",
    },
  ];

  const benefits = [
    {
      title: "Streamline Workflows",
      content:
        "Edilitics simplifies data management by integrating multiple data sources into a single platform. Streamline your processes to enhance efficiency and productivity.",
    },
    {
      title: "Enhance Data Analysis",
      content:
        "Centralize all your data with Edilitics, enabling more comprehensive and accurate analyses. Gain deeper insights into your business operations and customer behaviors.",
    },
    {
      title: "Improve Decision-Making",
      content:
        "Access real-time data insights with Edilitics to make timely and informed decisions. Stay agile in a fast-paced market environment with up-to-date information at your fingertips.",
    },
    {
      title: "Increase Efficiency",
      content:
        "Automate data synchronization with Edilitics to reduce manual efforts. Save valuable time and resources, allowing your team to focus on strategic initiatives and innovation.",
    },
    {
      title: "Ensure Data Security",
      content:
        "Edilitics prioritizes data security with advanced encryption and robust security measures. Protect your sensitive information throughout the integration process, maintaining compliance and trust.",
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
              Simplify your
              <br /> <span className="text-brandGreen">Data Integrations</span>
            </>
          }
          header2={"for Powerful Insights and Efficiency"}
          paragraph1={
            "Edilitics effortlessly connects your preferred data sources, supporting databases, cloud storage and warehouses for seamless integration and comprehensive insights."
          }
          paragraph2={
            " Simplify your data integration and gain powerful insights with ease."
          }
        />

        <IntegrateBroadConnectivity />
        <IntegrateEffortlessSetup />
        <Benefits
          benefits={benefits}
          content1={
            "Streamline your workflows, enhance your data analysis capabilities, and make more informed decisions."
          }
          content2={
            "Start integrating your data today and experience the power of seamless data connectivity with Edilitics."
          }
        />
        <Faq faqData={faqData} gradient={"features_test_bg_2"} />
        <Footer type={"integrate"} />
      </div>
    </>
  );
};
export default Page;
