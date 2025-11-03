import TeamMember from './teamMember.jsx';

function TeamList({ members, onDelete, onViewDetails }) {
  if (members.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-icon">👥</p>
        <p>No team members found</p>
        <p className="empty-hint">Try adjusting your filter or add a new member!</p>
      </div>
    );
  }

  return (
    <div className="team-section">
      <h3>Team Members</h3>
      <div className="team-grid">
        {members.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
            onDelete={onDelete}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
