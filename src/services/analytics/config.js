// Stub for analytics/config.js
// Minimal implementation for analytics configuration

export function isAnalyticsDisabled() {
  return process.env.DISABLE_ANALYTICS === 'true';
}

export function getAnalyticsConfig() {
  return {
    enabled: !isAnalyticsDisabled(),
    endpoint: process.env.ANALYTICS_ENDPOINT || 'https://analytics.example.com',
    apiKey: process.env.ANALYTICS_API_KEY || null
  };
}

export default {
  isAnalyticsDisabled,
  getAnalyticsConfig
};