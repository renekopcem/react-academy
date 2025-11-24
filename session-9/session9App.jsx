import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session9Theory from './session9Theory.jsx';

function Session9App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return (
      <div className="session9-practice-mode">
        <nav className="session9-practice-nav">
          <button onClick={() => setShowPractice(false)}>
            ← Back to Theory
          </button>
          <h2>Hands-on Practice: Testing React Applications</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session9Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session9App;
