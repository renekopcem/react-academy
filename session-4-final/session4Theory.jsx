import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session4Theory({ sessionId }) {
  return (
    <div className="session1-app">
      <header className="session-header">
        <div className="header-content">
          <h1>React Academy - Session 4</h1>
          <p className="session-subtitle">
            Master the Context API & Eliminate Prop Drilling
          </p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section">
        <h2>🌐 Share Data Without Props!</h2>
        <p className="intro-text">
          In this session, you'll learn how to share state across components
          without prop drilling:
        </p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚠️</div>
            <div className="objective-content">
              <h3>Prop Drilling Problem</h3>
              <p>
                Understand why passing props through multiple levels is painful
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🎯</div>
            <div className="objective-content">
              <h3>Creating Context</h3>
              <p>Learn how to create and structure React Context</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>Provider Pattern</h3>
              <p>Wrap components with context providers to share data</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🪝</div>
            <div className="objective-content">
              <h3>useContext Hook</h3>
              <p>Access context data directly in any component</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>

          <div className="concept-blocks">
            <div className="concept-block">
              <h3>⚠️ The Prop Drilling Problem</h3>
              <p>
                When you need to pass data through multiple component levels,
                you end up with <strong>prop drilling</strong> - passing props
                through components that don't even use them!
              </p>
              <CodeBlock>{`// Before: Prop Drilling
function TeamApp() {
  const teamMembers = [...];
  return <TeamDirectory teamMembers={teamMembers} />;
}

function TeamDirectory({ teamMembers }) {
  return teamMembers.map(member =>
    <TeamMember member={member} />
  );
}`}</CodeBlock>
              <p>
                <strong>Problem:</strong> What if we need this data 5 levels
                deep?
              </p>
            </div>

            <div className="concept-block">
              <h3>🎯 Creating Context</h3>
              <p>
                React Context lets you create a "global" state that any
                component can access, without prop drilling.
              </p>
              <CodeBlock>{`import { createContext } from 'react';

const TeamContext = createContext();

export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) throw new Error('Missing TeamProvider');
  return context;
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🔄 Provider Pattern</h3>
              <p>
                Wrap your components with a <strong>Provider</strong> to share
                data. Any child component can access this data.
              </p>
              <CodeBlock>{`function TeamProvider({ children }) {
  const [teamMembers] = useState([...]);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <TeamContext.Provider value={{
      teamMembers, selectedMember, setSelectedMember
    }}>
      {children}
    </TeamContext.Provider>
  );
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🪝 useContext Hook</h3>
              <p>
                Use the <strong>useContext</strong> hook to access context data
                in any component - no matter how deeply nested!
              </p>
              <CodeBlock>{`// After: Using Context
function TeamDirectory() {
  const { teamMembers } = useTeam(); // No props!
  return teamMembers.map(member =>
    <TeamMember key={member.id} memberId={member.id} />
  );
}

function TeamMember({ memberId }) {
  const { teamMembers, selectMember } = useTeam();
  const member = teamMembers.find(m => m.id === memberId);
  return <div onClick={() => selectMember(member)}>
    {member.name}
  </div>;
}`}</CodeBlock>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to see Context API in action?</h3>
            <p>
              Let's migrate our Team Directory from prop drilling to Context
              API!
            </p>
            <Link
              to="/sessions/$id/practice"
              params={{ id: sessionId }}
              className="start-practice-btn"
            >
              Start Building 🚀
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Session4Theory;
