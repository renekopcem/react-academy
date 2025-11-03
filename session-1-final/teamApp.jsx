import TeamDirectory from './components/teamDirectory.jsx';

// TeamApp - The hands-on application students will build
function TeamApp() {
  // Sample team data to demonstrate props
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

  return (
    <div className="team-app">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p>Building our first React application with components and props</p>
      </header>
      
      <TeamDirectory teamMembers={teamMembers} />
      
      <footer className="app-footer">
        <div className="practice-notes">
          <h3>🛠️ Try These Exercises:</h3>
          <ul>
            <li>Add a new team member to the array</li>
            <li>Change someone's role or email</li>
            <li>Add a new prop like "department" to TeamMember</li>
            <li>Modify the TeamMember component to display the new prop</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default TeamApp;