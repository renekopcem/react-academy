import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TeamDirectory from './components/teamDirectory.jsx';

// Create a QueryClient instance
const queryClient = new QueryClient();

// Main content component
function TeamAppContent() {
  return (
    <div className="session8-app team-app session8-practice">
      <header className="app-header">
        <h1>Team Directory - Performance Testing</h1>
        <p>1000 team members with intentional performance issues 🐢</p>
      </header>

      <div className="app-layout">
        <main className="main-content">
          <TeamDirectory />
        </main>
      </div>

      <footer className="app-footer session8-footer">
        <div className="practice-notes">
          <h3>🔍 Performance Issues to Identify:</h3>
          <div className="performance-issues">
            <div className="issue-box">
              <h4>❌ Problem 1: Unnecessary Re-renders</h4>
              <p>Components re-render even when their props haven't changed</p>
              <code>No React.memo() on TeamMember component</code>
            </div>
            <div className="issue-box">
              <h4>❌ Problem 2: Unstable Function References</h4>
              <p>New function created on every render causes child re-renders</p>
              <code>Missing useCallback() for event handlers</code>
            </div>
            <div className="issue-box">
              <h4>❌ Problem 3: Expensive Calculations</h4>
              <p>Date formatting and filtering runs on every render</p>
              <code>Missing useMemo() for expensive operations</code>
            </div>
            <div className="issue-box">
              <h4>❌ Problem 4: Large Bundle Size</h4>
              <p>Heavy modal component loads upfront</p>
              <code>No lazy loading with React.lazy()</code>
            </div>
          </div>

          <ul className="exercise-list">
            <li>🔍 <strong>Open React DevTools Profiler</strong> and record while scrolling - notice the lag!</li>
            <li>🐢 <strong>Try filtering</strong> the list - observe the choppy performance</li>
            <li>🎯 <strong>Click "View Details"</strong> on a member - see the modal load (not lazy loaded)</li>
            <li>📊 <strong>Check the Network tab</strong> - the entire bundle loads immediately</li>
            <li>🔬 <strong>Profile the flame graph</strong> - identify which components render unnecessarily</li>
          </ul>

          <div className="concept-highlight performance-warning">
            <h4>⚠️ This Version is Intentionally Broken!</h4>
            <p>
              This practice app demonstrates common performance pitfalls. With 1000 items, these issues
              become obvious. We'll systematically fix each problem and measure the improvements using
              React DevTools Profiler.
            </p>
            <p className="next-steps">
              <strong>Next:</strong> Open the session-8-final version to see all optimizations applied!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main TeamApp component that provides QueryClient
function TeamApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TeamAppContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default TeamApp;
