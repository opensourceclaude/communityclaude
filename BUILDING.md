# Building CommunityClaude

This document explains how to build CommunityClaude from source.

## Prerequisites

Before building CommunityClaude, ensure you have:

1. **Bun** (version 1.0 or higher) - https://bun.sh/
2. Git (for cloning the repository)

## Building from Source

### 1. Clone the Repository

```bash
git clone <repository-url>
cd communityclaude
```

### 2. Install Dependencies

Using Bun:
```bash
bun install
```

### 3. Build the Project

Using Bun:
```bash
bun run build
```

This will compile all TypeScript files to JavaScript in the `dist/` directory.

## Build Process Details

The build process:

1. Cleans the `dist/` directory
2. Compiles TypeScript files using the TypeScript compiler
3. Generates type declaration files (.d.ts)
4. Creates source maps for debugging
5. Makes the CLI entry point executable

## Development Workflow

### Running in Development Mode

To run directly from TypeScript source without building:

```bash
bun run dev
```

This command will:
1. Check for available runtimes (Bun preferred)
2. Run the CLI directly from source files

### Testing Installation

To verify that the installation works correctly:

```bash
bun run test-install
```

## Directory Structure After Build

```
communityclaude/
├── dist/                  # Compiled JavaScript files
│   ├── entrypoints/
│   │   └── cli.js         # Main CLI entry point
│   └── ...                # Other compiled files
├── src/                   # Source TypeScript files
├── bin/                   # Executable scripts
├── scripts/               # Development scripts
├── index.js              # Main entry point
└── package.json          # Package manifest
```

## Customizing the Build

### TypeScript Configuration

The build process uses `tsconfig.json` for configuration. You can modify:

- `target`: JavaScript version to compile to
- `outDir`: Output directory for compiled files
- `module`: Module system to use
- `declaration`: Whether to generate type declarations

### Adding New Build Targets

To add new build targets, modify the `scripts` section in `package.json`:

```json
{
  "scripts": {
    "build": "bun run tsc",
    "build:watch": "bun run tsc --watch",
    "build:prod": "bun run tsc --project tsconfig.prod.json"
  }
}
```

## Troubleshooting Builds

### Common Build Issues

1. **TypeScript not found**: Install TypeScript globally:
   ```bash
   bun add -g typescript
   ```

2. **Compilation errors**: Check TypeScript version compatibility:
   ```bash
   bun run tsc --version
   ```

3. **Permission errors**: Ensure you have write permissions to the project directory.

4. **Memory issues**: For large projects, increase Bun memory:
   ```bash
   export BUN_MAX_MEMORY=4096
   bun run build
   ```

### Clean Builds

To perform a clean build:

```bash
bun run clean
bun run build
```

This removes the `dist/` directory and rebuilds from scratch.

## Publishing

To publish to npm:

1. Update the version in `package.json`
2. Run the build
3. Publish to npm:
   ```bash
   npm publish
   ```

The publishing process will include all files specified in the `files` array in `package.json`.