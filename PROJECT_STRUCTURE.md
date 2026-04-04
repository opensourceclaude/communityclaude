# CommunityClaude Project Structure

This document describes the directory structure and organization of the CommunityClaude project.

## Root Directory

```
communityclaude/
├── bin/                 # Executable scripts
├── dist/                # Compiled output (created during build)
├── scripts/             # Development and utility scripts
├── src/                 # Source code
├── .gitignore           # Git ignore rules
├── BUILDING.md          # Build instructions
├── index.js             # Main entry point
├── index.d.ts           # TypeScript declarations
├── INSTALL.md           # Installation guide
├── LICENSE              # License information
├── package.json         # Package manifest
├── PROJECT_STRUCTURE.md # This file
├── README.md            # Project overview
├── test-install.js      # Installation verification script
└── tsconfig.json        # TypeScript configuration
```

## Source Code Structure (src/)

The `src/` directory contains all the TypeScript source code organized by functionality:

```
src/
├── assistant/           # Assistant-related functionality
├── bootstrap/           # Application bootstrap code
├── bridge/              # Bridge mode functionality for remote control
├── buddy/               # Companion/buddy features
├── cli/                 # Command-line interface components
├── commands/            # Individual command implementations
├── components/          # UI components
├── constants/           # Constant values and configuration
├── context/             # Context management
├── coordinator/         # Coordination logic
├── entrypoints/         # Application entry points
├── hooks/               # React-style hooks
├── ink/                 # Terminal UI library
├── keybindings/         # Keyboard shortcut handling
├── memdir/              # Memory directory functionality
├── migrations/          # Data migration scripts
├── moreright/           # Additional functionality
├── native-ts/           # Native TypeScript modules
├── outputStyles/        # Output styling
├── plugins/             # Plugin system
├── query/               # Query engine components
├── remote/              # Remote execution functionality
├── schemas/             # Data schemas
├── screens/             # Screen definitions
├── server/              # Server components
├── services/            # Service layers (API, auth, etc.)
├── skills/              # Skill implementations
├── state/               # State management
├── tasks/               # Task management
├── tools/               # Tool implementations
├── types/               # TypeScript type definitions
├── upstreamproxy/       # Proxy functionality
├── utils/               # Utility functions
├── vim/                 # Vim mode functionality
└── voice/               # Voice interaction features
```

## Entry Points

### Main Entry Point
- `src/entrypoints/cli.tsx` - Primary CLI entry point

### Binary Scripts
- `bin/communityclaude` - Executable script for running CommunityClaude

## Build Output (dist/)

After building, the `dist/` directory will contain:

```
dist/
├── entrypoints/
│   └── cli.js          # Compiled CLI entry point
├── src/                # Compiled source files maintaining directory structure
└── tsconfig.tsbuildinfo # TypeScript build information
```

## Configuration Files

- `package.json` - Node.js package manifest
- `tsconfig.json` - TypeScript compiler configuration
- `.gitignore` - Files and directories to ignore in Git

## Documentation Files

- `README.md` - Project overview and quick start guide
- `INSTALL.md` - Detailed installation instructions
- `BUILDING.md` - Build process documentation
- `PROJECT_STRUCTURE.md` - This file
- `LICENSE` - License information

## Development Scripts

- `scripts/dev.js` - Development mode launcher
- `test-install.js` - Installation verification script

## Key Directories Explained

### src/commands/
Contains individual command implementations. Each command typically has:
- `index.ts` - Command registration and metadata
- `command-name.ts` - Main command implementation
- Additional supporting files as needed

### src/tools/
Contains implementations of individual tools that CommunityClaude can use:
- File system operations (read, write, edit)
- Search operations (grep, glob)
- Network operations (web fetch, web search)
- Process execution (bash commands)
- And many more specialized tools

### src/services/
Higher-level service implementations:
- API clients
- Authentication services
- Model management
- Policy enforcement
- And other cross-cutting concerns

### src/utils/
Utility functions organized by category:
- Authentication utilities
- Configuration management
- Model selection and management
- File and path utilities
- String and data manipulation
- And various other helper functions

## Naming Conventions

- **Files**: Use kebab-case for file names (e.g., `cli.tsx`, `auth-utils.ts`)
- **Directories**: Use kebab-case for directory names (e.g., `entrypoints/`, `keybindings/`)
- **Components**: Use PascalCase for React components (e.g., `TerminalView.tsx`)
- **Utilities**: Use camelCase for utility functions (e.g., `formatMessage.ts`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (e.g., `MAX_RETRIES`)

## Module Organization

Modules are typically organized with:
1. An `index.ts` file that exports the public API
2. Implementation files containing the actual logic
3. Type definition files (`.d.ts`) when needed
4. Test files (`.test.ts`) when tests are included

This structure allows for clear separation of concerns while maintaining discoverability and maintainability.