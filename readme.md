## 🏷️ Custom SVG Badge 사용법

이 저장소는 텍스트만으로 커스텀 뱃지를 생성할 수 있는 API를 제공합니다.

GitHub README 등에서 사용할 수 있도록 배포되었습니다.

### 사용 예시

```text
![image](https://badge-tau.vercel.app/badge?text=TypeScript)
```

#### 결과

![image](https://badge-tau.vercel.app/badge?text=TypeScript)

### 파라미터

| 파라미터 | 설명                | 기본값    |
| -------- | ------------------- | --------- |
| text     | 표시할 텍스트(필수) | "Default" |

### 배포 환경

- Framework: Next.js 15 (App Router)
- Hosting: Vercel
- 라우트 파일: app/badge/route.ts
