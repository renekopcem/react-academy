import { setupServer } from 'msw/node';
import { handlers } from './handlers.js';

// Create and export the MSW server for Node.js environments
// This server intercepts network requests during tests
export const server = setupServer(...handlers);
