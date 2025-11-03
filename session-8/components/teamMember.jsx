import { formatDistanceToNow } from 'date-fns';

// ❌ PERFORMANCE ISSUE #4: No React.memo wrapper
// This component re-renders every time the parent re-renders,
// even if its props haven't changed!
function TeamMember({ member, onDelete, onViewDetails }) {
  // ❌ PERFORMANCE ISSUE #5: Expensive date formatting on EVERY render
  // This runs even when the member data hasn't changed
  const joinedAgo = formatDistanceToNow(new Date(member.joinDate), { addSuffix: true });

  // ❌ PERFORMANCE ISSUE #6: String operations on every render
  const formattedName = member.name.toUpperCase().trim();
  const emailDomain = member.email.split('@')[1];
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  // ❌ PERFORMANCE ISSUE #7: Array operations on every render
  const primarySkill = member.skills && member.skills.length > 0 ? member.skills[0] : 'N/A';
  const skillCount = member.skills ? member.skills.length : 0;

  return (
    <div className="team-card">
      <div className="team-card-header">
        <div className="member-avatar">
          <img src={member.avatar} alt={member.name} />
          <div className="member-initials">{initials}</div>
        </div>
        <button
          className="delete-btn"
          onClick={() => onDelete(member.id)}
          title="Delete member"
        >
          ×
        </button>
      </div>

      <div className="team-card-body">
        <h3 className="member-name">{formattedName}</h3>
        <p className="member-role">{member.role}</p>
        <div className="member-details">
          <span className="member-department">{member.department}</span>
          <span className="member-location">{member.location}</span>
        </div>
        <div className="member-info">
          <span className="member-email">{emailDomain}</span>
          <span className="member-joined">{joinedAgo}</span>
        </div>
        <div className="member-skills">
          <span className="primary-skill">{primarySkill}</span>
          {skillCount > 1 && <span className="skill-badge">+{skillCount - 1}</span>}
        </div>
      </div>

      <div className="team-card-actions">
        <button
          className="view-details-btn"
          onClick={() => onViewDetails(member)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default TeamMember;
