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
        <p>Now powered by React Query - watch queries and mutations in action!</p>
      </header>

      <div className="app-layout">
        {/* Main content */}
        <main className="main-content">
          <TeamDirectory />
        </main>
      </div>

      <footer className="app-footer session6-footer">
        <div className="practice-notes">
          <h3>🌐 React Query in Action:</h3>
          <div className="query-explanation">
            <div className="query-info">
              <h4>📡 useQuery for Fetching:</h4>
              <code>const &#123; data, isLoading, error &#125; = useQuery(...);</code>
              <p>Automatic caching, background refetching, and loading states!</p>
            </div>
            <div className="query-info">
              <h4>✏️ useMutation for Updates:</h4>
              <code>const mutation = useMutation(...);</code>
              <p>Handle POST, PUT, DELETE with automatic UI updates</p>
            </div>
            <div className="query-info">
              <h4>⚡ Cache Invalidation:</h4>
              <code>queryClient.invalidateQueries(['team-members']);</code>
              <p>Automatically refetch after mutations to keep UI in sync!</p>
            </div>
          </div>

          <ul className="exercise-list">
            <li>🛠️ Click the React Query DevTools icon (bottom-right) to inspect queries and mutations!</li>
            <li>➕ Add a new team member - see the mutation in action</li>
            <li>🗑️ Delete a team member - watch the UI update automatically</li>
            <li>🔄 Close and reopen the practice mode - notice instant data from cache!</li>
            <li>🌐 Open Browser DevTools Network tab - see real fetch requests</li>
            <li>📊 The data persists in localStorage across page refreshes!</li>
          </ul>

          <div className="concept-highlight session6-highlight">
            <h4>🧠 Key Learning:</h4>
            <p>Compare this to manual data fetching! React Query handles caching, loading states, error handling, and refetching automatically. No more useEffect spaghetti code! This is the modern way to handle server state in React applications.</p>
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
