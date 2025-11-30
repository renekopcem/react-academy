import { useOptimistic, useTransition } from 'react';
import TeamMember from './teamMember.jsx';

function TeamList({ members, onDeleteMember }) {
  const [isPending, startTransition] = useTransition();

  // Optimistic state for members list
  const [optimisticMembers, setOptimisticMembers] = useOptimistic(
    members,
    (currentMembers, { action, memberId }) => {
      if (action === 'delete') {
        return currentMembers.filter(m => m.id !== memberId);
      }
      return currentMembers;
    }
  );

  const handleDelete = async memberId => {
    // Optimistically remove the member immediately
    startTransition(async () => {
      setOptimisticMembers({ action: 'delete', memberId });

      // Simulate API call
      await new Promise(resolve => window.setTimeout(resolve, 500));

      // Actually delete
      onDeleteMember(memberId);
    });
  };

  if (optimisticMembers.length === 0) {
    return (
      <div className="empty-state">
        <p>No team members yet. Add someone above!</p>
      </div>
    );
  }

  return (
    <div className="team-list">
      <h3>
        Team Members ({optimisticMembers.length})
        {isPending && <span className="updating-badge">Updating...</span>}
      </h3>
      <div className="members-grid">
        {optimisticMembers.map(member => (
          <TeamMember key={member.id} member={member} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
