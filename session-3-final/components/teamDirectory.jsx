import TeamMember from '../../session-1-final/components/teamMember.jsx';
import TeamSearch from './teamSearch.jsx';

// Enhanced TeamDirectory component with search and view toggle
function TeamDirectory({ teamMembers, isGridView, onViewToggle, searchTerm, onSearch, resultsCount, totalCount }) {
  return (
    <section className="team-directory">
      <div className="team-header">
        <div className="team-header-content">
          <h2>👥 Meet Our Team</h2>
          <p className="team-description">
            Each team member below is a React component receiving data through props
          </p>
        </div>
      </div>
      
      <div className="team-controls">
        <div className="search-container">
          <TeamSearch 
            onSearch={onSearch}
            resultsCount={resultsCount}
            totalCount={totalCount}
          />
        </div>
        
        <div className="view-controls">
          <button 
            className={`view-toggle-btn ${isGridView ? 'active' : ''}`}
            onClick={onViewToggle}
          >
            {isGridView ? '📋 Switch to List View' : '⊞ Switch to Grid View'}
          </button>
        </div>
      </div>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            email={member.email}
            avatar={member.avatar}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamDirectory;