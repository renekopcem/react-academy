import React, { useMemo } from 'react';
import { formatDistanceToNow } from 'date-fns';

// ✅ OPTIMIZATION #5: React.memo wrapper
// This component only re-renders if its props actually change
// With 1000 items, this dramatically reduces unnecessary renders
const TeamMember = React.memo(function TeamMember({ member, onDelete, onViewDetails }) {
  // ✅ OPTIMIZATION #6: useMemo for expensive date formatting
  // Only recalculates when member.joinDate changes
  const joinedAgo = useMemo(
    () => formatDistanceToNow(new Date(member.joinDate), { addSuffix: true }),
    [member.joinDate]
  );

  // ✅ OPTIMIZATION #7: useMemo for string operations
  // Caches the result so these don't run on every render
  const formattedName = useMemo(
    () => member.name.toUpperCase().trim(),
    [member.name]
  );

  const emailDomain = useMemo(
    () => member.email.split('@')[1],
    [member.email]
  );

  const initials = useMemo(
    () =>
      member.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase(),
    [member.name]
  );

  // ✅ OPTIMIZATION #8: useMemo for array operations
  const { primarySkill, skillCount } = useMemo(() => {
    const hasSkills = member.skills && member.skills.length > 0;
    return {
      primarySkill: hasSkills ? member.skills[0] : 'N/A',
      skillCount: member.skills ? member.skills.length : 0,
    };
  }, [member.skills]);

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
});

export default TeamMember;
