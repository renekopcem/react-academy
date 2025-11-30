import { useState, useOptimistic } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AddMemberForm from './addMemberForm.jsx';
import TeamList from './teamList.jsx';

// Initial team members
const initialMembers = [
  { id: 1, name: 'Alex Chen', role: 'Frontend Developer' },
  { id: 2, name: 'Sarah Johnson', role: 'UX Designer' },
  { id: 3, name: 'Mike Brown', role: 'Backend Developer' },
];

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback">
      <h3>Something went wrong</h3>
      <p>{error.message}</p>
      <button className="btn-primary" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

function TeamDirectory() {
  const [members, setMembers] = useState(initialMembers);

  // Optimistic state for adding members
  const [optimisticMembers, addOptimisticMember] = useOptimistic(
    members,
    (currentMembers, newMember) => [
      ...currentMembers,
      { ...newMember, pending: true },
    ]
  );

  const handleAddMember = newMember => {
    // Show optimistic update immediately
    addOptimisticMember(newMember);

    // Then actually add to state (simulating server response)
    window.setTimeout(() => {
      setMembers(prev => [...prev, newMember]);
    }, 100);
  };

  const handleDeleteMember = memberId => {
    setMembers(prev => prev.filter(m => m.id !== memberId));
  };

  return (
    <div className="team-directory">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setMembers(initialMembers)}
      >
        <AddMemberForm onAddMember={handleAddMember} />
      </ErrorBoundary>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setMembers(initialMembers)}
      >
        <TeamList
          members={optimisticMembers}
          onDeleteMember={handleDeleteMember}
        />
      </ErrorBoundary>
    </div>
  );
}

export default TeamDirectory;
