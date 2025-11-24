import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
// This adds matchers like toBeInTheDocument(), toHaveTextContent(), etc.
expect.extend(matchers);

// Cleanup after each test to prevent memory leaks
// This unmounts React components and clears the DOM
afterEach(() => {
  cleanup();
});

// MSW Server Setup for API Mocking
// Only setup MSW if we're running session-9 tests
let server;

beforeAll(async () => {
  try {
    // Dynamically import MSW server only for session-9 tests
    const serverModule = await import('./session-9-final/mocks/server.js');
    server = serverModule.server;
    server.listen({ onUnhandledRequest: 'warn' });
  } catch {
    // MSW server not available - that's ok for non-session-9 tests
  }
});

afterEach(() => {
  if (server) {
    server.resetHandlers();
  }
});

afterAll(() => {
  if (server) {
    server.close();
  }
});
