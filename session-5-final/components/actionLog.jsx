import { useTeam } from '../context/teamContext.jsx';

function ActionLog() {
  const { actionLog } = useTeam();

  return (
    <div className="action-log">
      <h3>⚡ Action Log</h3>
      <p className="log-description">Watch actions dispatch in real-time</p>

      {actionLog.length === 0 ? (
        <div className="log-empty">
          <p>No actions yet. Interact with the app to see dispatched actions!</p>
        </div>
      ) : (
        <div className="log-entries">
          {actionLog.map((action) => (
            <div key={action.id} className="log-entry">
              <div className="log-time">{action.timestamp}</div>
              <div className="log-type">{action.type}</div>
              {action.payload && (
                <div className="log-payload">
                  {typeof action.payload === 'object'
                    ? action.payload.name || JSON.stringify(action.payload)
                    : action.payload
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="log-info">
        <small>💡 This shows the last 5 actions dispatched to the reducer</small>
      </div>
    </div>
  );
}

export default ActionLog;
