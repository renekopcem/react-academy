import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching and managing team data
 * This hook demonstrates common patterns that need testing:
 * - Loading states
 * - Error handling
 * - Data fetching
 * - Refetch functionality
 */
export function useTeamData() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/team-members');

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const data = await response.json();
      setMembers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchMembers();
  }, []);

  // Delete a member
  const deleteMember = async id => {
    try {
      const response = await fetch(`/api/team-members/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete member');
      }

      // Update local state
      setMembers(prev => prev.filter(member => member.id !== id));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Add a new member
  const addMember = async memberData => {
    try {
      const response = await fetch('/api/team-members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData),
      });

      if (!response.ok) {
        throw new Error('Failed to add member');
      }

      const newMember = await response.json();
      setMembers(prev => [...prev, newMember]);
      return newMember;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  return {
    members,
    isLoading,
    error,
    refetch: fetchMembers,
    deleteMember,
    addMember,
  };
}

export default useTeamData;
