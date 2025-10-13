import { useMutation, useQueryClient } from '@tanstack/react-query';

function TeamMember({ member }) {
  const queryClient = useQueryClient();

  // useMutation for deleting a team member
  const deleteMemberMutation = useMutation({
    mutationFn: async (memberId) => {
      console.log('🗑️ Deleting member:', memberId);
      const response = await fetch(`/api/team-members/${memberId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete team member');
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log('✅ Member deleted successfully:', data);
      // Invalidate and refetch team members query
      queryClient.invalidateQueries({ queryKey: ['team-members'] });
    },
    onError: (error) => {
      console.error('❌ Error deleting member:', error);
    },
  });

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to remove ${member.name}?`)) {
      deleteMemberMutation.mutate(member.id);
    }
  };

  return (
    <div className="team-member-card">
      <div className="member-avatar">
        <img src={member.avatar} alt={member.name} />
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <p className="member-role">{member.role}</p>
        <p className="member-department">{member.department}</p>
        <p className="member-email">{member.email}</p>
      </div>
      <button
        className="delete-btn"
        onClick={handleDelete}
        disabled={deleteMemberMutation.isPending}
        title="Delete member"
      >
        {deleteMemberMutation.isPending ? '⏳' : '🗑️'}
      </button>
    </div>
  );
}

export default TeamMember;
