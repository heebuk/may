# 🎨 Vibe Cording Personal Branding Website

> **강주희**의 감각적이고 트렌디한 개인 브랜딩 사이트

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ 프로젝트 소개

**Vibe Cording** 철학을 바탕으로 개발된 프론트엔드 개발자 강주희의 개인 브랜딩 사이트입니다. 단순한 기능 구현을 넘어서, 사용자의 감정과 경험에 특별한 바이브를 불어넣는 것을 목표로 합니다.

### 🎯 핵심 가치
- **감각적 디자인**: 트렌디하고 현대적인 UI/UX
- **바닐라 코딩**: 프레임워크 없이 순수 웹 기술로 구현
- **감성적 경험**: 사용자에게 특별한 바이브를 전달
- **성능 최적화**: 빠르고 부드러운 사용자 경험

## 🚀 주요 특징

### 🎨 **Vibe Cording 디자인 시스템**
- **색상 팔레트**: 
  - Primary: `#7F5AF0` (감성적 보라)
  - Secondary: `#2CB67D` (민트 그린)
  - Accent: `#FFD23F` (따뜻한 노랑)
- **타이포그래피**: Google Fonts (Poppins, Outfit, Inter)
- **감각적 애니메이션**: 부드러운 전환과 인터랙션

### ⚡ **고급 기능들**
- **스크롤 애니메이션**: Intersection Observer API 활용
- **마우스 팔로워**: 트레일 파티클 효과
- **3D 호버 이펙트**: 카드와 버튼의 입체적 인터랙션
- **타이핑 애니메이션**: 글자별 개별 애니메이션
- **반응형 디자인**: 모바일 퍼스트 접근법
- **접근성**: WCAG 2.1 AA 준수

### 🎭 **인터랙티브 요소**
- 자기소개 섹션의 동적 통계 카운터
- 포트폴리오 카드의 3D 플립 효과
- 스킬 카드의 마그네틱 호버
- 모바일 햄버거 메뉴
- 스크롤 진행률 표시기

## 🛠️ 기술 스택

### **프론트엔드**
- **HTML5**: 시맨틱 마크업, 접근성 고려
- **CSS3**: 
  - CSS Grid & Flexbox
  - Custom Properties (CSS Variables)
  - Advanced Animations & Transitions
  - Backdrop Filter & Modern Effects
- **JavaScript ES6+**:
  - Intersection Observer API
  - Modern DOM Manipulation
  - Event Delegation
  - Performance Optimization

### **개발 도구**
- Vanilla Web Technologies (No Framework)
- Python HTTP Server (개발 서버)
- Modern Browser APIs

## 📁 프로젝트 구조

```
personal_branding/
├── index.html              # 메인 HTML 파일
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── responsive.css     # 반응형 스타일
├── js/
│   ├── script.js          # 메인 JavaScript
│   └── animations.js      # 애니메이션 모듈
├── images/
│   ├── turtle.jpg         # 프로필 이미지
│   └── placeholder.svg    # SVG 플레이스홀더
└── README.md              # 프로젝트 문서
```

## 🚀 설치 및 실행

### **필수 요구사항**
- Python 3.x (HTTP 서버용)
- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)

### **1. 프로젝트 클론**
```bash
git clone <repository-url>
cd personal_branding
```

### **2. 로컬 서버 실행**

**방법 1: Python HTTP Server**
```bash
python -m http.server 8000
```

**방법 2: Python 런처 (Windows)**
```bash
py -m http.server 8000
```

### **3. 브라우저에서 확인**
```
http://localhost:8000
```

## 🎨 커스터마이징

### **색상 변경**
`css/style.css`의 CSS Variables를 수정하세요:
```css
:root {
    --primary-color: #7F5AF0;        /* 메인 컬러 */
    --secondary-color: #2CB67D;      /* 서브 컬러 */
    --accent-color: #FFD23F;         /* 강조 컬러 */
}
```

### **프로필 정보 수정**
`index.html`에서 다음 섹션들을 수정하세요:
- Hero 섹션의 이름과 소개
- About 섹션의 프로필 정보
- Skills 섹션의 기술 스택
- Portfolio 섹션의 프로젝트들

### **이미지 교체**
`images/` 폴더에 새 이미지를 추가하고 HTML에서 경로를 수정하세요.

## 📱 브라우저 호환성

| 브라우저 | 최소 버전 | 지원 기능 |
|---------|----------|----------|
| Chrome | 60+ | 모든 기능 지원 |
| Firefox | 55+ | 모든 기능 지원 |
| Safari | 12+ | 모든 기능 지원 |
| Edge | 79+ | 모든 기능 지원 |

### **핵심 API 지원**
- Intersection Observer API
- CSS Grid & Flexbox
- CSS Custom Properties
- ES6+ JavaScript Features

## ⚡ 성능 최적화

### **구현된 최적화**
- **이미지 최적화**: Lazy Loading 적용
- **CSS 최적화**: Critical CSS 인라인
- **JavaScript 최적화**: 
  - 이벤트 위임 패턴
  - Throttling & Debouncing
  - Intersection Observer로 효율적인 스크롤 이벤트
- **애니메이션 최적화**: 
  - `transform`과 `opacity` 위주 사용
  - `will-change` 속성 활용
  - 60fps 유지

### **성능 지표**
- **Lighthouse 점수**: 90+ (목표)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 SEO 최적화

### **적용된 SEO 기법**
- **메타 태그**: 완전한 Open Graph 및 Twitter Card
- **구조화 데이터**: JSON-LD Schema.org 마크업
- **시맨틱 HTML**: 의미있는 태그 사용
- **접근성**: ARIA 라벨과 역할 정의
- **성능**: Core Web Vitals 최적화

## 🔧 개발 환경 설정

### **추천 VS Code 확장**
- Live Server
- Prettier
- ESLint
- Auto Rename Tag
- CSS Peek

### **개발 워크플로우**
1. HTML 구조 작성
2. CSS 스타일링 (모바일 퍼스트)
3. JavaScript 인터랙션 추가
4. 애니메이션 구현
5. 성능 최적화
6. 크로스 브라우저 테스트

## 📋 체크리스트

### **기능 구현**
- [x] 반응형 내비게이션
- [x] Hero 섹션 애니메이션
- [x] 스킬 카드 인터랙션
- [x] 포트폴리오 갤러리
- [x] 연락처 폼 검증
- [x] 스크롤 애니메이션
- [x] 마우스 팔로워 효과
- [x] 모바일 최적화

### **성능 & 접근성**
- [x] 이미지 최적화
- [x] CSS 최적화
- [x] JavaScript 최적화
- [x] ARIA 라벨
- [x] 키보드 네비게이션
- [x] 스크린 리더 지원

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

**강주희** - Vibe Cording Frontend Developer

- 📧 Email: hello@vibedev.com
- 🌐 Website: [your-domain.com](https://your-domain.com)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- 🐱 GitHub: [github.com/yourusername](https://github.com/yourusername)

---

<div align="center">

**Made with 💜 and lots of coffee**

*"코드에 감성을 담아 디지털 세상에 새로운 바이브를 선사합니다"*

</div> 