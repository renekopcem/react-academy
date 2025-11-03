import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session1Theory from './session1Theory.jsx';

// Session 1 App - React fundamentals learning objectives and practice
function Session1App() {
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

  return <Session1Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session1App;