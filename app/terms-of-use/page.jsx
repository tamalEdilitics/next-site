import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import TermsOfUseContent from "@/components/terms-of-use/TermsOfUseContent";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-3">
        <main className="min-h-screen md:py-[7rem] md:w-[70vw] mx-auto md:mt-0 mt-20 flex items-center flex-col  w-[90vw]">
          <section className=" bg-card shadow-lg md:rounded-[11px] rounded-[20px] md:p-[2rem] p-[1rem]">
            <header className="text-defaultIconColor">
              <div className="flex justify-between items-center">
                <Image
                  src="/assets/Icons/logo.png"
                  width={200}
                  height={190}
                  alt="Edilitics Logo"
                  className="md:h-[2.5rem] h-[2.3rem] "
                />
                <p className="text-[17px]">Last Updated: 01/02/2024</p>
              </div>
              <h1 className="md:text-[2.5em] text-[24px] mt-[2rem] font-semibold text-center leading-[1]">
                Terms Of Use
              </h1>

              <hr className="my-[2rem]" />
            </header>

            <article>
              <h2 className="text-defaultIconColor md:text-[1.6em] text-[22px] font-bold my-[1rem] leading-[1]">
                Welcome to Edilitics
              </h2>
              <p className="text-defaultIconColor text-[16px] md:text-[1.1em] leading-[1.6] md:leading-[2]">
                The Terms of Use (“Terms”) as set out herein constitute an
                agreement between Decision Sciences & Analytics Private Limited
                ("Edilitics," "Company," "we," "us," or "our"), a company
                incorporated under the Companies Act, 1956, having its
                registered office at WeWork NESCO IT Park, Building 4, Western
                Express Highway, Goregaon (East) Mumbai, Maharashtra 400063 AND
                any natural or legal person who accesses and/or uses the
                Platform in any manner (referred to as "you," "your," "User"),
                or uses any current or future service, functionality, or offer
                made available (“Services”) on the website, edilitics.com
                ("Platform") as updated from time to time.
              </p>
              <p className="text-defaultIconColor text-[16px] md:text-[1.1em] leading-[1.6] md:leading-[2] mt-[2rem]">
                Edilitics is a low-code/no-code data analytics platform for
                modern data teams of all sizes and all business verticals. It is
                built to help code-literate as well as non-code-literate members
                perform sophisticated data analysis with ease through a SaaS
                (Software as a Service) Platform. The Platform allows Users to
                access our products, features, and various data integration,
                data pipelines, data transformation, data visualization and
                machine learning tools and related services.
              </p>
              <p className="text-defaultIconColor text-[16px] md:text-[1.1em] leading-[1.6] md:leading-[2] mt-[2rem]">
                These Terms govern your use of the Services on the Platform and
                transactions or dealings thereon. If you register for a free
                trial of Edilitics services, the applicable provisions of these
                Terms will also apply to such a free trial. By using the
                Platform, you expressly agree to be bound by the Terms. If you
                do not agree with any of the Terms, please do not use the
                Platform. If you have any questions about the terms, please
                contact us at{" "}
                <a
                  href="mailto:support@edilitics.com"
                  className="termsofuse_A"
                  aria-label="Mail Us"
                >
                  support@edilitics.com
                </a>
                <br /> <br /> For the purposes of these Terms: <br />
                (a) Platform means the website edilitics.com as well as any
                other digital mode and/or operating system provided by us, on
                which you may avail the Software Services and includes
                applications controlled and managed by us, <br />
                <br /> (b) "Services" shall refer to, but not be limited to,
                adding integrations, creating and automating transformations,
                data pipelines, or machine learning workflows, data
                visualizations or dashboards, alerts and export. We may add
                and/or modify our Services with or without intimating you <br />
                <br />
                (c) We and you are hereinafter individually referred to as
                "Party" and collectively as "Parties." Please carefully read all
                the parts to understand the conditions applicable in case of
                your access and usage of the Platform.
              </p>
            </article>
            <h2 className="text-defaultIconColor mt-[4rem] md:text-[1.6em] text-[22px] font-bold my-[1rem] md:leading-[1] leading-[1.5]">
              TERMS AND CONDITIONS FOR USAGE OF PLATFORM
            </h2>

            {TermsOfUseContent?.map((item, index) => {
              return (
                <article className="mt-[3rem] termsofuse" key={item.articleId}>
                  <h2 className="text-defaultIconColor md:text-[1.4em] text-[22px] leading-[1.5] font-bold my-[1rem] md:leading-[1]">
                    {item?.articleId}. {item?.articleHeading}
                  </h2>

                  {item?.articleContent?.map((articleContent, index) => {
                    return (
                      <>
                        <p
                          className="text-defaultIconColor  my-[2.5rem] md:ml-[3rem] text-[16px] md:text-[1em] leading-[1.6] md:leading-[2]"
                          key={articleContent.id}
                        >
                          <span className="mr-3 font-semibold">
                            {articleContent?.id}
                          </span>
                          {articleContent?.content}
                        </p>
                      </>
                    );
                  })}
                </article>
              );
            })}
          </section>
        </main>
        <Footer type={"home"} />
      </div>
    </>
  );
};

export default Page;
