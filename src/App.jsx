import { useState } from 'react';
import HeroScreen from './pages/HeroScreen';
import TVPlayer from './pages/TVPlayer';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? (
    <TVPlayer />
  ) : (
    <HeroScreen onContinue={() => setHasStarted(true)} />
  );
}

export default App;
