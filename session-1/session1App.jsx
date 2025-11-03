import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session1Theory from '../session-1-final/session1Theory.jsx';

// Session 1 App - React fundamentals learning objectives and practice
function Session1App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '1' }}
            className="back-to-theory-btn"
          >
            ← Back to Theory
          </Link>
          <h2>Hands-on Practice</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session1Theory sessionId="1" />;
}

export default Session1App;