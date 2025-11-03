import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session4Theory from '../session-4-final/session4Theory.jsx';

function Session4App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return <TeamApp />;
  }

  return <Session4Theory sessionId="4" />;
}

export default Session4App;
