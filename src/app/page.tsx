"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractivePreview } from "@/components/InteractivePreview";
import { Differentiation } from "@/components/Differentiation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleSearchStart = (searchKeyword: string) => {
    // 검색 로딩 시작 시 상태 초기화
    setIsSearched(false);
  };

  const handleSearchComplete = (searchKeyword: string) => {
    // 검색 로딩 완료 시 키워드 매칭 및 분석 영역 노출 활성화
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

      {/* 3. Wow Interactive Preview Section (리뷰분석 대시보드 + 스마트폰 시안 프레임 + 리드 수집 폼) */}
      <InteractivePreview 
        keyword={keyword} 
        isSearched={isSearched} 
      />

      {/* 4. Agent Differentiation Grid Section (3열 비교 테이블) */}
      <Differentiation />

      {/* 5. Footer Service Info */}
      <Footer />
    </main>
  );
}
