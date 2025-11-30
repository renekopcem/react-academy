import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session10Theory from './session10Theory.jsx';

function Session10App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link to="/sessions/$id/theory" params={{ id: '10' }}>
            ← Back to Theory
          </Link>
          <h2>Hands-on Practice: Modern React Patterns</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session10Theory sessionId="10" />;
}

export default Session10App;
