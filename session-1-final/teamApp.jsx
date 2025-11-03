import TeamDirectory from './components/teamDirectory.jsx';

// TeamApp - The hands-on application students will build
function TeamApp() {
  // Sample team data to demonstrate props
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

  return (
    <div className="practice-mode session1-practice">
      <header className="practice-header">
        <h1>Team Directory</h1>
        <p>Building our first React application with components and props</p>
      </header>

      <div className="practice-content">
        <TeamDirectory teamMembers={teamMembers} />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>Add a new team member to the array</li>
            <li>Change someone's role or email</li>
            <li>Add a new prop like "department" to TeamMember</li>
            <li>Modify the TeamMember component to display the new prop</li>
          </ul>
          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              Components are reusable building blocks. Props let you pass data
              from parent to child components, making your components flexible
              and dynamic.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TeamApp;
