import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session6Theory from '../session-6-final/session6Theory.jsx';

function Session6App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return <TeamApp />;
  }

  return <Session6Theory sessionId="6" />;
}

export default Session6App;
