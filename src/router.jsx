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
import Session9App from '../session-9/session9App.jsx';

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
  {
    id: '9',
    title: 'Session 9: Testing React Applications',
    description:
      'Vitest, React Testing Library, MSW, Integration Testing, Browser Mode',
    duration: '45 min',
    component: Session9App,
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
  // Session icons mapping
  const sessionIcons = {
    1: '🎯',
    2: '⚡',
    3: '🔄',
    4: '🌐',
    5: '🎛️',
    6: '📡',
    7: '🗺️',
    8: '⚡',
    9: '🧪',
  };

  // Session difficulty levels
  const sessionDifficulty = {
    1: 'Beginner',
    2: 'Beginner',
    3: 'Intermediate',
    4: 'Intermediate',
    5: 'Intermediate',
    6: 'Advanced',
    7: 'Advanced',
    8: 'Advanced',
    9: 'Advanced',
  };

  const getDifficultyColor = difficulty => {
    switch (difficulty) {
      case 'Beginner':
        return '#d1fae5';
      case 'Intermediate':
        return '#fed7aa';
      case 'Advanced':
        return '#fecaca';
      default:
        return '#f1f5f9';
    }
  };

  const getDifficultyTextColor = difficulty => {
    switch (difficulty) {
      case 'Beginner':
        return '#065f46';
      case 'Intermediate':
        return '#92400e';
      case 'Advanced':
        return '#991b1b';
      default:
        return '#475569';
    }
  };

  return (
    <div className="session-navigator">
      <header className="academy-header">
        <h1>React Academy</h1>
        <p>
          Master React through 8 comprehensive sessions with hands-on practice
        </p>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            ✨ Interactive Learning
          </span>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            💡 Real-world Examples
          </span>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            🚀 Build Projects
          </span>
        </div>
      </header>

      <div className="sessions-grid">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <div className="session-number">Session {session.id}</div>
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              {sessionIcons[session.id]}
            </div>
            <h3>{session.title.replace(/^Session \d+:\s*/, '')}</h3>
            <p>{session.description}</p>
            <div className="session-meta">
              <span className="duration">⏱️ {session.duration}</span>
              <span
                style={{
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  background: getDifficultyColor(sessionDifficulty[session.id]),
                  border: 'none',
                  fontWeight: '600',
                  color: getDifficultyTextColor(sessionDifficulty[session.id]),
                }}
              >
                {sessionDifficulty[session.id]}
              </span>
            </div>
            <Link
              to="/sessions/$id/theory"
              params={{ id: session.id }}
              className="start-session-btn"
            >
              Start Session →
            </Link>
          </div>
        ))}
      </div>

      <footer className="homepage-footer">
        <div className="footer-content">
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
            }}
          >
            Your React Learning Journey
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.8 }}>
            From fundamentals to advanced patterns - everything you need to
            become a React expert
          </p>
          <div className="footer-stats">
            <span>🎯 9 Complete Sessions</span>
            <span>⏱️ 6 Hours of Content</span>
            <span>💻 Hands-on Practice</span>
            <span>🏆 Real Projects</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Session Layout Component (wraps theory/practice routes)
const SessionLayout = () => {
  const { id } = useParams({ strict: false });
  const session = sessions.find(s => s.id === id);
  const isPractice = window.location.pathname.includes('/practice');

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
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/" className="back-btn">
            ← Back to Sessions
          </Link>
          {isPractice && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <Link
                to="/sessions/$id/theory"
                params={{ id }}
                className="back-btn"
              >
                ← Back to Theory
              </Link>
            </>
          )}
        </div>
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
