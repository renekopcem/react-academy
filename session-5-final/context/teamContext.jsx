import { createContext, useContext, useReducer } from 'react';

// Create the Team Context
const TeamContext = createContext();

// Initial state
const initialState = {
  teamMembers: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Frontend Developer",
      department: "Engineering",
      email: "sarah@company.com"
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Backend Developer",
      department: "Engineering",
      email: "mike@company.com"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "UI/UX Designer",
      department: "Design",
      email: "lisa@company.com"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Project Manager",
      department: "Management",
      email: "david@company.com"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "DevOps Engineer",
      department: "Engineering",
      email: "emma@company.com"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Product Designer",
      department: "Design",
      email: "alex@company.com"
    }
  ],
  searchTerm: '',
  isGridView: true,
  selectedMember: null,
  actionLog: [] // For educational purposes - shows dispatched actions
};

// Reducer function - handles all state updates
function teamReducer(state, action) {
  // Log action for educational purposes
  const newLog = [
    ...state.actionLog,
    {
      id: Date.now(),
      type: action.type,
      payload: action.payload,
      timestamp: new Date().toLocaleTimeString()
    }
  ].slice(-5); // Keep only last 5 actions

  switch (action.type) {
    case 'SELECT_MEMBER':
      console.log('🎯 Action: SELECT_MEMBER', action.payload);
      return {
        ...state,
        selectedMember: action.payload,
        actionLog: newLog
      };

    case 'CLEAR_SELECTION':
      console.log('❌ Action: CLEAR_SELECTION');
      return {
        ...state,
        selectedMember: null,
        actionLog: newLog
      };

    case 'SET_SEARCH':
      console.log('🔍 Action: SET_SEARCH', action.payload);
      return {
        ...state,
        searchTerm: action.payload,
        actionLog: newLog
      };

    case 'TOGGLE_VIEW':
      console.log('👁️ Action: TOGGLE_VIEW', !state.isGridView ? 'grid' : 'list');
      return {
        ...state,
        isGridView: !state.isGridView,
        actionLog: newLog
      };

    case 'RESET_FILTERS':
      console.log('🔄 Action: RESET_FILTERS');
      return {
        ...state,
        searchTerm: '',
        selectedMember: null,
        actionLog: newLog
      };

    default:
      console.warn('⚠️ Unknown action type:', action.type);
      return state;
  }
}

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
  const [state, dispatch] = useReducer(teamReducer, initialState);

  // Filter team members based on search term
  const filteredTeamMembers = state.teamMembers.filter(member =>
    member.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  // Context value object
  const contextValue = {
    // State
    teamMembers: filteredTeamMembers,
    allTeamMembers: state.teamMembers, // Unfiltered for stats
    searchTerm: state.searchTerm,
    isGridView: state.isGridView,
    selectedMember: state.selectedMember,
    actionLog: state.actionLog,

    // Dispatch function - components use this to update state
    dispatch
  };

  return (
    <TeamContext.Provider value={contextValue}>
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;
