import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session8Theory from '../session-8-final/session8Theory.jsx';

function Session8App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '8' }}
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

  return <Session8Theory sessionId="8" />;
}

export default Session8App;
