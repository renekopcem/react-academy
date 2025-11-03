import { useState } from 'react';
import TeamDirectory from './components/teamDirectory.jsx';

function InteractiveTeamApp() {
  const [isGridView, setIsGridView] = useState(true);

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      email: 'sarah@company.com',
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Developer',
      email: 'mike@company.com',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'UI/UX Designer',
      email: 'lisa@company.com',
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      email: 'david@company.com',
    },
  ];

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="practice-mode session2-practice">
      <header className="practice-header">
        <h1>Interactive Team Directory</h1>
        <p>Learning state management and interactive components</p>
      </header>

      <div className="practice-content">
        <div
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Current State:</h4>
          <code>isGridView = {isGridView.toString()}</code>
          <p
            style={{
              margin: '0.5rem 0 0 0',
              fontSize: '0.9rem',
              color: '#64748b',
            }}
          >
            Click the toggle button to change the view and watch the state
            update!
          </p>
        </div>

        <TeamDirectory
          teamMembers={teamMembers}
          isGridView={isGridView}
          onViewToggle={handleViewToggle}
        />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>
              Try clicking the toggle button - notice how the layout changes
              instantly
            </li>
            <li>Watch the "Current State" value update when you toggle</li>
            <li>
              The same TeamDirectory and TeamMember components are being reused
            </li>
            <li>
              Only the CSS classes change based on state: grid-view vs list-view
            </li>
          </ul>
          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              State changes trigger re-renders, which update what users see.
              This is the foundation of interactive React components!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InteractiveTeamApp;
