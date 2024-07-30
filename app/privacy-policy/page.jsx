import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-3">
        <main className="min-h-screen md:py-[7rem] md:w-[70vw] w-[90vw] mx-auto md:mt-0 mt-20 flex items-center flex-col ">
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
                Privacy Policy
              </h1>

              <hr className="my-[2rem]" />
            </header>
            <article>
              <h2 className="text-defaultIconColor md:text-[1.6em] text-[22px] font-bold my-[1rem] leading-[1]">
                Welcome to Edilitics
              </h2>
              <p className="text-defaultIconColor text-[16px] md:text-[1.1em] leading-[1.6] md:leading-[2]">
                Edilitics is committed to building a strong and long-lasting
                relationship with you based on trust and clarity. Part of this
                commitment means safeguarding and respecting your privacy and
                your choices. This is why we have laid out our full Privacy
                Policy below. Please read this information carefully. If you
                have any questions or concerns, please contact us at{" "}
                <a
                  href="mailto:support@edilitics.com"
                  className="termsofuse_A"
                  aria-label="Mail Us"
                >
                  support@edilitics.com
                </a>
              </p>
            </article>
            {PrivacyPolicyContent?.map((item, index) => {
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

            <div>
              <h2 className="text-defaultIconColor md:text-[1.4em] text-[22px] leading-[1.5] font-bold my-[1rem] md:leading-[1]">
                15. Company Details:
              </h2>
              <p className="text-defaultIconColor md:ml-[3rem]  my-[2rem] text-[16px] md:text-[1em] leading-[1.6] md:leading-[2] ">
                DECISION SCIENCES & ANALYTICS PRIVATE LIMITED <br /> WeWork
                NESCO IT Park,
                <br />
                Building 4, Western Express Highway,
                <br />
                Goregaon (East) Mumbai, <br />
                Maharashtra 400063 <br />
                Desk ID:HD-215
              </p>
            </div>
          </section>
        </main>
        <Footer type={"home"} />
      </div>
    </>
  );
};

export default Page;
