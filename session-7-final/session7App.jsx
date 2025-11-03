import { useState } from "react";
import TeamApp from "./teamApp.jsx";

function Session7App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <button onClick={() => setShowPractice(false)}>
            ← Back to Theory
          </button>
          <h2>Hands-on Practice: TanStack Router + React Query</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return (
    <div className="session7-app">
      <header className="session-header">
        <h1>Session 7: Routing in React</h1>
        <p className="session-subtitle">
          Master routing with TanStack Router, understand React Router, and learn data preloading patterns
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
              <p>Understand client-side routing, SPAs, and navigation patterns</p>
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
            <strong>Routing</strong> is the mechanism that maps URLs to specific content or views in your application.
            It's the foundation of navigation in modern web apps.
          </p>

          <h4>Why Routing Matters in SPAs</h4>
          <p>
            In traditional <strong>Multi-Page Applications (MPAs)</strong>, each URL request triggers a full page reload
            from the server. In <strong>Single-Page Applications (SPAs)</strong>, routing happens entirely on the client side:
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
            <pre><code>
              <span className="comment">// Traditional MPA (Multi-Page App)</span><br/>
              <span className="comment">// Each click triggers a full page reload</span><br/>
              <span className="tag">&lt;a</span> <span className="attr-name">href</span>=<span className="string">"/about"</span><span className="tag">&gt;</span>About<span className="tag">&lt;/a&gt;</span>  <span className="comment">// Server request → New HTML</span><br/><br/>
              <span className="comment">// Modern SPA (Single-Page App)</span><br/>
              <span className="comment">// JavaScript intercepts clicks and updates UI</span><br/>
              <span className="tag">&lt;Link</span> <span className="attr-name">to</span>=<span className="string">"/about"</span><span className="tag">&gt;</span>About<span className="tag">&lt;/Link&gt;</span>  <span className="comment">// Client-side → Update DOM</span>
            </code></pre>
          </div>

          <div className="info-box">
            <strong>💡 Client-Side Routing:</strong> The router listens to URL changes, prevents
            default browser behavior, and renders the appropriate component without a server request.
          </div>
        </div>

        {/* Types of Routing */}
        <div className="concept-block">
          <h3>🔀 Types of Routing: File-Based vs Code-Based</h3>
          <p>
            Modern routing libraries offer different approaches to defining routes. Understanding these
            patterns helps you choose the right tool for your project.
          </p>

          <h4>Code-Based Routing (Component-Based)</h4>
          <p>
            Routes are defined programmatically using components and JSX. This gives you maximum
            flexibility and explicit control over route configuration.
          </p>

          <div className="code-preview">
            <div className="code-header">Code-Based Example (React Router)</div>
            <pre><code>
              <span className="keyword">import</span> &#123; BrowserRouter, Routes, Route &#125; <span className="keyword">from</span> <span className="string">'react-router-dom'</span>;<br/><br/>
              <span className="keyword">function</span> <span className="function">App</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;BrowserRouter&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Routes&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Route</span> <span className="attr-name">path</span>=<span className="string">"/"</span> <span className="attr-name">element</span>=&#123;<span className="tag">&lt;Home</span> /<span className="tag">&gt;</span>&#125; <span className="tag">/&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Route</span> <span className="attr-name">path</span>=<span className="string">"/about"</span> <span className="attr-name">element</span>=&#123;<span className="tag">&lt;About</span> /<span className="tag">&gt;</span>&#125; <span className="tag">/&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Route</span> <span className="attr-name">path</span>=<span className="string">"/users/:id"</span> <span className="attr-name">element</span>=&#123;<span className="tag">&lt;UserProfile</span> /<span className="tag">&gt;</span>&#125; <span className="tag">/&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/Routes&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/BrowserRouter&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code></pre>
          </div>

          <h4>File-Based Routing (Convention Over Configuration)</h4>
          <p>
            Routes are automatically generated based on your file structure. Each file in a special
            directory becomes a route, following naming conventions.
          </p>

          <div className="code-preview">
            <div className="code-header">File-Based Example (TanStack Router)</div>
            <pre><code>
              <span className="comment">// File structure automatically creates routes:</span><br/>
              src/routes/<br/>
              &nbsp;&nbsp;__root.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Layout wrapper <span className="keyword">for</span> all routes<br/>
              &nbsp;&nbsp;index.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ / (home page)<br/>
              &nbsp;&nbsp;about.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ /about<br/>
              &nbsp;&nbsp;users/<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;index.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ /users<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;$id.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ /users/:id (dynamic param)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;$id.edit.tsx&nbsp;&nbsp;&nbsp;&nbsp;→ /users/:id/edit<br/><br/>
              <span className="comment">// TanStack Router generates type-safe routes from this structure</span>
            </code></pre>
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

        {/* TanStack Router Overview */}
        <div className="concept-block">
          <h3>⚡ Overview of TanStack Router</h3>
          <p>
            <strong>TanStack Router</strong> is a modern, fully type-safe routing solution built by
            the creators of TanStack Query. It's designed for performance and developer experience.
          </p>

          <h4>Key Features</h4>
          <ul className="feature-list">
            <li>🔒 <strong>Type Safety:</strong> Full TypeScript support with autocomplete for routes and params</li>
            <li>📦 <strong>Data Preloading:</strong> Load data before rendering components</li>
            <li>🎯 <strong>Route Loaders:</strong> Define data requirements per route</li>
            <li>⚡ <strong>Code Splitting:</strong> Automatic lazy loading of route components</li>
            <li>🔄 <strong>Search Params:</strong> Type-safe query string handling</li>
            <li>🛡️ <strong>Route Guards:</strong> Authentication and authorization built-in</li>
          </ul>

          <h4>Installation</h4>
          <div className="code-preview">
            <div className="code-header">Terminal</div>
            <pre><code>{`npm install @tanstack/react-router

# Optional: Router DevTools
npm install @tanstack/router-devtools`}</code></pre>
          </div>

          <h4>Basic Setup</h4>
          <div className="code-preview">
            <div className="code-header">src/main.jsx</div>
            <pre><code>
              <span className="keyword">import</span> &#123; StrictMode &#125; <span className="keyword">from</span> <span className="string">'react'</span>;<br/>
              <span className="keyword">import</span> &#123; createRoot &#125; <span className="keyword">from</span> <span className="string">'react-dom/client'</span>;<br/>
              <span className="keyword">import</span> &#123; RouterProvider, createRouter &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/>
              <span className="keyword">import</span> &#123; routeTree &#125; <span className="keyword">from</span> <span className="string">'./routeTree.gen'</span>;<br/><br/>
              <span className="comment">// Create router instance</span><br/>
              <span className="keyword">const</span> router = <span className="function">createRouter</span>(&#123; routeTree &#125;);<br/><br/>
              <span className="function">createRoot</span>(<span className="property">document</span>.<span className="function">getElementById</span>(<span className="string">'root'</span>)).<span className="function">render</span>(<br/>
              &nbsp;&nbsp;<span className="tag">&lt;StrictMode&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;RouterProvider</span> <span className="attr-name">router</span>=&#123;router&#125; <span className="tag">/&gt;</span><br/>
              &nbsp;&nbsp;<span className="tag">&lt;/StrictMode&gt;</span><br/>
              );
            </code></pre>
          </div>

          <h4>Creating Routes</h4>
          <div className="code-preview">
            <div className="code-header">src/routes/__root.tsx</div>
            <pre><code>
              <span className="keyword">import</span> &#123; createRootRoute, Outlet, Link &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/><br/>
              <span className="keyword">export const</span> Route = <span className="function">createRootRoute</span>(&#123;<br/>
              &nbsp;&nbsp;<span className="property">component</span>: () <span className="keyword">=&gt;</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;nav&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Link</span> <span className="attr-name">to</span>=<span className="string">"/"</span><span className="tag">&gt;</span>Home<span className="tag">&lt;/Link&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Link</span> <span className="attr-name">to</span>=<span className="string">"/about"</span><span className="tag">&gt;</span>About<span className="tag">&lt;/Link&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/nav&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;hr</span> /<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Outlet</span> /<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/div&gt;</span><br/>
              &nbsp;&nbsp;),<br/>
              &#125;);
            </code></pre>
          </div>

          <div className="code-preview">
            <div className="code-header">src/routes/index.tsx</div>
            <pre><code>
              <span className="keyword">import</span> &#123; createFileRoute &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/><br/>
              <span className="keyword">export const</span> Route = <span className="function">createFileRoute</span>(<span className="string">'/'</span>)(&#123;<br/>
              &nbsp;&nbsp;<span className="property">component</span>: HomePage,<br/>
              &#125;);<br/><br/>
              <span className="keyword">function</span> <span className="function">HomePage</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> <span className="tag">&lt;h1&gt;</span>Welcome Home!<span className="tag">&lt;/h1&gt;</span>;<br/>
              &#125;
            </code></pre>
          </div>
        </div>

        {/* Data Preloading */}
        <div className="concept-block highlight-block">
          <h3>📦 Data Preloading with Route Loaders</h3>
          <p>
            One of the most powerful features of modern routing is <strong>data preloading</strong>.
            Instead of fetching data after a component renders, route loaders fetch data <em>before</em>
            navigation completes.
          </p>

          <h4>Why Preload Data?</h4>
          <ul className="feature-list">
            <li>🚀 <strong>Better UX:</strong> Show complete pages instantly, no loading spinners</li>
            <li>⚡ <strong>Parallel Loading:</strong> Fetch data and code split components simultaneously</li>
            <li>🎯 <strong>Error Handling:</strong> Catch errors before rendering the page</li>
            <li>🔄 <strong>Revalidation:</strong> Keep data fresh with background refetching</li>
          </ul>

          <h4>TanStack Router Loaders</h4>
          <p>
            Define a <code>loader</code> function in your route that fetches data. The router
            calls this before rendering the component.
          </p>

          <div className="code-preview">
            <div className="code-header">src/routes/users/$id.tsx</div>
            <pre><code>
              <span className="keyword">import</span> &#123; createFileRoute &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/><br/>
              <span className="keyword">export const</span> Route = <span className="function">createFileRoute</span>(<span className="string">'/users/$id'</span>)(&#123;<br/>
              &nbsp;&nbsp;<span className="comment">// Loader runs before component renders</span><br/>
              &nbsp;&nbsp;<span className="property">loader</span>: <span className="keyword">async</span> (&#123; params &#125;) <span className="keyword">=&gt;</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> response = <span className="keyword">await</span> <span className="function">fetch</span>(<span className="string">`/api/users/$&#123;params.id&#125;`</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> response.<span className="function">json</span>();<br/>
              &nbsp;&nbsp;&#125;,<br/><br/>
              &nbsp;&nbsp;<span className="comment">// Component receives preloaded data</span><br/>
              &nbsp;&nbsp;<span className="property">component</span>: UserProfile,<br/>
              &#125;);<br/><br/>
              <span className="keyword">function</span> <span className="function">UserProfile</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">const</span> &#123; id &#125; = Route.<span className="function">useParams</span>();<br/>
              &nbsp;&nbsp;<span className="keyword">const</span> user = Route.<span className="function">useLoaderData</span>();  <span className="comment">// Data is already loaded!</span><br/><br/>
              &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;h1&gt;</span>&#123;user.name&#125;<span className="tag">&lt;/h1&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;p&gt;</span>&#123;user.email&#125;<span className="tag">&lt;/p&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/div&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code></pre>
          </div>

          <h4>Pending States</h4>
          <p>Show loading UI while data is being fetched:</p>

          <div className="code-preview">
            <div className="code-header">Handling Loading States</div>
            <pre><code>
              <span className="keyword">import</span> &#123; useMatch &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/><br/>
              <span className="keyword">function</span> <span className="function">UserProfile</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">const</span> match = <span className="function">useMatch</span>(<span className="string">'/users/$id'</span>);<br/><br/>
              &nbsp;&nbsp;<span className="keyword">if</span> (match.status === <span className="string">'pending'</span>) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="tag">&lt;div&gt;</span>Loading user...<span className="tag">&lt;/div&gt;</span>;<br/>
              &nbsp;&nbsp;&#125;<br/><br/>
              &nbsp;&nbsp;<span className="keyword">const</span> user = Route.<span className="function">useLoaderData</span>();<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> <span className="tag">&lt;div&gt;</span>&#123;user.name&#125;<span className="tag">&lt;/div&gt;</span>;<br/>
              &#125;
            </code></pre>
          </div>

          <h4>Preloading on Hover</h4>
          <p>
            TanStack Router can start loading data when users hover over links, making
            navigation feel instant:
          </p>

          <div className="code-preview">
            <div className="code-header">Smart Link Preloading</div>
            <pre><code>
              <span className="keyword">import</span> &#123; Link &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/><br/>
              <span className="keyword">function</span> <span className="function">UserList</span>(&#123; users &#125;) &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;ul&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;users.<span className="function">map</span>(user <span className="keyword">=&gt;</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;li</span> <span className="attr-name">key</span>=&#123;user.id&#125;<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Link</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">to</span>=<span className="string">"/users/$id"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">params</span>=&#123;&#123; id: user.id &#125;&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">preload</span>=<span className="string">"intent"</span>  <span className="comment">// Preload on hover!</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;user.name&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/Link&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/li&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/ul&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code></pre>
          </div>

          <div className="info-box">
            <strong>💡 Preload Strategies:</strong>
            <ul>
              <li><code>preload="intent"</code> - Load on hover/focus</li>
              <li><code>preload="render"</code> - Load when link appears on screen</li>
              <li><code>preload={false}</code> - Disable preloading</li>
            </ul>
          </div>

          <h4>Before Load Hooks</h4>
          <p>
            Use <code>beforeLoad</code> for authentication checks, redirects, or setting up context:
          </p>

          <div className="code-preview">
            <div className="code-header">Protected Routes</div>
            <pre><code>
              <span className="keyword">export const</span> Route = <span className="function">createFileRoute</span>(<span className="string">'/dashboard'</span>)(&#123;<br/>
              &nbsp;&nbsp;<span className="property">beforeLoad</span>: <span className="keyword">async</span> (&#123; context &#125;) <span className="keyword">=&gt;</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (!context.auth.isAuthenticated) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">throw</span> <span className="function">redirect</span>(&#123; <span className="property">to</span>: <span className="string">'/login'</span> &#125;);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;&#125;,<br/><br/>
              &nbsp;&nbsp;<span className="property">loader</span>: <span className="keyword">async</span> (&#123; context &#125;) <span className="keyword">=&gt;</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// This only runs if user is authenticated</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="function">fetchDashboardData</span>(context.auth.user.id);<br/>
              &nbsp;&nbsp;&#125;,<br/>
              &#125;);
            </code></pre>
          </div>
        </div>

        {/* React Query Integration */}
        <div className="concept-block highlight-block">
          <h3>🔄 Integrating React Query with TanStack Router</h3>
          <p>
            TanStack Router and React Query are designed to work together! The <strong>recommended approach</strong> is
            to use <strong>route loaders to populate the React Query cache</strong>, then use <code>useSuspenseQuery</code> in
            components to access that cached data with automatic Suspense integration.
          </p>

          <h4>Why Combine Route Loaders + React Query?</h4>
          <ul className="feature-list">
            <li>🎯 <strong>Guaranteed Data:</strong> Route loaders ensure data is ready before navigation completes</li>
            <li>💾 <strong>Smart Caching:</strong> React Query caches data across routes - navigate back = instant</li>
            <li>🔄 <strong>Background Refetching:</strong> Keep data fresh without blocking navigation</li>
            <li>⚡ <strong>Optimistic Updates:</strong> Mutations automatically update cache and UI</li>
            <li>🎨 <strong>Clean Components:</strong> useSuspenseQuery eliminates loading state boilerplate</li>
          </ul>

          <h4>Pattern 1: Route Loader Populates React Query Cache</h4>
          <p>
            The <strong>best practice</strong> is to use route loaders with <code>queryClient.ensureQueryData()</code>.
            This populates the cache during navigation, so components can use <code>useSuspenseQuery</code> to read it:
          </p>

          <div className="code-preview">
            <div className="code-header">Route with React Query loader</div>
            <pre><code>
              <span className="keyword">import</span> &#123; createRoute &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-router'</span>;<br/>
              <span className="keyword">import</span> &#123; queryClient &#125; <span className="keyword">from</span> <span className="string">'./queryClient'</span>;<br/><br/>
              <span className="keyword">export const</span> membersRoute = <span className="function">createRoute</span>(&#123;<br/>
              &nbsp;&nbsp;<span className="property">path</span>: <span className="string">'/members'</span>,<br/><br/>
              &nbsp;&nbsp;<span className="comment">// Loader populates React Query cache</span><br/>
              &nbsp;&nbsp;<span className="property">loader</span>: () <span className="keyword">=&gt;</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;queryClient.<span className="function">ensureQueryData</span>(&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'members'</span>],<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryFn</span>: fetchMembers,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;),<br/><br/>
              &nbsp;&nbsp;<span className="comment">// Component reads from cache with Suspense</span><br/>
              &nbsp;&nbsp;<span className="property">component</span>: MembersPage,<br/>
              &#125;);
            </code></pre>
          </div>

          <h4>Pattern 2: Component Uses useSuspenseQuery</h4>
          <p>
            In the component, use <code>useSuspenseQuery</code> to read the cached data. Because the loader
            already populated the cache, this will return instantly without any loading delay:
          </p>

          <div className="code-preview">
            <div className="code-header">Component with useSuspenseQuery</div>
            <pre><code>
              <span className="keyword">import</span> &#123; useSuspenseQuery &#125; <span className="keyword">from</span> <span className="string">'@tanstack/react-query'</span>;<br/><br/>
              <span className="keyword">function</span> <span className="function">MembersPage</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="comment">// Data is already in cache from loader - instant!</span><br/>
              &nbsp;&nbsp;<span className="keyword">const</span> &#123; data: members &#125; = <span className="function">useSuspenseQuery</span>(&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'members'</span>],<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryFn</span>: fetchMembers,<br/>
              &nbsp;&nbsp;&#125;);<br/><br/>
              &nbsp;&nbsp;<span className="comment">// No loading states needed - data is always available!</span><br/>
              &nbsp;&nbsp;<span className="keyword">return</span> <span className="tag">&lt;MemberList</span> <span className="attr-name">members</span>=&#123;members&#125; <span className="tag">/&gt;</span>;<br/>
              &#125;
            </code></pre>
          </div>

          <h4>Pattern 3: Prefetching on Hover</h4>
          <p>
            Combine router navigation with React Query prefetching for the best user experience.
            Prefetch data when hovering over links:
          </p>

          <div className="code-preview">
            <div className="code-header">Prefetching with onMouseEnter</div>
            <pre><code>
              <span className="keyword">function</span> <span className="function">MemberCard</span>(&#123; member &#125;) &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">const</span> queryClient = <span className="function">useQueryClient</span>();<br/><br/>
              &nbsp;&nbsp;<span className="keyword">const</span> <span className="function">prefetchMember</span> = () <span className="keyword">=&gt;</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;queryClient.<span className="function">prefetchQuery</span>(&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'member'</span>, member.id],<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryFn</span>: () <span className="keyword">=&gt;</span> <span className="function">fetchMember</span>(member.id),<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br/>
              &nbsp;&nbsp;&#125;;<br/><br/>
              &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Link</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">to</span>=<span className="string">"/members/$memberId"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">params</span>=&#123;&#123; memberId: member.id &#125;&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr-name">onMouseEnter</span>=&#123;prefetchMember&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;member.name&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/Link&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code></pre>
          </div>

          <h4>Pattern 4: Mutations Update Cache Across Routes</h4>
          <p>
            React Query mutations work seamlessly with routing. When you add/delete data, React Query
            automatically updates all components reading from that cache, regardless of which route they're on:
          </p>

          <div className="code-preview">
            <div className="code-header">Mutation with automatic cache updates</div>
            <pre><code>
              <span className="keyword">const</span> deleteMutation = <span className="function">useMutation</span>(&#123;<br/>
              &nbsp;&nbsp;<span className="property">mutationFn</span>: (id) <span className="keyword">=&gt;</span> <span className="function">fetch</span>(<span className="string">`/api/members/$&#123;id&#125;`</span>, &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">method</span>: <span className="string">'DELETE'</span><br/>
              &nbsp;&nbsp;&#125;),<br/>
              &nbsp;&nbsp;<span className="property">onSuccess</span>: () <span className="keyword">=&gt;</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// Invalidate cache - all routes will refetch</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;queryClient.<span className="function">invalidateQueries</span>(&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'members'</span>]<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br/>
              &nbsp;&nbsp;&#125;,<br/>
              &#125;);
            </code></pre>
          </div>

          <h4>Complete Setup Example</h4>
          <div className="code-preview">
            <div className="code-header">Full integration pattern</div>
            <pre><code>
              <span className="comment">// 1. Create QueryClient</span><br/>
              <span className="keyword">const</span> queryClient = <span className="keyword">new</span> <span className="function">QueryClient</span>();<br/><br/>
              <span className="comment">// 2. Route with loader using ensureQueryData</span><br/>
              <span className="keyword">const</span> memberRoute = <span className="function">createRoute</span>(&#123;<br/>
              &nbsp;&nbsp;<span className="property">path</span>: <span className="string">'/members/$memberId'</span>,<br/>
              &nbsp;&nbsp;<span className="property">loader</span>: (&#123; params &#125;) <span className="keyword">=&gt;</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;queryClient.<span className="function">ensureQueryData</span>(&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryKey</span>: [<span className="string">'member'</span>, params.memberId],<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">queryFn</span>: () <span className="keyword">=&gt;</span> <span className="function">fetchMember</span>(params.memberId),<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;),<br/>
              &nbsp;&nbsp;<span className="property">component</span>: MemberDetail,<br/>
              &#125;);<br/><br/>
              <span className="comment">// 3. Wrap router with QueryClientProvider + Suspense</span><br/>
              <span className="keyword">function</span> <span className="function">App</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;QueryClientProvider</span> <span className="attr-name">client</span>=&#123;queryClient&#125;<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Suspense</span> <span className="attr-name">fallback</span>=&#123;<span className="tag">&lt;Loading</span> /<span className="tag">&gt;</span>&#125;<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;RouterProvider</span> <span className="attr-name">router</span>=&#123;router&#125; <span className="tag">/&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/Suspense&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;ReactQueryDevtools</span> /<span className="tag">&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/QueryClientProvider&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code></pre>
          </div>

          <div className="info-box">
            <h4>✨ Benefits of This Pattern</h4>
            <ul>
              <li>✅ <strong>No loading flicker:</strong> Route loaders guarantee data before navigation</li>
              <li>✅ <strong>Instant back/forward:</strong> React Query cache persists across route changes</li>
              <li>✅ <strong>Clean components:</strong> useSuspenseQuery eliminates loading state logic</li>
              <li>✅ <strong>Automatic updates:</strong> Mutations propagate to all components reading that data</li>
              <li>✅ <strong>Better UX:</strong> Prefetching makes navigation feel instant</li>
              <li>✅ <strong>Background refetching:</strong> Data stays fresh without blocking the UI</li>
            </ul>
            <p className="highlight-text">
              <strong>Key Insight:</strong> Route loaders handle the "first load", React Query handles
              caching, refetching, and mutations. Together they create the optimal data-loading experience!
            </p>
          </div>
        </div>

      </section>

      <section className="practice-section">
        <h2>🛠️ Time to Practice!</h2>
        <p>
          Now that you understand routing concepts, TanStack Router, and React Query integration, let's see
          it in action! You'll work with a Team Directory app that demonstrates:
        </p>
        <ul className="practice-list">
          <li>✅ TanStack Router for type-safe navigation</li>
          <li>✅ React Query with useSuspenseQuery (instead of route loaders)</li>
          <li>✅ Prefetching member details on hover</li>
          <li>✅ React Query DevTools for debugging</li>
          <li>✅ MSW (Mock Service Worker) for realistic API simulation</li>
        </ul>
        <button className="cta-button" onClick={() => setShowPractice(true)}>
          Start Practice →
        </button>
      </section>
    </div>
  );
}

export default Session7App;
