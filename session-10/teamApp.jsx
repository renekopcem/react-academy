import TeamDirectory from './components/teamDirectory.jsx';

function TeamApp() {
  return (
    <div className="practice-container session10-practice">
      <header className="practice-header">
        <h1>Team Directory - React 19 Patterns</h1>
        <p>
          This practice app demonstrates modern React 19 patterns including
          useActionState, useOptimistic, useFormStatus, and Error Boundaries.
        </p>
      </header>

      <div className="practice-content">
        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>What's Happening Here?</h3>
          <div className="notes-grid">
            <div className="note-card">
              <h4>useActionState</h4>
              <p>
                The Add Member form uses useActionState to handle form
                submission, validation, pending states, and errors in one hook.
              </p>
            </div>
            <div className="note-card">
              <h4>useFormStatus</h4>
              <p>
                The Submit button uses useFormStatus to automatically disable
                and show "Adding..." without any props from the parent form.
              </p>
            </div>
            <div className="note-card">
              <h4>useOptimistic</h4>
              <p>
                New members appear immediately with a "Adding..." badge. Delete
                removes instantly while the server processes.
              </p>
            </div>
            <div className="note-card">
              <h4>Error Boundaries</h4>
              <p>
                Both the form and list are wrapped in Error Boundaries. If
                something crashes, only that section shows an error, not the
                whole app.
              </p>
            </div>
          </div>

          <div className="try-it">
            <h4>Try These:</h4>
            <ul>
              <li>Add a member and watch the optimistic update</li>
              <li>Submit an empty form to see validation errors</li>
              <li>Delete a member and see instant removal</li>
              <li>
                There's a 10% random error chance to demonstrate error handling
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TeamApp;
