import { useState, useEffect, useMemo } from 'react';
import TeamDirectory from './components/teamDirectory.jsx';

function SearchableTeamApp() {
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      email: 'sarah@company.com',
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Developer',
      email: 'mike@company.com',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'UI/UX Designer',
      email: 'lisa@company.com',
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      email: 'david@company.com',
    },
    {
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      email: 'alex@company.com',
    },
    {
      name: 'Maya Patel',
      role: 'DevOps Engineer',
      email: 'maya@company.com',
    },
  ];

  // Filter team members based on search term using useMemo for performance
  const filteredTeamMembers = useMemo(() => {
    console.log('🔄 Filtering team members for:', searchTerm);

    if (!searchTerm) {
      return teamMembers;
    }

    const filtered = teamMembers.filter(
      member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(`✅ Found ${filtered.length} matching members`);
    return filtered;
  }, [searchTerm, teamMembers]);

  // Effect to log when filtered results change
  useEffect(() => {
    console.log('📊 Search results updated:', {
      searchTerm,
      resultCount: filteredTeamMembers.length,
      totalCount: teamMembers.length,
    });
  }, [filteredTeamMembers, searchTerm, teamMembers.length]);

  // Effect to demonstrate component mounting
  useEffect(() => {
    console.log('🚀 SearchableTeamApp mounted');

    return () => {
      console.log('👋 SearchableTeamApp unmounting');
    };
  }, []);

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
    console.log('👁️ View toggled to:', !isGridView ? 'grid' : 'list');
  };

  const handleSearch = term => {
    setSearchTerm(term);
    console.log('🔍 Search term updated to:', term);
  };

  return (
    <div className="practice-mode session3-practice">
      <header className="practice-header">
        <h1>Searchable Team Directory</h1>
        <p>Learning useEffect, useMemo, and side effects in React</p>
      </header>

      <div className="practice-content">
        <TeamDirectory
          teamMembers={filteredTeamMembers}
          isGridView={isGridView}
          onViewToggle={handleViewToggle}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          resultsCount={filteredTeamMembers.length}
          totalCount={teamMembers.length}
        />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Practice Exercises</h3>
          <ul>
            <li>Type in the search box and watch the console logs</li>
            <li>Notice how filtering happens immediately with useMemo</li>
            <li>Try typing quickly and observe the effect logs</li>
            <li>See how results count updates in real-time</li>
            <li>Toggle between grid/list view while searching</li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Concept</h4>
            <p>
              useEffect lets you respond to changes and perform side effects.
              The dependency array controls when effects run, and cleanup
              functions prevent memory leaks. useMemo optimizes expensive
              calculations by caching results!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SearchableTeamApp;
