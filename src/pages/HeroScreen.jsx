import { useEffect, useState } from 'react';
import './HeroScreen.css';
import ThumbRow from '../components/ThumbRow';
import { categories } from '../data/categories';

const heroImages = [
  '/assets/hero1.jpg',
  '/assets/hero2.jpg',
  '/assets/hero3.jpg'
];

function HeroScreen() {
  const [showGrid, setShowGrid] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        setShowGrid(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`hero-screen ${showGrid ? 'grid-up' : ''}`}>
      <div className="background">
        <img
          src={heroImages[currentHeroIndex]}
          alt={`Hero Background ${currentHeroIndex}`}
          className="hero-image"
        />
        <div className="hero-text">
          <h1>NiteBox</h1>
          <p>Totally 80s. All Night.</p>
        </div>
      </div>

      <div className="thumb-section">
        <ThumbRow
          categories={categories}
          onSelect={(videos) => {
            console.log('Play category:', videos);
          }}
        />
      </div>
    </div>
  );
}

export default HeroScreen;
