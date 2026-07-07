# mini-apps

순수 HTML/CSS/JS 미니 앱 모음. 랜딩(`index.html`)에서 각 앱(`apps/<name>/index.html`)으로 진입하는 정적 사이트. GitHub Pages로 배포됨.

## 규칙

- **새 미니앱을 추가하는 커밋에는 반드시 `README.md`의 앱 목록과 파일 구조 트리도 함께 갱신한다.** 별도 커밋으로 미루지 말고 같은 커밋에 포함할 것.
- **기존 앱의 기능/디자인을 실질적으로 수정하는 커밋에는 `apps-data.js`에서 해당 앱의 `updated` 타임스탬프도 함께 갱신한다.** (랜딩 페이지의 Updated 섹션이 이 값을 기준으로 노출되므로, 갱신하지 않으면 실제로 업데이트된 앱이 Updated 섹션에 나타나지 않는다.) 파비콘/OG 태그 추가처럼 전체 앱을 일괄 건드리는 메타데이터성 커밋은 제외.
- **`apps-data.js`를 수정하는 커밋에는 `index.html`·`category.html`의 `<script src="apps-data.js?v=N">` 버전 쿼리도 N을 1 올려서 함께 갱신한다.** (버전을 올리지 않으면 실사용자가 브라우저 캐시 때문에 갱신된 데이터를 못 볼 수 있다.)
- **새 미니앱을 추가할 때는 반드시 데스크탑·모바일 화면에서 직접 확인한 뒤 `apps-data.js`의 `devices` 배열에 실제로 지원하는 기기만 넣는다.** (예: 데스크탑만 지원하면 `devices: ['desktop']`, 둘 다 지원하면 `['desktop', 'mobile']`.) 이 값을 기준으로 랜딩·카테고리 카드에 "데스크탑"/"모바일" 뱃지가 자동으로 붙는다.
- **단, 사용자가 특정 앱의 용도를 명시적으로 지정한 경우(예: "이건 모바일 전용으로 만들어줘")에는 실제 기술적 지원 여부와 무관하게 그 지정을 그대로 `devices` 값에 반영한다.** (양쪽 다 기술적으로는 동작하더라도, 사용자가 데스크탑 전용을 의도했다면 `devices: ['desktop']`만 부여.)
- **Exclusive 카테고리 정책**: 이 저장소 밖의 외부 링크(다른 도메인에 호스팅된 앱)를 추가할 때는 `apps-data.js`에서 `category: 'exclusive'`, `external: true`를 지정한다.
  - Exclusive 앱도 신규 추가 항목이므로 `released` 타임스탬프를 정상적으로 채워 **Featured 노출 대상에 동일하게 포함**시킨다 (별도 예외 처리 없음 — Featured는 전체 앱을 `released` 기준으로만 정렬한다).
  - `external: true`인 카드는 클릭 시 **새 탭에서 열리도록** `target="_blank" rel="noopener noreferrer"`를 붙인다 (`cardLinkAttrs()` 헬퍼가 자동 처리).
  - Exclusive 앱의 `devices`는 **사용자가 명시적으로 알려준 것만** 기록한다. 직접 만든 앱이 아니라 우리가 반응형 여부를 실측할 수 없으므로, 명시가 없으면 `devices` 필드를 아예 비워 **뱃지를 하나도 표시하지 않는다** (임의로 추정해서 채우지 말 것).
- **섹션 제목(Featured/Updated/Exclusive/카테고리) 앞의 아이콘은 이모지 대신 모노그램 스타일로 표시한다.** `apps-data.js`의 `SECTION_MONOGRAMS`에 키(섹션/카테고리 키)별 글자+그라디언트를 정의하고 `monogramHtml(key)`로 렌더링한다. 새 섹션/카테고리를 추가하면 여기에도 항목을 추가할 것.
