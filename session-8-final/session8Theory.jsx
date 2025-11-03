import { Link } from '@tanstack/react-router';

function Session8Theory({ sessionId }) {
  return (
    <div className="session8-app">
      <header className="session-header">
        <h1>Session 8: Performance Optimization</h1>
        <p className="session-subtitle">
          Master React memoization techniques, profiling tools, and code splitting for blazing fast applications
        </p>
        <span className="duration-badge">⏱️ 45 min</span>
      </header>

      <section className="intro-section">
        <h2>🎯 What You'll Learn</h2>
        <div className="objectives-grid">
          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>Understanding Re-renders</h3>
              <p>Learn when and why React components re-render and how to identify performance bottlenecks</p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">💾</div>
            <div className="objective-content">
              <h3>Memoization Techniques</h3>
              <p>Master useMemo, useCallback, and React.memo to prevent unnecessary re-renders</p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🔍</div>
            <div className="objective-content">
              <h3>Profiling & Debugging</h3>
              <p>Use React DevTools Profiler and Chrome Performance tools to find performance issues</p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">📦</div>
            <div className="objective-content">
              <h3>Code Splitting & Lazy Loading</h3>
              <p>Reduce bundle size with dynamic imports, lazy(), and Suspense</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>📚 Theory</h2>

        {/* Understanding Re-renders */}
        <div className="concept-block">
          <h3>🔄 Understanding React Re-renders</h3>
          <p>
            React components re-render when their <strong>state</strong> or <strong>props</strong> change.
            While React is fast, unnecessary re-renders can cause performance issues, especially with large component trees or expensive calculations.
          </p>

          <h4>When Does a Component Re-render?</h4>
          <ul className="feature-list">
            <li>✅ State changes (useState, useReducer)</li>
            <li>✅ Props change</li>
            <li>✅ Parent component re-renders</li>
            <li>✅ Context value changes</li>
            <li>✅ Force update (rare, usually avoided)</li>
          </ul>

          <div className="info-box warning">
            <h4>⚠️ Common Performance Problem</h4>
            <p>
              Child components re-render even when their props haven't changed, simply because their parent re-rendered.
              With 1000 list items, this can cause visible lag!
            </p>
          </div>

          <div className="code-preview">
            <div className="code-header">Example: Unnecessary Re-renders</div>
            <pre><code>
              <span className="keyword">function</span> <span className="function">ParentComponent</span>() {"{"}<br/>
              {"  "}<span className="keyword">const</span> [count, setCount] = <span className="function">useState</span>(<span className="number">0</span>);<br/><br/>
              {"  "}<span className="comment">// ❌ New function created on every render</span><br/>
              {"  "}<span className="keyword">const</span> handleClick = () =&gt; {"{"}<br/>
              {"    "}<span className="function">console.log</span>(<span className="string">'clicked'</span>);<br/>
              {"  "}{"}"};  <br/><br/>
              {"  "}<span className="comment">// Child re-renders even though props haven't changed!</span><br/>
              {"  "}<span className="keyword">return</span> <span className="tag">&lt;ChildComponent</span> <span className="attr-name">onClick</span>=<span className="punctuation">{"{"}</span>handleClick<span className="punctuation">{"}"}</span> <span className="tag">/&gt;</span>;<br/>
              {"}"}
            </code></pre>
          </div>
        </div>

        {/* Memoization Techniques */}
        <div className="concept-block">
          <h3>💾 Memoization: React.memo, useMemo, useCallback</h3>
          <p>
            <strong>Memoization</strong> is an optimization technique that caches the result of expensive operations
            and reuses them when inputs haven't changed. React provides three main memoization tools:
          </p>

          <h4>1. React.memo() - Memoize Components</h4>
          <p>
            Wraps a component and prevents re-renders if props haven't changed (shallow comparison).
          </p>

          <div className="code-preview">
            <div className="code-header">React.memo Example</div>
            <pre><code>
              <span className="comment">// ❌ Before: Re-renders every time parent renders</span><br/>
              <span className="keyword">function</span> <span className="function">TeamMember</span>({"{"} member {"}"}) {"{"}<br/>
              {"  "}<span className="keyword">return</span> <span className="tag">&lt;div&gt;</span>{"{"}{" member.name "}{"}"}<span className="tag">&lt;/div&gt;</span>;<br/>
              {"}"}<br/><br/>
              <span className="comment">// ✅ After: Only re-renders if props change</span><br/>
              <span className="keyword">const</span> TeamMember = <span className="variable">React</span>.<span className="function">memo</span>(<span className="keyword">function</span> <span className="function">TeamMember</span>({"{"} member {"}"}) {"{"}<br/>
              {"  "}<span className="keyword">return</span> <span className="tag">&lt;div&gt;</span>{"{"}{" member.name "}{"}"}<span className="tag">&lt;/div&gt;</span>;<br/>
              {"}"});
            </code></pre>
          </div>

          <h4>2. useMemo() - Memoize Expensive Calculations</h4>
          <p>
            Caches the result of expensive computations and only recalculates when dependencies change.
          </p>

          <div className="code-preview">
            <div className="code-header">useMemo Example</div>
            <pre><code>
              <span className="comment">// ❌ Before: Runs every render (expensive!)</span><br/>
              <span className="keyword">const</span> filtered = members.<span className="function">filter</span>(m =&gt; <span className="function">expensiveCheck</span>(m));<br/><br/>
              <span className="comment">// ✅ After: Only runs when members or filter changes</span><br/>
              <span className="keyword">const</span> filtered = <span className="function">useMemo</span>(() =&gt; {"{"}<br/>
              {"  "}<span className="keyword">return</span> members.<span className="function">filter</span>(m =&gt; <span className="function">expensiveCheck</span>(m));<br/>
              {"}"}, [members, filter]);
            </code></pre>
          </div>

          <h4>3. useCallback() - Memoize Functions</h4>
          <p>
            Returns a memoized version of a function that only changes when dependencies change.
            Critical for passing stable function references to child components.
          </p>

          <div className="code-preview">
            <div className="code-header">useCallback Example</div>
            <pre><code>
              <span className="comment">// ❌ Before: New function every render</span><br/>
              <span className="keyword">const</span> handleDelete = (id) =&gt; {"{"} <span className="function">deleteMember</span>(id) {"}"};<br/><br/>
              <span className="comment">// ✅ After: Same function reference unless deps change</span><br/>
              <span className="keyword">const</span> handleDelete = <span className="function">useCallback</span>((id) =&gt; {"{"}<br/>
              {"  "}<span className="function">deleteMember</span>(id);<br/>
              {"}"}, [deleteMember]);
            </code></pre>
          </div>

          <div className="info-box tip">
            <h4>💡 When to Use What?</h4>
            <ul>
              <li><strong>React.memo</strong>: Wrap child components that receive props</li>
              <li><strong>useMemo</strong>: Cache expensive calculations or filtered/sorted data</li>
              <li><strong>useCallback</strong>: Stabilize function references passed as props</li>
            </ul>
          </div>
        </div>

        {/* Additional sections truncated for brevity - see full session theory in original file */}
        <div className="concept-block">
          <h3>🔍 Profiling and Debugging Performance</h3>
          <p>
            Don't guess - measure! React and Chrome provide powerful tools to identify performance bottlenecks.
          </p>
          <p>Use React DevTools Profiler and Chrome Performance tab to find and fix performance issues.</p>
        </div>

        <div className="concept-block">
          <h3>📦 Code Splitting and Lazy Loading</h3>
          <p>
            <strong>Code splitting</strong> breaks your app into smaller chunks that load on demand,
            reducing initial bundle size and improving load time.
          </p>
          <p>Use React.lazy() and Suspense for lazy loading components.</p>
        </div>

        <div className="concept-block">
          <h3>✨ Performance Best Practices</h3>
          <ul className="feature-list">
            <li>✅ Use production build for deployment</li>
            <li>✅ Profile before optimizing</li>
            <li>✅ Memoize expensive calculations with useMemo</li>
            <li>✅ Stabilize function refs with useCallback</li>
            <li>✅ Wrap pure components with React.memo</li>
            <li>✅ Code split large features and routes</li>
            <li>✅ Lazy load heavy components</li>
            <li>✅ Consider virtual scrolling for 1000+ items</li>
          </ul>
        </div>
      </section>

      <section className="practice-section">
        <h2>💻 Hands-on Practice</h2>
        <p>
          In the practice session, you'll work with a team directory containing <strong>1000 members</strong> that has
          significant performance issues. We'll use React DevTools Profiler to identify problems, then systematically
          apply optimizations:
        </p>
        <ul className="practice-list">
          <li>🐢 Experience the sluggish, unoptimized version</li>
          <li>🔍 Profile and identify performance bottlenecks</li>
          <li>⚡ Apply React.memo to prevent unnecessary re-renders</li>
          <li>💾 Use useCallback and useMemo for optimization</li>
          <li>📦 Implement lazy loading for a heavy modal</li>
          <li>✨ See the dramatic performance improvement!</li>
        </ul>
        <Link
          to="/sessions/$id/practice"
          params={{ id: sessionId }}
          className="start-practice-btn"
        >
          Start Practice Session →
        </Link>
      </section>
    </div>
  );
}

export default Session8Theory;
