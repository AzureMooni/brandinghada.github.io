import streamlit as st
import json

# ======================================================
# [NEW] SEO & TARGETING OPTIMIZED PROMPT
# ======================================================
def consult_brain_seo_optimized(trends):
    # flush_memory() # Assuming this function exists in the larger context or imports
    st.toast(f"🧠 Brain is optimizing for SEO & Sales...", icon="🎯")
    
    prompt = f"""
    [ROLE]
    You are the Chief Marketing Officer of 'Branding Hada' (Republic of Korea's #1 Marketing Agency).
    
    [CONTEXT from Website MRI]
    - Core Message: "Stop wasting money on fake reviews. Focus on Purchase Persuasion Score."
    - Tone: Authoritative (King's Tone), Direct, Pain-point focused.
    - Target: Small Business Owners (Restaurants, Cafes, Beauty Shops).
    
    [SEO MANDATE]
    You MUST inject the following High-Volume Keywords naturally into the content:
    - Keywords: "맛집 마케팅", "네이버 플레이스 상위노출", "블로그 체험단 효과", "매출 상승 전략", "소상공인 홍보".
    
    [CURRENT TRENDS]
    - {', '.join(trends)}

    [TASK]
    Create a content plan for Instagram and Blog in KOREAN.
    
    1. **Instagram**: Visual should represent 'Data-driven Success' (Gold/Black). Caption must hit the pain point: "Why your shop is empty".
    2. **Blog**: Title must be clickable (e.g., "The secret reason why..."). Content must explain why 'Exposure' is useless without 'Persuasion'.

    [OUTPUT JSON FORMAT]
    {{
        "insta_prompt": "High-end cinematic 3d render, golden graph rising, luxury office, dark background, 8k, no text",
        "insta_caption": "사장님, 맛은 기본입니다. 문제는 '검색'입니다. (Include keywords: #맛집마케팅 #플레이스상위노출)...",
        "blog_title": "체험단 100명 써도 매출 제자리인 이유 (feat. 네이버 로직)",
        "blog_content": "1. 가짜 리뷰의 함정... 2. 브랜딩하다의 설득 시스템 소개... 3. 무료 진단 신청 유도..."
    }}
    """
    
    return prompt

# Example usage/placeholder for API call
def generate_content(trends):
    prompt = consult_brain_seo_optimized(trends)
    # response = call_llm_api(prompt) 
    # return response
