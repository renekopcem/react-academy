import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session7Theory({ sessionId }) {
  return (
    <div className="session7-app">
      <header className="session-header">
        <h1>Session 7: Routing in React</h1>
        <p className="session-subtitle">
          Master routing with TanStack Router, understand React Router, and
          learn data preloading patterns
        </p>
        <span className="duration-badge">⏱️ 45 min</span>
      </header>

      <section className="intro-section">
        <h2>🎯 What You'll Learn</h2>
        <div className="objectives-grid">
          <div className="objective-card">
            <div className="objective-icon">🗺️</div>
            <div className="objective-content">
              <h3>Routing Fundamentals</h3>
              <p>
                Understand client-side routing, SPAs, and navigation patterns
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🔀</div>
            <div className="objective-content">
              <h3>Routing Approaches</h3>
              <p>Compare file-based vs code-based routing strategies</p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">⚡</div>
            <div className="objective-content">
              <h3>TanStack Router</h3>
              <p>Learn type-safe routing with powerful data preloading</p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">📦</div>
            <div className="objective-content">
              <h3>Data Preloading</h3>
              <p>Master route loaders and optimize data fetching</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>📚 Theory</h2>

        {/* Introduction to Routing */}
        <div className="concept-block">
          <h3>🗺️ Introduction to Routing in Web Applications</h3>
          <p>
            <strong>Routing</strong> is the mechanism that maps URLs to specific
            content or views in your application. It's the foundation of
            navigation in modern web apps.
          </p>

          <h4>Why Routing Matters in SPAs</h4>
          <p>
            In traditional <strong>Multi-Page Applications (MPAs)</strong>, each
            URL request triggers a full page reload from the server. In{' '}
            <strong>Single-Page Applications (SPAs)</strong>, routing happens
            entirely on the client side:
          </p>

          <ul className="feature-list">
            <li>✅ No full page reloads - faster navigation</li>
            <li>✅ Maintains application state during navigation</li>
            <li>✅ Provides browser history and back/forward support</li>
            <li>✅ Enables deep linking and shareable URLs</li>
            <li>✅ Improves user experience with smooth transitions</li>
          </ul>

          <div className="code-preview">
            <div className="code-header">Traditional vs SPA Navigation</div>
            <CodeBlock>{`// Traditional MPA (Multi-Page App)
// Each click triggers a full page reload
<a href="/about">About</a>  // Server request → New HTML

// Modern SPA (Single-Page App)
// JavaScript intercepts clicks and updates UI
<Link to="/about">About</Link>  // Client-side → Update DOM`}</CodeBlock>
          </div>

          <div className="info-box">
            <strong>💡 Client-Side Routing:</strong> The router listens to URL
            changes, prevents default browser behavior, and renders the
            appropriate component without a server request.
          </div>
        </div>

        {/* Types of Routing */}
        <div className="concept-block">
          <h3>🔀 Types of Routing: File-Based vs Code-Based</h3>
          <p>
            Modern routing libraries offer different approaches to defining
            routes. Understanding these patterns helps you choose the right tool
            for your project.
          </p>

          <h4>Code-Based Routing (Component-Based)</h4>
          <p>
            Routes are defined programmatically using components and JSX. This
            gives you maximum flexibility and explicit control over route
            configuration.
          </p>

          <div className="code-preview">
            <div className="code-header">Code-Based Example (React Router)</div>
            <CodeBlock>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}`}</CodeBlock>
          </div>

          <h4>File-Based Routing (Convention Over Configuration)</h4>
          <p>
            Routes are automatically generated based on your file structure.
            Each file in a special directory becomes a route, following naming
            conventions.
          </p>

          <div className="code-preview">
            <div className="code-header">
              File-Based Example (TanStack Router)
            </div>
            <CodeBlock>{`// File structure automatically creates routes:
src/routes/
  __root.tsx        → Layout wrapper for all routes
  index.tsx         → / (home page)
  about.tsx         → /about
  users/
    index.tsx       → /users
    $id.tsx         → /users/:id (dynamic param)
    $id.edit.tsx    → /users/:id/edit

// TanStack Router generates type-safe routes from this structure`}</CodeBlock>
          </div>

          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>📝 Code-Based</h4>
              <ul>
                <li>✅ Explicit and visible</li>
                <li>✅ Maximum flexibility</li>
                <li>✅ Easy to understand for beginners</li>
                <li>⚠️ Manual route definitions</li>
                <li>⚠️ Can become verbose</li>
              </ul>
            </div>
            <div className="comparison-item">
              <h4>📁 File-Based</h4>
              <ul>
                <li>✅ Automatic route generation</li>
                <li>✅ Type-safe by default</li>
                <li>✅ Co-located with components</li>
                <li>⚠️ Learning curve for conventions</li>
                <li>⚠️ Less flexible for complex cases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* More theory sections continue - TanStack Router, Data Preloading, React Query Integration */}
        <div className="concept-block">
          <h3>⚡ Overview of TanStack Router</h3>
          <p>
            <strong>TanStack Router</strong> is a modern, fully type-safe
            routing solution built by the creators of TanStack Query. It's
            designed for performance and developer experience.
          </p>
          <p>
            See full session content in practice mode for complete details on
            setup, route loaders, and React Query integration.
          </p>
        </div>
      </section>

      <section className="practice-section">
        <h2>🛠️ Time to Practice!</h2>
        <p>
          Now that you understand routing concepts, TanStack Router, and React
          Query integration, let's see it in action! You'll work with a Team
          Directory app that demonstrates:
        </p>
        <ul className="practice-list">
          <li>✅ TanStack Router for type-safe navigation</li>
          <li>
            ✅ React Query with useSuspenseQuery (instead of route loaders)
          </li>
          <li>✅ Prefetching member details on hover</li>
          <li>✅ React Query DevTools for debugging</li>
          <li>✅ MSW (Mock Service Worker) for realistic API simulation</li>
        </ul>

        <Link to="/session-7-practice" className="cta-button">
          Start Practice →
        </Link>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          💡 <strong>Note:</strong> This practice runs at a standalone route so
          you can add your own RouterProvider without conflicts with the main
          app's routing!
        </p>
      </section>
    </div>
  );
}

export default Session7Theory;
