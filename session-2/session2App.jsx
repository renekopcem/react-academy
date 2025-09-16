import { useState } from "react";
import TeamApp from "../session-1/teamApp.jsx";

function Session2App() {
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
    <div className="session2-app">
      <header className="session-header">
        <div className="header-content">
          <h1>React Academy - Session 2</h1>
          <p className="session-subtitle">Master React State & Events</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section">
        <h2>🎯 Making Components Interactive!</h2>
        <p className="intro-text">
          In this session, you'll learn how to make your React components
          dynamic and interactive:
        </p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>useState Hook</h3>
              <p>
                Add state to functional components to remember and update values
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">👆</div>
            <div className="objective-content">
              <h3>Event Handlers</h3>
              <p>
                Respond to user interactions like clicks, form inputs, and more
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🎛️</div>
            <div className="objective-content">
              <h3>Interactive UI</h3>
              <p>
                Build components that change appearance based on user actions
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🔁</div>
            <div className="objective-content">
              <h3>Re-renders</h3>
              <p>Understand how state changes trigger component updates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>

          <div className="concept-blocks">
            <div className="concept-block">
              <h3>🔄 What is State?</h3>
              <p>
                State is data that can <strong>change over time</strong> in your
                component. Unlike props (which come from parent components),
                state is managed within the component itself.
              </p>
              <div className="code-preview">
                <code>
                  // Props - data from parent (read-only)
                  <br />
                  function TeamMember(props) {`{`}
                  <br />
                  &nbsp;&nbsp;return &lt;h3&gt;{`{props.name}`}&lt;/h3&gt;;
                  <br />
                  {`}`}
                </code>
              </div>
              <div className="code-preview">
                <code>
                  // State - component's own data (changeable)
                  <br />
                  function Counter() {`{`}
                  <br />
                  &nbsp;&nbsp;const [count, setCount] = useState(0);
                  <br />
                  &nbsp;&nbsp;return &lt;p&gt;Count: {`{count}`}&lt;/p&gt;;
                  <br />
                  {`}`}
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🪝 useState Hook</h3>
              <p>
                The <strong>useState</strong> hook lets you add state to
                functional components. It returns an array with the current
                value and a function to update it.
              </p>
              <div className="code-preview">
                <code>
                  import {`{ useState }`} from 'react';
                  <br />
                  <br />
                  function MyComponent() {`{`}
                  <br />
                  &nbsp;&nbsp;const [isVisible, setIsVisible] = useState(true);
                  <br />
                  &nbsp;&nbsp;// isVisible = current state value
                  <br />
                  &nbsp;&nbsp;// setIsVisible = function to update state
                  <br />
                  {`}`}
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>👆 Event Handlers</h3>
              <p>
                Event handlers are functions that respond to user interactions.
                The most common is <strong>onClick</strong> for button clicks.
              </p>
              <div className="code-preview">
                <code>
                  function ToggleButton() {`{`}
                  <br />
                  &nbsp;&nbsp;const [isOn, setIsOn] = useState(false);
                  <br />
                  <br />
                  &nbsp;&nbsp;const handleClick = () =&gt; {`{`}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;setIsOn(!isOn); // Toggle the state
                  <br />
                  &nbsp;&nbsp;{`}`};<br />
                  <br />
                  &nbsp;&nbsp;return (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={`{handleClick}`}
                  &gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{isOn ? 'ON' : 'OFF'}`}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {`}`}
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🔁 Re-renders</h3>
              <p>
                When you call a state setter function (like <code>setIsOn</code>
                ), React automatically <strong>re-renders</strong> your
                component with the new state value.
              </p>
              <div className="comparison-boxes">
                <div className="before-after">
                  <div className="before">
                    <h4>Before Click:</h4>
                    <code>
                      isOn = false
                      <br />
                      Button shows "OFF"
                    </code>
                  </div>
                  <div className="arrow">→</div>
                  <div className="after">
                    <h4>After Click:</h4>
                    <code>
                      isOn = true
                      <br />
                      Button shows "ON"
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to make the Team Directory interactive?</h3>
            <p>Let's add a grid/list view toggle to see state in action!</p>
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

export default Session2App;
