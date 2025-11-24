import TeamDirectory from './components/teamDirectory.jsx';

function TeamApp() {
  return (
    <div className="practice-mode session9-practice">
      <header className="practice-header">
        <h1>Team Directory - Testing Practice</h1>
        <p>
          This is the application we'll be testing. Open the test files to see
          how each component and feature is tested.
        </p>
      </header>

      <div className="practice-content">
        <TeamDirectory />
      </div>

      <footer className="practice-footer">
        <div className="practice-notes">
          <h3>Test Files to Explore</h3>
          <ul>
            <li>
              <code>__tests__/teamMember.test.jsx</code> - Component unit tests
            </li>
            <li>
              <code>__tests__/teamList.test.jsx</code> - List rendering tests
            </li>
            <li>
              <code>__tests__/teamDirectory.test.jsx</code> - Integration tests
            </li>
            <li>
              <code>__tests__/useTeamData.test.js</code> - Custom hook tests
            </li>
          </ul>

          <div className="concept-highlight">
            <h4>Running Tests</h4>
            <p>Open a terminal and run:</p>
            <ul>
              <li>
                <code>yarn test</code> - Run tests in watch mode
              </li>
              <li>
                <code>yarn test:ui</code> - Run with visual UI dashboard
              </li>
              <li>
                <code>yarn test:coverage</code> - Generate coverage report
              </li>
            </ul>
          </div>

          <div className="concept-highlight">
            <h4>Practice Exercises</h4>
            <p>
              Open the <code>session-9/</code> folder to find incomplete tests
              with TODO comments. Fill in the missing assertions and see if they
              pass!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TeamApp;
