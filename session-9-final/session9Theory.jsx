import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session9Theory({ sessionId }) {
  return (
    <div className="session9-app">
      <header className="session-header">
        <h1>Session 9: Testing React Applications</h1>
        <p className="session-subtitle">
          Master testing with Vitest, React Testing Library, and Mock Service
          Worker for confident, maintainable code
        </p>
        <span className="duration-badge">60 min</span>
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

              <div className="trophy-diagram">
                <pre>{`
        🔺 E2E Tests
       ════════════
      (Few, expensive, slow)

     ████████████████████
    █ INTEGRATION TESTS █  ← Best ROI!
    ██████████████████████

       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        Unit Tests

         ░░░░░░░░░
         Static
    (Types, Linting)
`}</pre>
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
              <CodeBlock>{`// Equality
expect(value).toBe(3);           // Strict equality (===)
expect(obj).toEqual({ a: 1 });   // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThanOrEqual(10);

// Strings
expect(str).toMatch(/pattern/);
expect(str).toContain('substring');

// Arrays
expect(arr).toHaveLength(3);
expect(arr).toContain('item');

// Objects
expect(obj).toHaveProperty('key');
expect(obj).toMatchObject({ a: 1 });

// Exceptions
expect(() => fn()).toThrow();
expect(() => fn()).toThrow('error message');`}</CodeBlock>

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

            {/* Faker.js */}
            <div className="concept-block">
              <h3>🎲 Generating Test Data with Faker</h3>
              <p>
                <strong>Faker.js</strong> generates realistic fake data for your
                tests. Instead of manually creating test fixtures, Faker can
                generate names, emails, dates, and much more.
              </p>

              <h4>Basic Usage</h4>
              <CodeBlock>{`import { faker } from '@faker-js/faker';

// Generate random data
const name = faker.person.fullName();     // "Alice Johnson"
const email = faker.internet.email();      // "alice@example.com"
const date = faker.date.past();            // Date object
const city = faker.location.city();        // "New York"
const job = faker.person.jobTitle();       // "Frontend Developer"`}</CodeBlock>

              <h4>Creating Test Fixtures</h4>
              <CodeBlock>{`// Factory function for consistent test data
function createMockMember(overrides = {}) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    name: \`\${firstName} \${lastName}\`,
    email: faker.internet.email({ firstName, lastName }),
    role: faker.person.jobTitle(),
    department: faker.commerce.department(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python'],
      { min: 1, max: 3 }
    ),
    ...overrides, // Allow specific overrides
  };
}

// Usage in tests
const member = createMockMember();
const adminMember = createMockMember({ role: 'Admin' });`}</CodeBlock>

              <h4>Seeding for Reproducibility</h4>
              <CodeBlock>{`// Set seed for consistent data across test runs
faker.seed(123);

// Now faker will generate the same "random" values
const name = faker.person.fullName(); // Always same name

// Reset seed if needed
faker.seed(); // Back to random`}</CodeBlock>

              <div className="info-box tip">
                <h4>💡 When to Use Faker</h4>
                <ul>
                  <li>Generating large datasets for performance testing</li>
                  <li>Creating realistic API mock responses</li>
                  <li>Populating forms with test data</li>
                  <li>Testing with varied input combinations</li>
                </ul>
              </div>
            </div>

            {/* Testing Components */}
            <div className="concept-block">
              <h3>🧩 Testing Components</h3>

              <h4>Testing Props and Rendering</h4>
              <CodeBlock>{`test('renders member information', () => {
  const member = {
    id: '1',
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    department: 'Engineering',
  };

  render(<TeamMember member={member} />);

  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  expect(screen.getByText('Engineering')).toBeInTheDocument();
});`}</CodeBlock>

              <h4>Testing User Interactions</h4>
              <CodeBlock>{`test('calls onSelect when clicked', async () => {
  const user = userEvent.setup();
  const member = { id: '1', name: 'Alice' };
  const handleSelect = vi.fn(); // Vitest mock function

  render(<TeamMember member={member} onSelect={handleSelect} />);

  await user.click(screen.getByRole('button'));

  expect(handleSelect).toHaveBeenCalledTimes(1);
  expect(handleSelect).toHaveBeenCalledWith(member);
});`}</CodeBlock>

              <h4>Testing Async Behavior</h4>
              <CodeBlock>{`test('loads and displays data', async () => {
  render(<TeamDirectory />);

  // Assert loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for data to load
  await screen.findByText('Alice Johnson');

  // Assert data is displayed
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
});`}</CodeBlock>

              <h4>Testing Conditional Rendering</h4>
              <CodeBlock>{`test('shows empty state when no members', () => {
  render(<TeamList members={[]} isLoading={false} />);

  expect(screen.getByText(/no team members/i)).toBeInTheDocument();
});

test('shows error state', async () => {
  server.use(
    http.get('/api/team-members', () => {
      return HttpResponse.json({ error: 'Failed' }, { status: 500 });
    })
  );

  render(<TeamDirectory />);

  await screen.findByRole('alert');
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});`}</CodeBlock>
            </div>

            {/* Testing Hooks */}
            <div className="concept-block">
              <h3>🪝 Testing Custom Hooks</h3>
              <p>
                Use <code>renderHook</code> from React Testing Library to test
                hooks in isolation.
              </p>

              <CodeBlock>{`import { renderHook, waitFor } from '@testing-library/react';
import { useTeamData } from './useTeamData';

test('fetches team data on mount', async () => {
  const { result } = renderHook(() => useTeamData());

  // Initial state
  expect(result.current.isLoading).toBe(true);
  expect(result.current.members).toEqual([]);

  // Wait for data to load
  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  // Assert loaded data
  expect(result.current.members).toHaveLength(5);
  expect(result.current.error).toBeNull();
});

test('handles delete member', async () => {
  const { result } = renderHook(() => useTeamData());

  // Wait for initial load
  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  const initialCount = result.current.members.length;

  // Delete a member
  await result.current.deleteMember('1');

  expect(result.current.members).toHaveLength(initialCount - 1);
});`}</CodeBlock>

              <h4>Testing Hooks with Context</h4>
              <CodeBlock>{`import { renderHook } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './useTheme';

test('hook works with context', () => {
  const wrapper = ({ children }) => (
    <ThemeProvider defaultTheme="dark">
      {children}
    </ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.theme).toBe('dark');
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
              <h3>🖥️ Vitest Browser Mode (Advanced)</h3>
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
                </p>
                <ul>
                  <li>CSS layout and styling problems</li>
                  <li>Real browser API behavior differences</li>
                  <li>Accurate event handling and propagation</li>
                  <li>Focus management and accessibility</li>
                  <li>Visual regression testing</li>
                </ul>
              </div>

              <h4>Installation</h4>
              <CodeBlock language="bash">{`# Install browser mode with Playwright provider
npm install -D @vitest/browser-playwright`}</CodeBlock>

              <h4>Configuration</h4>
              <CodeBlock>{`// vitest.config.js - Browser Mode setup
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // Test in multiple browsers
      instances: [
        { browser: 'chromium' },
        // { browser: 'firefox' },
        // { browser: 'webkit' }, // Safari
      ],
      // Run headless in CI, headed locally for debugging
      headless: process.env.CI ? true : false,
    },
  },
});`}</CodeBlock>

              <h4>Writing Browser Mode Tests</h4>
              <p>
                Browser Mode uses the same API as jsdom tests, but with real
                browser rendering:
              </p>
              <CodeBlock>{`// Component test in Browser Mode
import { render } from '@testing-library/react';
import { page } from '@vitest/browser/context';
import TeamMember from './TeamMember';

test('renders member card with correct styles', async () => {
  const member = { id: '1', name: 'Alice', role: 'Developer' };
  render(<TeamMember member={member} />);

  // Use page.getByRole for browser-native locators
  const card = page.getByRole('article');

  // Test real CSS rendering
  await expect.element(card).toBeVisible();
  await expect.element(card).toHaveClass('team-card');

  // Check computed styles (only works in real browser!)
  const styles = await card.evaluate((el) =>
    window.getComputedStyle(el)
  );
  expect(styles.display).toBe('flex');
});`}</CodeBlock>

              <h4>Component Testing with MSW in Browser</h4>
              <CodeBlock>{`import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { render } from '@testing-library/react';
import { page } from '@vitest/browser/context';

// Setup MSW worker for browser
const worker = setupWorker(
  http.get('/api/users/:id', ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: 'John Doe',
      email: 'john@example.com'
    });
  })
);

beforeAll(() => worker.start());
afterEach(() => worker.resetHandlers());
afterAll(() => worker.stop());

test('loads user data in real browser', async () => {
  render(<UserProfile userId="123" />);

  // expect.element auto-retries until element appears
  await expect.element(
    page.getByText('John Doe')
  ).toBeInTheDocument();
});

test('handles API error', async () => {
  // Override handler for this test
  worker.use(
    http.get('/api/users/:id', () => {
      return HttpResponse.json(
        { error: 'Not found' },
        { status: 404 }
      );
    })
  );

  render(<UserProfile userId="999" />);

  await expect.element(
    page.getByText(/error/i)
  ).toBeInTheDocument();
});`}</CodeBlock>

              <h4>Running Browser Tests</h4>
              <CodeBlock language="bash">{`# Run in browser mode
vitest --browser

# Run specific browser
vitest --browser.name=chromium

# Run headless (for CI)
vitest --browser.headless`}</CodeBlock>

              <h4>Using Projects for Both Modes</h4>
              <p>
                You can run jsdom and browser tests together using Vitest
                projects:
              </p>
              <CodeBlock>{`// vitest.config.js - Mixed mode
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    projects: [
      {
        name: 'unit',
        environment: 'jsdom',
        include: ['**/*.test.{js,jsx}'],
        exclude: ['**/*.browser.test.{js,jsx}'],
      },
      {
        name: 'browser',
        browser: {
          enabled: true,
          provider: playwright(),
          instances: [{ browser: 'chromium' }],
        },
        include: ['**/*.browser.test.{js,jsx}'],
      },
    ],
  },
});`}</CodeBlock>

              <div className="info-box tip">
                <h4>💡 When to Use Which?</h4>
                <ul>
                  <li>
                    <strong>jsdom (default):</strong> Fast, great for logic,
                    state, and most component tests
                  </li>
                  <li>
                    <strong>Browser Mode:</strong> CSS testing, visual
                    regression, browser-specific APIs, accessibility audits
                  </li>
                </ul>
                <p>
                  Start with jsdom. Add Browser Mode tests for critical UI
                  components where visual accuracy matters.
                </p>
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
              In the practice session, you'll write tests for our Team Directory
              application:
            </p>
            <ul className="practice-list">
              <li>🧪 Test the TeamMember component renders correctly</li>
              <li>🖱️ Test user interactions (click, delete)</li>
              <li>🪝 Test the useTeamData custom hook</li>
              <li>🌐 Mock API requests and test loading/error states</li>
              <li>🔗 Write integration tests for the search flow</li>
              <li>✨ Run tests with Vitest UI to see results visually</li>
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
      </section>
    </div>
  );
}

export default Session9Theory;
