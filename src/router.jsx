import {
  createRouter,
  createRoute,
  createRootRoute,
  Link,
  Outlet,
  useParams,
} from '@tanstack/react-router';

// Import session components
import Session1App from '../session-1/session1App.jsx';
import Session2App from '../session-2/session2App.jsx';
import Session3App from '../session-3/session3App.jsx';
import Session4App from '../session-4/session4App.jsx';
import Session5App from '../session-5/session5App.jsx';
import Session6App from '../session-6/session6App.jsx';
import Session7App from '../session-7/session7App.jsx';
import Session8App from '../session-8/session8App.jsx';

// Import Session 7 base practice (students will add routing here)
import Session7BaseTeamApp from '../session-7/teamApp.jsx';

// Session metadata
export const sessions = [
  {
    id: '1',
    title: 'Session 1: React Basics',
    description: 'What is React, Components, JSX, Props',
    duration: '45 min',
    component: Session1App,
  },
  {
    id: '2',
    title: 'Session 2: State & Events',
    description: 'useState, Event Handling, Interactive Components',
    duration: '45 min',
    component: Session2App,
  },
  {
    id: '3',
    title: 'Session 3: useEffect & Lifecycle',
    description: 'useEffect Hook, Component Lifecycle, Cleanup Functions',
    duration: '45 min',
    component: Session3App,
  },
  {
    id: '4',
    title: 'Session 4: Context API',
    description:
      'Context API, Provider Pattern, useContext Hook, Eliminating Prop Drilling',
    duration: '45 min',
    component: Session4App,
  },
  {
    id: '5',
    title: 'Session 5: useReducer with Context',
    description:
      'useReducer Hook, Reducer Pattern, Action Dispatching, Scalable State Management',
    duration: '45 min',
    component: Session5App,
  },
  {
    id: '6',
    title: 'Session 6: Data Fetching with React Query',
    description:
      'React Query (TanStack Query), useQuery, useMutation, Cache Management, Server State',
    duration: '45 min',
    component: Session6App,
  },
  {
    id: '7',
    title: 'Session 7: Routing in React',
    description:
      'TanStack Router, React Router Comparison, Nested Routes, Data Preloading',
    duration: '45 min',
    component: Session7App,
  },
  {
    id: '8',
    title: 'Session 8: Performance Optimization',
    description:
      'useMemo, React.memo, useCallback, Code Splitting, Lazy Loading',
    duration: '45 min',
    component: Session8App,
  },
];

// NotFound component
const NotFound = () => {
  return (
    <div className="session-container">
      <div
        className="error-message"
        style={{ textAlign: 'center', padding: '4rem' }}
      >
        <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          to="/"
          className="btn-primary"
          style={{ marginTop: '2rem', display: 'inline-block' }}
        >
          ← Back to Sessions
        </Link>
      </div>
    </div>
  );
};

// Root route component
const RootComponent = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

// Session Navigator Component
const SessionNavigator = () => {
  return (
    <div className="session-navigator">
      <header className="academy-header">
        <h1>🚀 React Academy</h1>
        <p>Learn React step by step through hands-on sessions</p>
      </header>

      <div className="sessions-grid">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <h3>{session.title}</h3>
            <p>{session.description}</p>
            <div className="session-meta">
              <span className="duration">⏱️ {session.duration}</span>
            </div>
            <Link
              to="/sessions/$id/theory"
              params={{ id: session.id }}
              className="start-session-btn"
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Session Layout Component (wraps theory/practice routes)
const SessionLayout = () => {
  const { id } = useParams({ strict: false });
  const session = sessions.find(s => s.id === id);

  if (!session) {
    return (
      <div className="session-container">
        <div className="error-message">
          <h2>Session not found</h2>
          <Link to="/" className="btn-primary">
            Back to Sessions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="session-container">
      <nav className="session-nav">
        <Link to="/" className="back-btn">
          ← Back to Sessions
        </Link>
        <h2>{session.title}</h2>
      </nav>
      <Outlet />
    </div>
  );
};

// Theory Route Component
const TheoryRoute = () => {
  const { id } = useParams({ strict: false });
  const session = sessions.find(s => s.id === id);

  if (!session) return null;

  const SessionComponent = session.component;
  return <SessionComponent mode="theory" />;
};

// Practice Route Component
const PracticeRoute = () => {
  const { id } = useParams({ strict: false });
  const session = sessions.find(s => s.id === id);

  if (!session) return null;

  const SessionComponent = session.component;
  return <SessionComponent mode="practice" />;
};

// Create routes
const rootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SessionNavigator,
});

const sessionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sessions/$id',
  component: SessionLayout,
});

const theoryRoute = createRoute({
  getParentRoute: () => sessionsRoute,
  path: '/theory',
  component: TheoryRoute,
});

const practiceRoute = createRoute({
  getParentRoute: () => sessionsRoute,
  path: '/practice',
  component: PracticeRoute,
});

// Session 7 Standalone Practice Route (students add RouterProvider here)
const session7PracticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/session-7-practice',
  component: Session7BaseTeamApp,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  sessionsRoute.addChildren([theoryRoute, practiceRoute]),
  session7PracticeRoute,
]);

// Create and export router
export const router = createRouter({ routeTree });
