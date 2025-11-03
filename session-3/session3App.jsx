import { useState } from 'react';
import TeamApp from '../session-1/teamApp.jsx';
import Session3Theory from '../session-3-final/session3Theory.jsx';

function Session3App() {
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

  return <Session3Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session3App;