import { TeamProvider } from './context/teamContext.jsx';
import TeamDirectory from './components/teamDirectory.jsx';
import ActionLog from './components/actionLog.jsx';
import SelectedMemberPanel from './components/selectedMemberPanel.jsx';

// Main content component that uses context
function TeamAppContent() {
  return (
    <div className="practice-mode session5-practice">
      <header className="practice-header">
        <h1>Team Directory with useReducer</h1>
        <p>
          Now powered by useReducer + Context - watch actions dispatch in
          real-time!
        </p>
      </header>

      <div className="practice-content">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <SelectedMemberPanel />
          <ActionLog />
        </div>

        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>Search for team members - see SET_SEARCH actions dispatch</li>
            <li>Toggle view mode - see TOGGLE_VIEW actions dispatch</li>
            <li>Click team members - see SELECT_MEMBER actions dispatch</li>
            <li>Close selected member panel - see CLEAR_SELECTION dispatch</li>
            <li>Click "Reset Filters" - see RESET_FILTERS dispatch</li>
            <li>Watch the Action Log panel show all dispatched actions!</li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              Compare this to Session 4! Same features, but now all state
              updates go through a single reducer function. This makes the code
              more predictable, easier to debug (see the action log!), and
              easier to test. When state logic gets complex, useReducer keeps
              everything organized!
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
