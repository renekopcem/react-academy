import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TeamDirectory from './components/teamDirectory.jsx';

// Create a QueryClient instance
const queryClient = new QueryClient();

// Main content component
function TeamAppContent() {
  return (
    <div className="session6-app team-app session6-practice">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p>TanStack Router + React Query Integration</p>
      </header>

      <div className="app-layout">
        {/* Main content */}
        <main className="main-content">
          <TeamDirectory />
        </main>
      </div>

      <footer className="app-footer session6-footer">
        <div className="practice-notes">
          <h3>🎯 Session 7 Practice: TanStack Router</h3>

          <div className="query-explanation">
            <div className="query-info">
              <h4>🗺️ Router Setup:</h4>
              <code>createRouter, createRoute, RouterProvider</code>
              <p>Create multiple routes with navigation: /, /members, /members/:id</p>
            </div>
            <div className="query-info">
              <h4>🔗 Navigation & Params:</h4>
              <code>Link, useParams(), useNavigate()</code>
              <p>Type-safe routing with parameters and programmatic navigation</p>
            </div>
            <div className="query-info">
              <h4>⚡ React Query + Suspense:</h4>
              <code>useSuspenseQuery + Suspense boundaries</code>
              <p>Automatic loading states and data prefetching on hover</p>
            </div>
          </div>

          <ul className="exercise-list">
            <li>🗺️ Navigate between Home, Members list, and Member detail pages</li>
            <li>🎨 Hover over member cards - see prefetching in action (check DevTools)</li>
            <li>🔙 Use browser back/forward - notice instant navigation from cache</li>
            <li>🔍 Open React Query DevTools to watch cache updates</li>
            <li>🛠️ Open TanStack Router DevTools to inspect route tree and params</li>
            <li>⚡ Navigate to a member, go back, then forward - zero loading time!</li>
          </ul>

          <div className="concept-highlight session6-highlight">
            <h4>🧠 Key Learning: Modern Router + Data Fetching</h4>
            <p><strong>TanStack Router Pattern:</strong> Set up routes with <code>createRoute()</code>, use <code>Link</code> components
            for navigation, and leverage <code>useParams()</code> for dynamic route parameters. Combine with <code>useSuspenseQuery</code>
            to fetch data inside route components - Suspense boundaries handle loading states automatically.</p>
            <p className="highlight-subtext">
              ⚡ <strong>Performance:</strong> Prefetch queries on hover using <code>queryClient.prefetchQuery()</code>.
              React Query's cache ensures instant navigation when moving back/forward. The router provides the structure,
              React Query handles the data - together they create a seamless, fast user experience!
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
