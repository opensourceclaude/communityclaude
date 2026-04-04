# Installation Guide for CommunityClaude

## Prerequisites

Before installing CommunityClaude, you'll need to have **Bun** (version 1.0 or higher) installed:

### Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Bun is a fast JavaScript toolkit that includes a package manager, test runner, and bundler all in one. It's the recommended way to run CommunityClaude.

## Installing CommunityClaude

### Method 1: Install from npm (using Bun)

```bash
bun install -g communityclaude
```

### Method 2: Install from Source

1. Clone the repository:
```bash
git clone <repository-url>
cd communityclaude
```

2. Install dependencies:
```bash
bun install
```

3. Build the project:
```bash
bun run build
```

4. Link globally (optional):
```bash
bun link
```

## Verifying Installation

After installation, you can verify that CommunityClaude is properly installed:

```bash
# Test the installation
bun run test-install.js

# Or if installed globally:
communityclaude --version
```

## Running CommunityClaude

### With OpenAI
```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_API_KEY=sk-your-openai-key-here
export OPENAI_MODEL=gpt-4o

communityclaude
```

### With Ollama (local models)
```bash
# First install Ollama and pull a model:
# ollama pull llama3.3:70b

export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL=http://localhost:11434/v1
export OPENAI_MODEL=llama3.3:70b

communityclaude
```

## Development Workflow

For development, you can run CommunityClaude directly from source without building:

```bash
bun run dev
```

This will automatically detect the best runtime environment and run the application.

## Troubleshooting

### Common Issues

1. **Command not found**: Make sure you've added Bun's global bin directory to your PATH:
   ```bash
   export PATH=~/.bun/bin:$PATH
   ```

2. **Permission errors**: Run with sudo if needed:
   ```bash
   sudo bun install -g communityclaude
   ```

3. **Runtime not found**: Install Bun as described above.

### Need Help?

If you encounter any issues, please check:
- The README.md file for general usage instructions
- The GitHub issues page for known problems
- The CommunityClaude Discord for community support