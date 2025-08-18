// "use client";

// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// import CTASection from "@/component/homepage/CTASection";
// import FAQSection from "@/component/homepage/FAQSection";
// import Footer from "@/component/homepage/Footer";
// import Header from "@/component/homepage/Header";
// import HeroSection from "@/component/homepage/HeroSection";
// import HowItWorks from "@/component/homepage/HowItWorks";
// import Search from "@/component/homepage/Search";
// import SuccessStories from "@/component/homepage/SuccessStories";

// export default function Home() {
//   const scrollRef = useRef(null);
//   const locoScroll = useRef(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const isMobile = window.innerWidth <= 768;

//     if (!isMobile) {
//       locoScroll.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         multiplier: 0.8,
//         lerp: 0.2,
//         // Don't enable smoothMobile or smartphone/tablet configs
//       });
//     }

//     return () => {
//       if (locoScroll.current) {
//         locoScroll.current.destroy();
//         locoScroll.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       <Header />
//       <HeroSection />
//       <Search />
//       <HowItWorks />
//       <SuccessStories />
//       <FAQSection />
//       <CTASection />
//       <Footer />
//     </div>
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

    const isMobile = window.innerWidth <= 768;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: isMobile ? 2.5 : 1.0, // ✅ Fast scroll on mobile, normal on desktop
      lerp: 0.1,
      smartphone: {
        smooth: true,
        multiplier: 2.5, // ✅ Fast scroll on mobile
      },
      tablet: {
        smooth: true,
        multiplier: 2.0, // ✅ Optional: also fast on tablets
      },
    });

    return () => {
      if (locoScroll.current) {
        locoScroll.current.destroy();
        locoScroll.current = null;
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
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
