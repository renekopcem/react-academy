import { Link } from '@tanstack/react-router';
import Session7Theory from '../session-7-final/session7Theory.jsx';

function Session7App({ mode = 'theory' }) {
  if (mode === 'practice') {
    // Session 7 practice is at a standalone route to avoid RouterProvider conflicts
    return (
      <div className="practice-mode" style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Session 7 Practice</h2>
        <p style={{ marginBottom: '2rem' }}>
          Session 7's practice runs at a standalone route so you can add your own RouterProvider without conflicts.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/session-7-practice"
            className="start-practice-btn"
          >
            Go to Session 7 Practice →
          </Link>
          <Link
            to="/sessions/$id/theory"
            params={{ id: '7' }}
            className="back-to-theory-btn"
          >
            ← Back to Theory
          </Link>
        </div>
      </div>
    );
  }

  return <Session7Theory sessionId="7" />;
}

export default Session7App;
