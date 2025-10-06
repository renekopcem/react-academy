import { useTeam } from '../context/teamContext.jsx';

function TeamSearch() {
  const { searchTerm, dispatch } = useTeam();

  return (
    <div className="team-search">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, role, or department..."
          value={searchTerm}
          onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
        />
        {searchTerm && (
          <button
            className="clear-search-btn"
            onClick={() => dispatch({ type: 'SET_SEARCH', payload: '' })}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {searchTerm && (
        <div className="search-results-info">
          <span className="search-term-display">
            Searching for: <em>"{searchTerm}"</em>
          </span>
        </div>
      )}
    </div>
  );
}

export default TeamSearch;
