import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AddMemberForm from './addMemberForm.jsx';
import TeamList from './teamList.jsx';
import TeamMemberDetail from './teamMemberDetail.jsx';

function TeamDirectory() {
  const [filterText, setFilterText] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const queryClient = useQueryClient();

  // Fetch performance dataset (1000 members)
  const { data: members, isLoading, error } = useQuery({
    queryKey: ['performance-members'],
    queryFn: async () => {
      const response = await fetch('/api/performance/team-members');
      if (!response.ok) throw new Error('Failed to fetch members');
      return response.json();
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (memberId) => {
      const response = await fetch(`/api/performance/team-members/${memberId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete member');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['performance-members'] });
    },
  });

  // ❌ PERFORMANCE ISSUE #1: New function created on every render
  // This causes ALL child components to re-render
  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  // ❌ PERFORMANCE ISSUE #2: New function created on every render
  const handleViewDetails = (member) => {
    setSelectedMember(member);
  };

  // ❌ PERFORMANCE ISSUE #3: Expensive filtering operation runs on EVERY render
  // Even when members or filterText haven't changed!
  const filteredMembers = members
    ? members.filter((member) => {
        // Simulate expensive operation
        const searchText = filterText.toLowerCase();
        return (
          member.name.toLowerCase().includes(searchText) ||
          member.email.toLowerCase().includes(searchText) ||
          member.role.toLowerCase().includes(searchText) ||
          member.department.toLowerCase().includes(searchText)
        );
      })
    : [];

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
          Large dataset for performance testing - notice the lag when scrolling!
        </p>
      </div>

      {/* Filter input */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by name, email, role, or department..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="filter-input"
        />
        <span className="filter-results">
          Showing {filteredMembers.length} of {members.length} members
        </span>
      </div>

      {/* Add Member Form */}
      <AddMemberForm />

      {/* Team List - passes unstable function references */}
      <TeamList
        members={filteredMembers}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      {/* Detail Modal - NOT lazy loaded */}
      {selectedMember && (
        <TeamMemberDetail
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

export default TeamDirectory;
