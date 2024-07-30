import Faq from "@/components/global/Faq";
import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import Pricing from "@/components/pricing/Pricing";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("pricing");

const page = () => {
  const words = [
    {
      text: "Discover ",
    },
    {
      text: "Our ",
    },
    {
      text: "Affordable ",
      className: "text-brandGreen",
    },
    {
      text: "Pricing ",
      className: "text-brandGreen",
    },
    {
      text: "Plans",
      className: "text-brandGreen",
    },
  ];

  const faqData = [
    {
      question: "What distinguishes Solo plans from Enterprise plans?",
      answer:
        "Solo plans are designed for users with generic email addresses (e.g., abc@gmail.com). In contrast, Enterprise plans cater to users with custom domain email addresses (e.g., abc@companyname.com). Subscription to Enterprise plans is exclusively available to custom domain email holders, while Solo plans are restricted to generic email users.",
    },
    {
      question: "What differentiates Core plans from Premium plans?",
      answer:
        "Core plans provide access to specific modules, such as Integrate & Replicate, Integrate & Transform, or Integrate & Visualize. On the other hand, Premium plans offer comprehensive bundles tailored to specific use cases, such as combining Integrate, Transform and Visualize functionalities for a more integrated solution.",
    },
    {
      question: "Is it possible to switch between two Core plans?",
      answer:
        "No, switching between two Core plans is not allowed. Once a Core plan is subscribed to, users or enterprises can only upgrade to a Premium subscription, enhancing their capabilities and access to additional features.",
    },
    {
      question: "What happens if I exhaust my compute minutes?",
      answer:
        "Additional compute minutes can be purchased as needed. One hour of compute time can be acquired for $2.99, and bulk purchases of 11 or more hours are available at a reduced rate of $2.39 per hour. These purchased compute minutes do not expire and are carried forward to subsequent months.",
    },
    {
      question:
        "Can individual users within an enterprise subscribe to separate plans?",
      answer:
        "No, individual users within an enterprise cannot subscribe to separate plans. The subscription plan selected initially applies to all users within the enterprise, ensuring consistent access and functionality across the organization.",
    },
  ];

  return (
    <>
      <Navbar />

      <FeaturePageLanding
        words={words}
        header1={
          <>
            Discover our
            <br />{" "}
            <span className="text-brandGreen">Affordable Pricing Plans</span>
          </>
        }
        header2={"for Every Data Need"}
        paragraph1={
          "Edilitics offers flexible and affordable pricing plans for both individuals and teams."
        }
        paragraph2={
          "Find the perfect solution for your data analytics needs, ensuring cost-effective and comprehensive features to empower your data journey."
        }
      />
      <Pricing />

      <Faq faqData={faqData} gradient={"features_test_bg"} />

      <Footer type={"pricing"} />
    </>
  );
};

export default page;
