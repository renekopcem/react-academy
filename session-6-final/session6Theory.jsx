import { Link } from '@tanstack/react-router';

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
        <p className="intro-text">Learn how to fetch, cache, and synchronize server data with React Query (TanStack Query):</p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>What is React Query?</h3>
              <p>Understand the difference between client state and server state</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">📡</div>
            <div className="objective-content">
              <h3>Queries</h3>
              <p>Fetch data with useQuery and handle loading, error, and success states</p>
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
              <p>Fetching data with <strong>useState + useEffect</strong> gets complex quickly:</p>
              <div className="code-preview">
                <code>
                  <span className="comment">// Traditional approach - lots of boilerplate!</span><br/>
                  <span className="keyword">const</span> [data, setData] = <span className="function">useState</span>(<span className="keyword">null</span>);<br/>
                  <span className="keyword">const</span> [isLoading, setIsLoading] = <span className="function">useState</span>(<span className="boolean">true</span>);<br/>
                  <span className="keyword">const</span> [error, setError] = <span className="function">useState</span>(<span className="keyword">null</span>);<br/><br/>
                  <span className="function">useEffect</span>(() =&gt; &#123;<br/>
                  &nbsp;&nbsp;<span className="keyword">async function</span> <span className="function">fetchData</span>() &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">try</span> &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> response = <span className="keyword">await</span> <span className="function">fetch</span>(<span className="string">'/api/data'</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> json = <span className="keyword">await</span> response.<span className="function">json</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">setData</span>(json);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="keyword">catch</span> (err) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">setError</span>(err);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="keyword">finally</span> &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">setIsLoading</span>(<span className="boolean">false</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &nbsp;&nbsp;<span className="function">fetchData</span>();<br/>
                  &#125;, []);
                </code>
              </div>
              <p><strong>Problems:</strong> No caching, no refetching, no background updates, lots of repetitive code!</p>
            </div>

            <div className="concept-block">
              <h3>⚡ Enter React Query!</h3>
              <p>React Query handles all the complexity for you:</p>
              <div className="code-preview">
                <code>
                  <span className="comment">// With React Query - so much simpler!</span><br/>
                  <span className="keyword">import</span> &#123; useQuery &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-query'</span>;<br/><br/>
                  <span className="keyword">const</span> &#123; data, isLoading, error &#125; = <span className="function">useQuery</span>(&#123;<br/>
                  &nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'team-members'</span>],<br/>
                  &nbsp;&nbsp;<span className="property">queryFn</span>: <span className="keyword">async</span> () =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> response = <span className="keyword">await</span> <span className="function">fetch</span>(<span className="string">'/api/team-members'</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> response.<span className="function">json</span>();<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;);
                </code>
              </div>
              <p><strong>Benefits:</strong> Automatic caching, background refetching, loading & error states built-in!</p>
            </div>

            <div className="concept-block">
              <h3>📡 Queries - Fetching Data</h3>
              <p><strong>useQuery</strong> is for reading data (GET requests):</p>

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

              <div className="code-preview">
                <code>
                  <span className="keyword">const</span> &#123; data, isLoading, error, refetch &#125; = <span className="function">useQuery</span>(&#123;<br/>
                  &nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'team-members'</span>], <span className="comment">// Unique identifier</span><br/>
                  &nbsp;&nbsp;<span className="property">queryFn</span>: fetchTeamMembers, <span className="comment">// Function that returns a Promise</span><br/>
                  &nbsp;&nbsp;<span className="property">staleTime</span>: <span className="number">5000</span>, <span className="comment">// Data fresh for 5 seconds</span><br/>
                  &nbsp;&nbsp;<span className="property">refetchOnWindowFocus</span>: <span className="boolean">true</span> <span className="comment">// Refetch when user returns</span><br/>
                  &#125;);<br/><br/>
                  <span className="keyword">if</span> (isLoading) <span className="keyword">return</span> <span className="string">&lt;Loading /&gt;</span>;<br/>
                  <span className="keyword">if</span> (error) <span className="keyword">return</span> <span className="string">&lt;Error /&gt;</span>;<br/>
                  <span className="keyword">return</span> <span className="string">&lt;div&gt;&#123;data.map(...)&#125;&lt;/div&gt;</span>;
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>✏️ Mutations - Updating Data</h3>
              <p><strong>useMutation</strong> is for modifying data (POST, PUT, DELETE):</p>
              <div className="code-preview">
                <code>
                  <span className="keyword">const</span> queryClient = <span className="function">useQueryClient</span>();<br/><br/>
                  <span className="keyword">const</span> mutation = <span className="function">useMutation</span>(&#123;<br/>
                  &nbsp;&nbsp;<span className="property">mutationFn</span>: <span className="keyword">async</span> (newMember) =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> response = <span className="keyword">await</span> <span className="function">fetch</span>(<span className="string">'/api/team-members'</span>, &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">method</span>: <span className="string">'POST'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">headers</span>: &#123; <span className="string">'Content-Type'</span>: <span className="string">'application/json'</span> &#125;,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">body</span>: JSON.<span className="function">stringify</span>(newMember)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> response.<span className="function">json</span>();<br/>
                  &nbsp;&nbsp;&#125;,<br/>
                  &nbsp;&nbsp;<span className="property">onSuccess</span>: () =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// Invalidate queries to refetch fresh data</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;queryClient.<span className="function">invalidateQueries</span>(&#123; <span className="property">queryKey</span>: [<span className="string">'team-members'</span>] &#125;);<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;);<br/><br/>
                  <span className="comment">// Use the mutation</span><br/>
                  mutation.<span className="function">mutate</span>(&#123; <span className="property">name</span>: <span className="string">'John'</span>, <span className="property">role</span>: <span className="string">'Developer'</span> &#125;);
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>⚡ Cache Invalidation</h3>
              <p>After mutations, tell React Query to refetch:</p>
              <div className="comparison-grid">
                <div className="comparison-before">
                  <h4>❌ Without Invalidation</h4>
                  <div className="code-preview">
                    <code>
                      <span className="comment">// Data is stale!</span><br/>
                      <span className="keyword">await</span> <span className="function">addMember</span>(newMember);<br/>
                      <span className="comment">// UI still shows old data</span>
                    </code>
                  </div>
                </div>
                <div className="comparison-after">
                  <h4>✅ With Invalidation</h4>
                  <div className="code-preview">
                    <code>
                      <span className="keyword">await</span> <span className="function">addMember</span>(newMember);<br/>
                      queryClient.<span className="function">invalidateQueries</span>(&#123;<br/>
                      &nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'team-members'</span>]<br/>
                      &#125;);<br/>
                      <span className="comment">// Fresh data automatically refetched!</span>
                    </code>
                  </div>
                </div>
              </div>
              <p><strong>Result:</strong> UI always stays in sync with server!</p>
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
