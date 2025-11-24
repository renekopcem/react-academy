import { useState, useMemo } from 'react';
import TeamList from './teamList.jsx';
import { useTeamData } from '../hooks/useTeamData.js';

/**
 * TeamDirectory Component
 * Main container that provides search/filter and displays the team list
 *
 * Features:
 * - Search filtering by name, role, or department
 * - Loading and error states
 * - Member selection
 * - Member deletion
 */
function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const { members, isLoading, error, deleteMember } = useTeamData();

  // Filter members based on search term
  const filteredMembers = useMemo(() => {
    if (!searchTerm.trim()) return members;

    const lowerSearch = searchTerm.toLowerCase();
    return members.filter(
      member =>
        member.name.toLowerCase().includes(lowerSearch) ||
        member.role.toLowerCase().includes(lowerSearch) ||
        member.department.toLowerCase().includes(lowerSearch)
    );
  }, [members, searchTerm]);

  const handleSelectMember = member => {
    setSelectedMember(member);
  };

  const handleDeleteMember = async id => {
    const success = await deleteMember(id);
    if (success && selectedMember?.id === id) {
      setSelectedMember(null);
    }
  };

  const handleCloseDetail = () => {
    setSelectedMember(null);
  };

  if (error) {
    return (
      <div className="error-state" role="alert">
        <p>Error loading team: {error}</p>
      </div>
    );
  }

  return (
    <div className="team-directory">
      <header className="directory-header">
        <h2>Team Directory</h2>
        {!isLoading && (
          <p className="member-count">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        )}
      </header>

      <div className="search-section">
        <label htmlFor="search-input" className="visually-hidden">
          Search team members
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search by name, role, or department..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
          aria-describedby="search-results"
        />
        <span id="search-results" className="visually-hidden">
          {filteredMembers.length} results found
        </span>
      </div>

      <TeamList
        members={filteredMembers}
        isLoading={isLoading}
        onSelectMember={handleSelectMember}
        onDeleteMember={handleDeleteMember}
      />

      {selectedMember && (
        <div className="member-detail-modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={handleCloseDetail}
              aria-label="Close details"
            >
              &times;
            </button>
            <h3>{selectedMember.name}</h3>
            <p>
              <strong>Role:</strong> {selectedMember.role}
            </p>
            <p>
              <strong>Department:</strong> {selectedMember.department}
            </p>
            <p>
              <strong>Email:</strong> {selectedMember.email}
            </p>
            <p>
              <strong>Location:</strong> {selectedMember.location}
            </p>
            {selectedMember.skills && (
              <div>
                <strong>Skills:</strong>
                <ul>
                  {selectedMember.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamDirectory;
