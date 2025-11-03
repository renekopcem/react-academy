import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session5Theory from '../session-5-final/session5Theory.jsx';

function Session5App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '5' }}
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

  return <Session5Theory sessionId="5" />;
}

export default Session5App;
