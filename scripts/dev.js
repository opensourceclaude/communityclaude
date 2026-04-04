#!/usr/bin/env node

// Development script to run CommunityClaude
// Uses simple CLI by default with option to run full CLI

const { spawn } = require('child_process');

function main() {
  console.log('Starting CommunityClaude in development mode...\n');

  // Parse arguments
  const args = process.argv.slice(2);

  // By default, use the simple CLI which is more reliable
  console.log('Using simple CLI (more reliable for development)...');

  const cli = spawn('bun', ['run', 'src/simple-cli.js', ...args], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  cli.on('close', (code) => {
    process.exit(code);
  });

  cli.on('error', (error) => {
    console.error('Failed to start CommunityClaude simple CLI:', error.message);
    process.exit(1);
  });
}

// Check if Bun is available
function checkBun() {
  try {
    require('child_process').execSync('bun --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

if (require.main === module) {
  if (!checkBun()) {
    console.error('Error: Bun is not installed.');
    console.error('Please install Bun first: curl -fsSL https://bun.sh/install | bash');
    process.exit(1);
  }
  main();
}