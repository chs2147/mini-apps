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
| ⚔️ [던전 카드 크롤](apps/card-crawl/index.html) | 체력을 지키며 던전을 끝까지 클리어하는 1인용 카드 게임 (Neo-Future Edition) |
| 💡 [네온사인 메이커](apps/neon-sign/index.html) | 문구를 입력하면 실시간으로 빛나는 네온사인으로 변환 |
| 🔳 [QR코드 생성기](apps/qr-generator/index.html) | 텍스트/URL을 오프라인에서 즉시 QR코드로 변환, PNG 다운로드 |
| 🔢 [2048](apps/2048/index.html) | 같은 숫자 타일을 합쳐 2048을 만드는 클래식 퍼즐 게임 |
| 🎲 [주사위 연대기](apps/dice-chronicle/index.html) | 중세풍 1인용 Roll & Write 게임. 주사위를 굴려 6개 영역을 채우고 여우 보너스까지 노려보세요 |
| 🧩 [슬라이딩 넘버 퍼즐](apps/slide-puzzle/index.html) | 숫자를 순서대로 정렬하는 클래식 퍼즐. 3×3~8×8 크기 선택, 이동 횟수·시간 기록 |
| ⏰ [정각 맞추기](apps/perfect-timing/index.html) | 8시 59분 50초부터 흘러가는 아날로그 시계를 보며 정확히 9시 정각에 클릭하는 타이밍 게임. 오차를 0.01초 단위로 기록 |
| 🪜 [사다리 타기](apps/ladder-game/index.html) | 인원수·이름을 설정하고 결과를 배정하는 사다리 타기. 1/3/5배속 애니메이션으로 한 명씩 결과 공개 |

### ⭐ Exclusive (외부 링크)

이 저장소 밖에 별도로 호스팅된 앱들. 클릭 시 새 탭에서 열립니다.

| 앱 | 설명 |
|---|---|
| 📄 [PDF 파일 분할기](https://pdf-file-splitter.vercel.app) | PDF 파일을 원하는 페이지 단위로 손쉽게 분할 |
| 🖼️ [이미지 분할기](https://chs2147.github.io/image-splitter/) | 이미지를 여러 조각으로 분할 |
| 📝 [마크다운 메이커](https://markdown-maker-production.up.railway.app) | PPTX/DOCX/XLSX/PDF/URL 콘텐츠를 마크다운으로 변환 |
| 📈 [KOSPI 예측기](https://kospi-predictor.onrender.com) | KOSPI 지수를 예측해주는 서비스 (Made by TJ.Choi) |

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
    ├── pomodoro/
    │   └── index.html
    ├── card-crawl/
    │   └── index.html
    ├── neon-sign/
    │   └── index.html
    ├── qr-generator/
    │   └── index.html
    ├── 2048/
    │   └── index.html
    ├── dice-chronicle/
    │   └── index.html
    ├── slide-puzzle/
    │   └── index.html
    ├── perfect-timing/
    │   └── index.html
    └── ladder-game/
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
