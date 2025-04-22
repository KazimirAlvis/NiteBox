import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/tv');
  };

  return (
    <div className="landing-screen" onClick={handleStart} onKeyDown={(e) => e.key === 'Enter' && handleStart()} tabIndex={0}>
      <img src="/nitebox-logo.png" alt="NiteBox Logo" className="logo" />
      <p className="tagline">80s MUSIC VIDEOS<br />DIRECT TO YOUR TV.</p>
      <p className="press-start">Press Enter to Start</p>
    </div>
  );
}

export default Landing;
