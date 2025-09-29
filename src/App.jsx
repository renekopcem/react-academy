import { useState } from "react";
import Session1App from "../session-1/session1App.jsx";
import Session2App from "../session-2/session2App.jsx";
import Session3App from "../session-3/session3App.jsx";
import Session4App from "../session-4/session4App.jsx";
import "./App.css";

function App() {
  const [currentSession, setCurrentSession] = useState("navigator");

  const sessions = [
    {
      id: "session-1",
      title: "Session 1: React Basics",
      description: "What is React, Components, JSX, Props",
      duration: "45 min",
      component: Session1App,
    },
    {
      id: "session-2",
      title: "Session 2: State & Events",
      description: "useState, Event Handling, Interactive Components",
      duration: "45 min",
      component: Session2App,
    },
        {
      id: "session-3",
      title: "Session 3: useEffect & Lifecycle",
      description: "useEffect Hook, Component Lifecycle, Cleanup Functions",
      duration: "45 min",
      component: Session3App
    },
    {
      id: "session-4",
      title: "Session 4: Context API",
      description: "Context API, Provider Pattern, useContext Hook, Eliminating Prop Drilling",
      duration: "45 min",
      component: Session4App
    }
  ];

  const renderSessionNavigator = () => (
    <div className="session-navigator">
      <header className="academy-header">
        <h1>🚀 React Academy</h1>
        <p>Learn React step by step through hands-on sessions</p>
      </header>

      <div className="sessions-grid">
        {sessions.map((session) => (
          <div key={session.id} className="session-card">
            <h3>{session.title}</h3>
            <p>{session.description}</p>
            <div className="session-meta">
              <span className="duration">⏱️ {session.duration}</span>
            </div>
            <button
              className="start-session-btn"
              onClick={() => setCurrentSession(session.id)}
            >
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCurrentSession = () => {
    const session = sessions.find((s) => s.id === currentSession);
    if (!session) return null;

    const SessionComponent = session.component;
    return (
      <div className="session-container">
        <nav className="session-nav">
          <button
            className="back-btn"
            onClick={() => setCurrentSession("navigator")}
          >
            ← Back to Sessions
          </button>
          <h2>{session.title}</h2>
        </nav>
        <SessionComponent />
      </div>
    );
  };

  return (
    <div className="App">
      {currentSession === "navigator"
        ? renderSessionNavigator()
        : renderCurrentSession()}
    </div>
  );
}

export default App;
