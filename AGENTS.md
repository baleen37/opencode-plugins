# OpenCode Plugins - Agent Guidelines

## Project Overview

TypeScript monorepo for OpenCode plugins using the @opencode-ai/plugin framework.

## Essential Commands

### Build & Development

- `npm run build` - Build all packages
- `npm run dev` - Watch mode for development
- `npm run clean` - Remove dist directories

### Type Checking

- `npm run check` - Run TypeScript type checking (no emit)
- `cd packages/{plugin-name} && tsc --noEmit` - Type check specific package

### Linting

- `npm run lint` - No linter currently configured

### Testing

- No test framework is configured yet. When adding tests, ask Jiho which framework to use.

## Code Style Guidelines

### TypeScript Configuration

- Target: ESNext with ES modules
- Strict mode enabled
- Declaration files generated for all exports
- Use `import type { X }` for type-only imports

### Imports

- Use ES modules syntax (`import/export`)
- Type-only imports: `import type { Plugin } from "@opencode-ai/plugin";`
- All dependencies use @opencode-ai/\* namespace

### Naming Conventions

- Plugin packages: `@opencode-ai/{plugin-name}`
- Plugin exports: use the plugin name (e.g., `export const foo: Plugin`)
- Variables: camelCase (e.g., `eventType`, `toolName`)
- Unused parameters: prefix with `_` (e.g., `_input`, `_output`)

### File Structure

- Source code in `src/` directory
- Build output to `dist/` directory
- Each package has its own package.json with consistent scripts

### Plugin Implementation

Plugins must export a `Plugin` function that:

1. Accepts `{ client }` parameter
2. Initializes by logging plugin startup
3. Returns handlers for events (e.g., `event`, `tool.execute.before`, `tool.execute.after`)
4. Uses async/await for all async operations
5. Logs through `client.app.log({ body: { service, level, message } })`

### Comments & Documentation

- Use JSDoc comments for plugin descriptions (Korean)
- Keep comments concise and informative
- Focus on WHAT and WHY, not temporal context

### Error Handling

- Use async/await consistently
- No explicit error handling patterns observed - follow Plugin API conventions

### Package.json Scripts

Each package must have these scripts:

- `build`: `tsc`
- `dev`: `tsc --watch`
- `check`: `tsc --noEmit`
- `clean`: `rm -rf dist`
- `lint`: (currently no linter)

## Development Workflow

1. Work in `packages/{plugin-name}/src/`
2. Use `npm run dev` for watch compilation
3. Run `npm run check` before committing
4. Follow existing plugin patterns (foo-plugin, bar-plugin) as templates
