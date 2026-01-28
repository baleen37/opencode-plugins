# @opencode-ai/bar-plugin

Bar plugin - 파일 편집 이벤트를 추적하는 플러그인

## 기능

- `file.edited`: 파일이 편집될 때 로그를 출력합니다.
- `tool.execute.after`: 도구 실행 후에 디버그 로그를 출력합니다.
- `session.deleted`: 세션이 삭제될 때 로그를 출력합니다.

## 설치

```bash
pnpm add @opencode-ai/bar-plugin
```

## 사용법

```typescript
import { bar } from '@opencode-ai/bar-plugin';

// OpenCode 애플리케이션에 플러그인 등록
```

## API

### bar

플러그인 함수

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| client    | Client | OpenCode 클라이언트 인스턴스 |

## License

MIT
