#!/usr/bin/env node

// Simple test script to verify CommunityClaude installation

console.log('Testing CommunityClaude installation...');

try {
  // Try to import the main module
  require('./index.js');
  console.log('✓ CommunityClaude module loaded successfully');

  // Check if required dependencies are available
  try {
    require('typescript');
    console.log('✓ TypeScript dependency found');
  } catch (e) {
    console.log('⚠ TypeScript not found - this is OK for runtime, needed for building');
  }

  console.log('\nInstallation appears to be successful!');
  console.log('\nTo run CommunityClaude:');
  console.log('1. Set your environment variables:');
  console.log('   export CLAUDE_CODE_USE_OPENAI=1');
  console.log('   export OPENAI_API_KEY=your-key-here');
  console.log('   export OPENAI_MODEL=gpt-4o');
  console.log('2. Run: bun run start');
  console.log('   or: bun run index.js');
  console.log('   or: ./bin/communityclaude');

} catch (error) {
  console.error('✗ Failed to load CommunityClaude:', error.message);
  process.exit(1);
}