import { useEffect } from 'react';
import './LandingAnimation.css';

function LandingAnimation({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000); // 3 sec splash
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="landing-animation">
      <img src="/nitebox-logo-animated.gif" alt="NiteBox" />
    </div>
  );
}

export default LandingAnimation;
