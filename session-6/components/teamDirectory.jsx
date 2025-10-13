import TeamSearch from './teamSearch.jsx';
import ViewToggle from './viewToggle.jsx';
import TeamList from './teamList.jsx';

function TeamDirectory() {
  return (
    <div className="team-directory">
      <div className="team-header">
        <h2>Our Team</h2>
        <p className="team-description">Meet our amazing team members</p>
      </div>

      {/* Search and Controls */}
      <div className="team-controls">
        <TeamSearch />
        <ViewToggle />
      </div>

      {/* Team Grid/List */}
      <TeamList />

      <div className="context-demo">
        <div className="demo-note">
          <h4>🎯 Context API Demo</h4>
          <p>
            Notice how <code>TeamSearch</code>, <code>ViewToggle</code>, and <code>TeamList</code>
            all get their data from context using the <code>useTeam</code> hook - no props needed!
          </p>
          <p>
            Only <code>TeamMember</code> receives props (the member data) since it's a simple display component.
            Compare this to previous sessions where we had to pass data through multiple component levels!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDirectory;