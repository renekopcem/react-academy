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

  // Effect to log component lifecycle for educational purposes
  useEffect(() => {
    console.log('🎯 TeamSearch component mounted');
    
    return () => {
      console.log('👋 TeamSearch component unmounting');
    };
  }, []); // Empty dependency array - runs once on mount

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
      
      <div className="search-results-info">
        <span className="results-count">
          Showing <strong>{resultsCount}</strong> of <strong>{totalCount}</strong> team members
        </span>
        {searchTerm && (
          <span className="search-term-display">
            for "<em>{searchTerm}</em>"
          </span>
        )}
      </div>
    </div>
  );
}

export default TeamSearch;