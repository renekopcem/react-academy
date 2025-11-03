import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session8Theory from '../session-8-final/session8Theory.jsx';

function Session8App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return (
      <div className="session8-practice-mode">
        <nav className="session8-practice-nav">
          <Link
            to="/sessions/$id/theory"
            params={{ id: '8' }}
          >
            ← Back to Theory
          </Link>
          <h2>Hands-on Practice: Performance Optimization</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session8Theory sessionId="8" />;
}

export default Session8App;
