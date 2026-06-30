# 🎮 Mini Apps

작고 재미있는 미니 앱 모음. 순수 HTML · CSS · JS로만 구동됩니다.

🔗 **[https://chs2147.github.io/mini-apps/](https://chs2147.github.io/mini-apps/)**

---

## 앱 목록

| 앱 | 설명 |
|---|---|
| 🧠 [MBTI 테스트](apps/mbti/index.html) | 12개의 질문으로 알아보는 나의 성격 유형 |
| 🎮 [기괴한 테트리스](apps/tetris/index.html) | 뭔가 잘못된 테트리스. 블록을 믿지 마세요 |
| 🍅 [포모도로 타이머](apps/pomodoro/index.html) | 25분 집중, 5분 휴식의 생산성 사이클 |

---

## 구조

```
mini-apps/
├── index.html          # 랜딩 페이지
└── apps/
    ├── mbti/
    │   └── index.html
    ├── tetris/
    │   └── index.html
    └── pomodoro/
        └── index.html
```

## 로컬 실행

```bash
# 파일 직접 열기
open index.html

# 또는 로컬 서버
python3 -m http.server
```

## 기술 스택

- 빌드 도구 없음 — 파일 그대로 실행
- 외부 라이브러리 없음 — 순수 HTML/CSS/JS
- GitHub Pages로 정적 호스팅
