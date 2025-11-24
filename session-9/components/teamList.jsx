import TeamMember from './teamMember.jsx';

/**
 * TeamList Component
 * Renders a list of team members with loading and empty states
 *
 * Props:
 * - members: Array of team member objects
 * - isLoading: Boolean indicating loading state
 * - onSelectMember: Callback when a member is selected
 * - onDeleteMember: Callback when delete button is clicked
 */
function TeamList({ members, isLoading, onSelectMember, onDeleteMember }) {
  if (isLoading) {
    return (
      <div className="loading-state" role="status" aria-label="Loading">
        <div className="spinner"></div>
        <p>Loading team members...</p>
      </div>
    );
  }

  if (!members || members.length === 0) {
    return (
      <div className="empty-state" role="status">
        <p className="empty-icon">👥</p>
        <p>No team members found</p>
        <p className="empty-hint">
          Try adjusting your search or add a new member!
        </p>
      </div>
    );
  }

  return (
    <section className="team-section" aria-label="Team members list">
      <div className="team-grid">
        {members.map(member => (
          <TeamMember
            key={member.id}
            member={member}
            onSelect={onSelectMember}
            onDelete={onDeleteMember}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamList;
