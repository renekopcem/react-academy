// TeamMember component - demonstrates JSX syntax and props
function TeamMember(props) {
  return (
    <div className="team-member">
      <div className="member-avatar">
        {props.avatar ? (
          <img src={props.avatar} alt={props.name} />
        ) : (
          <div className="avatar-placeholder">
            {props.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="member-info">
        <h3>{props.name}</h3>
        <p className="role">{props.role}</p>
        <p className="email">{props.email}</p>
      </div>
    </div>
  );
}

export default TeamMember;