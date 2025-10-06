import { useTeam } from '../context/teamContext.jsx';

function SelectedMemberPanel() {
  const { selectedMember, dispatch } = useTeam();

  if (!selectedMember) {
    return (
      <div className="selected-member-empty">
        <p>👆 Click a team member to see their details here</p>
      </div>
    );
  }

  return (
    <div className="selected-member-panel">
      <div className="panel-header">
        <h3>Selected Member</h3>
        <button
          className="close-btn"
          onClick={() => dispatch({ type: 'CLEAR_SELECTION' })}
          aria-label="Clear selection"
        >
          ✕
        </button>
      </div>

      <div className="member-details">
        <div className="member-avatar-large">
          <div className="avatar-placeholder-large">
            {selectedMember.name.charAt(0)}
          </div>
        </div>

        <h4>{selectedMember.name}</h4>
        <p><strong>Role:</strong> {selectedMember.role}</p>
        <p><strong>Department:</strong> {selectedMember.department}</p>
        <p><strong>Email:</strong> {selectedMember.email}</p>

        <div className="reducer-note">
          <small>
            💡 This selection is managed by the reducer!<br/>
            Click the ✕ to dispatch CLEAR_SELECTION
          </small>
        </div>
      </div>
    </div>
  );
}

export default SelectedMemberPanel;
