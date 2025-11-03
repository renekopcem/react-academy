import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TeamDirectory from './components/teamDirectory.jsx';

// Create a QueryClient instance
const queryClient = new QueryClient();

// Main content component
function TeamAppContent() {
  return (
    <div className="practice-mode session8-practice">
      <header className="practice-header">
        <h1>Team Directory - Optimized Version</h1>
        <p>
          1000 team members with performance optimizations applied! Smooth
          scrolling!
        </p>
      </header>

      <div className="practice-content">
        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>
              Profile this version in React DevTools - notice the smooth
              performance!
            </li>
            <li>Try filtering - instant response with no lag</li>
            <li>
              Click "View Details" - modal loads dynamically (check Network tab)
            </li>
            <li>Compare flame graphs - dramatically fewer renders</li>
            <li>Check bundle size - modal chunk loads separately</li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              All optimizations have been systematically applied: React.memo
              prevents unnecessary re-renders, useCallback provides stable
              function references, useMemo caches expensive calculations, and
              lazy loading reduces initial bundle size. The app now handles 1000
              items smoothly with minimal re-renders - render times reduced by
              80-90%!
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
