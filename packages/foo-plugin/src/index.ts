import type { Plugin } from '@opencode-ai/plugin';

/**
 * Foo plugin - 간단한 인사 및 로깅 예제 플러그인
 */
export const foo: Plugin = async ({ client }) => {
  await client.app.log({
    body: {
      service: 'foo-plugin',
      level: 'info',
      message: 'Foo plugin initialized',
    },
  });

  return {
    event: async ({ event }) => {
      const eventType = event.type;
      if (eventType === 'session.created') {
        await client.app.log({
          body: {
            service: 'foo-plugin',
            level: 'info',
            message: 'Foo: New session created',
          },
        });
      }
    },

    'tool.execute.before': async (_input, _output) => {
      const toolName = _input.tool;
      await client.app.log({
        body: {
          service: 'foo-plugin',
          level: 'debug',
          message: `Foo: Tool "${toolName}" is about to execute`,
        },
      });
    },
  };
};
