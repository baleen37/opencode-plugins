import type { Plugin } from '@opencode-ai/plugin';

/**
 * Bar plugin - 파일 편집 이벤트를 추적하는 플러그인
 */
export const bar: Plugin = async ({ client }) => {
  await client.app.log({
    body: {
      service: 'bar-plugin',
      level: 'info',
      message: 'Bar plugin initialized',
    },
  });

  return {
    event: async ({ event }) => {
      const eventType = event.type;
      if (eventType === 'session.deleted') {
        await client.app.log({
          body: {
            service: 'bar-plugin',
            level: 'info',
            message: 'Bar: Session deleted',
          },
        });
      }
    },

    'tool.execute.after': async (_input, _output) => {
      const toolName = _input.tool;
      await client.app.log({
        body: {
          service: 'bar-plugin',
          level: 'debug',
          message: `Bar: Tool "${toolName}" executed`,
        },
      });
    },
  };
};
