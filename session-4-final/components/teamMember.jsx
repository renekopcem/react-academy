function TeamMember({ member }) {
  return (
    <div className="team-member">
      <div className="member-avatar">
        <div className="avatar-placeholder">
          {member.name.charAt(0)}
        </div>
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="email">{member.email}</p>
      </div>
    </div>
  );
}

export default TeamMember;