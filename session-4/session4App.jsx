import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session4Theory from '../session-4-final/session4Theory.jsx';

function Session4App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <button
            className="back-to-theory-btn"
            onClick={() => setShowPractice(false)}
          >
            ← Back to Theory
          </button>
          <h2>Hands-on Practice</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session4Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session4App;