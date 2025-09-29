import { TeamProvider, useTeam } from './context/teamContext.jsx';
import TeamDirectory from './components/teamDirectory.jsx';

// Main content component that uses context
function TeamAppContent() {
  return (
    <div className="team-app">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p>Building our team directory with Context API - no more prop drilling!</p>
      </header>

      <div className="team-directory">
        <TeamDirectory />
      </div>

      <footer className="app-footer">
        <div className="practice-notes">
          <h3>🎯 Context API in Action:</h3>
          <div className="context-explanation">
            <div className="context-info">
              <h4>🚫 No Prop Drilling:</h4>
              <code>const &#123; teamMembers, searchTerm, isGridView &#125; = useTeam();</code>
              <p>All components get data directly from context, not through props</p>
            </div>
            <div className="context-info">
              <h4>🔄 Shared Actions:</h4>
              <code>const &#123; handleSearch, toggleViewMode &#125; = useTeam();</code>
              <p>Actions in context update state globally across all components</p>
            </div>
          </div>

          <ul className="exercise-list">
            <li>🔍 Search for team members and see real-time filtering</li>
            <li>📱 Toggle between grid and list view modes</li>
            <li>📊 Open console to see context state changes logged</li>
            <li>🛠️ Compare with Session 3 - same features, no prop drilling!</li>
            <li>🎨 Notice how components access data without any props</li>
          </ul>

          <div className="concept-highlight">
            <h4>🧠 Key Learning:</h4>
            <p>Context API eliminates prop drilling by providing global state and actions. Search and view mode work through context - any component can access what it needs directly using the useTeam() hook!</p>
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