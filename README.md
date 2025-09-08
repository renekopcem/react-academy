# React Academy

**Try it instantly in CodeSandbox:**
[Open in CodeSandbox](https://codesandbox.io/p/github/renekopcem/react-academy/main)

## 📁 Folder Structure

```
src/
├── App.jsx                 # Main app with session navigator
├── styles.css              # Global styles
├── session-1/              # Session 1: React Basics
│   ├── session1App.jsx     # Theory mode with learning objectives
│   ├── teamApp.jsx         # Practice mode with Team Directory app
│   ├── styles.css          # Session-specific styles
│   ├── README.md           # CSS class reference guide
│   └── components/         # Session 1 components (empty - references final)
├── session-1-final/        # Complete Session 1 implementation
│   ├── session1App.jsx     # Theory mode with learning objectives
│   ├── teamApp.jsx         # Practice mode with Team Directory app
│   ├── styles.css          # Session-specific styles
│   └── components/
│       ├── teamDirectory.jsx   # Main directory container
│       └── teamMember.jsx     # Individual team member cards
├── session-2/              # Session 2: State & Events
│   ├── session2App.jsx     # Theory mode
│   ├── interactiveTeamApp.jsx  # Practice mode with state
│   ├── styles.css          # Session-specific styles
│   └── components/
│       └── teamDirectory.jsx   # Enhanced directory with view toggle
└── session-3/              # Session 3: Lists & Keys
    └── [session content]
```

**Architecture Pattern:**
- Each session has theory (`sessionXApp.jsx`) and practice components
- Session-specific components live in `session-X/components/` folders
- Individual CSS files provide session-specific styling
- Main `App.jsx` handles navigation between sessions
- `session-X-final` directories contain complete implementations