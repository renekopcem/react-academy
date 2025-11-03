import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session4Theory from '../session-4-final/session4Theory.jsx';

function Session4App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '4' }}
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

  return <Session4Theory sessionId="4" />;
}

export default Session4App;