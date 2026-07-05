/* Shared app registry for index.html and category.html.
   `released`/`updated` are ISO timestamps used purely for sort order —
   ties within the same commit are broken with a stable synthetic offset. */
const APPS = [
  { id: 'mbti', title: 'MBTI 테스트', desc: '나는 어떤 유형일까? 16가지 성격 유형 중 당신의 유형을 찾아보세요.', icon: '🧠', color: 'purple', href: 'apps/mbti/index.html', category: 'lifestyle', released: '2026-06-30T23:04:50' },
  { id: 'tetris', title: '기괴한 테트리스', desc: '뭔가 잘못된 테트리스. 블록이 제멋대로 굴고 중력도 믿을 수 없어요.', icon: '🎮', color: 'blue', href: 'apps/tetris/index.html', category: 'games', released: '2026-06-30T23:04:51', updated: '2026-07-05T22:05:03' },
  { id: 'pomodoro', title: '포모도로 타이머', desc: '집중과 휴식의 리듬. 25분 집중, 5분 휴식으로 생산성을 높이세요.', icon: '🍅', color: 'mint', href: 'apps/pomodoro/index.html', category: 'lifestyle', released: '2026-06-30T23:04:52' },
  { id: 'card-crawl', title: '던전 카드 크롤', desc: '체력을 지키며 던전을 끝까지 클리어하는 1인용 카드 게임.', icon: '🗡️', color: 'gold', href: 'apps/card-crawl/index.html', category: 'games', released: '2026-07-01T21:23:25', updated: '2026-07-01T23:02:02' },
  { id: 'neon-sign', title: '네온사인 메이커', desc: '문구를 입력하면 실시간으로 빛나는 네온사인으로 변환해드려요.', icon: '💡', color: 'pink', href: 'apps/neon-sign/index.html', category: 'tools', released: '2026-07-02T20:52:48' },
  { id: 'qr-generator', title: 'QR코드 생성기', desc: '텍스트나 URL을 입력하면 즉시 QR코드를 만들어 다운로드할 수 있어요.', icon: '🔳', color: 'cyan', href: 'apps/qr-generator/index.html', category: 'tools', released: '2026-07-02T20:52:49' },
  { id: '2048', title: '2048', desc: '같은 숫자 타일을 합쳐 2048을 만드는 클래식 퍼즐 게임.', icon: '🔢', color: 'orange', href: 'apps/2048/index.html', category: 'games', released: '2026-07-02T20:52:50' },
  { id: 'dice-chronicle', title: '주사위 연대기', desc: '왕실 서기관이 되어 주사위를 기록하는 중세풍 1인용 Roll & Write 게임.', icon: '🎲', color: 'amber', href: 'apps/dice-chronicle/index.html', category: 'games', released: '2026-07-02T20:52:51' },
  { id: 'slide-puzzle', title: '슬라이딩 넘버 퍼즐', desc: '숫자를 순서대로 정렬하는 클래식 퍼즐. 3×3부터 8×8까지 크기 선택 가능.', icon: '🧩', color: 'rose', href: 'apps/slide-puzzle/index.html', category: 'games', released: '2026-07-04T00:51:24' },
  { id: 'perfect-timing', title: '정각 맞추기', desc: '8시 59분 50초부터 흘러가는 시계를 보며 정확히 9시 정각에 클릭하는 타이밍 게임.', icon: '⏰', color: 'indigo', href: 'apps/perfect-timing/index.html', category: 'games', released: '2026-07-05T17:51:15' },
  { id: 'ladder-game', title: '사다리 타기', desc: '인원수와 이름을 설정하고 결과를 배정하는 사다리 타기. 1/3/5배속 애니메이션 지원.', icon: '🪜', color: 'teal', href: 'apps/ladder-game/index.html', category: 'tools', released: '2026-07-05T21:09:44' },
];

const CATEGORY_META = {
  games:     { label: '게임', icon: '🎮' },
  tools:     { label: '도구 & 크리에이티브', icon: '🛠️' },
  lifestyle: { label: '라이프스타일', icon: '🧘' },
};

const CATEGORY_ORDER = ['games', 'tools', 'lifestyle'];
