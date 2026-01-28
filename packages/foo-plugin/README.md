# @opencode-ai/foo-plugin

Foo plugin - 간단한 인사 및 로깅 예제 플러그인

## 기능

- `session.created`: 새로운 세션이 생성될 때 로그를 출력합니다.
- `tool.execute.before`: 도구 실행 전에 디버그 로그를 출력합니다.

## 설치

```bash
pnpm add @opencode-ai/foo-plugin
```

## 사용법

```typescript
import { foo } from '@opencode-ai/foo-plugin';

// OpenCode 애플리케이션에 플러그인 등록
```

## API

### foo

플러그인 함수

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| client    | Client | OpenCode 클라이언트 인스턴스 |

## License

MIT
