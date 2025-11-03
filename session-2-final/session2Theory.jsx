import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

// Session 2 Theory Component - State & Events learning content
function Session2Theory({ sessionId }) {
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
              <CodeBlock>{`// Props - data from parent (read-only)
function TeamMember(props) {
  return <h3>{props.name}</h3>;
}`}</CodeBlock>
              <CodeBlock>{`// State - component's own data (changeable)
function Counter() {
  const [count, setCount] = useState(0);
  return <p>Count: {count}</p>;
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🪝 useState Hook</h3>
              <p>
                The <strong>useState</strong> hook lets you add state to
                functional components. It returns an array with the current
                value and a function to update it.
              </p>
              <CodeBlock>{`import { useState } from 'react';

function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);
  // isVisible = current state value
  // setIsVisible = function to update state
}`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>👆 Event Handlers</h3>
              <p>
                Event handlers are functions that respond to user interactions.
                The most common is <strong>onClick</strong> for button clicks.
              </p>
              <CodeBlock>{`function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn); // Toggle the state
  };

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`}</CodeBlock>
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
                    <CodeBlock>{`isOn = false
Button shows "OFF"`}</CodeBlock>
                  </div>
                  <div className="arrow">→</div>
                  <div className="after">
                    <h4>After Click:</h4>
                    <CodeBlock>{`isOn = true
Button shows "ON"`}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to make the Team Directory interactive?</h3>
            <p>Let's add a grid/list view toggle to see state in action!</p>
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

export default Session2Theory;
