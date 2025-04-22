import { useEffect, useState } from 'react';
import './HeroScreen.css';

const backgroundImages = [
  '/assets/hero1.jpg',
  '/assets/hero2.jpg',
  '/assets/hero3.jpg',
];

function HeroScreen({ onContinue }) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        onContinue();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onContinue]);

  return (
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
    >
      <div className="hero-overlay">
        <img src="/assets/nitebox-logo.png" alt="NiteBox Logo" className="logo" />
        <h1>WELCOME TO NITEBOX</h1>
        <h2>80s MUSIC VIDEOS<br />DIRECT TO YOUR TV.</h2>
        <p className="press-start">Press ↓ or Enter to Start</p>
      </div>
    </div>
  );
}

export default HeroScreen;
