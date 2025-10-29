import { useQuery } from '@tanstack/react-query';
import TeamMember from './teamMember.jsx';

function TeamList() {
  // useQuery to fetch team members from the API
  const { data: members, isLoading, error, isError } = useQuery({
    queryKey: ['team-members'],
    
    queryFn: async () => {
      console.log('📡 Fetching team members from API...');
      const response = await fetch('/api/team-members');
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      return response.json();
    },
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="team-list">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading team members...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="team-list">
        <div className="error-state">
          <p className="error-icon">❌</p>
          <p className="error-message">Error: {error.message}</p>
          <p className="error-hint">Check the console for more details</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (!members || members.length === 0) {
    return (
      <div className="team-list">
        <div className="empty-state">
          <p className="empty-icon">👥</p>
          <p>No team members yet</p>
          <p className="empty-hint">Add your first team member above!</p>
        </div>
      </div>
    );
  }

  // Success state - render team members
  return (
    <div className="team-list">
      <div className="team-grid">
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
      <div className="team-count">
        Total: {members.length} member{members.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}

export default TeamList;
