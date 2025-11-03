import { TeamProvider } from './context/teamContext.jsx';
import TeamDirectory from './components/teamDirectory.jsx';

// Main content component that uses context
function TeamAppContent() {
  return (
    <div className="practice-mode session6-practice">
      <header className="practice-header">
        <h1>Team Directory with Context API</h1>
        <p>
          Building our team directory with Context API - no more prop drilling!
        </p>
      </header>

      <div className="practice-content">
        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>Search for team members and see real-time filtering</li>
            <li>Toggle between grid and list view modes</li>
            <li>Open console to see context state changes logged</li>
            <li>Compare with Session 3 - same features, no prop drilling!</li>
            <li>Notice how components access data without any props</li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              Context API eliminates prop drilling by providing global state and
              actions. Search and view mode work through context - any component
              can access what it needs directly using the useTeam() hook!
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
