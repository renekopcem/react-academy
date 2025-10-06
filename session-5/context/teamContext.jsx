import { createContext, useContext, useState, useMemo } from 'react';

// Create the Team Context
const TeamContext = createContext();

// Custom hook for consuming the context
export function useTeam() {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }

  return context;
}

// Team Provider component
export function TeamProvider({ children }) {
  // Team members data - in a real app, this might come from an API
  const [teamMembers] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      role: "Frontend Developer",
      email: "sarah@company.com"
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Backend Developer",
      email: "mike@company.com"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "UI/UX Designer",
      email: "lisa@company.com"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Project Manager",
      email: "david@company.com"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "DevOps Engineer",
      email: "emma@company.com"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Product Designer",
      email: "alex@company.com"
    }
  ]);

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // State for view mode (grid/list)
  const [isGridView, setIsGridView] = useState(true);

  // Filter team members based on search term using useMemo for performance
  const filteredTeamMembers = useMemo(() => {
    console.log('🔄 Filtering team members for:', searchTerm);

    if (!searchTerm) {
      return teamMembers;
    }

    const filtered = teamMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(`✅ Found ${filtered.length} matching members`);
    return filtered;
  }, [searchTerm, teamMembers]);

  // Method to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('🔍 Search term updated to:', term);
  };

  // Method to toggle view mode
  const toggleViewMode = () => {
    setIsGridView(!isGridView);
    console.log('👁️ View toggled to:', !isGridView ? 'grid' : 'list');
  };

  // Context value object
  const contextValue = {
    // Data
    teamMembers: filteredTeamMembers,
    searchTerm,
    isGridView,

    // Actions
    handleSearch,
    toggleViewMode
  };

  return (
    <TeamContext.Provider value={contextValue}>
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;