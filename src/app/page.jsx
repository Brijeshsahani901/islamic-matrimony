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
  const isMobile = window.innerWidth <= 768;

  if (!scrollRef.current || isMobile) return; // ✅ Skip initialization on mobile

  locoScroll.current = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
    multiplier: 1.0,
    lerp: 0.1,
  });

  return () => {
    if (locoScroll.current) {
      locoScroll.current.destroy();
      locoScroll.current = null;
    }
  };
}, []);

useEffect(() => {
  const handleLinkClick = (e) => {
    const href = e.target.getAttribute("href");
    if (href && href.startsWith("#") && locoScroll.current) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        locoScroll.current.scrollTo(target);
      }
    }
  };

  // Add event listener to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  return () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.removeEventListener("click", handleLinkClick);
    });
  };
}, []);


  return (
    <>
      {/* Header is now OUTSIDE locomotive-scroll container */}
      <Header />

      {/* Scrollable content */}
      <div data-scroll-container ref={scrollRef} className="pt-16">
        <HeroSection />
        <Search />
        <HowItWorks />
        <SuccessStories />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

