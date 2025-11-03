import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

// Session 1 Theory Component - React fundamentals learning content
function Session1Theory({ sessionId }) {
  return (
    <div className="session1-app">
      <header className="session-header">
        <div className="header-content">
          <h1>React Academy - Session 1</h1>
          <p className="session-subtitle">Master React Fundamentals</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section">
        <h2>🚀 Welcome to React!</h2>
        <p className="intro-text">
          In this hands-on session, you'll learn the core concepts that make
          React powerful:
        </p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚛️</div>
            <div className="objective-content">
              <h3>What is React</h3>
              <p>
                Component-based architecture that lets you build UIs from
                reusable pieces
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🧩</div>
            <div className="objective-content">
              <h3>Creating Components</h3>
              <p>
                Functions that return JSX - like TeamMember and TeamDirectory
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">💻</div>
            <div className="objective-content">
              <h3>JSX Syntax</h3>
              <p>Write HTML-like syntax directly in JavaScript</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🔗</div>
            <div className="objective-content">
              <h3>Props</h3>
              <p>Pass data from parent to child components</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>

          <div className="concept-blocks">
            <div className="concept-block">
              <h3>⚛️ What is React?</h3>
              <p>
                React is a JavaScript library for building user interfaces. It
                uses a <strong>component-based architecture</strong> where you
                break your UI into independent, reusable pieces called
                components.
              </p>
              <CodeBlock>{`function Welcome() {
  return <h1>Hello, React!</h1>;
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🧩 Components</h3>
              <p>
                Components are like JavaScript functions that return JSX. They
                can accept inputs called <strong>"props"</strong> and return
                React elements.
              </p>
              <CodeBlock>{`function TeamMember(props) {
  return <h3>{props.name}</h3>;
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>💻 JSX</h3>
              <p>
                JSX lets you write HTML-like syntax in JavaScript. It makes
                React components easier to read and write.
              </p>
              <CodeBlock>{`const element = <h1>Hello, world!</h1>`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🔗 Props</h3>
              <p>
                Props (short for properties) are how you pass data from parent
                components to child components.
              </p>
              <CodeBlock>{`<TeamMember name="Sarah" role="Developer" />`}</CodeBlock>
            </div>
          </div>

          <section className="practice-section">
            <h2>Ready to build your first React app?</h2>
            <p>Let's create a Team Directory together using these concepts!</p>
            <Link
              to="/sessions/$id/practice"
              params={{ id: sessionId }}
              className="start-practice-btn"
            >
              Start Building 🚀
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Session1Theory;
