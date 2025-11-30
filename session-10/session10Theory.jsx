import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session10Theory({ sessionId }) {
  return (
    <div className="session10-app">
      <header className="session-header">
        <h1>Session 10: Modern React Patterns</h1>
        <p className="session-subtitle">
          Master React 19 hooks, Actions, Error Handling, and understand Server
          Components
        </p>
        <span className="duration-badge">45 min</span>
      </header>

      <section className="intro-section">
        <h2>What You'll Learn</h2>
        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🪝</div>
            <div className="objective-content">
              <h3>React 19 Hooks</h3>
              <p>
                useActionState, useOptimistic, useFormStatus, and the use hook
                for modern patterns
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">⚡</div>
            <div className="objective-content">
              <h3>Actions Pattern</h3>
              <p>
                Async form handling with automatic pending states and error
                management
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🛡️</div>
            <div className="objective-content">
              <h3>Error Handling</h3>
              <p>
                Error Boundaries, error callbacks, and graceful degradation
                patterns
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🌐</div>
            <div className="objective-content">
              <h3>Server Components</h3>
              <p>
                Conceptual understanding of RSC architecture and when to use
                them
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>Theory</h2>

          <div className="concept-blocks">
            {/* useActionState */}
            <div className="concept-block">
              <h3>useActionState - Form State Made Simple</h3>
              <p>
                <strong>useActionState</strong> is a new React 19 hook that
                combines form state, async actions, pending states, and error
                handling into a single, elegant API. It replaces the common
                pattern of using multiple useState hooks for form handling.
              </p>

              <h4>The Problem It Solves</h4>
              <p>
                Before React 19, handling form submissions required managing
                multiple pieces of state:
              </p>

              <CodeBlock>{`// Before: Multiple useState calls needed
function AddMemberForm() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const formData = new FormData(e.target);
      await saveMember(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" disabled={isPending} />
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}`}</CodeBlock>

              <h4>The Solution: useActionState</h4>
              <CodeBlock>{`// After: One hook handles everything!
import { useActionState } from 'react';

function AddMemberForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get('name');

      // Validation
      if (!name) return 'Name is required';

      // Async operation
      const result = await saveMember({ name });
      if (result.error) return result.error;

      return null; // Success - no error
    },
    null // Initial state (no error)
  );

  return (
    <form action={submitAction}>
      <input name="name" disabled={isPending} />
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}`}</CodeBlock>

              <div className="info-box tip">
                <h4>Key Benefits</h4>
                <ul>
                  <li>
                    <strong>Less boilerplate</strong> - No more managing
                    loading/error states manually
                  </li>
                  <li>
                    <strong>Form action</strong> - Works with the native form
                    action attribute
                  </li>
                  <li>
                    <strong>Automatic pending</strong> - isPending tracks async
                    operation status
                  </li>
                  <li>
                    <strong>Progressive enhancement</strong> - Forms can work
                    before JavaScript loads
                  </li>
                </ul>
              </div>
            </div>

            {/* useOptimistic */}
            <div className="concept-block">
              <h3>useOptimistic - Instant UI Feedback</h3>
              <p>
                <strong>useOptimistic</strong> lets you show an optimistic state
                while an async operation is in progress. The UI updates
                immediately, giving users instant feedback, then reconciles with
                the actual result when the operation completes.
              </p>

              <h4>Why Optimistic Updates?</h4>
              <ul className="feature-list">
                <li>Users see immediate feedback (feels faster)</li>
                <li>No loading spinners for common operations</li>
                <li>Automatic rollback if the operation fails</li>
                <li>Better perceived performance</li>
              </ul>

              <CodeBlock>{`import { useOptimistic } from 'react';

function MessageList({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    // Update function: how to merge optimistic value with current state
    (currentMessages, newMessage) => [
      ...currentMessages,
      { ...newMessage, sending: true }
    ]
  );

  async function handleSend(formData) {
    const text = formData.get('message');

    // Immediately show the message with "sending" indicator
    addOptimisticMessage({ id: Date.now(), text });

    // Actually send to server
    await sendMessage(text);
  }

  return (
    <>
      {optimisticMessages.map(msg => (
        <div key={msg.id}>
          {msg.text}
          {msg.sending && <span> (Sending...)</span>}
        </div>
      ))}
      <form action={handleSend}>
        <input name="message" />
        <button>Send</button>
      </form>
    </>
  );
}`}</CodeBlock>

              <div className="info-box warning">
                <h4>When to Use Optimistic Updates</h4>
                <p>
                  Best for operations that usually succeed: adding items,
                  toggling states, sending messages. Avoid for critical
                  operations where showing incorrect state could cause problems.
                </p>
              </div>
            </div>

            {/* useFormStatus */}
            <div className="concept-block">
              <h3>useFormStatus - No Prop Drilling for Forms</h3>
              <p>
                <strong>useFormStatus</strong> lets any component inside a form
                access the form's pending state without prop drilling. Perfect
                for reusable submit buttons!
              </p>

              <CodeBlock>{`import { useFormStatus } from 'react-dom';

// Reusable submit button - works in any form!
function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : children}
    </button>
  );
}

// Use it in any form - no props needed!
function ContactForm() {
  return (
    <form action={submitContact}>
      <input name="email" />
      <textarea name="message" />
      <SubmitButton>Send Message</SubmitButton>
    </form>
  );
}

function LoginForm() {
  return (
    <form action={submitLogin}>
      <input name="username" />
      <input name="password" type="password" />
      <SubmitButton>Log In</SubmitButton>
    </form>
  );
}`}</CodeBlock>

              <div className="info-box tip">
                <h4>What useFormStatus Returns</h4>
                <ul>
                  <li>
                    <strong>pending</strong> - Boolean, true while form is
                    submitting
                  </li>
                  <li>
                    <strong>data</strong> - FormData being submitted
                  </li>
                  <li>
                    <strong>method</strong> - HTTP method (get/post)
                  </li>
                  <li>
                    <strong>action</strong> - Reference to the action function
                  </li>
                </ul>
              </div>
            </div>

            {/* use Hook */}
            <div className="concept-block">
              <h3>use - Read Promises and Context Conditionally</h3>
              <p>
                The <strong>use</strong> hook is unique - it can read Promises
                (with Suspense) and Context, and unlike other hooks, it can be
                called conditionally or after early returns!
              </p>

              <h4>Reading Promises with Suspense</h4>
              <CodeBlock>{`import { use, Suspense } from 'react';

function Comments({ commentsPromise }) {
  // use() suspends until the promise resolves
  const comments = use(commentsPromise);

  return comments.map(c => <p key={c.id}>{c.text}</p>);
}

function Page() {
  const commentsPromise = fetchComments();

  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}`}</CodeBlock>

              <h4>Conditional Context Reading</h4>
              <p>
                Unlike useContext, the use hook can be called after early
                returns:
              </p>

              <CodeBlock>{`import { use } from 'react';
import ThemeContext from './ThemeContext';

function Heading({ children }) {
  // Early return - useContext would error here!
  if (!children) {
    return null;
  }

  // use() works after early returns
  const theme = use(ThemeContext);

  return (
    <h1 style={{ color: theme.color }}>
      {children}
    </h1>
  );
}`}</CodeBlock>

              <div className="info-box warning">
                <h4>Important: use vs useContext</h4>
                <p>
                  The use hook can be called conditionally, but useContext
                  cannot. However, use requires Suspense boundaries when reading
                  promises.
                </p>
              </div>
            </div>

            {/* Error Boundaries */}
            <div className="concept-block">
              <h3>Error Boundaries - Graceful Error Handling</h3>
              <p>
                <strong>Error Boundaries</strong> catch JavaScript errors in
                their child component tree and display a fallback UI instead of
                crashing the whole app. They're essential for production apps!
              </p>

              <h4>The Problem: Unhandled Errors Crash Everything</h4>
              <CodeBlock>{`// Without Error Boundary: One error crashes the whole app!
function App() {
  return (
    <div>
      <Header />
      <BuggyComponent /> {/* If this throws, entire app crashes */}
      <Footer />
    </div>
  );
}`}</CodeBlock>

              <h4>The Solution: react-error-boundary</h4>
              <CodeBlock>{`import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent /> {/* Errors here are contained */}
      </ErrorBoundary>
      <Footer /> {/* Still works even if above crashes */}
    </div>
  );
}`}</CodeBlock>

              <h4>Error Boundaries with Forms</h4>
              <CodeBlock>{`<ErrorBoundary
  fallback={<p>Failed to submit form. Please try again.</p>}
>
  <form action={async (formData) => {
    const result = await saveData(formData);
    if (!result.ok) throw new Error(result.message);
  }}>
    <input name="data" />
    <button>Submit</button>
  </form>
</ErrorBoundary>`}</CodeBlock>

              <div className="info-box tip">
                <h4>Where to Place Error Boundaries</h4>
                <ul>
                  <li>Around route components (page-level)</li>
                  <li>Around data fetching components</li>
                  <li>Around third-party widgets</li>
                  <li>Around form submissions</li>
                </ul>
              </div>
            </div>

            {/* React 19 Error Callbacks */}
            <div className="concept-block">
              <h3>React 19 Error Callbacks</h3>
              <p>
                React 19 introduces new error callback options when creating
                your root. These give you fine-grained control over error
                logging and reporting.
              </p>

              <CodeBlock>{`import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'), {
  // Errors caught by Error Boundaries
  onCaughtError: (error, errorInfo) => {
    console.log('Caught error:', error);
    logToErrorService('caught', error, errorInfo.componentStack);
  },

  // Errors that crash the app (not caught by boundaries)
  onUncaughtError: (error, errorInfo) => {
    console.error('Uncaught error:', error);
    logToErrorService('uncaught', error, errorInfo.componentStack);
  },

  // Recoverable errors (hydration mismatches, etc.)
  onRecoverableError: (error, errorInfo) => {
    console.warn('Recoverable error:', error);
    logToErrorService('recoverable', error);
  }
});

root.render(<App />);`}</CodeBlock>

              <div className="info-box warning">
                <h4>Error Types Explained</h4>
                <ul>
                  <li>
                    <strong>Caught</strong> - Handled by an Error Boundary, app
                    continues
                  </li>
                  <li>
                    <strong>Uncaught</strong> - No boundary caught it, app
                    crashes
                  </li>
                  <li>
                    <strong>Recoverable</strong> - React recovered automatically
                    (e.g., hydration mismatch)
                  </li>
                </ul>
              </div>
            </div>

            {/* Server Components */}
            <div className="concept-block">
              <h3>Server Components - The Future of React</h3>
              <p>
                <strong>React Server Components (RSC)</strong> are a new way to
                build React apps where components render on the server, sending
                zero JavaScript to the client. This is where React is heading!
              </p>

              <h4>Server vs Client Components</h4>
              <div className="comparison-grid">
                <div className="comparison-before">
                  <h4>Server Components</h4>
                  <ul className="feature-list">
                    <li>Render on the server</li>
                    <li>Zero JavaScript sent to client</li>
                    <li>Can access databases directly</li>
                    <li>Can be async functions</li>
                    <li>Cannot use useState, useEffect</li>
                    <li>Cannot handle user interactions</li>
                  </ul>
                </div>
                <div className="comparison-after">
                  <h4>Client Components</h4>
                  <ul className="feature-list">
                    <li>Render on the client</li>
                    <li>JavaScript shipped to browser</li>
                    <li>Use hooks (useState, useEffect)</li>
                    <li>Handle user interactions</li>
                    <li>Marked with "use client"</li>
                  </ul>
                </div>
              </div>

              <CodeBlock>{`// Server Component (default in Next.js App Router)
// No "use client" directive - runs on server
async function TeamList() {
  // Can directly query database!
  const members = await db.query('SELECT * FROM members');

  return (
    <ul>
      {members.map(m => (
        <li key={m.id}>{m.name}</li>
      ))}
    </ul>
  );
}

// Client Component - needs interactivity
"use client";

import { useState } from 'react';

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && children}
    </div>
  );
}`}</CodeBlock>

              <div className="info-box warning">
                <h4>Framework Required</h4>
                <p>
                  Server Components require a framework like{' '}
                  <strong>Next.js</strong> (App Router) or similar. They cannot
                  run in a pure Vite/Create React App setup because they need
                  server-side infrastructure for rendering and bundling.
                </p>
              </div>

              <h4>When to Use Server Components</h4>
              <ul className="feature-list">
                <li>
                  <strong>Data fetching</strong> - Fetch data close to the
                  source
                </li>
                <li>
                  <strong>Large dependencies</strong> - Keep heavy libraries on
                  the server
                </li>
                <li>
                  <strong>Static content</strong> - Render markdown, syntax
                  highlighting
                </li>
                <li>
                  <strong>SEO-critical content</strong> - Ensure crawlers see
                  content
                </li>
              </ul>

              <div className="info-box tip">
                <h4>The Mental Model</h4>
                <p>
                  Think of Server Components as the "content layer" and Client
                  Components as the "interaction layer". Server Components fetch
                  and display data; Client Components handle clicks, forms, and
                  animations.
                </p>
              </div>
            </div>
          </div>

          <section className="practice-section">
            <h2>Hands-on Practice</h2>
            <p>
              In the practice session, you'll upgrade the Team Directory with
              modern React 19 patterns:
            </p>
            <ul className="practice-list">
              <li>
                Build an Add Member form using <strong>useActionState</strong>
              </li>
              <li>
                Implement <strong>optimistic updates</strong> for instant
                feedback
              </li>
              <li>
                Create a reusable submit button with{' '}
                <strong>useFormStatus</strong>
              </li>
              <li>
                Wrap components in <strong>Error Boundaries</strong> for
                graceful error handling
              </li>
            </ul>
            <Link
              to="/sessions/$id/practice"
              params={{ id: sessionId }}
              className="start-practice-btn"
            >
              Start Practice Session
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Session10Theory;
