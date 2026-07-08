# 작업 내역 (Work Log)

이 문서는 향후 세션에서 컨텍스트 연속성을 위해 지금까지의 작업을 정리한 기록이다. 규칙(convention)은 `CLAUDE.md`에 있고, 이 문서는 "무엇을 왜 만들었는지"의 히스토리에 집중한다.

## 프로젝트 개요

순수 HTML/CSS/JS 미니 앱 모음. 빌드 도구 없음, GitHub Pages(`https://chs2147.github.io/mini-apps/`)로 배포. 저장소: [chs2147/mini-apps](https://github.com/chs2147/mini-apps).

## 타임라인

| 날짜 | 작업 |
|---|---|
| 2026-06-30 | 초기 3개 앱(MBTI, 기괴한 테트리스, 포모도로 타이머) + 애플풍 랜딩 페이지(그라디언트 메시, 3D tilt 카드) 최초 커밋 |
| 2026-07-01 | 던전 카드 크롤(카드-라이크 던전크롤러) 추가 → 이후 같은 날 네오퓨처 사이버펑크 톤으로 카드 디자인 리스타일 (Updated 판정의 첫 사례) |
| 2026-07-02 | 네온사인 메이커, QR코드 생성기(자체 구현 QR 인코더, 외부 API 无), 2048, 주사위 연대기(중세풍 Roll & Write) 4개 앱 동시 추가. README 갱신 규칙을 `CLAUDE.md`로 명문화 |
| 2026-07-04 | 슬라이딩 넘버 퍼즐(3×3~8×8) 추가. 파비콘(`favicon.svg`, `icon-512.png`) + OG 공유 썸네일(`og-image.png`, 헤드리스 Chrome으로 캔버스 렌더링해 생성) 전체 페이지 적용 |
| 2026-07-05 | 정각 맞추기(고정밀 타이밍 게임 + 방해 효과 시스템), 사다리 타기(아미다쿠지 알고리즘) 추가. 이후 랜딩 페이지를 카드 그리드 → **Featured/Updated/카테고리 섹션 슬라이더** 구조로 대규모 개편 |
| 2026-07-07 | 슬라이더 화살표를 오버플로 기반으로 수정(기존엔 데스크탑 폭에서만 강제 표시), 기괴한 테트리스 타이틀 정렬 버그 수정. 앱 카드에 **데스크탑/모바일 지원 뱃지** 추가. 이어서 섹션 제목 아이콘을 이모지 → **모노그램**(글자+그라디언트)으로 교체, Updated와 게임 사이에 **Exclusive 카테고리**(외부 링크 앱 전용, 새 탭으로 열림) 신설하고 첫 외부 앱 2종(PDF 파일 분할기, 이미지 분할기) 추가 |
| 2026-07-08 | Exclusive에 외부 앱 3번째 추가: 마크다운 메이커 (`markdown-maker-production.up.railway.app`), 데스크탑/모바일 모두 지원(사용자 명시) |

## 현재 앱 목록 (14개, 자체 제작 11 + 외부 링크 3)

`apps-data.js`가 단일 소스(source of truth). 카테고리·출시일·업데이트일·기기지원 여부를 여기서 관리한다.

| id | 제목 | 카테고리 | devices |
|---|---|---|---|
| mbti | MBTI 테스트 | lifestyle | desktop, mobile |
| tetris | 기괴한 테트리스 | games | desktop, mobile *(2026-07-05 업데이트: 타이틀 정렬 수정)* |
| pomodoro | 포모도로 타이머 | lifestyle | desktop, mobile |
| card-crawl | 던전 카드 크롤 | games | desktop, mobile *(2026-07-01 업데이트: 네오퓨처 리스타일)* |
| neon-sign | 네온사인 메이커 | tools | desktop, mobile |
| qr-generator | QR코드 생성기 | tools | desktop, mobile |
| 2048 | 2048 | games | desktop, mobile |
| dice-chronicle | 주사위 연대기 | games | desktop, mobile |
| slide-puzzle | 슬라이딩 넘버 퍼즐 | games | desktop, mobile |
| perfect-timing | 정각 맞추기 | games | desktop, mobile |
| ladder-game | 사다리 타기 | tools | desktop, mobile |
| pdf-file-splitter | PDF 파일 분할기 *(외부 링크)* | exclusive | desktop, mobile |
| image-splitter | 이미지 분할기 *(외부 링크)* | exclusive | desktop |
| markdown-maker | 마크다운 메이커 *(외부 링크)* | exclusive | desktop, mobile |

카테고리: ⭐ Exclusive(3, 외부 링크 전용) · 🎮 게임(6, 카드 4개 초과라 "더보기" 있음) · 🛠️ 도구 & 크리에이티브(3) · 🧘 라이프스타일(2).

## 랜딩 페이지 구조 (현재)

- `index.html`: 히어로 타이틀 + 섹션 목록(`#sections-root`에 JS로 동적 렌더링)
  - **Featured**: 출시일 최신순 4개, 왼쪽=최신. Exclusive(외부 링크) 앱도 `released` 기준으로 동일하게 경쟁하며 예외 없음
  - **Updated**: `apps-data.js`의 `updated` 필드가 있는 앱만, 최신순. (파비콘/OG처럼 전체 앱을 일괄 건드리는 메타데이터 커밋은 "업데이트"로 치지 않음 — 실질적 기능/디자인 변경만 인정)
  - **Exclusive**: 외부 링크(다른 도메인)로 제공되는 앱 전용 카테고리. Updated와 게임 사이에 위치. 카드 클릭 시 `target="_blank"`로 새 탭에서 열림. `devices`는 사용자가 명시한 것만 표기하고, 미지정 시 뱃지 자체를 표시하지 않음(임의 추정 금지)
  - **카테고리 섹션**(Exclusive/게임/도구/라이프스타일): 출시일 오름차순, 카테고리당 4개까지 표시 + 5개 이상이면 "더보기 → `category.html?cat=<key>`"
  - 각 섹션 제목의 아이콘은 이모지가 아니라 **모노그램**(글자 1개 + 그라디언트 배경, `SECTION_MONOGRAMS`/`monogramHtml()`)
  - 각 섹션은 가로 슬라이더(스크롤 스냅) + 좌우 화살표. 화살표는 콘텐츠가 실제로 뷰포트를 넘칠 때만 표시(데스크탑/모바일 구분 없이 순수 오버플로 기반)
- `category.html`: `?cat=exclusive|games|tools|lifestyle` 쿼리로 해당 카테고리 전체 목록을 그리드로 표시. 페이지 타이틀에도 동일한 모노그램 사용
- `apps-data.js`: 두 페이지가 공유하는 앱 메타데이터(제목/설명/아이콘/색상/카테고리/출시일/업데이트일/devices/external) + `deviceBadgesHtml()`/`monogramHtml()`/`cardLinkAttrs()` 헬퍼. **캐시 무효화를 위해 `<script src="apps-data.js?v=N">` 버전 쿼리를 씀 — 이 파일을 고치면 N도 반드시 올릴 것** (안 올리면 실사용자가 배포 후에도 구버전 캐시를 볼 수 있는 실제 버그였음, 2026-07-07 발견/수정)

## 공통 기술 패턴

- 각 앱은 완전히 독립된 단일 `apps/<name>/index.html` (인라인 `<style>`/`<script>`, 외부 의존성 없음 — 폰트는 Google Fonts `@import`만 예외적으로 허용)
- 공통 다크 글래스모피즘 팔레트(`--glass-bg`, `--glass-border`, 앱별 accent 색) + 랜딩과 통일된 그라디언트 메시 배경
- 캔버스/동적 크기가 필요한 앱(테트리스, 던전 카드 크롤, 슬라이딩 퍼즐 등)은 `calcLayout()` 패턴 사용: **실제 DOM 요소의 `offsetHeight`를 측정**해서 헤더/컨트롤 영역을 제외한 가용 공간 기준으로 크기 산출 (뷰포트 % 어림값만으로는 오버플로 버그가 자주 났던 경험 반영)
- 모바일: `pointer: coarse` 미디어쿼리로 터치 컨트롤 노출, 스와이프 제스처 지원
- 새 미니앱 추가 시 랜딩 카드(현재는 `apps-data.js` 항목 추가로 대체), README, `apps-data.js`의 `devices`/`released` 반영까지 같은 커밋에 포함 (`CLAUDE.md` 규칙)

## 검증하며 발견한 특이사항 (재발 방지용 메모)

- **`.page { align-items:center }` 안의 자식 요소가 `width:100%`만으로는 부모 폭에 맞춰지지 않고 콘텐츠 크기로 늘어나는 flexbox 함정**: column-flex 컨테이너에서 `align-items:center`는 교차축(가로) stretch를 없애버리므로, 자식에 `width:100%`뿐 아니라 `min-width:0`까지 명시해야 오버플로 감지가 정확해짐 (슬라이더 화살표 버그의 원인)
- **정적 JS 데이터 파일(`apps-data.js`)의 브라우저 캐시**: 쿼리 버전 없이 `<script src="apps-data.js">`만 쓰면 실사용자가 배포 후에도 구버전을 볼 수 있음 → `?v=N` 버전 쿼리 필수
- **헤드리스 프리뷰 브라우저에서 `scroll-behavior: smooth` 애니메이션이 프레임을 그리지 않는 경우가 있음**: 스크롤 로직 자체(클릭 핸들러 호출, `scrollBy` 실행)는 몽키패치로 검증 가능하지만, 최종 `scrollLeft` 값 확인은 `behavior:'instant'`로 강제하거나 실브라우저에서 확인해야 신뢰 가능
- **PNG 자산이 필요할 때 브라우저 다운로드 트리거는 이 환경에서 비신뢰적**: 파비콘/OG 이미지는 캔버스로 그린 뒤 헤드리스 Chrome(`--headless --screenshot`)으로 직접 렌더링해 파일로 저장하는 방식이 훨씬 안정적이었음
- **QR 인코더는 자체 구현 후 반드시 실제 디코딩으로 검증**: 브라우저 `BarcodeDetector` API로 왕복 디코딩해 한글/이모지(서로게이트 페어) 포함 케이스까지 확인함
