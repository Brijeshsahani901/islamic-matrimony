// import CTASection from "@/component/homepage/CTASection";
// import FAQSection from "@/component/homepage/FAQSection";
// import Footer from "@/component/homepage/Footer";
// import Header from "@/component/homepage/Header";
// import HeroSection from "@/component/homepage/HeroSection";
// import HowItWorks from "@/component/homepage/HowItWorks";
// import Search from "@/component/homepage/Search";
// import SuccessStories from "@/component/homepage/SuccessStories";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <Header/>
//    <HeroSection/>
//    <Search/>
//    <HowItWorks/>
//    <SuccessStories/>
//    <FAQSection/>
//    <CTASection/>
//    <Footer/>
//    </>
//   );
// }
"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import CTASection from "@/component/homepage/CTASection";
import FAQSection from "@/component/homepage/FAQSection";
import Footer from "@/component/homepage/Footer";
import Header from "@/component/homepage/Header";
import HeroSection from "@/component/homepage/HeroSection";
import HowItWorks from "@/component/homepage/HowItWorks";
import Search from "@/component/homepage/Search";
import SuccessStories from "@/component/homepage/SuccessStories";

export default function Home() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
useEffect(() => {
  if (!scrollRef.current) return;

  locoScroll.current = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
    multiplier: 0.7, // balanced speed
    lerp: 0.1,       // balanced smoothness
    smoothMobile: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  return () => {
    if (locoScroll.current) locoScroll.current.destroy();
  };
}, []);


  return (
    <div
      data-scroll-container
      ref={scrollRef}
    >
      <Header />
      <HeroSection />
      <Search />
      <HowItWorks />
      <SuccessStories />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
