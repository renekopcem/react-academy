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

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
    console.log('👁️ View toggled to:', !isGridView ? 'grid' : 'list');
  };

  const handleSearch = term => {
    setSearchTerm(term);
    console.log('🔍 Search term updated to:', term);
  };

  return (
    <div className="practice-mode session4-practice">
      <header className="practice-header">
        <h1>Searchable Team Directory</h1>
        <p>Using useEffect for search debouncing and lifecycle management</p>
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
          <h3>Understanding useEffect in Action</h3>
          <div className="effect-explanation">
            <div className="effect-info">
              <h4>Search Effect:</h4>
              <code>
                useEffect(() =&gt; &#123; /* debounce search */ &#125;,
                [searchTerm])
              </code>
              <p>Runs when search term changes, with 500ms debounce</p>
            </div>
            <div className="effect-info">
              <h4>Cleanup Effect:</h4>
              <code>return () =&gt; clearTimeout(timer)</code>
              <p>Prevents memory leaks by clearing old timers</p>
            </div>
          </div>

          <ul className="exercise-list">
            <li>Type in the search box and watch the console logs</li>
            <li>Notice the 500ms delay before filtering happens</li>
            <li>Try typing quickly - old timers get cleaned up</li>
            <li>See how results count updates in real-time</li>
            <li>Toggle between grid/list view while searching</li>
          </ul>

          <div className="concept-highlight">
            <h4>Key Learning</h4>
            <p>
              useEffect lets you respond to changes and perform cleanup. The
              dependency array controls when effects run, and cleanup functions
              prevent memory leaks!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SearchableTeamApp;
