#!/usr/bin/env node

// This is the main entry point for CommunityClaude
// It bootstraps the application and handles command line arguments

// Dynamically import the CLI entry point
async function main() {
  try {
    // If we're running from the built distribution
    if (process.env.NODE_ENV === 'production') {
      const cli = require('./entrypoints/cli.js');
      await cli.main();
    } else {
      // If we're running from source (development)
      // Bun can directly run TypeScript files
      const cli = require('./src/entrypoints/cli.tsx');
      await cli.main();
    }
  } catch (error) {
    console.error('Failed to start CommunityClaude:', error.message);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the application
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };