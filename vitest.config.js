import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Global test timeout
    testTimeout: 10000,

    // Enable global APIs (describe, it, expect, etc.)
    globals: true,

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['session-9*/**/*.{js,jsx}'],
      exclude: ['**/*.test.{js,jsx}', '**/mocks/**', '**/__tests__/**'],
    },

    // CSS handling
    css: true,

    // Use projects for different test environments
    projects: [
      // Unit tests with jsdom (fast, default)
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.js'],
          include: ['**/*.test.{js,jsx,ts,tsx}'],
          exclude: ['**/*.browser.test.{js,jsx,ts,tsx}', '**/node_modules/**'],
        },
      },
      // Browser tests with Playwright (real browser)
      {
        extends: true,
        test: {
          name: 'browser',
          include: ['**/*.browser.test.{js,jsx,ts,tsx}'],
          exclude: ['**/node_modules/**'],
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
            headless: true,
          },
        },
      },
    ],
  },
});
