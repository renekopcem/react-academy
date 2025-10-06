import { useTeam } from '../context/teamContext.jsx';

function ViewToggle() {
  const { isGridView, dispatch } = useTeam();

  return (
    <button
      className="view-toggle-btn"
      onClick={() => dispatch({ type: 'TOGGLE_VIEW' })}
    >
      {isGridView ? '📋 Switch to List View' : '🔲 Switch to Grid View'}
    </button>
  );
}

export default ViewToggle;
