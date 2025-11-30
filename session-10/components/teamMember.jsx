function TeamMember({ member, onDelete }) {
  const isPending = member.pending;

  return (
    <div className={`team-member ${isPending ? 'pending' : ''}`}>
      <div className="member-avatar">{member.name.charAt(0).toUpperCase()}</div>
      <div className="member-info">
        <h4 className="member-name">
          {member.name}
          {isPending && <span className="pending-badge">Adding...</span>}
        </h4>
        <p className="member-role">{member.role}</p>
      </div>
      {!isPending && onDelete && (
        <button
          className="delete-btn"
          onClick={() => onDelete(member.id)}
          aria-label={`Delete ${member.name}`}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default TeamMember;
