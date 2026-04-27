import requests
from bs4 import BeautifulSoup
import os
from datetime import datetime

# ==========================================
# [CONFIGURATION]
# ==========================================
TARGET_URL = "https://www.brandinghada.com"
OUTPUT_FILE = "brandinghada_snapshot.txt"

# 봇 탐지 방지를 위한 헤더 (사람인 척 위장)
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def analyze_website():
    print(f"🏥 Starting Digital MRI scan for: {TARGET_URL}...")
    
    try:
        response = requests.get(TARGET_URL, headers=HEADERS, timeout=10)
        response.raise_for_status()
        response.encoding = 'utf-8' # 한글 깨짐 방지
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 리포트 작성 시작
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            # 1. 헤더 (기본 정보)
            f.write(f"# [DIGITAL MRI REPORT]\n")
            f.write(f"Target: {TARGET_URL}\n")
            f.write(f"Scan Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("="*50 + "\n\n")

            # 2. SEO 메타 데이터 (The Face)
            f.write("## 1. META DATA (SEO Status)\n")
            title = soup.title.string if soup.title else "No Title"
            f.write(f"- Title: {title.strip()}\n")
            
            meta_desc = soup.find("meta", attrs={"name": "description"})
            desc_content = meta_desc["content"] if meta_desc else "❌ No Description Found"
            f.write(f"- Description: {desc_content.strip()}\n")
            
            og_image = soup.find("meta", property="og:image")
            og_img_url = og_image["content"] if og_image else "❌ No OG Image"
            f.write(f"- Social Thumbnail (OG:Image): {og_img_url}\n\n")

            # 3. 헤드라인 구조 (The Skeleton)
            f.write("## 2. HEADLINE STRUCTURE (Logic Flow)\n")
            for i in range(1, 4):
                headers = soup.find_all(f'h{i}')
                if headers:
                    f.write(f"\n[H{i} Tags]\n")
                    for h in headers:
                        text = h.get_text(strip=True)
                        if text: f.write(f"- {text}\n")
            f.write("\n")

            # 4. 본문 텍스트 (The Soul)
            f.write("## 3. MAIN CONTENT (Tone & Manner)\n")
            # 스크립트와 스타일 제거
            for script in soup(["script", "style", "nav", "footer"]):
                script.extract()
            
            text = soup.get_text(separator='\n')
            # 공백 정리
            lines = [line.strip() for line in text.splitlines() if line.strip()]
            clean_text = '\n'.join(lines)
            f.write(clean_text[:5000]) # 너무 길면 잘림 방지 (5000자 제한)
            f.write("\n\n")
            
            f.write("="*50 + "\n")
            f.write("End of Report.")

        print(f"✅ Scan Complete! Report saved to: {os.path.abspath(OUTPUT_FILE)}")
        print("👉 Please upload this file to your AI assistant.")

    except Exception as e:
        print(f"❌ Critical Error during scan: {e}")

if __name__ == "__main__":
    analyze_website()
