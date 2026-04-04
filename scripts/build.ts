#!/usr/bin/env bun
/**
 * Build script for CommunityClaude
 *
 * This script creates a simplified build that can run the core functionality
 * without bundling all the complex dependencies.
 */

import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

async function main() {
  console.log("Building CommunityClaude (minimal build)...");

  // Create dist directory if it doesn't exist
  try {
    await mkdir("dist", { recursive: true });
  } catch (error) {
    // Directory might already exist
  }

  // Create a simple executable wrapper
  const cliWrapper = `#!/usr/bin/env node
/**
 * CommunityClaude CLI Wrapper
 * This is a minimal wrapper to run CommunityClaude
 */

const { spawn } = require('child_process');
const { join, dirname } = require('path');
const { fileURLToPath } = require('url');

// Get the directory of this script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the main entry point
const mainPath = join(__dirname, '..', 'src', 'entrypoints', 'cli.tsx');

// Run with Bun
const child = spawn('bun', ['run', mainPath], {
  stdio: 'inherit',
  cwd: join(__dirname, '..')
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Failed to start CommunityClaude:', error.message);
  console.error('Please make sure Bun is installed: https://bun.sh');
  process.exit(1);
});
`;

  // Write the CLI wrapper as an MJS file
  await writeFile("dist/cli.mjs", cliWrapper);

  // Make it executable
  const { chmod } = await import("fs/promises");
  await chmod("dist/cli.mjs", 0o755);

  console.log("Created dist/cli.mjs (minimal executable wrapper)");
  console.log("Build complete! You can now run:");
  console.log("  ./bin/communityclaude --version");
  console.log("  ./bin/communityclaude --help");
}

if (import.meta.main) {
  main().catch(console.error);
}