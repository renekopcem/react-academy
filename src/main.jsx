import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import MSW mock worker (only runs in development)
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { startMockWorker } = await import('../session-6-final/mocks/browser.js');
    await startMockWorker();
  }
}

// Start MSW, then render React app
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
