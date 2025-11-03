import { TeamProvider } from './context/teamContext.jsx';
import TeamDirectory from './components/teamDirectory.jsx';

// Main content component that uses context
function TeamAppContent() {
  return (
    <div className="practice-mode session5-practice">
      <header className="practice-header">
        <h1>Team Directory with useReducer</h1>
        <p>
          Building our team directory with useReducer - student practice version
        </p>
      </header>

      <div className="practice-content">
        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>Search for team members and watch state updates</li>
            <li>Toggle view mode using useReducer actions</li>
            <li>Open console to see reducer actions logged</li>
            <li>
              Compare with Session 4 - same features, now with useReducer!
            </li>
            <li>
              Notice how state logic is centralized in the reducer function
            </li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              useReducer provides a more structured way to manage complex state.
              Instead of multiple useState calls, all state updates go through a
              single reducer function. This makes the code more predictable and
              easier to debug!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main TeamApp component that provides context
function TeamApp() {
  return (
    <TeamProvider>
      <TeamAppContent />
    </TeamProvider>
  );
}

export default TeamApp;
