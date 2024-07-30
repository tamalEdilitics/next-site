import Benefits from "@/components/global/Benefits";
import Faq from "@/components/global/Faq";
import FeaturePageLanding from "@/components/global/FeaturePageLanding";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import ReplicateComprehensive from "@/components/replicate/Comprehensive/ReplicateComprehensive";
import StreamlinedAutomated from "@/components/replicate/StreamlinedAutomated";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("replicate");

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
      question: "Can I configure incremental data loads",
      answer:
        "Yes, Edilitics supports both full and incremental data loads. Incremental loads allow you to replicate only the changes made since the last replication, enhancing performance and minimizing data transfer times.",
    },
    {
      question: "How do I monitor and manage my replication processes",
      answer:
        "You can oversee and manage your replication processes through the Edilitics dashboard. Our real-time monitoring tools provide comprehensive insights into replication status, performance metrics, and potential issues, ensuring efficient and smooth data synchronization.",
    },
    {
      question: "What if my data replication fails",
      answer:
        "In the event of data replication failure, Edilitics offers robust error handling and alerting mechanisms. You will receive detailed error notifications, and our dedicated support team is available to assist you in resolving any issues promptly.",
    },
    {
      question: "Where do my flows run",
      answer:
        "Each flow run is deployed on a dedicated virtual machine, provisioned in real-time for execution based on the schedule. The virtual machine receives encrypted credentials and configuration details necessary for execution and is terminated upon completion, ensuring robust data security.",
    },
    {
      question: "What is Compute and how is its consumption tracked",
      answer:
        "Compute refers to the duration required for a flow run to execute. It is calculated from the moment the virtual machine is provisioned until all data is synchronized to the destination. A comprehensive log of compute consumption is available for each flow run, ensuring transparency and detailed tracking.",
    },
  ];

  const benefits = [
    {
      title: "Ensure Data Consistency",
      content:
        "With Edilitics, maintain accurate and consistent data across multiple sources, ensuring all your data-driven insights are based on reliable and up-to-date information.",
    },
    {
      title: "Optimize Performance",
      content:
        "Our platform utilizes incremental loads to replicate only the changes since the last update, enhancing performance and reducing load times.",
    },
    {
      title: "Automate Workflows",
      content:
        "Leverage advanced scheduling options, including instant triggers and Cron expressions, to automate your data replication processes. This automation ensures your data is consistently updated without manual intervention.",
    },
    {
      title: "Enhance Decision-Making",
      content:
        "Access real-time, up-to-date data to make timely and informed decisions. With Edilitics, you have the insights you need when you need them, empowering your decision-making process.",
    },
    {
      title: "Improve Data Management",
      content:
        "Simplify your data replication tasks with Edilitics' user-friendly tools and intuitive interfaces. Our platform is designed to make complex data replication processes straightforward and accessible, regardless of your technical background.",
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
              Automated
              <br /> <span className="text-brandGreen">ELT Replication</span>
            </>
          }
          header2={"for Informed Decision-Making and Accuracy"}
          paragraph1={
            "Edilitics offers robust ELT solutions ensuring data accuracy and real-time updates across sources, enabling focus on insights over data management."
          }
          paragraph2={
            "Automate ELT replication effortlessly for informed decision-making and enhanced accuracy."
          }
        />

        <ReplicateComprehensive />
        <StreamlinedAutomated />
        <Benefits
          benefits={benefits}
          content1={
            "Edilitics provides reliable, efficient, and automated data replication, ensuring data consistency across multiple sources."
          }
          content2={
            "Optimize performance, enhance decision-making, and improve data management with our user-friendly tools and advanced scheduling options."
          }
        />
        <Faq faqData={faqData} gradient={"features_test_bg_2"} />
        <Footer type={"integrate"} />
      </div>
    </>
  );
};
export default Page;
