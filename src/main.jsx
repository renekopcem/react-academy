import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { router } from './router';
import './styles/global.css';

// Import MSW mock worker (only runs in development)
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { startMockWorker } = await import('./mocks/browser.js');
    await startMockWorker();
  }
}

// Start MSW, then render React app
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
    </React.StrictMode>
  );
});
