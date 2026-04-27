import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Music } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            Brandinghada
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6">
                            성공적인 비즈니스를 위한 최고의 파트너.<br />
                            브랜딩하다와 함께 성장하세요.
                        </p>

                        {/* Social Media Icons (aria-label 추가) */}
                        <div className="flex gap-6 mb-8 items-center">
                            <a href="https://blog.naver.com/brandinghada" target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그" className="relative w-6 h-6 hover:scale-110 transition-transform duration-300 group">
                                <Image
                                    src="/naver_blog_icon.png"
                                    alt="Naver Blog"
                                    fill
                                    className="object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </a>
                            <a href="https://youtube.com/channel/UC0VgLW6y_VWGBuLHbcMT4Rg?si=Wjn732zukQ4MlQRM" target="_blank" rel="noopener noreferrer" aria-label="유튜브 채널" className="text-slate-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300">
                                <Youtube size={24} aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/branding_hada" target="_blank" rel="noopener noreferrer" aria-label="인스타그램" className="text-slate-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300">
                                <Instagram size={24} aria-hidden="true" />
                            </a>
                            <a href="https://www.tiktok.com/@branding_hada" target="_blank" rel="noopener noreferrer" aria-label="틱톡" className="text-slate-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300">
                                <Music size={24} aria-hidden="true" />
                            </a>
                        </div>

                    </div>

                    <div className="col-span-2 md:col-span-1">
                        {/* h4를 h3로 변경하여 논리적 계층 구조 유지 */}
                        <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>상호명 : 맬로우앤모어</li>
                            <li>대표 : 최찬미</li>
                            <li>사업자등록번호 : 273-59-00931</li>
                        </ul>
                    </div>

                    <div>
                        {/* h4를 h3로 변경 */}
                        <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* text-slate-500을 text-slate-400으로 변경하여 대비율(가독성) 확보 */}
                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Brandinghada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
