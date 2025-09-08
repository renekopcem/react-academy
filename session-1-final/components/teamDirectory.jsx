import TeamMember from './teamMember.jsx';

// TeamDirectory component - demonstrates component composition
function TeamDirectory(props) {
  return (
    <section className="team-directory">
      <div className="team-header">
        <h2>👥 Meet Our Team</h2>
        <p className="team-description">
          Each team member below is a React component receiving data through props
        </p>
      </div>
      <div className="team-grid">
        {props.teamMembers.map((member, index) => (
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