import { useState } from 'react';
import SearchableTeamApp from './searchableTeamApp.jsx';
import Session3Theory from './session3Theory.jsx';

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
        <SearchableTeamApp />
      </div>
    );
  }

  return <Session3Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session3App;