"use client";

import Logo from "@/public/assets/Icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa6";
import FooterCTA from "./FooterCTA";
import FooterCtaTexts from "./FooterCTATexts";

const Footer = ({ type }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-backgroundPrimary flex flex-col w-full md:py-0 p-0">
      {type === "home" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Home.ctaText}
          title={FooterCtaTexts.Home.title}
        />
      ) : type === "integrate" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Integrate.ctaText}
          title={FooterCtaTexts.Integrate.title}
        />
      ) : type === "integrations" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Integrate.ctaText}
          title={FooterCtaTexts.Integrate.title}
        />
      ) : type === "replicate" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Replicate.ctaText}
          title={FooterCtaTexts.Replicate.title}
        />
      ) : type === "transform" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Transform.ctaText}
          title={FooterCtaTexts.Transform.title}
        />
      ) : type === "visualize" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Visualize.ctaText}
          title={FooterCtaTexts.Visualize.title}
        />
      ) : type === "docs" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Home.ctaText}
          title={FooterCtaTexts.Home.title}
        />
      ) : type === "pricing" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Home.ctaText}
          title={FooterCtaTexts.Home.title}
        />
      ) : type === "blog" ? (
        <FooterCTA
          ctaText={FooterCtaTexts.Home.ctaText}
          title={FooterCtaTexts.Home.title}
        />
      ) : null}

      <footer className="px-4   bg-backgroundPrimary   text-defaultIconColor mx-auto max-w-screen-xl w-full">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              href={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse md:w-[197px] w-[180px] md:mx-0 mx-auto"
            >
              <Image
                src={Logo}
                alt="Edilitics Logo"
                className="md:h-[2.5rem] h-[2.3rem] "
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3 flex flex-col md:items-start items-center text-center md:text-start">
              <h3 className="tracking-wide uppercase text-[1rem] font-bold ">
                Product
              </h3>
              <ul className="space-y-2">
                <li className="relative z-[9999999999999]">
                  <Link
                    href={"/integrate"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Integrate
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/replicate"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Replicate
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/transform"}
                    rel="noopener noreferrer"
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Transform
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/visualize"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Visualize
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 flex flex-col md:items-start items-center text-center md:text-start">
              <h3 className="tracking-wide uppercase text-[1rem] font-bold">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={"/privacy-policy"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/terms-of-use"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact-us"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/schedule-a-demo"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Schedule A Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 flex flex-col md:items-start items-center text-center md:text-start">
              <h3 className="uppercase text-[1rem] font-bold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={"/integrations"}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href={process.env.NEXT_PUBLIC_DOCS_URL}
                    className="hover:text-brandGreen cursor-pointer transition-all ease-out duration-300"
                    aria-label="Documentation"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 flex flex-col md:items-start items-center text-center md:text-start">
              <div className="uppercase text-[1rem] font-bold">Socials</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/people/Edilitics/61558887673195/"
                  title="Facebook"
                  className="flex items-center p-1"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/ediliticsdata/"
                  title="Linkedin"
                  className="flex items-center p-1"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn className="text-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="py-6 text-sm text-center flex items-center gap-1 mx-auto w-auto">
            <span> © 2024 BY EDILITICS. MADE IN </span>
            <Image
              src="https://storage.googleapis.com/images-for-documentation-website/EDILITICS%20WEBSITE%20-%20CONTENT/India%20Flag.png"
              alt="Indian Flag"
              className="h-[15px] rounded-sm"
              width={15}
              height={15}
            />{" "}
            <span> FOR THE 🌏</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
