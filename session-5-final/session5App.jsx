import { useState } from 'react';
import TeamApp from './teamApp.jsx';
import './styles.css';

function Session5App() {
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
        <p className="intro-text">Learn when and how to upgrade from useState to useReducer for complex state logic:</p>

        <div className="learning-objectives">
          <div className="objective-card">
            <div className="objective-icon">⚠️</div>
            <div className="objective-content">
              <h3>When useState Gets Complex</h3>
              <p>Recognize when multiple related state updates become hard to manage</p>
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
              <p>Combine useReducer with Context for scalable state management</p>
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
              <p>When you have multiple related pieces of state that change together, useState can become messy:</p>
              <div className="code-preview">
                <code>
                  <span className="comment">// Multiple related state updates - hard to manage!</span><br/>
                  <span className="keyword">const</span> [searchTerm, setSearchTerm] = <span className="function">useState</span>(<span className="string">''</span>);<br/>
                  <span className="keyword">const</span> [isGridView, setIsGridView] = <span className="function">useState</span>(<span className="boolean">true</span>);<br/>
                  <span className="keyword">const</span> [selectedMember, setSelectedMember] = <span className="function">useState</span>(<span className="keyword">null</span>);<br/>
                  <span className="keyword">const</span> [filterDept, setFilterDept] = <span className="function">useState</span>(<span className="string">''</span>);<br/><br/>
                  <span className="comment">// Each action needs multiple setState calls</span><br/>
                  <span className="keyword">function</span> <span className="function">resetFilters</span>() &#123;<br/>
                  &nbsp;&nbsp;<span className="function">setSearchTerm</span>(<span className="string">''</span>);<br/>
                  &nbsp;&nbsp;<span className="function">setFilterDept</span>(<span className="string">''</span>);<br/>
                  &nbsp;&nbsp;<span className="function">setSelectedMember</span>(<span className="keyword">null</span>);<br/>
                  &#125;
                </code>
              </div>
              <p><strong>Problem:</strong> Related state updates are scattered across multiple setState calls</p>
            </div>

            <div className="concept-block">
              <h3>🎯 The Reducer Pattern</h3>
              <p>A reducer is a function that takes the <strong>current state</strong> and an <strong>action</strong>, then returns the <strong>new state</strong>:</p>

              <div className="reducer-flow-diagram">
                <div className="flow-step">
                  <div className="flow-box state-box">
                    <div className="flow-label">Current State</div>
                    <code>&#123; count: 5 &#125;</code>
                  </div>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="flow-box action-box">
                    <div className="flow-label">Action</div>
                    <code>&#123; type: 'INCREMENT' &#125;</code>
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
                    <code>&#123; count: 6 &#125;</code>
                  </div>
                </div>
              </div>

              <div className="code-preview">
                <code>
                  <span className="comment">// Reducer function: (state, action) =&gt; newState</span><br/>
                  <span className="keyword">function</span> <span className="function">teamReducer</span>(state, action) &#123;<br/>
                  &nbsp;&nbsp;<span className="keyword">switch</span> (action.type) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">case</span> <span className="string">'SELECT_MEMBER'</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> &#123; ...state, <span className="property">selectedMember</span>: action.payload &#125;;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">case</span> <span className="string">'SET_SEARCH'</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> &#123; ...state, <span className="property">searchTerm</span>: action.payload &#125;;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">case</span> <span className="string">'RESET_FILTERS'</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> &#123; ...state, <span className="property">searchTerm</span>: <span className="string">''</span>, <span className="property">selectedMember</span>: <span className="keyword">null</span> &#125;;<br/><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">default</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> state;<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;
                </code>
              </div>
              <p><strong>Benefit:</strong> All state logic is centralized in one place!</p>
            </div>

            <div className="concept-block">
              <h3>🔄 useReducer Hook</h3>
              <p>React's <strong>useReducer</strong> hook works like useState, but for complex state:</p>
              <div className="code-preview">
                <code>
                  <span className="keyword">import</span> &#123; useReducer &#125; <span className="keyword">from</span> <span className="string">'react'</span>;<br/><br/>
                  <span className="comment">// Initial state object</span><br/>
                  <span className="keyword">const</span> initialState = &#123;<br/>
                  &nbsp;&nbsp;<span className="property">searchTerm</span>: <span className="string">''</span>,<br/>
                  &nbsp;&nbsp;<span className="property">isGridView</span>: <span className="boolean">true</span>,<br/>
                  &nbsp;&nbsp;<span className="property">selectedMember</span>: <span className="keyword">null</span><br/>
                  &#125;;<br/><br/>
                  <span className="comment">// Use the reducer</span><br/>
                  <span className="keyword">const</span> [state, dispatch] = <span className="function">useReducer</span>(teamReducer, initialState);<br/><br/>
                  <span className="comment">// Dispatch actions to update state</span><br/>
                  <span className="function">dispatch</span>(&#123; <span className="property">type</span>: <span className="string">'SELECT_MEMBER'</span>, <span className="property">payload</span>: member &#125;);<br/>
                  <span className="function">dispatch</span>(&#123; <span className="property">type</span>: <span className="string">'SET_SEARCH'</span>, <span className="property">payload</span>: <span className="string">'John'</span> &#125;);<br/>
                  <span className="function">dispatch</span>(&#123; <span className="property">type</span>: <span className="string">'RESET_FILTERS'</span> &#125;);
                </code>
              </div>
            </div>

            <div className="concept-block">
              <h3>🚀 Combining useReducer + Context</h3>
              <p>The real power: Put your reducer in Context so any component can dispatch actions!</p>
              <div className="comparison-grid">
                <div className="comparison-before">
                  <h4>Session 4: useState + Context</h4>
                  <div className="code-preview">
                    <code>
                      <span className="keyword">const</span> [searchTerm, setSearchTerm] = <span className="function">useState</span>(<span className="string">''</span>);<br/>
                      <span className="keyword">const</span> [selected, setSelected] = <span className="function">useState</span>(<span className="keyword">null</span>);<br/><br/>
                      <span className="keyword">const</span> value = &#123;<br/>
                      &nbsp;&nbsp;searchTerm,<br/>
                      &nbsp;&nbsp;setSearchTerm,<br/>
                      &nbsp;&nbsp;selected,<br/>
                      &nbsp;&nbsp;setSelected<br/>
                      &#125;;
                    </code>
                  </div>
                </div>
                <div className="comparison-after">
                  <h4>Session 5: useReducer + Context</h4>
                  <div className="code-preview">
                    <code>
                      <span className="keyword">const</span> [state, dispatch] = <span className="function">useReducer</span>(reducer, initialState);<br/><br/>
                      <span className="keyword">const</span> value = &#123;<br/>
                      &nbsp;&nbsp;...state,<br/>
                      &nbsp;&nbsp;dispatch<br/>
                      &#125;;
                    </code>
                  </div>
                </div>
              </div>
              <p><strong>Result:</strong> Cleaner code, predictable state updates, easier debugging!</p>
            </div>
          </div>

          <div className="practice-cta">
            <h3>Ready to see useReducer in action?</h3>
            <p>Let's upgrade our Team Directory from useState to useReducer!</p>
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

export default Session5App;
