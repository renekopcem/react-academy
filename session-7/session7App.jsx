import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session7Theory from '../session-7-final/session7Theory.jsx';

function Session7App() {
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

  return <Session7Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session7App;
