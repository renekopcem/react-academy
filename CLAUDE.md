# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)  
- `npm run preview` - Preview production build locally

**No test suite or linting configured** - this is a teaching-focused project without development tooling beyond the basics.

## Architecture

This is a **React Academy** - an educational platform for teaching React fundamentals through hands-on sessions.

### Core Structure

**Navigation System (`src/App.jsx`):**
- Session navigator with cards showing available sessions
- State-based routing between session navigator and individual sessions
- Extensible sessions array for adding future content

**Session Architecture:**
Each session follows a **theory-to-practice** pattern:

1. **Theory Component** (`session-X/sessionXApp.jsx`):
   - Learning objectives with visual cards
   - Detailed concept explanations with code examples
   - Call-to-action button to switch to practice mode

2. **Practice Component** (`session-X/teamApp.jsx`):
   - Hands-on coding application
   - Practice exercises for students
   - Navigation back to theory

### Session 1 Structure
- **Educational Content**: Component composition, JSX syntax, props
- **Practice App**: Team Directory showing component hierarchy (TeamDirectory → TeamMember)
- **Dual Mode**: Theory mode with explanations, practice mode with working app

### Styling Approach
- Single CSS file per session (`session-X/styles.css`)
- Modern design with gradients, glassmorphism effects
- Responsive grid layouts
- Dark code preview blocks for syntax examples

### File Naming Convention
- All component files use lowercase: `session1App.jsx`, `teamApp.jsx`, `teamDirectory.jsx`
- Components folder structure: `session-X/components/`

### Adding New Sessions
1. Create `session-X/` directory
2. Follow the theory/practice dual-component pattern
3. Add session object to `src/App.jsx` sessions array
4. Create dedicated CSS file for session-specific styling

The architecture prioritizes educational clarity over complex state management or routing libraries.