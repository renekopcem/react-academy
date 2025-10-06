import { useTeam } from '../context/teamContext.jsx';

function TeamMember({ member }) {
  const { selectedMember, dispatch } = useTeam();
  const isSelected = selectedMember?.id === member.id;

  return (
    <div
      className={`team-member ${isSelected ? 'selected' : ''}`}
      onClick={() => dispatch({ type: 'SELECT_MEMBER', payload: member })}
    >
      <div className="member-avatar">
        <div className="avatar-placeholder">
          {member.name.charAt(0)}
        </div>
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="department">{member.department}</p>
        <p className="email">{member.email}</p>
      </div>

      {isSelected && (
        <div className="selected-indicator">✓</div>
      )}
    </div>
  );
}

export default TeamMember;
