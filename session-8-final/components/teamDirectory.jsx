import { useState, useCallback, useMemo, lazy, Suspense } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AddMemberForm from './addMemberForm.jsx';
import TeamList from './teamList.jsx';

// ✅ OPTIMIZATION #4: Lazy load heavy modal component
// This reduces initial bundle size and only loads the modal when needed
const TeamMemberDetail = lazy(() => import('./teamMemberDetail.jsx'));

function TeamDirectory() {
  const [filterText, setFilterText] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const queryClient = useQueryClient();

  // Fetch performance dataset (1000 members)
  const {
    data: members,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['performance-members'],
    queryFn: async () => {
      const response = await fetch('/api/performance/team-members');
      if (!response.ok) throw new Error('Failed to fetch members');
      return response.json();
    },
  });

  // Delete mutation
  const { mutate: deleteMutation } = useMutation({
    mutationFn: async memberId => {
      const response = await fetch(
        `/api/performance/team-members/${memberId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) throw new Error('Failed to delete member');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['performance-members'] });
    },
  });

  // ✅ OPTIMIZATION #1: useCallback for stable function reference
  // This prevents child components from re-rendering unnecessarily
  // The function reference stays the same unless deleteMutation changes
  const handleDelete = useCallback(
    id => {
      deleteMutation(id);
    },
    [deleteMutation]
  );

  // ✅ OPTIMIZATION #2: useCallback for stable function reference
  const handleViewDetails = useCallback(member => {
    setSelectedMember(member);
  }, []);

  // ✅ OPTIMIZATION #3: useMemo for expensive filtering operation
  // This only recalculates when members or filterText changes
  // Prevents running filter on every render
  const filteredMembers = useMemo(() => {
    if (!members) return [];

    return members.filter(member => {
      const searchText = filterText.toLowerCase();
      return (
        member.name.toLowerCase().includes(searchText) ||
        member.email.toLowerCase().includes(searchText) ||
        member.role.toLowerCase().includes(searchText) ||
        member.department.toLowerCase().includes(searchText)
      );
    });
  }, [members, filterText]);

  if (isLoading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="team-directory">
      <div className="team-header">
        <h2>Our Team ({members.length} members)</h2>
        <p className="team-description">
          Optimized version with React.memo, useCallback, useMemo, and lazy
          loading! ⚡
        </p>
      </div>

      {/* Filter input */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by name, email, role, or department..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          className="filter-input"
        />
        <span className="filter-results">
          Showing {filteredMembers.length} of {members.length} members
        </span>
      </div>

      {/* Add Member Form */}
      <AddMemberForm />

      {/* Team List - now passes stable function references */}
      <TeamList
        members={filteredMembers}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      {/* Detail Modal - Lazy loaded with Suspense boundary */}
      {selectedMember && (
        <Suspense
          fallback={
            <div className="modal-overlay">
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading details...</p>
              </div>
            </div>
          }
        >
          <TeamMemberDetail
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default TeamDirectory;
