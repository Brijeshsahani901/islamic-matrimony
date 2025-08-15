import CTASection from "@/component/homepage/CTASection";
import FAQSection from "@/component/homepage/FAQSection";
import Footer from "@/component/homepage/Footer";
import Header from "@/component/homepage/Header";
import HeroSection from "@/component/homepage/HeroSection";
import HowItWorks from "@/component/homepage/HowItWorks";
import Search from "@/component/homepage/Search";
import SuccessStories from "@/component/homepage/SuccessStories";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
   <HeroSection/>
   <Search/>
   <HowItWorks/>
   <SuccessStories/>
   <FAQSection/>
   <CTASection/>
   <Footer/>
   </>
  );
}
