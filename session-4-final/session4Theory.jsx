function Session4Theory({ onStartPractice }) {
  return (
    <div className="session1-app">
      <header className="session-header">
        <div className="header-content">
          <h1>React Academy - Session 4</h1>
          <p className="session-subtitle">Master the Context API & Eliminate Prop Drilling</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section">
        <h2>🌐 Share Data Without Props!</h2>
        <p className="intro-text">In this session, you'll learn how to share state across components without prop drilling:</p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚠️</div>
            <div className="objective-content">
              <h3>Prop Drilling Problem</h3>
              <p>Understand why passing props through multiple levels is painful</p>
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
              <p>When you need to pass data through multiple component levels, you end up with <strong>prop drilling</strong> - passing props through components that don't even use them!</p>
              <div className="code-preview">
                <code>
                  // Before: Prop Drilling<br/>
                  function TeamApp() &#123;<br/>
                  &nbsp;&nbsp;const teamMembers = [...];<br/>
                  &nbsp;&nbsp;return &lt;TeamDirectory teamMembers=&#123;teamMembers&#125; /&gt;;<br/>
                  &#125;<br/><br/>
                  function TeamDirectory(&#123; teamMembers &#125;) &#123;<br/>
                  &nbsp;&nbsp;return teamMembers.map(member =&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;TeamMember member=&#123;member&#125; /&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  &#125;
                </code>
              </div>
              <p><strong>Problem:</strong> What if we need this data 5 levels deep?</p>
            </div>

            <div className="concept-block">
              <h3>🎯 Creating Context</h3>
              <p>React Context lets you create a "global" state that any component can access, without prop drilling.</p>
              <div className="code-preview">
                <code>
                  import &#123; createContext &#125; from 'react';<br/><br/>
                  const TeamContext = createContext();<br/><br/>
                  export function useTeam() &#123;<br/>
                  &nbsp;&nbsp;const context = useContext(TeamContext);<br/>
                  &nbsp;&nbsp;if (!context) throw new Error('Missing TeamProvider');<br/>
                  &nbsp;&nbsp;return context;<br/>
                  &#125;
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🔄 Provider Pattern</h3>
              <p>Wrap your components with a <strong>Provider</strong> to share data. Any child component can access this data.</p>
              <div className="code-preview">
                <code>
                  function TeamProvider(&#123; children &#125;) &#123;<br/>
                  &nbsp;&nbsp;const [teamMembers] = useState([...]);<br/>
                  &nbsp;&nbsp;const [selectedMember, setSelectedMember] = useState(null);<br/><br/>
                  &nbsp;&nbsp;return (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;TeamContext.Provider value=&#123;&#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teamMembers, selectedMember, setSelectedMember<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;children&#125;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/TeamContext.Provider&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  &#125;
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🪝 useContext Hook</h3>
              <p>Use the <strong>useContext</strong> hook to access context data in any component - no matter how deeply nested!</p>
              <div className="code-preview">
                <code>
                  // After: Using Context<br/>
                  function TeamDirectory() &#123;<br/>
                  &nbsp;&nbsp;const &#123; teamMembers &#125; = useTeam(); // No props!<br/>
                  &nbsp;&nbsp;return teamMembers.map(member =&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;TeamMember key=&#123;member.id&#125; memberId=&#123;member.id&#125; /&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  &#125;<br/><br/>
                  function TeamMember(&#123; memberId &#125;) &#123;<br/>
                  &nbsp;&nbsp;const &#123; teamMembers, selectMember &#125; = useTeam();<br/>
                  &nbsp;&nbsp;const member = teamMembers.find(m =&gt; m.id === memberId);<br/>
                  &nbsp;&nbsp;return &lt;div onClick=&#123;() =&gt; selectMember(member)&#125;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123;member.name&#125;<br/>
                  &nbsp;&nbsp;&lt;/div&gt;;<br/>
                  &#125;
                </code>
              </div>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to see Context API in action?</h3>
            <p>Let's migrate our Team Directory from prop drilling to Context API!</p>
            <button
              className="start-practice-btn"
              onClick={onStartPractice}
            >
              Start Building 🚀
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Session4Theory;
