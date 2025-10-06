import { useTeam } from '../context/teamContext.jsx';
import TeamSearch from './teamSearch.jsx';
import ViewToggle from './viewToggle.jsx';
import TeamList from './teamList.jsx';

function TeamDirectory() {
  const { dispatch } = useTeam();

  return (
    <div className="team-directory">
      <div className="directory-header">
        <h2>Team Directory</h2>
        <button
          className="reset-filters-btn"
          onClick={() => dispatch({ type: 'RESET_FILTERS' })}
        >
          🔄 Reset Filters
        </button>
      </div>

      {/* Search and Controls */}
      <div className="team-controls">
        <TeamSearch />
        <ViewToggle />
      </div>

      {/* Team Grid/List */}
      <TeamList />

      <div className="reducer-demo">
        <div className="demo-note">
          <h4>🎯 useReducer Demo</h4>
          <p>
            All components use <code>dispatch</code> from the <code>useTeam</code> hook.
            Instead of calling separate setState functions, they dispatch actions:
          </p>
          <ul>
            <li><code>dispatch(&#123; type: 'SELECT_MEMBER', payload: member &#125;)</code></li>
            <li><code>dispatch(&#123; type: 'SET_SEARCH', payload: searchTerm &#125;)</code></li>
            <li><code>dispatch(&#123; type: 'TOGGLE_VIEW' &#125;)</code></li>
            <li><code>dispatch(&#123; type: 'RESET_FILTERS' &#125;)</code></li>
          </ul>
          <p>
            The reducer function handles all these actions and updates state accordingly.
            Check the Action Log panel to see actions in real-time!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDirectory;
