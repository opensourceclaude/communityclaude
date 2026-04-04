/**
 * CommunityClaude - Use Claude Code with any LLM
 *
 * This module provides the main entry point for CommunityClaude,
 * a fork of Claude Code with OpenAI-compatible provider support.
 */

declare module 'communityclaude' {
  /**
   * Main entry point function
   */
  export function main(): Promise<void>;

  /**
   * CLI options interface
   */
  export interface CliOptions {
    /** Enable OpenAI compatibility mode */
    useOpenAI?: boolean;
    /** API key for the LLM provider */
    apiKey?: string;
    /** Model name to use */
    model?: string;
    /** Base URL for the API */
    baseUrl?: string;
  }
}

// Global declarations
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLAUDE_CODE_USE_OPENAI?: string;
      OPENAI_API_KEY?: string;
      OPENAI_MODEL?: string;
      OPENAI_BASE_URL?: string;
    }
  }
}

export {};