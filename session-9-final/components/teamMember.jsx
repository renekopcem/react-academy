/**
 * TeamMember Component
 * Displays a single team member card with their information
 *
 * This is a simplified version for testing purposes:
 * - Clear props interface
 * - Testable user interactions (click, delete)
 * - Accessible elements with proper roles
 */
function TeamMember({ member, onSelect, onDelete }) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(member);
    }
  };

  const handleDelete = e => {
    e.stopPropagation(); // Prevent triggering onSelect
    if (onDelete) {
      onDelete(member.id);
    }
  };

  return (
    <article
      className="team-card"
      onClick={handleSelect}
      data-testid={`team-member-${member.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleSelect()}
    >
      <div className="team-card-header">
        <img
          src={member.avatar}
          alt={`${member.name}'s avatar`}
          className="member-avatar"
        />
        {onDelete && (
          <button
            className="delete-btn"
            onClick={handleDelete}
            aria-label={`Delete ${member.name}`}
            title="Delete member"
          >
            &times;
          </button>
        )}
      </div>

      <div className="team-card-body">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-department">{member.department}</p>
        <p className="member-email">{member.email}</p>
      </div>

      {member.skills && member.skills.length > 0 && (
        <div className="member-skills">
          {member.skills.map(skill => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default TeamMember;
