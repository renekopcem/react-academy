import { useState } from 'react';
import TeamDirectory from './components/teamDirectory.jsx';
import './styles.css';

function InteractiveTeamApp() {
  const [isGridView, setIsGridView] = useState(true);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      email: "sarah@company.com"
    },
    {
      name: "Mike Johnson",
      role: "Backend Developer", 
      email: "mike@company.com"
    },
    {
      name: "Lisa Rodriguez",
      role: "UI/UX Designer",
      email: "lisa@company.com"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      email: "david@company.com"
    }
  ];

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="interactive-team-app">
      <div className={`team-container ${isGridView ? 'grid-view' : 'list-view'}`}>
        <TeamDirectory 
          teamMembers={teamMembers} 
          isGridView={isGridView}
          onViewToggle={handleViewToggle}
        />
      </div>
      
      <footer className="app-footer">
        <div className="practice-notes">
          <h3>🛠️ Understanding State in Action:</h3>
          <div className="state-explanation">
            <div className="state-info">
              <h4>Current State:</h4>
              <code>isGridView = {isGridView.toString()}</code>
            </div>
            <div className="state-info">
              <h4>What happens when you click?</h4>
              <code>setIsGridView(!isGridView)</code>
            </div>
          </div>
          
          <ul className="exercise-list">
            <li>🎯 Try clicking the toggle button - notice how the layout changes instantly</li>
            <li>🔍 Watch the "Current State" value update when you toggle</li>
            <li>💭 The same TeamDirectory and TeamMember components are being reused</li>
            <li>✨ Only the CSS classes change based on state: <code>grid-view</code> vs <code>list-view</code></li>
          </ul>
          
          <div className="concept-highlight">
            <h4>🧠 Key Learning:</h4>
            <p>State changes trigger re-renders, which update what users see. This is the foundation of interactive React components!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InteractiveTeamApp;