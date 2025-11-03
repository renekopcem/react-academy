import { useState } from 'react';
import TeamApp from './teamApp.jsx';

// Session 1 App - React fundamentals learning objectives and practice
function Session1App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return (
      <div className="practice-mode">
        <nav className="practice-nav">
          <button 
            className="back-to-theory-btn"
            onClick={() => setShowPractice(false)}
          >
            ← Back to Theory
          </button>
          <h2>Hands-on Practice</h2>
        </nav>
        <TeamApp />
      </div>
    );
  }

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
        <p className="intro-text">In this hands-on session, you'll learn the core concepts that make React powerful:</p>
        
        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚛️</div>
            <div className="objective-content">
              <h3>What is React</h3>
              <p>Component-based architecture that lets you build UIs from reusable pieces</p>
            </div>
          </div>
          
          <div className="objective-card">
            <div className="objective-icon">🧩</div>
            <div className="objective-content">
              <h3>Creating Components</h3>
              <p>Functions that return JSX - like TeamMember and TeamDirectory</p>
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
              <p>React is a JavaScript library for building user interfaces. It uses a <strong>component-based architecture</strong> where you break your UI into independent, reusable pieces called components.</p>
              <div className="code-preview">
                <code>function Welcome() {`{`}<br/>
                &nbsp;&nbsp;return &lt;h1&gt;Hello, React!&lt;/h1&gt;;<br/>
                {`}`}</code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🧩 Components</h3>
              <p>Components are like JavaScript functions that return JSX. They can accept inputs called <strong>"props"</strong> and return React elements.</p>
              <div className="code-preview">
                <code>function TeamMember(props) {`{`}<br/>
                &nbsp;&nbsp;return &lt;h3&gt;{`{props.name}`}&lt;/h3&gt;;<br/>
                {`}`}</code>
              </div>
            </div>

            <div className="concept-block">
              <h3>💻 JSX</h3>
              <p>JSX lets you write HTML-like syntax in JavaScript. It makes React components easier to read and write.</p>
              <div className="code-preview">
                <code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🔗 Props</h3>
              <p>Props (short for properties) are how you pass data from parent components to child components.</p>
              <div className="code-preview">
                <code>&lt;TeamMember name="Sarah" role="Developer" /&gt;</code>
              </div>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to build your first React app?</h3>
            <p>Let's create a Team Directory together using these concepts!</p>
            <button 
              className="start-practice-btn"
              onClick={() => setShowPractice(true)}
            >
              Start Building 🚀
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Session1App;