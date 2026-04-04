# CommunityClaude

Use Claude Code with **any LLM** — not just Claude.

CommunityClaude is a fork of the [Claude Code source leak](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code) (exposed via npm source maps on March 31, 2026). We added an OpenAI-compatible provider shim so you can plug in GPT-4o, DeepSeek, Gemini, Llama, Mistral, or any model that speaks the OpenAI chat completions API.

All of Claude Code's tools work — bash, file read/write/edit, grep, glob, agents, tasks, MCP — just powered by whatever model you choose.

## Installation

### Prerequisites

- Bun (version 1.0 or higher) - https://bun.sh/
- An API key for your chosen LLM provider

### Install from npm

```bash
bun install -g communityclaude
```

### Install from source

```bash
git clone <repository-url>
cd communityclaude
bun install
bun run build
bun link
```

## Quick Start

### 1. Set 3 environment variables

#### OpenAI
```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_API_KEY=sk-your-key-here
export OPENAI_MODEL=gpt-4o
```

#### Ollama (local, free)
```bash
# First install Ollama and pull a model:
# ollama pull llama3.3:70b

export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL=http://localhost:11434/v1
export OPENAI_MODEL=llama3.3:70b
# no API key needed for local models
```

### 2. Run CommunityClaude

```bash
communityclaude
```

That's it. The tool system, streaming, file editing, multi-step reasoning — everything works through the model you picked.

## Development

### Building from source

```bash
bun run build
```

### Running in development mode

```bash
bun run dev
```

## Provider Examples

See the full README for examples of using with DeepSeek, Google Gemini, Together AI, Groq, Mistral, and Azure OpenAI.

## License

This repository is provided for educational and research purposes. The original source code is subject to Anthropic's terms. The OpenAI shim additions are public domain.