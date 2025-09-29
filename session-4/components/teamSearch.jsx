import { useState, useEffect } from 'react';

function TeamSearch({ onSearch, resultsCount, totalCount }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search effect
  useEffect(() => {
    console.log('🔍 Setting up search timer for:', searchTerm);
    
    const searchTimer = setTimeout(() => {
      console.log('⏰ Search timer fired, filtering for:', searchTerm);
      onSearch(searchTerm);
    }, 500); // 500ms debounce

    // Cleanup function - this runs when effect runs again or component unmounts
    return () => {
      console.log('🧹 Cleaning up search timer for:', searchTerm);
      clearTimeout(searchTimer);
    };
  }, [searchTerm, onSearch]); // Effect depends on searchTerm and onSearch

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log('📝 Search term changed to:', value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    console.log('❌ Search cleared');
  };

  return (
    <div className="team-search">
      <div className="search-input-container">
        <div className="search-icon">🔍</div>
        <input
          type="text"
          placeholder="Search team members by name or role..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="clear-search-btn"
            title="Clear search"
          >
            ❌
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