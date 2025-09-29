import { useTeam } from '../context/teamContext.jsx';

function ViewToggle() {
  const { isGridView, toggleViewMode } = useTeam();

  return (
    <div className="view-controls">
      <button
        className={`view-toggle-btn ${isGridView ? 'active' : ''}`}
        onClick={toggleViewMode}
      >
        {isGridView ? '📱 Switch to List' : '📊 Switch to Grid'}
      </button>
    </div>
  );
}

export default ViewToggle;