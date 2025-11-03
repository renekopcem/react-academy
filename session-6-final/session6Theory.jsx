import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session6Theory({ sessionId }) {
  return (
    <div className="session6-app">
      <header className="session-header session6-header">
        <div className="header-content">
          <h1>React Academy - Session 6</h1>
          <p className="session-subtitle">Data Fetching with React Query</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section session6-intro">
        <h2>🌐 Master Server State Management!</h2>
        <p className="intro-text">
          Learn how to fetch, cache, and synchronize server data with React
          Query (TanStack Query):
        </p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>What is React Query?</h3>
              <p>
                Understand the difference between client state and server state
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">📡</div>
            <div className="objective-content">
              <h3>Queries</h3>
              <p>
                Fetch data with useQuery and handle loading, error, and success
                states
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">✏️</div>
            <div className="objective-content">
              <h3>Mutations</h3>
              <p>Update server data with useMutation (POST, PUT, DELETE)</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">⚡</div>
            <div className="objective-content">
              <h3>Cache Management</h3>
              <p>Invalidate and refetch queries for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section session6-theory">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>

          <div className="concept-blocks">
            <div className="concept-block">
              <h3>🤔 The Server State Problem</h3>
              <p>
                Fetching data with <strong>useState + useEffect</strong> gets
                complex quickly:
              </p>
              <CodeBlock>{`// Traditional approach - lots of boilerplate!
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  fetchData();
}, []);`}</CodeBlock>
              <p>
                <strong>Problems:</strong> No caching, no refetching, no
                background updates, lots of repetitive code!
              </p>
            </div>

            <div className="concept-block">
              <h3>⚡ Enter React Query!</h3>
              <p>React Query handles all the complexity for you:</p>
              <CodeBlock>{`// With React Query - so much simpler!
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['team-members'],
  queryFn: async () => {
    const response = await fetch('/api/team-members');
    return response.json();
  }
});`}</CodeBlock>
              <p>
                <strong>Benefits:</strong> Automatic caching, background
                refetching, loading & error states built-in!
              </p>
            </div>

            <div className="concept-block">
              <h3>📡 Queries - Fetching Data</h3>
              <p>
                <strong>useQuery</strong> is for reading data (GET requests):
              </p>

              <div className="query-flow-diagram">
                <div className="flow-step">
                  <div className="flow-box query-box">
                    <div className="flow-label">Component Mounts</div>
                    <code>useQuery starts</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box loading-box">
                    <div className="flow-label">isLoading: true</div>
                    <code>Show loading state</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box success-box">
                    <div className="flow-label">Success</div>
                    <code>data available</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box cache-box">
                    <div className="flow-label">Cached</div>
                    <code>Instant on remount!</code>
                  </div>
                </div>
              </div>

              <CodeBlock>{`const { data, isLoading, error, refetch } = useQuery({
  queryKey: ['team-members'], // Unique identifier
  queryFn: fetchTeamMembers, // Function that returns a Promise
  staleTime: 5000, // Data fresh for 5 seconds
  refetchOnWindowFocus: true // Refetch when user returns
});

if (isLoading) return <Loading />;
if (error) return <Error />;
return <div>{data.map(...)}</div>;`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>✏️ Mutations - Updating Data</h3>
              <p>
                <strong>useMutation</strong> is for modifying data (POST, PUT,
                DELETE):
              </p>
              <CodeBlock>{`const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: async (newMember) => {
    const response = await fetch('/api/team-members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMember)
    });
    return response.json();
  },
  onSuccess: () => {
    // Invalidate queries to refetch fresh data
    queryClient.invalidateQueries({ queryKey: ['team-members'] });
  }
});

// Use the mutation
mutation.mutate({ name: 'John', role: 'Developer' });`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>⚡ Cache Invalidation</h3>
              <p>After mutations, tell React Query to refetch:</p>
              <div className="comparison-grid">
                <div className="comparison-before">
                  <h4>❌ Without Invalidation</h4>
                  <CodeBlock>{`// Data is stale!
await addMember(newMember);
// UI still shows old data`}</CodeBlock>
                </div>
                <div className="comparison-after">
                  <h4>✅ With Invalidation</h4>
                  <CodeBlock>{`await addMember(newMember);
queryClient.invalidateQueries({
  queryKey: ['team-members']
});
// Fresh data automatically refetched!`}</CodeBlock>
                </div>
              </div>
              <p>
                <strong>Result:</strong> UI always stays in sync with server!
              </p>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to build with React Query?</h3>
            <p>Let's create a Team Directory with real API calls!</p>
            <Link
              to="/sessions/$id/practice"
              params={{ id: sessionId }}
              className="start-practice-btn"
            >
              Start Building 🚀
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Session6Theory;
