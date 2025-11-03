import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session5Theory from '../session-5-final/session5Theory.jsx';

function Session5App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return <TeamApp />;
  }

  return <Session5Theory sessionId="5" />;
}

export default Session5App;
