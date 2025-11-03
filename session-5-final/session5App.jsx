import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session5Theory from './session5Theory.jsx';

function Session5App() {
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

  return <Session5Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session5App;
