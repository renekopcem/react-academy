import { TeamProvider } from './context/teamContext.jsx';
import TeamDirectory from './components/teamDirectory.jsx';
import ActionLog from './components/actionLog.jsx';
import SelectedMemberPanel from './components/selectedMemberPanel.jsx';

// Main content component that uses context
function TeamAppContent() {
  return (
    <div className="team-app session5-practice">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p>Now powered by useReducer + Context - watch actions dispatch in real-time!</p>
      </header>

      <div className="app-layout session5-layout">
        {/* Sidebar with selected member and action log */}
        <aside className="sidebar">
          <SelectedMemberPanel />
          <ActionLog />
        </aside>

        {/* Main content */}
        <main className="main-content">
          <TeamDirectory />
        </main>
      </div>

      <footer className="app-footer session5-footer">
        <div className="practice-notes">
          <h3>🎯 useReducer + Context in Action:</h3>
          <div className="reducer-explanation">
            <div className="reducer-info">
              <h4>🔄 Single Dispatch Function:</h4>
              <code>const &#123; dispatch &#125; = useTeam();</code>
              <p>Instead of multiple setState functions, we have one dispatch function!</p>
            </div>
            <div className="reducer-info">
              <h4>📦 Action-Based Updates:</h4>
              <code>dispatch(&#123; type: 'SELECT_MEMBER', payload: member &#125;);</code>
              <p>All state updates are handled by the reducer function</p>
            </div>
            <div className="reducer-info">
              <h4>📊 Action Log:</h4>
              <code>actionLog: state.actionLog</code>
              <p>The reducer tracks all dispatched actions for debugging</p>
            </div>
          </div>

          <ul className="exercise-list">
            <li>🔍 Search for team members - see SET_SEARCH actions dispatch</li>
            <li>👁️ Toggle view mode - see TOGGLE_VIEW actions dispatch</li>
            <li>🎯 Click team members - see SELECT_MEMBER actions dispatch</li>
            <li>❌ Close selected member panel - see CLEAR_SELECTION dispatch</li>
            <li>🔄 Click "Reset Filters" - see RESET_FILTERS dispatch</li>
            <li>📊 Watch the Action Log panel show all dispatched actions!</li>
          </ul>

          <div className="concept-highlight session5-highlight">
            <h4>🧠 Key Learning:</h4>
            <p>Compare this to Session 4! Same features, but now all state updates go through a single reducer function. This makes the code more predictable, easier to debug (see the action log!), and easier to test. When state logic gets complex, useReducer keeps everything organized!</p>
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
