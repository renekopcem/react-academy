import { Link } from '@tanstack/react-router';
import CodeBlock from '../src/components/CodeBlock.jsx';

function Session5Theory({ sessionId }) {
  return (
    <div className="session5-app">
      <header className="session-header session5-header">
        <div className="header-content">
          <h1>React Academy - Session 5</h1>
          <p className="session-subtitle">useReducer with Context API</p>
        </div>
        <div className="session-badge">
          <span>45 min</span>
        </div>
      </header>

      <section className="intro-section session5-intro">
        <h2>🔄 Scale Your State Management!</h2>
        <p className="intro-text">
          Learn when and how to upgrade from useState to useReducer for complex
          state logic:
        </p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚠️</div>
            <div className="objective-content">
              <h3>When useState Gets Complex</h3>
              <p>
                Recognize when multiple related state updates become hard to
                manage
              </p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🎯</div>
            <div className="objective-content">
              <h3>Reducer Pattern</h3>
              <p>Learn the reducer pattern: state + action → new state</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🔄</div>
            <div className="objective-content">
              <h3>useReducer Hook</h3>
              <p>Replace multiple useState calls with a single reducer</p>
            </div>
          </div>

          <div className="objective-card">
            <div className="objective-icon">🚀</div>
            <div className="objective-content">
              <h3>Context + Reducer</h3>
              <p>
                Combine useReducer with Context for scalable state management
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theory-section session5-theory">
        <div className="theory-content">
          <h2>📚 Key Concepts</h2>

          <div className="concept-blocks">
            <div className="concept-block">
              <h3>⚠️ The Complex State Problem</h3>
              <p>
                When you have multiple related pieces of state that change
                together, useState can become messy:
              </p>
              <CodeBlock>{`// Multiple related state updates - hard to manage!
const [searchTerm, setSearchTerm] = useState('');
const [isGridView, setIsGridView] = useState(true);
const [selectedMember, setSelectedMember] = useState(null);
const [filterDept, setFilterDept] = useState('');

// Each action needs multiple setState calls
function resetFilters() {
  setSearchTerm('');
  setFilterDept('');
  setSelectedMember(null);
}`}</CodeBlock>
              <p>
                <strong>Problem:</strong> Related state updates are scattered
                across multiple setState calls
              </p>
            </div>

            <div className="concept-block">
              <h3>🎯 The Reducer Pattern</h3>
              <p>
                A reducer is a function that takes the{' '}
                <strong>current state</strong> and an <strong>action</strong>,
                then returns the <strong>new state</strong>:
              </p>

              <div className="reducer-flow-diagram">
                <div className="flow-step">
                  <div className="flow-box state-box">
                    <div className="flow-label">Current State</div>
                    <code>{`{ count: 5 }`}</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box action-box">
                    <div className="flow-label">Action</div>
                    <code>{`{ type: 'INCREMENT' }`}</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box reducer-box">
                    <div className="flow-label">Reducer Function</div>
                    <code>reducer(state, action)</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box new-state-box">
                    <div className="flow-label">New State</div>
                    <code>{`{ count: 6 }`}</code>
                  </div>
                </div>
              </div>

              <CodeBlock>{`// Reducer function: (state, action) => newState
function teamReducer(state, action) {
  switch (action.type) {
    case 'SELECT_MEMBER':
      return { ...state, selectedMember: action.payload };

    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };

    case 'RESET_FILTERS':
      return { ...state, searchTerm: '', selectedMember: null };

    default:
      return state;
  }
}`}</CodeBlock>
              <p>
                <strong>Benefit:</strong> All state logic is centralized in one
                place!
              </p>
            </div>

            <div className="concept-block">
              <h3>🔄 useReducer Hook</h3>
              <p>
                React's <strong>useReducer</strong> hook works like useState,
                but for complex state:
              </p>
              <CodeBlock>{`import { useReducer } from 'react';

// Initial state object
const initialState = {
  searchTerm: '',
  isGridView: true,
  selectedMember: null
};

// Use the reducer
const [state, dispatch] = useReducer(teamReducer, initialState);

// Dispatch actions to update state
dispatch({ type: 'SELECT_MEMBER', payload: member });
dispatch({ type: 'SET_SEARCH', payload: 'John' });
dispatch({ type: 'RESET_FILTERS' });`}</CodeBlock>
            </div>

            <div className="concept-block">
              <h3>🚀 Combining useReducer + Context</h3>
              <p>
                The real power: Put your reducer in Context so any component can
                dispatch actions!
              </p>
              <div className="comparison-grid">
                <div className="comparison-before">
                  <h4>Session 4: useState + Context</h4>
                  <CodeBlock>{`const [searchTerm, setSearchTerm] = useState('');
const [selected, setSelected] = useState(null);

const value = {
  searchTerm,
  setSearchTerm,
  selected,
  setSelected
};`}</CodeBlock>
                </div>
                <div className="comparison-after">
                  <h4>Session 5: useReducer + Context</h4>
                  <CodeBlock>{`const [state, dispatch] = useReducer(reducer, initialState);

const value = {
  ...state,
  dispatch
};`}</CodeBlock>
                </div>
              </div>
              <p>
                <strong>Result:</strong> Cleaner code, predictable state
                updates, easier debugging!
              </p>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to see useReducer in action?</h3>
            <p>Let's upgrade our Team Directory from useState to useReducer!</p>
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

export default Session5Theory;
