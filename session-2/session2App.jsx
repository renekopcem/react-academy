import { Link } from '@tanstack/react-router';
import TeamApp from "../session-1/teamApp.jsx";
import Session2Theory from "../session-2-final/session2Theory.jsx";

function Session2App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '2' }}
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

  return <Session2Theory sessionId="2" />;
}

export default Session2App;
