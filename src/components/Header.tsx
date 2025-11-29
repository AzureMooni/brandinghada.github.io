"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Brandinghada
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#home" className="text-sm font-medium hover:text-secondary transition-colors">
                        홈
                    </Link>
                    <Link href="#service" className="text-sm font-medium hover:text-secondary transition-colors">
                        서비스
                    </Link>
                    <Link
                        href="https://naver.me/FE3zwy7e"
                        target="_blank"
                        className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                    >
                        무료 진단 신청
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl">
                    <Link
                        href="#home"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        홈
                    </Link>
                    <Link
                        href="#service"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        서비스
                    </Link>
                    <Link
                        href="https://naver.me/FE3zwy7e"
                        target="_blank"
                        className="w-full text-center px-5 py-3 bg-secondary text-white text-sm font-semibold rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        무료 진단 신청
                    </Link>
                </div>
            )}
        </header>
    );
}
