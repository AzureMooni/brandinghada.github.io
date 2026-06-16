"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractivePreview } from "@/components/InteractivePreview";
import { Trust } from "@/components/Trust";
import { Differentiation } from "@/components/Differentiation";
import { ActivityLog } from "@/components/ActivityLog";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatingKakao } from "@/components/FloatingKakao";
import { StickyCTA } from "@/components/StickyCTA";


export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  // 정적 빌드(static HTML export) 호환성을 위해 window가 정의된 마운트 시점에 URL 파라미터 감지
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlKeyword = params.get("keyword");
      if (urlKeyword && urlKeyword.trim()) {
        setKeyword(urlKeyword);
        setIsSearched(true);
      }
    }
  }, []);

  // 🍎 Apple-style Scroll Reveal & Mobile Mockup Zoom Parallax
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleReveal = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-reveal");
        }
      });
    };

    const observer = new IntersectionObserver(handleReveal, observerOptions);
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Mobile Phone Zoom Parallax
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const mockup = document.getElementById("mobile-mockup-frame");
          if (mockup) {
            const rect = mockup.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            if (rect.top < viewportHeight && rect.bottom > 0) {
              const totalDist = viewportHeight + rect.height;
              const scrolled = viewportHeight - rect.top;
              const ratio = Math.max(0, Math.min(1, scrolled / totalDist));
              // Scale from 0.95 to 1.05 based on scroll depth
              const scale = 0.94 + ratio * 0.11;
              mockup.style.transform = `scale(${scale})`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [keyword, isSearched]); // Re-bind on state changes to ensure elements are re-observed if needed

  const handleSearchStart = (searchKeyword: string) => {
    setIsSearched(false);
  };

  const handleSearchComplete = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    setIsSearched(true);
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Glow Point Light Background Effect */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. Navigation Header */}
      <Header />

      {/* 2. Hero Core Sales Section */}
      <Hero 
        onSearchStart={handleSearchStart} 
        onSearchComplete={handleSearchComplete} 
      />

      {/* 3. Wow Interactive Preview Section */}
      <InteractivePreview 
        keyword={keyword} 
        isSearched={isSearched} 
      />

      {/* 4. Core Value & Trust/Safety Guarantees Section */}
      <Trust />

      {/* 5. Agent Differentiation Grid Section */}
      <Differentiation />

      {/* 6. Live Activity Log Section */}
      <ActivityLog />

      {/* 7. Personal Branding Representative Intro Section */}
      <About />

      {/* 8. Footer Service Info */}
      <Footer />

      {/* 9. Floating KakaoTalk Consult Button */}
      <FloatingKakao />

      {/* 10. High-Conversion Sticky CTA Bar */}
      <StickyCTA />
    </main>
  );
}

