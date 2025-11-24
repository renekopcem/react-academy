import CodeBlock from '../src/components/CodeBlock.jsx';

function Session9Theory() {
  return (
    <div className="session9-app">
      <header className="session-header">
        <h1>Session 9: Testing React Applications</h1>
        <p className="session-subtitle">
          Master testing with Vitest, React Testing Library, and Mock Service
          Worker for confident, maintainable code
        </p>
        <span className="duration-badge">45 min</span>
      </header>

      <section className="intro-section">
        <h2>What You'll Learn</h2>
        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🏆</div>
            <div className="objective-content">
              <h3>The Testing Trophy</h3>
              <p>
                Understand why integration tests provide the best return on
                investment and how to balance different test types
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🧪</div>
            <div className="objective-content">
              <h3>Vitest & React Testing Library</h3>
              <p>
                Write behavior-driven tests that give you confidence your
                components work as users expect
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🌐</div>
            <div className="objective-content">
              <h3>Mocking API Requests</h3>
              <p>
                Use Mock Service Worker (MSW) to intercept network requests and
                test loading, success, and error states
              </p>
            </div>
          </div>
          <div className="objective-card">
            <div className="objective-icon">🪝</div>
            <div className="objective-content">
              <h3>Testing Hooks & Integration</h3>
              <p>
                Test custom hooks in isolation and write integration tests for
                complete user flows
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>Theory</h2>

          {/* Testing Trophy */}
          <div className="concept-blocks">
            <div className="concept-block">
              <h3>🏆 The Testing Trophy</h3>
              <p>
                Kent C. Dodds introduced the <strong>Testing Trophy</strong> as
                an alternative to the traditional testing pyramid. It emphasizes
                that <strong>integration tests</strong> provide the highest
                return on investment.
              </p>

              <div
                className="trophy-diagram"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  borderRadius: '12px',
                  margin: '1.5rem 0',
                }}
              >
                {/* E2E - smallest */}
                <div
                  style={{
                    background: '#fecaca',
                    color: '#991b1b',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '4px 4px 0 0',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  🔺 E2E Tests
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      opacity: 0.8,
                    }}
                  >
                    Few, expensive, slow
                  </div>
                </div>

                {/* Integration - largest */}
                <div
                  style={{
                    background:
                      'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    padding: '1rem 3rem',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                    position: 'relative',
                  }}
                >
                  INTEGRATION TESTS
                  <span
                    style={{
                      position: 'absolute',
                      right: '-80px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#fef3c7',
                      color: '#92400e',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ← Best ROI!
                  </span>
                </div>

                {/* Unit Tests - medium */}
                <div
                  style={{
                    background: '#cbd5e1',
                    color: '#334155',
                    padding: '0.75rem 2rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  Unit Tests
                </div>

                {/* Static - smallest */}
                <div
                  style={{
                    background: '#e2e8f0',
                    color: '#64748b',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '0 0 4px 4px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Static Analysis
                  <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                    Types, Linting
                  </div>
                </div>
              </div>

              <div className="info-box tip">
                <h4>💡 Key Insight</h4>
                <p>
                  "Write tests. Not too many. Mostly integration." - Guillermo
                  Rauch
                </p>
                <p>
                  Integration tests give you confidence that multiple units work
                  together correctly, without the brittleness of testing
                  implementation details.
                </p>
              </div>

              <h4>Why Each Layer Matters</h4>
              <ul className="feature-list">
                <li>
                  <strong>Static Analysis:</strong> TypeScript, ESLint catch
                  errors before runtime
                </li>
                <li>
                  <strong>Unit Tests:</strong> Test pure functions, utilities,
                  complex logic
                </li>
                <li>
                  <strong>Integration Tests:</strong> Test components working
                  together (BEST ROI!)
                </li>
                <li>
                  <strong>E2E Tests:</strong> Test critical user journeys in
                  real browser
                </li>
              </ul>
            </div>

            {/* Vitest Fundamentals */}
            <div className="concept-block">
              <h3>🧪 Vitest Fundamentals</h3>
              <p>
                <strong>Vitest</strong> is a blazing-fast test runner built on
                Vite. It's Jest-compatible but with native ESM support and
                instant HMR for tests.
              </p>

              <h4>Basic Test Structure</h4>
              <CodeBlock>{`import { describe, it, expect } from 'vitest';

describe('Calculator', () => {
  it('adds two numbers correctly', () => {
    expect(1 + 2).toBe(3);
  });

  it('multiplies numbers', () => {
    expect(4 * 5).toEqual(20);
  });
});`}</CodeBlock>

              <h4>Common Matchers</h4>
              <CodeBlock>{`// Most used matchers
expect(value).toBe(3);           // Strict equality (===)
expect(obj).toEqual({ a: 1 });   // Deep equality
expect(arr).toHaveLength(3);     // Array/string length
expect(fn).toHaveBeenCalled();   // Mock function called

// DOM matchers (from @testing-library/jest-dom)
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toHaveTextContent('hello');`}</CodeBlock>

              <h4>Setup and Teardown</h4>
              <CodeBlock>{`import { beforeEach, afterEach, beforeAll, afterAll } from 'vitest';

beforeAll(() => {
  // Run once before all tests in file
});

afterAll(() => {
  // Run once after all tests in file
});

beforeEach(() => {
  // Run before each test
});

afterEach(() => {
  // Run after each test (cleanup)
});`}</CodeBlock>

              <h4>Running Tests</h4>
              <CodeBlock language="bash">{`# Run all tests in watch mode
vitest

# Run tests once
vitest run

# Run with UI dashboard
vitest --ui

# Run specific test file
vitest teamMember.test.jsx

# Run with coverage
vitest run --coverage`}</CodeBlock>
            </div>

            {/* React Testing Library */}
            <div className="concept-block">
              <h3>🎯 React Testing Library</h3>
              <p>
                React Testing Library (RTL) encourages testing your components
                the way users interact with them, not testing implementation
                details.
              </p>

              <div className="info-box warning">
                <h4>⚠️ The Guiding Principle</h4>
                <p>
                  "The more your tests resemble the way your software is used,
                  the more confidence they can give you."
                </p>
              </div>

              <h4>Rendering Components</h4>
              <CodeBlock>{`import { render, screen } from '@testing-library/react';
import TeamMember from './TeamMember';

test('renders member name', () => {
  const member = { id: '1', name: 'Alice', role: 'Developer' };

  render(<TeamMember member={member} />);

  // screen provides queries to find elements
  expect(screen.getByText('Alice')).toBeInTheDocument();
});`}</CodeBlock>

              <h4>Query Priority (Most to Least Preferred)</h4>
              <ol className="feature-list">
                <li>
                  <strong>getByRole</strong> - Most accessible, mimics how users
                  find elements
                </li>
                <li>
                  <strong>getByLabelText</strong> - Great for form fields
                </li>
                <li>
                  <strong>getByPlaceholderText</strong> - Fallback for inputs
                </li>
                <li>
                  <strong>getByText</strong> - For non-interactive elements
                </li>
                <li>
                  <strong>getByTestId</strong> - Last resort when others don't
                  work
                </li>
              </ol>

              <CodeBlock>{`// ✅ Preferred: Uses accessible role
screen.getByRole('button', { name: /submit/i });

// ✅ Good: Uses label for form fields
screen.getByLabelText('Email address');

// ⚠️ OK: Uses visible text
screen.getByText('Welcome back!');

// ❌ Last resort: Uses test ID
screen.getByTestId('custom-element');`}</CodeBlock>

              <h4>Query Variants</h4>
              <CodeBlock>{`// getBy* - Throws if not found (synchronous)
screen.getByRole('button');

// queryBy* - Returns null if not found (for asserting absence)
expect(screen.queryByText('Error')).not.toBeInTheDocument();

// findBy* - Returns Promise, waits for element (async)
await screen.findByText('Loaded!');`}</CodeBlock>

              <h4>User Interactions with userEvent</h4>
              <CodeBlock>{`import userEvent from '@testing-library/user-event';

test('handles form submission', async () => {
  // Always create a user instance
  const user = userEvent.setup();

  render(<LoginForm onSubmit={mockSubmit} />);

  // Type into inputs
  await user.type(
    screen.getByLabelText('Email'),
    'test@example.com'
  );

  // Click buttons
  await user.click(screen.getByRole('button', { name: /submit/i }));

  // Other interactions
  await user.hover(element);
  await user.keyboard('{Enter}');
  await user.selectOptions(select, 'option1');
});`}</CodeBlock>

              <div className="info-box tip">
                <h4>💡 userEvent vs fireEvent</h4>
                <p>
                  Always prefer <code>userEvent</code> over{' '}
                  <code>fireEvent</code>. userEvent simulates real user
                  interactions more accurately, including focus, keyboard
                  events, and timing.
                </p>
              </div>
            </div>

            {/* MSW */}
            <div className="concept-block">
              <h3>🌐 Mocking API Requests with MSW</h3>
              <p>
                <strong>Mock Service Worker (MSW)</strong> intercepts network
                requests at the service worker level, making your mocks work
                with any HTTP client (fetch, axios, etc.).
              </p>

              <h4>Setting Up Handlers</h4>
              <CodeBlock>{`// mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [
  // Handle GET request
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
    ]);
  }),

  // Handle POST request
  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json();
    return HttpResponse.json(
      { id: '3', ...newUser },
      { status: 201 }
    );
  }),

  // Handle errors
  http.get('/api/users/:id', ({ params }) => {
    if (params.id === '999') {
      return HttpResponse.json(
        { error: 'Not found' },
        { status: 404 }
      );
    }
    return HttpResponse.json({ id: params.id, name: 'User' });
  }),
];`}</CodeBlock>

              <h4>Server Setup for Tests</h4>
              <CodeBlock>{`// mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// vitest.setup.js
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());`}</CodeBlock>

              <h4>Override Handlers for Specific Tests</h4>
              <CodeBlock>{`import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';

test('shows error when API fails', async () => {
  // Override handler for this test only
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.json(
        { error: 'Server error' },
        { status: 500 }
      );
    })
  );

  render(<UserList />);

  // Assert error state is shown
  await screen.findByText(/error/i);
});`}</CodeBlock>
            </div>

            {/* Integration Testing */}
            <div className="concept-block">
              <h3>🔗 Integration Testing</h3>
              <p>
                Integration tests verify that multiple components work together
                correctly. They provide the best confidence-to-effort ratio.
              </p>

              <CodeBlock>{`test('complete search flow', async () => {
  const user = userEvent.setup();
  render(<TeamDirectory />);

  // Wait for data to load
  await screen.findByText('Alice Johnson');

  // Verify all members shown initially
  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  expect(screen.getByText('Bob Smith')).toBeInTheDocument();

  // Search for specific member
  await user.type(
    screen.getByPlaceholderText(/search/i),
    'Alice'
  );

  // Verify filtered results
  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();

  // Clear search
  await user.clear(screen.getByPlaceholderText(/search/i));

  // All members visible again
  expect(screen.getByText('Bob Smith')).toBeInTheDocument();
});

test('select and delete flow', async () => {
  const user = userEvent.setup();
  render(<TeamDirectory />);

  await screen.findByText('Alice Johnson');

  // Click to select member
  await user.click(screen.getByTestId('team-member-1'));

  // Verify modal opened
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(screen.getByText(/alice@company.com/i)).toBeInTheDocument();

  // Close modal
  await user.click(screen.getByLabelText(/close/i));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  // Delete member
  await user.click(screen.getByLabelText(/delete alice/i));

  // Verify member removed
  await waitFor(() => {
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
  });
});`}</CodeBlock>
            </div>

            {/* Vitest Browser Mode */}
            <div className="concept-block">
              <h3>🖥️ Vitest Browser Mode</h3>
              <p>
                For the most accurate testing, Vitest can run tests in real
                browsers using Playwright. Unlike jsdom which simulates a
                browser, Browser Mode runs your tests in actual Chrome, Firefox,
                or Safari.
              </p>

              <div className="info-box warning">
                <h4>⚠️ Why Browser Mode?</h4>
                <p>
                  jsdom simulates browser APIs but can miss real-world issues:
                  CSS layout problems, real browser API differences, and
                  accurate event handling.
                </p>
              </div>

              <h4>Browser Mode Test Example</h4>
              <CodeBlock>{`// teamMember.browser.test.jsx
import { render } from '@testing-library/react';
import { page } from '@vitest/browser/context';
import TeamMember from './TeamMember';

test('renders member card in real browser', async () => {
  const member = { id: '1', name: 'Alice', role: 'Developer' };
  render(<TeamMember member={member} />);

  // Use page locators for browser-native queries
  const nameElement = page.getByText('Alice');

  // expect.element auto-retries until element appears
  await expect.element(nameElement).toBeVisible();
});`}</CodeBlock>

              <h4>Running Browser Tests</h4>
              <CodeBlock language="bash">{`# Run browser tests (configured in this project)
yarn test:browser

# Run all tests (jsdom + browser)
yarn test:all`}</CodeBlock>

              <div className="info-box tip">
                <h4>💡 When to Use Which?</h4>
                <ul>
                  <li>
                    <strong>jsdom (default):</strong> Fast, great for logic,
                    state, and most component tests
                  </li>
                  <li>
                    <strong>Browser Mode:</strong> CSS testing, visual
                    regression, browser-specific APIs
                  </li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <div className="concept-block">
              <h3>✨ Testing Best Practices</h3>
              <ul className="feature-list">
                <li>✅ Test behavior, not implementation details</li>
                <li>✅ Use accessible queries (getByRole, getByLabelText)</li>
                <li>✅ Prefer userEvent over fireEvent</li>
                <li>✅ Write integration tests for user flows</li>
                <li>✅ Mock external dependencies (APIs, not components)</li>
                <li>✅ Keep tests independent and isolated</li>
                <li>✅ Use meaningful test descriptions</li>
                <li>✅ Test error and edge cases</li>
                <li>⚠️ Don't test third-party libraries</li>
                <li>⚠️ Don't test implementation details (state, props)</li>
              </ul>
            </div>
          </div>

          <section className="practice-section">
            <h2>💻 Hands-on Practice</h2>
            <p>
              Open your editor and complete the TODO exercises in the test
              files:
            </p>
            <ul className="practice-list">
              <li>🧪 Test the TeamMember component renders correctly</li>
              <li>🖱️ Test user interactions (click, delete)</li>
              <li>🌐 Mock API requests and test loading/error states</li>
              <li>🔗 Write integration tests for the search flow</li>
              <li>🖥️ Run a test in real browser with Browser Mode</li>
            </ul>
            <div className="info-box tip" style={{ marginTop: '1.5rem' }}>
              <h4>📂 Test Files Location</h4>
              <code style={{ display: 'block', marginTop: '0.5rem' }}>
                session-9/__tests__/
              </code>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                Run tests with: <code>yarn test</code> or{' '}
                <code>yarn test:ui</code>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Session9Theory;
