import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session6Theory from '../session-6-final/session6Theory.jsx';

function Session6App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '6' }}
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

  return <Session6Theory sessionId="6" />;
}

export default Session6App;
