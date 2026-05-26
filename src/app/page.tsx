"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractivePreview } from "@/components/InteractivePreview";
import { Differentiation } from "@/components/Differentiation";
import { Footer } from "@/components/Footer";

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

      {/* 4. Agent Differentiation Grid Section */}
      <Differentiation />

      {/* 5. Footer Service Info */}
      <Footer />
    </main>
  );
}
