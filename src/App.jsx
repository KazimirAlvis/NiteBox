import { useState } from 'react';
import HeroScreen from './pages/HeroScreen';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? (
    <TVPlayer />
  ) : (
    <HeroScreen onContinue={() => setHasStarted(true)} />
  );
}

export default App;
