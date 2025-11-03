import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import Session8Theory from './session8Theory.jsx';

function Session8App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return (
      <div className="session8-practice-mode">
        <nav className="session8-practice-nav">
          <button onClick={() => setShowPractice(false)}>
            ← Back to Theory
          </button>
          <h2>Hands-on Practice: Performance Optimization</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

  return <Session8Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session8App;
