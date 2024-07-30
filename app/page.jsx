import Features from "@/components/features/Features";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/Navbar";
import Landing from "@/components/landing/Landing";
import WhyChooseEdilitics from "@/components/why/WhyChooseEdilitics";
import getPageMetaData from "@/lib/utils/getPageMetaData";

export const metadata = getPageMetaData("landing");

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="relative" id="blurrable">
        <Landing />
        <Features />
        <WhyChooseEdilitics />
        <Footer type={"home"} />
      </div>
    </div>
  );
}
