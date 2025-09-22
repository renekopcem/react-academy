import { useState } from 'react';
import SearchableTeamApp from './searchableTeamApp.jsx';

function Session3App() {
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
        <SearchableTeamApp />
      </div>
    );
  }

  return (
    <div className="session3-app">
      <header className="session-header">
        <div className="header-content">
          <h1>React Academy - Session 3</h1>
          <p className="session-subtitle">Master useEffect & Component Lifecycle</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section">
        <h2>⚡ Adding Side Effects to Components!</h2>
        <p className="intro-text">In this session, you'll learn how to handle side effects in React components:</p>
        
        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>Component Lifecycle</h3>
              <p>Understand when components mount, update, and unmount</p>
            </div>
          </div>
          
          <div className="objective-card">
            <div className="objective-icon">⚡</div>
            <div className="objective-content">
              <h3>useEffect Hook</h3>
              <p>Run side effects and respond to component changes</p>
            </div>
          </div>
          
          <div className="objective-card">
            <div className="objective-icon">🧹</div>
            <div className="objective-content">
              <h3>Cleanup Functions</h3>
              <p>Prevent memory leaks with proper cleanup</p>
            </div>
          </div>
          
          <div className="objective-card">
            <div className="objective-icon">🔍</div>
            <div className="objective-content">
              <h3>Dependency Arrays</h3>
              <p>Control when effects run with dependencies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>
          
          <div className="concept-blocks">
            <div className="concept-block">
              <h3>🔄 Component Lifecycle</h3>
              <p>React components go through three main phases: <strong>mounting</strong> (first render), <strong>updating</strong> (re-renders), and <strong>unmounting</strong> (removal from DOM).</p>
              <div className="lifecycle-flow">
                <div className="lifecycle-step">
                  <h4>Mount</h4>
                  <p>Component appears</p>
                </div>
                <div className="arrow">→</div>
                <div className="lifecycle-step">
                  <h4>Update</h4>
                  <p>State/props change</p>
                </div>
                <div className="arrow">→</div>
                <div className="lifecycle-step">
                  <h4>Unmount</h4>
                  <p>Component removed</p>
                </div>
              </div>
            </div>

            <div className="concept-block">
              <h3>⚡ useEffect Hook</h3>
              <p>The <strong>useEffect</strong> hook lets you perform side effects in functional components. Think of it as a way to "do something" when your component renders.</p>
              <div className="code-preview">
                <code>
                  import &#123; useEffect, useState &#125; from 'react';<br/><br/>
                  function MyComponent() &#123;<br/>
                  &nbsp;&nbsp;const [count, setCount] = useState(0);<br/><br/>
                  &nbsp;&nbsp;useEffect(() =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;document.title = 'Count: ' + count;<br/>
                  &nbsp;&nbsp;&#125;);<br/><br/>
                  &nbsp;&nbsp;const handleClick = () =&gt; setCount(count + 1);<br/><br/>
                  &nbsp;&nbsp;return &lt;button onClick=&#123;handleClick&#125;&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123;count&#125;<br/>
                  &nbsp;&nbsp;&lt;/button&gt;;<br/>
                  &#125;
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🎯 Dependency Arrays</h3>
              <p>Control <strong>when</strong> your effect runs by passing a dependency array as the second argument to useEffect.</p>
              <div className="dependency-examples">
                <div className="dependency-case">
                  <h4>Run on every render:</h4>
                  <code>useEffect(() =&gt; &#123; /* ... */ &#125;);</code>
                </div>
                <div className="dependency-case">
                  <h4>Run once on mount:</h4>
                  <code>useEffect(() =&gt; &#123; /* ... */ &#125;, []);</code>
                </div>
                <div className="dependency-case">
                  <h4>Run when count changes:</h4>
                  <code>useEffect(() =&gt; &#123; /* ... */ &#125;, [count]);</code>
                </div>
              </div>
            </div>

            <div className="concept-block">
              <h3>🧹 Cleanup Functions</h3>
              <p>Return a function from useEffect to <strong>clean up</strong> after your effect. This prevents memory leaks and unwanted behavior.</p>
              <div className="code-preview">
                <code>
                  useEffect(() =&gt; &#123;<br/>
                  &nbsp;&nbsp;const timer = setTimeout(() =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;console.log('Delayed action!');<br/>
                  &nbsp;&nbsp;&#125;, 1000);<br/><br/>
                  &nbsp;&nbsp;// Cleanup function<br/>
                  &nbsp;&nbsp;return () =&gt; &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timer);<br/>
                  &nbsp;&nbsp;&#125;;<br/>
                  &#125;, []);
                </code>
              </div>
              <div className="cleanup-note">
                <p><strong>Why cleanup?</strong> Without it, timers keep running even after the component is gone!</p>
              </div>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to add search to our Team Directory?</h3>
            <p>Let's use useEffect to create a debounced search with proper cleanup!</p>
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

export default Session3App;