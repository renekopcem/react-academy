import { useTeam } from '../context/teamContext.jsx';

function TeamSearch() {
  const { searchTerm, handleSearch } = useTeam();

  return (
    <div className="team-search">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search team members..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchTerm && (
          <button
            className="clear-search-btn"
            onClick={() => handleSearch('')}
          >
            ×
          </button>
        )}
      </div>

      {searchTerm && (
        <div className="search-results-info">
          <span className="search-term-display">
            Searching for "<em>{searchTerm}</em>"
          </span>
        </div>
      )}
    </div>
  );
}

export default TeamSearch;