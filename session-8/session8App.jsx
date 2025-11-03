import { Link } from '@tanstack/react-router';
import TeamApp from './teamApp.jsx';
import Session8Theory from '../session-8-final/session8Theory.jsx';

function Session8App({ mode = 'theory' }) {
  if (mode === 'practice') {
    return <TeamApp />;
  }

  return <Session8Theory sessionId="8" />;
}

export default Session8App;
