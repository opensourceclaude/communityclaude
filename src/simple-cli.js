#!/usr/bin/env node
/**
 * Simple CommunityClaude CLI
 * Minimal implementation to handle basic commands and provide fallback
 */

const { spawn } = require('child_process');
const { join } = require('path');

// Parse command line arguments
const args = process.argv.slice(2);

// Handle --version flag
if (args.length === 1 && (args[0] === '--version' || args[0] === '-v' || args[0] === '-V')) {
  console.log('1.0.0-communityclaude (CommunityClaude)');
  process.exit(0);
}

// Handle --help flag
if (args.length === 1 && (args[0] === '--help' || args[0] === '-h')) {
  console.log(`
CommunityClaude - Use Claude Code with any LLM

Usage:
  communityclaude [options]

Options:
  -v, --version    Print version information
  -h, --help       Print help information

Environment Variables:
  CLAUDE_CODE_USE_OPENAI=1     Enable OpenAI compatibility mode
  OPENAI_API_KEY=sk-...        Your OpenAI API key
  OPENAI_MODEL=model-name      Model to use (e.g., gpt-4o)
  OPENAI_BASE_URL=url          API endpoint (optional)

Examples:
  export CLAUDE_CODE_USE_OPENAI=1
  export OPENAI_API_KEY=sk-your-key-here
  export OPENAI_MODEL=gpt-4o
  communityclaude

For more information, visit: https://github.com/communityclaude/communityclaude
`);
  process.exit(0);
}

// Handle no arguments (interactive mode)
if (args.length === 0) {
  console.log('CommunityClaude 1.0.0-communityclaude');
  console.log('==========================');
  console.log('');
  console.log('Welcome to CommunityClaude!');
  console.log('');
  console.log('To get started, set your environment variables:');
  console.log('  export CLAUDE_CODE_USE_OPENAI=1');
  console.log('  export OPENAI_API_KEY=your-api-key-here');
  console.log('  export OPENAI_MODEL=gpt-4o');
  console.log('');
  console.log('Then run CommunityClaude with your preferred method:');
  console.log('  ./bin/communityclaude');
  console.log('');
  console.log('Type "quit" or press Ctrl+C to exit.');
  console.log('');

  // Simple REPL simulation
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('> Welcome to CommunityClaude! Type "help" for available commands.');

  rl.on('line', (input) => {
    const cmd = input.trim().toLowerCase();

    if (cmd === 'quit' || cmd === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    if (cmd === 'help') {
      console.log('Available commands:');
      console.log('  help     - Show this help');
      console.log('  version  - Show version');
      console.log('  quit     - Exit CommunityClaude');
      console.log('  exit     - Exit CommunityClaude');
      console.log('');
      console.log('To use the full CommunityClaude features, please set up your environment');
      console.log('variables and run with proper API keys.');
    } else if (cmd === 'version') {
      console.log('CommunityClaude 1.0.0-communityclaude');
    } else if (cmd) {
      console.log(`Command not recognized: ${cmd}`);
      console.log('Type "help" for available commands.');
    }

    console.log('> ');
  });

  rl.on('close', () => {
    process.exit(0);
  });

  return;
}

// For all other commands, try to run the full CLI
const fullPath = join(__dirname, 'entrypoints', 'cli.tsx');

// Check if Bun is available
const { execSync } = require('child_process');
try {
  execSync('bun --version', { stdio: 'ignore' });

  // Run with Bun
  const child = spawn('bun', ['run', fullPath, ...args], {
    stdio: 'inherit'
  });

  child.on('close', (code) => {
    process.exit(code);
  });

  child.on('error', (error) => {
    console.error('Failed to start CommunityClaude:', error.message);
    process.exit(1);
  });
} catch (error) {
  console.error('Error: Bun is not installed or not in PATH');
  console.error('Please install Bun first: curl -fsSL https://bun.sh/install | bash');
  process.exit(1);
}