import { useState } from "react";
import InteractiveTeamApp from "./interactiveTeamApp.jsx";
import Session2Theory from "./session2Theory.jsx";

function Session2App() {
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
        <InteractiveTeamApp />
      </div>
    );
  }

  return <Session2Theory onStartPractice={() => setShowPractice(true)} />;
}

export default Session2App;
