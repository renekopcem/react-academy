import { setupWorker } from 'msw/browser';
import { handlers } from './handlers.js';

// Set up the Service Worker with our request handlers
export const worker = setupWorker(...handlers);

// Start the worker with options
export async function startMockWorker() {
  if (import.meta.env.DEV) {
    await worker.start({
      onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
      quiet: false, // Show MSW logs in console
    });
    console.log('🔧 MSW: Mock API worker started');
  }
}
