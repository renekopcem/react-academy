import { Link } from '@tanstack/react-router';
import TeamApp from '../session-1/teamApp.jsx';
import Session3Theory from '../session-3-final/session3Theory.jsx';

function Session3App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '3' }}
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

  return <Session3Theory sessionId="3" />;
}

export default Session3App;